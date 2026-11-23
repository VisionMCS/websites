import { useState } from "react";
import { site, asset } from "../content";
import { SocialLightbox } from "./SocialLightbox";

// Shoppable masonry collage, echoing the reference SHOP OUR IG grid:
// each tile opens a lightbox that recommends the products worn in the photo.
// 可购物瓦片流，呼应参考站 SHOP OUR IG：点击每格弹出 lightbox，推荐该图中的单品。
export function SocialGrid() {
  const items = site.social.items;
  const [open, setOpen] = useState<number | null>(null);
  const step = (direction: number) =>
    setOpen((current) =>
      current === null
        ? current
        : (current + direction + items.length) % items.length,
    );
  const productName = (id: string) =>
    site.products.find((product) => product.id === id)?.name ?? "";
  return (
    <section className="social section" aria-labelledby="social-title">
      <div className="container">
        <div className="section-head-center">
          <p className="eyebrow">{site.social.eyebrow}</p>
          <h2 id="social-title">{site.social.title}</h2>
          <span className="social-handle">{site.social.handle}</span>
        </div>
        <div className="social-grid">
          {items.map((item, index) => (
            <button
              type="button"
              className={`social-item social-${item.size ?? "square"}`}
              key={index}
              onClick={() => setOpen(index)}
              aria-label={`${item.alt} · ${site.ui.viewProduct}`}
            >
              <img src={asset(item.image)} alt={item.alt} loading="lazy" />
              <span className="social-bag" aria-hidden="true">
                {item.productIds.length}
              </span>
              {item.hotspots.map((spot, spotIndex) => (
                <span
                  key={spotIndex}
                  className="social-hotspot"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  title={productName(spot.product)}
                >
                  {spotIndex + 1}
                </span>
              ))}
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <SocialLightbox
          items={items}
          index={open}
          onClose={() => setOpen(null)}
          onStep={step}
        />
      )}
    </section>
  );
}
