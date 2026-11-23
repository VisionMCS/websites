import { useEffect, useState } from "react";
import { site, asset } from "../content";
import { pageUrl } from "../content/links";
import type { SiteContent } from "../content/types";

type Item = SiteContent["social"]["items"][number];
type Product = SiteContent["products"][number];

const findProduct = (id: string): Product | undefined =>
  site.products.find((product) => product.id === id);

export function SocialLightbox({
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
  const [added, setAdded] = useState<Array<string>>([]);
  useEffect(() => {
    setAdded([]);
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
  const products = item.productIds
    .map(findProduct)
    .filter((product): product is Product => !!product);
  return (
    <div
      className="social-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <div className="lightbox-controls">
          <button
            type="button"
            className="lightbox-step"
            onClick={() => onStep(-1)}
            aria-label={site.social.prevLabel}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox-step"
            onClick={() => onStep(1)}
            aria-label={site.social.nextLabel}
          >
            ›
          </button>
          <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label={site.social.closeLabel}
          >
            ×
          </button>
        </div>
        <div className="lightbox-body">
          <div className="lightbox-media">
            <img src={asset(item.image)} alt={item.alt} />
            {item.hotspots.map((spot, spotIndex) => {
              const product = findProduct(spot.product);
              return (
                <span
                  key={spotIndex}
                  className="lightbox-hotspot"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  title={product?.name}
                >
                  {spotIndex + 1}
                </span>
              );
            })}
          </div>
          <div className="lightbox-info">
            {products.map((product) => (
              <div className="lightbox-product" key={product.id}>
                <a
                  className="lightbox-product-media"
                  href={pageUrl("product", { id: product.id })}
                >
                  <img src={asset(product.image)} alt={product.imageAlt} />
                </a>
                <p className="lightbox-product-price">{product.price}</p>
                <a
                  className="lightbox-product-name"
                  href={pageUrl("product", { id: product.id })}
                >
                  {product.name}
                </a>
                <button
                  type="button"
                  className="button-primary lightbox-add"
                  onClick={() =>
                    setAdded((current) =>
                      current.includes(product.id)
                        ? current
                        : [...current, product.id],
                    )
                  }
                >
                  {site.social.shopLabel}
                </button>
                {added.includes(product.id) && (
                  <p className="lightbox-added">✓ {site.ui.bagAdded}</p>
                )}
              </div>
            ))}
            <p className="lightbox-caption">{item.caption}</p>
            <p className="lightbox-source">
              {site.social.handle} // {item.source}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
