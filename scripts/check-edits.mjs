import {
  cp,
  mkdtemp,
  symlink,
  readFile,
  writeFile,
  rm,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import assert from "node:assert/strict";
const fixture = await mkdtemp(join(tmpdir(), "website-authoring-"));
const writeJson = (path, value) =>
  writeFile(join(fixture, path), JSON.stringify(value, null, 2));
const readJson = async (path) =>
  JSON.parse(await readFile(join(fixture, path), "utf8"));
try {
  for (const path of [
    "src",
    "scripts",
    "tests",
    "public",
    "package.json",
    "template.json",
    "ASSET-CREDITS.json",
    "tsconfig.json",
    "vite.config.ts",
    "index.html",
  ]) {
    await cp(resolve(path), join(fixture, path), { recursive: true });
  }
  await symlink(resolve("node_modules"), join(fixture, "node_modules"), "dir");
  const config = await readJson("src/content/config.json");
  const language = config.defaultLocale;
  config.locales = config.locales.filter((entry) => entry.code === language);
  await writeJson("src/content/config.json", config);
  const originalConfig = JSON.parse(
    await readFile("src/content/config.json", "utf8"),
  );
  for (const entry of originalConfig.locales) {
    if (entry.code !== language)
      await rm(join(fixture, `src/content/locales/${entry.code}.json`));
  }
  const contentPath = `src/content/locales/${language}.json`;
  const content = await readJson(contentPath);
  content.brand.name = "Authoring fixture";
  content.nav.reverse();
  content.services.items.push({
    ...content.services.items[0],
    id: "added-service",
    title: "Added service",
  });
  await writeJson(contentPath, content);
  await writeJson("src/content/business.json", { email: "hello@example.com" });
  const registry = await readJson("src/pages/registry.json");
  registry.push({
    id: "about",
    path: "about/",
    component: "AboutPage",
    title: "contact.title",
    description: "contact.description",
  });
  await writeJson("src/pages/registry.json", registry);
  await writeFile(
    join(fixture, "src/pages/AboutPage.tsx"),
    `import { site } from '../content';
export function AboutPage() { return <section><h1>{site.contact.title}</h1><p>{site.contact.description}</p></section>; }
`,
  );
  const componentsPath = join(fixture, "src/pages/components.ts");
  const components = await readFile(componentsPath, "utf8");
  await writeFile(
    componentsPath,
    `import { AboutPage } from './AboutPage';\n${components}\ncomponents.AboutPage = AboutPage;\n`,
  );
  for (const command of ["test", "build"]) {
    const result = spawnSync("pnpm", [command], {
      cwd: fixture,
      encoding: "utf8",
    });
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  }
  const homepage = await readFile(join(fixture, "dist/index.html"), "utf8");
  assert.ok(homepage.includes("mailto:hello@example.com"));
  const collection = await readFile(
    join(fixture, "dist/services/index.html"),
    "utf8",
  );
  assert.ok(collection.includes("Authoring fixture"));
  assert.ok(collection.includes(`<h1>${content.services.pageTitle}</h1>`));
  assert.ok(
    (await readFile(join(fixture, "dist/about/index.html"), "utf8")).includes(
      "<h1>",
    ),
  );
  assert.ok(
    (
      await readFile(
        join(fixture, "dist/services/added-service/index.html"),
        "utf8",
      )
    ).includes("Added service"),
  );
  console.log(
    "PASS: single-language build, removed translation, configured email, reordered navigation, replaced brand, added project and registered page.",
  );
} finally {
  await rm(fixture, { recursive: true, force: true });
}
