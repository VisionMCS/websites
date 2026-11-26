import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve, relative } from "node:path";
const root = new URL("../", import.meta.url);
const config = JSON.parse(
  await readFile(new URL("src/content/config.json", root), "utf8"),
);
const contents = await Promise.all(
  config.locales.map(async ({ code }) =>
    JSON.parse(
      await readFile(new URL(`src/content/locales/${code}.json`, root), "utf8"),
    ),
  ),
);
const manifest = JSON.parse(
  await readFile(new URL("template.json", root), "utf8"),
);

/**
 * Every collection that carries a photograph, so the traversal follows the
 * registry instead of a single hard-coded sample list.
 * 所有带图片的集合，遍历时跟随注册表而不是写死单个示例列表。
 */
const photographSets = (content) => [
  content.hero,
  content.capabilities,
  content.quality,
  ...content.services.items,
  ...content.industries.items,
  ...content.cases.items,
  ...content.insights.items,
];

test("all referenced photographs exist locally and have provenance", async () => {
  const credits = JSON.parse(
    await readFile(new URL("ASSET-CREDITS.json", root), "utf8"),
  );
  for (const content of contents)
    for (const item of photographSets(content)) {
      assert.ok(item.imageAlt?.trim(), "missing alt text");
      const base = resolve(new URL("public/", root).pathname);
      const file = resolve(base, item.image);
      assert.ok(!relative(base, file).startsWith(".."));
      await access(file);
      assert.ok(
        credits.some(
          (credit) =>
            credit.file === `public/${item.image}` &&
            credit.source &&
            credit.license,
        ),
        `missing provenance: ${item.image}`,
      );
    }
});
test("collection identifiers and navigation targets remain unambiguous", () => {
  for (const content of contents) {
    for (const name of ["services", "industries", "cases", "insights"]) {
      const items = content[name].items;
      assert.equal(
        new Set(items.map((item) => item.id)).size,
        items.length,
        `duplicate id in ${name}`,
      );
    }
    const ids = new Set(content.services.items.map((item) => item.id));
    for (const industry of content.industries.items) {
      assert.ok(
        industry.services.every((id) => ids.has(id)),
        `unknown service link in ${industry.id}`,
      );
      assert.ok(
        industry.applications.every((entry) => ids.has(entry.service)),
        `unknown application link in ${industry.id}`,
      );
    }
    for (const entry of content.cases.items) {
      assert.ok(
        entry.services.every((id) => ids.has(id)),
        `unknown service link in case ${entry.id}`,
      );
      assert.ok(
        content.industries.items.some((item) => item.id === entry.category),
        `unknown industry category in case ${entry.id}`,
      );
    }
    const pages = new Set(content.insights.items.map((item) => item.page));
    assert.ok(pages.size > 0);
    for (const link of content.nav) {
      assert.ok(link.label && link.href);
      for (const child of link.children)
        assert.ok(child.label && child.page && child.id);
    }
  }
});
test("inquiry copy states that no backend service is connected", () => {
  for (const content of contents) {
    assert.equal(content.contact.channels[0].state, "unconfigured");
    assert.ok(content.contact.backendNoticeTitle.trim().length > 3);
    assert.ok(content.contact.backendNotice.trim().length > 60);
    assert.ok(content.contact.integration.length >= 3);
    assert.ok(content.contact.privacy.trim().length > 20);
  }
});
test("template declares static output and no unavailable backend capability", async () => {
  assert.equal(manifest.stack, "react-vite");
  assert.equal(manifest.outputDirectory, "dist");
  assert.deepEqual(manifest.requiredRuntimeCapabilities, []);
  await access(new URL(manifest.contentEntry, root));
  await access(new URL(manifest.styleEntry, root));
  const business = JSON.parse(
    await readFile(new URL("src/content/business.json", root), "utf8"),
  );
  assert.ok(
    business.email === null ||
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.email),
  );
});
