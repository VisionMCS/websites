/**
 * Original brand mark for the demonstration brand.
 * 演示品牌的原创标识图形。
 *
 * Drawn for this template (MIT, see ASSET-CREDITS.json): a bracketed "V" with a
 * measurement tick, referencing precision inspection rather than any real company.
 * 为本模板原创绘制：方框内的 V 形与测量刻度，指向精密检测意象，与任何真实企业无关。
 */
export function BrandMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      className="brand-svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.75"
        y="0.75"
        width="38.5"
        height="38.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11 11.5 20 28.5 29 11.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <path d="M6 20h4M30 20h4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20.5" r="1.7" fill="currentColor" />
    </svg>
  );
}
