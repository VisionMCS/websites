import { useEffect, useRef } from "react";
import { site, asset } from "../content";
import { pageUrl } from "../content/links";
import type { SiteContent } from "../content/types";

type Item = SiteContent["fanFaves"]["items"][number];

// Full-screen layered video player opened from a fan-faves card.
// 由人气单品卡打开的全屏层级视频播放器（带声音与控件）。
export function VideoLightbox({
  items,
  index,
  onClose,
  onStep,
}: {
  items: Array<Item>;
  index: number;
  onClose: () => void;
  onStep: (direction: number) => void;
}) {
  const item = items[index];
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [index]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") onStep(1);
      else if (event.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);
  if (!item) return null;
  return (
    <div
      className="video-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} · ${site.fanFaves.watchLabel}`}
      onClick={onClose}
    >
      <div
        className="video-lightbox-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="video-lightbox-top">
          <span className="video-lightbox-label">{item.label}</span>
          <div className="video-lightbox-controls">
            <button
              type="button"
              className="lightbox-step"
              onClick={() => onStep(-1)}
              aria-label={site.fanFaves.prevLabel}
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox-step"
              onClick={() => onStep(1)}
              aria-label={site.fanFaves.nextLabel}
            >
              ›
            </button>
            <button
              type="button"
              className="lightbox-close"
              onClick={onClose}
              aria-label={site.fanFaves.closeLabel}
            >
              ×
            </button>
          </div>
        </div>
        <video
          className="video-lightbox-player"
          ref={videoRef}
          src={item.video}
          poster={asset(item.image)}
          controls
          autoPlay
          playsInline
        />
        <div className="video-lightbox-foot">
          <a
            className="button-primary"
            href={pageUrl("collection", { id: item.lookId })}
          >
            {site.fanFaves.shopLabel}
          </a>
          <p className="video-lightbox-source">
            {site.fanFaves.sourceLabel} · {item.source}
          </p>
        </div>
      </div>
    </div>
  );
}
