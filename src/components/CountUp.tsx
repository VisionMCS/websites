import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";

/**
 * Counts a numeric value up once it scrolls into view.
 * 数字在进入视口后从 0 递增到目标值。
 *
 * The server output already contains the final value, so search engines,
 * no-JS browsers and reduced-motion users all read the real number. The request
 * animation frame is cancelled on unmount.
 * 服务端输出的就是最终值，因此无 JS、搜索引擎与“减少动态效果”用户都能直接读到
 * 真实数字；动画帧在组件卸载时取消。
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1100,
}: {
  value: string;
  suffix?: string;
  duration?: number;
}) {
  const decimals = value.includes(".")
    ? (value.split(".")[1] ?? "").length
    : 0;
  const target = Number(value.replace(/[^\d.]/g, ""));
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(value);
  const frame = useRef(0);

  useEffect(() => {
    if (!inView || !Number.isFinite(target)) return;
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof window.requestAnimationFrame !== "function") {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((target * eased).toFixed(decimals));
      if (progress < 1) frame.current = window.requestAnimationFrame(step);
      else setDisplay(value);
    };
    setDisplay((0).toFixed(decimals));
    frame.current = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame.current);
  }, [inView, target, decimals, duration, value]);

  return (
    <span ref={ref}>
      <span className="count-value">{display}</span>
      {suffix && <span className="count-suffix">{suffix}</span>}
    </span>
  );
}
