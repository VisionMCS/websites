import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/site.css";

// Reveals are hidden only after JavaScript takes over, so static HTML and
// no-JS visitors always see complete content.
// 仅在脚本接管后才隐藏显现元素，静态 HTML 与无 JS 访客始终看到完整内容。
document.documentElement.classList.add("js");

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
);
