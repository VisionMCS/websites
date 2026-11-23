import { asset } from "../content";
import type { SiteContent } from "../content/types";

type Product = SiteContent["products"][number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={asset(product.image)}
          alt={product.imageAlt}
          width="600"
          height="600"
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-meta">
          <span>{product.shade}</span>
          <span>{product.price}</span>
        </p>
      </div>
    </article>
  );
}
