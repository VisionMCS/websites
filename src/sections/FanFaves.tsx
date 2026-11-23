import { useEffect, useRef, useState } from "react";
import { site, asset } from "../content";
import type { SiteContent } from "../content/types";
import { VideoLightbox } from "./VideoLightbox";

type Item = SiteContent["fanFaves"]["items"][number];

// A single autoplaying preview card: it plays when scrolled into view, hovered
// or focused, and pauses when it leaves the viewport. 进入视口/悬停/获焦即自动播放，离开暂停。
function FaveCard({
  item,
  index,
  onOpen,
}: {
  item: Item;
  index: number;
  onOpen: (index: number) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <button
      type="button"
      className="fanfave-card"
      ref={ref}
      onClick={() => onOpen(index)}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onFocus={() => videoRef.current?.play().catch(() => {})}
      aria-label={`${site.fanFaves.watchLabel}: ${item.label}`}
    >
      <video
        className="fanfave-video"
        ref={videoRef}
        src={item.video}
        poster={asset(item.image)}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <span className="fanfave-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
      </span>
      <span className="fanfave-watch">{site.fanFaves.watchLabel}</span>
      <span className="fanfave-label">{item.label}</span>
    </button>
  );
}

// Horizontal autoplaying video carousel, echoing the reference "Holiday fan-faves".
// 横向自动播放视频轮播，呼应参考站 "Holiday fan-faves"；点击进入层级播放器。
export function FanFaves() {
  const items = site.fanFaves.items;
  const trackRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".fanfave-card");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };
  const step = (direction: number) =>
    setOpen((current) =>
      current === null
        ? current
        : (current + direction + items.length) % items.length,
    );
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
            {items.map((item, index) => (
              <FaveCard item={item} index={index} onOpen={setOpen} key={index} />
            ))}
          </div>
          <button
            type="button"
            className="fanfaves-arrow fanfaves-prev"
            onClick={() => scrollBy(-1)}
            aria-label={site.fanFaves.prevLabel}
          >
            ‹
          </button>
          <button
            type="button"
            className="fanfaves-arrow fanfaves-next"
            onClick={() => scrollBy(1)}
            aria-label={site.fanFaves.nextLabel}
          >
            ›
          </button>
        </div>
      </div>
      {open !== null && (
        <VideoLightbox
          items={items}
          index={open}
          onClose={() => setOpen(null)}
          onStep={step}
        />
      )}
    </section>
  );
}
