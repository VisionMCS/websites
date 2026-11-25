import { renderToString } from "react-dom/server";
import { App } from "./App";
import { configurePage, dictionaries } from "./content";
import config from "./content/config.json";
import registry from "./pages/registry.json";
import { expandPages } from "./pages/definitions.js";
import { routePath, rootPrefix } from "./content/routes.js";
export function renderPages() {
  const pages = [];
  const siteUrl = (config as { siteUrl?: string }).siteUrl ?? "";
  for (const entry of config.locales) {
    const content = dictionaries[entry.code];
    for (const route of expandPages(content, registry)) {
      configurePage(entry.code, route.page, route.id);
      const path = routePath(config, entry.code, route.page, route.id);
      pages.push({
        ...route,
        locale: entry.code,
        path,
        root: rootPrefix(path),
        url: siteUrl ? `${siteUrl.replace(/\/$/, "")}/${path}` : "",
        html: renderToString(<App />),
      });
    }
  }
  return pages;
}
