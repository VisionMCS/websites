import { resolve, sep } from "node:path";
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
export function outputFile(root, path) {
  if (
    path &&
    (!path.endsWith("/") ||
      !path
        .slice(0, -1)
        .split("/")
        .every((value) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)))
  )
    throw new Error("Invalid output path");
  const base = resolve(root);
  const file = resolve(base, path, "index.html");
  if (!file.startsWith(base + sep))
    throw new Error("Output escapes build directory");
  return file;
}
export function renderHtml(shell, page) {
  const ogType = page.page === "product" ? "product" : "website";
  const head = [
    `<meta property="og:title" content="${escape(page.title)}" />`,
    `<meta property="og:description" content="${escape(page.description)}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:locale" content="${escape(page.locale)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
    `<meta name="twitter:description" content="${escape(page.description)}" />`,
  ];
  if (page.url) {
    head.push(`<link rel="canonical" href="${escape(page.url)}" />`);
    head.push(`<meta property="og:url" content="${escape(page.url)}" />`);
  }
  return shell
    .replace(
      /<html[^>]*>/,
      () =>
        `<html lang="${escape(page.locale)}" data-page="${escape(page.page)}" data-content-id="${escape(page.id)}">`,
    )
    .replace(
      /<title>[^<]*<\/title>/,
      () => `<title>${escape(page.title)}</title>`,
    )
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      () => `<meta name="description" content="${escape(page.description)}" />\n    ${head.join("\n    ")}`,
    )
    .replaceAll('"./assets/', () => `"${page.root}assets/`)
    .replace('"./favicon.svg"', () => `"${page.root}favicon.svg"`)
    .replace(
      '<div id="root"></div>',
      () => `<div id="root">${page.html}</div>`,
    );
}
