import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { renderPages } from "../.ssg/render.js";
import { outputFile, renderHtml } from "./html.mjs";
const shell = await readFile("dist/index.html", "utf8");
const pages = renderPages();
const outputs = pages.map((page) => ({
  page,
  file: outputFile("dist", page.path),
}));
if (new Set(outputs.map((item) => item.file)).size !== outputs.length)
  throw new Error("Duplicate output paths");
for (const { page, file } of outputs) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, renderHtml(shell, page));
}
// Root-level 404.html for static hosts (GitHub Pages convention), derived
// from the default-locale /404/ page with relative prefixes rebased to root.
const notFound = outputs.find((item) => item.page.path === "404/");
if (notFound) {
  const html = await readFile(notFound.file, "utf8");
  await writeFile(
    resolve("dist", "404.html"),
    html.replaceAll('../', './'),
  );
}
console.log(`Generated ${pages.length} static pages + 404.html`);
