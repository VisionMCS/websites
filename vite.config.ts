import { defineConfig, type Plugin } from "vite";

// 本地 `vite preview` 不会像 GitHub Pages 那样对未知路径自动返回根 404.html。
// 这个仅在预览服务生效的中间件把"未命中静态文件的页面路径"按语言前缀重定向到
// 对应的 404 页，使本地体验与线上一致。带扩展名的资源（含 .html）交给默认处理，
// 因此不会自我循环。
function previewNotFound(): Plugin {
  return {
    name: "preview-not-found",
    configurePreviewServer(server) {
      // 返回的钩子在 Vite 内部静态中间件之后注册，此时仍未发送响应即代表未命中。
      return () => {
        const use = (server.middlewares as unknown as {
          use: (handler: (req: any, res: any, next: () => void) => void) => void;
        }).use.bind(server.middlewares);
        use((req: any, res: any, next: () => void) => {
          if (req.method !== "GET" || res.headersSent) return next();
          const url = (req.url || "/").split("?")[0];
          if (/\.[a-z0-9]+$/i.test(url)) return next();
          const locale = url.match(/^\/(zh|ko)(\/|$)/)?.[1];
          const target = locale ? `/${locale}/404/` : "/404.html";
          res.statusCode = 302;
          res.setHeader("Location", target);
          res.end();
        });
      };
    },
  };
}

export default defineConfig({
  // 多页静态站点：关闭 vite preview 的 SPA 回退，避免未知路径被回退成首页
  // 再因相对资源路径在子目录下失效而呈现"无样式裸页"。线上静态托管（如
  // GitHub Pages）会用根级 404.html 处理未知路径；本地预览则由下面的
  // preview-not-found 中间件把未知路径重定向到对应语言的 404 页。
  appType: "mpa",
  base: "./",
  css: { postcss: { plugins: [] } },
  build: { outDir: "dist", sourcemap: false },
  plugins: [previewNotFound()],
});
