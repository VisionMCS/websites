import type { ReactNode } from "react";
import { useInView } from "./useInView";

/**
 * Wraps content in a scroll-triggered reveal.
 * 为内容包一层滚动触发的显现动画。
 *
 * The hidden state is scoped to the `.js` class added during hydration, so the
 * server-rendered HTML and any browser without JavaScript show the content.
 * 隐藏态只在接管脚本添加 `.js` 后生效，静态 HTML 与无 JS 浏览器始终可见内容。
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article" | "section";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  // The tag is data-driven; the rendered element only needs div-level props.
  // 标签由数据决定，渲染出的元素只需要 div 级别的属性。
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={
        `reveal${inView ? " is-visible" : ""}${className ? ` ${className}` : ""}`
      }
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
