import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { routePath, rootPrefix } from "../src/content/routes.js";
import registry from "../src/pages/registry.json" with { type: "json" };
const read = async (name) =>
  JSON.parse(
    await readFile(new URL(`../src/content/${name}`, import.meta.url), "utf8"),
  );
const config = await read("config.json");
const baseline = await read(`locales/${config.defaultLocale}.json`);

function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, shape(value[key])]),
    );
  return value === null ? "null" : typeof value;
}
/** Collection names whose record ids must line up across languages. */
const collections = registry
  .filter((entry) => entry.collection)
  .map((entry) => entry.collection);
const readCollection = (content, path) =>
  path.split(".").reduce((value, key) => value?.[key], content);
test("every enabled language provides a complete matching content structure", async () => {
  assert.ok(config.locales.some((item) => item.code === config.defaultLocale));
  for (const { code } of config.locales) {
    const content = await read(`locales/${code}.json`);
    assert.deepEqual(shape(content), shape(baseline));
    assert.deepEqual(
      content.nav.map((item) => item.href),
      baseline.nav.map((item) => item.href),
    );
    assert.deepEqual(
      content.nav.map((item) =>
        item.children.map((child) => `${child.page}:${child.id}`),
      ),
      baseline.nav.map((item) =>
        item.children.map((child) => `${child.page}:${child.id}`),
      ),
    );
    for (const path of collections)
      assert.deepEqual(
        readCollection(content, path).map((item) => item.id),
        readCollection(baseline, path).map((item) => item.id),
        `collection ids differ in ${code}: ${path}`,
      );
    assert.ok(
      content.meta.title && content.meta.description && content.ui.language,
    );
  }
});
test("navigation targets resolve to registered pages and records", async () => {
  const pages = new Map(registry.map((entry) => [entry.id, entry]));
  for (const { code } of config.locales) {
    const content = await read(`locales/${code}.json`);
    for (const item of content.nav) {
      if (item.href.startsWith("#")) continue;
      assert.ok(pages.has(item.href), `unknown nav page: ${item.href}`);
      for (const child of item.children) {
        const definition = pages.get(child.page);
        assert.ok(definition, `unknown child page: ${child.page}`);
        assert.ok(
          definition.collection,
          `child target is not a collection page: ${child.page}`,
        );
        assert.ok(
          readCollection(content, definition.collection).some(
            (record) => record.id === child.id,
          ),
          `unknown child record: ${child.page}/${child.id}`,
        );
      }
    }
  }
});
test("default locale has no prefix and other locales retain page paths", () => {
  const detailPaths = {
    service: "services",
    industry: "industries",
    case: "case-studies",
  };
  for (const defaultEntry of config.locales) {
    const variant = { ...config, defaultLocale: defaultEntry.code };
    for (const entry of config.locales) {
      const prefix =
        entry.code === variant.defaultLocale ? "" : `${entry.prefix}/`;
      assert.equal(routePath(variant, entry.code), prefix);
      for (const [pageId, directory] of Object.entries(detailPaths)) {
        const collection = registry.find((item) => item.id === pageId).collection;
        for (const record of readCollection(baseline, collection)) {
          const path = routePath(variant, entry.code, pageId, record.id);
          assert.equal(path, `${prefix}${directory}/${record.id}/`);
          assert.equal(
            rootPrefix(path),
            "../".repeat(path.split("/").filter(Boolean).length),
          );
        }
      }
      for (const listPage of ["services", "industries", "cases", "contact"])
        assert.equal(
          routePath(variant, entry.code, listPage),
          `${prefix}${registry.find((item) => item.id === listPage).path}`,
        );
    }
  }
  assert.throws(() =>
    routePath(config, config.defaultLocale, "service", "../bad"),
  );
  assert.throws(() =>
    routePath(config, config.defaultLocale, "industry", "Bad Id"),
  );
});
