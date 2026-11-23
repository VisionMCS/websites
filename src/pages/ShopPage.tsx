import { useState } from "react";
import { site } from "../content";
import { ProductCard } from "../components/ProductCard";

export function ShopPage() {
  const all = "all";
  const categories = Array.from(
    new Set(site.products.map((product) => product.category)),
  );
  const [active, setActive] = useState(all);
  const shown =
    active === all
      ? site.products
      : site.products.filter((product) => product.category === active);
  return (
    <div className="container shop-page">
      <div className="page-title">
        <p className="eyebrow">{site.brand.name}</p>
        <h1>{site.ui.shopTitle}</h1>
        <p className="shop-intro">{site.ui.shopIntro}</p>
      </div>
      <div className="shop-toolbar">
        <span className="shop-filters-label">{site.ui.filtersLabel}</span>
        <div className="shop-filters" role="group">
          <button
            type="button"
            className={active === all ? "is-active" : ""}
            onClick={() => setActive(all)}
          >
            {site.ui.allCategories}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={active === category ? "is-active" : ""}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="shop-count">
          {shown.length} {site.ui.productCount}
        </p>
      </div>
      <div className="shop-grid">
        {shown.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
