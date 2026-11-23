import { useRef } from "react";
import { site, asset } from "../content";
import { pageUrl } from "../content/links";

// Horizontal shoppable video-card carousel, echoing the reference "Holiday fan-faves".
// 横向可滑动的可购物视频卡轮播，呼应参考站 "Holiday fan-faves"。
// Cards are static previews with a play affordance (demonstration only, no real video).
// 卡片为带播放图标的静态预览（仅演示，未内嵌真实视频）。
export function FanFaves() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".fanfave-card");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };
  return (
    <section className="fanfaves section" aria-labelledby="fanfaves-title">
      <div className="container">
        <div className="section-head-center">
          <p className="eyebrow">{site.fanFaves.eyebrow}</p>
          <h2 id="fanfaves-title">{site.fanFaves.title}</h2>
          <p className="fanfaves-desc">{site.fanFaves.description}</p>
        </div>
        <div className="fanfaves-shell">
          <div className="fanfaves-track" ref={trackRef}>
            {site.fanFaves.items.map((item, index) => (
              <a
                className="fanfave-card"
                href={pageUrl("collections")}
                key={index}
                aria-label={`${site.fanFaves.shopLabel}: ${item.label}`}
              >
                <img
                  src={asset(item.image)}
                  alt={item.alt}
                  width="600"
                  height="800"
                  loading="lazy"
                />
                <span className="fanfave-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </span>
                <span className="fanfave-bag" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <path
                      d="M6 8h12l-1 12H7L6 8Zm3 0a3 3 0 0 1 6 0"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="fanfave-label">{item.label}</span>
              </a>
            ))}
          </div>
          <button
            type="button"
            className="fanfaves-arrow fanfaves-prev"
            onClick={() => scrollBy(-1)}
            aria-label={site.ui.backTop}
          >
            ‹
          </button>
          <button
            type="button"
            className="fanfaves-arrow fanfaves-next"
            onClick={() => scrollBy(1)}
            aria-label={site.ui.allCollections}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
