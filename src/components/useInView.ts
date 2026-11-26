import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal helper built on IntersectionObserver only, with no dependencies.
 * 仅基于 IntersectionObserver 实现的滚动显现钩子，零第三方依赖。
 *
 * - Listeners are disconnected on unmount. 卸载时断开观察器。
 * - `prefers-reduced-motion` skips observing and reports visible.
 *   用户偏好“减少动态效果”时直接视为可见。
 * - Missing IntersectionObserver (old browsers, no JS) also reports visible so
 *   content is never hidden. 不支持该 API 的环境同样返回可见，保证内容始终可读。
 */
export function useInView<T extends HTMLElement>(threshold = 0.16) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}
