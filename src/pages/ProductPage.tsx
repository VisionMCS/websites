import { useState } from "react";
import { site, asset, contentId } from "../content";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";
import { addToBag } from "../content/cart";

export function ProductPage() {
  const product = site.products.find((item) => item.id === contentId);
  if (!product)
    return (
      <section className="container section">
        <h1>{site.ui.notFound}</h1>
        <a className="text-link" href={pageUrl("shop")}>
          ← {site.ui.backToShop}
        </a>
      </section>
    );
  const [size, setSize] = useState(0);
  const [added, setAdded] = useState(false);
  // Reverse relation: which signature looks use this product.
  // 反向关系：哪些标志妆容用到了本单品。
  const looks = site.collections.items.filter((collection) =>
    (collection.productIds ?? []).includes(product.id),
  );
  return (
    <article className="container product-page">
      <nav className="breadcrumbs" aria-label={site.ui.navigation}>
        <a href={pageUrl()}>{site.ui.home}</a>
        <span>/</span>
        <a href={pageUrl("shop")}>{site.ui.shop}</a>
        <span>/</span>
        <span>{product.name}</span>
      </nav>
      <div className="product-layout">
        <div className="product-media">
          <img src={asset(product.image)} alt={product.imageAlt} />
        </div>
        <div className="product-buy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-summary">{product.description}</p>
          <div className="product-option">
            <span className="product-option-label">
              {site.ui.sizeLabel} · {product.shade}
            </span>
            <div className="size-options" role="group">
              {product.sizes.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={size === index ? "is-active" : ""}
                  onClick={() => setSize(index)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="button-primary add-to-bag"
            onClick={() => {
              addToBag({
                id: product.id,
                name: product.name,
                price: product.price,
                size: product.sizes[size] ?? "",
                image: product.image,
              });
              setAdded(true);
            }}
          >
            {site.ui.addToBag}
          </button>
          {added && <p className="bag-added">✓ {site.ui.bagAdded}</p>}
          <p className="prototype-note">{site.ui.prototypeNote}</p>
          <ul className="product-highlights">
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="product-detail-cols">
        <section>
          <h2>{site.ui.howToUseLabel}</h2>
          <p>{product.howToUse}</p>
        </section>
        <section>
          <h2>{site.ui.ingredientsLabel}</h2>
          <p>{product.ingredients}</p>
        </section>
      </div>
      {looks.length > 0 && (
        <section className="used-in-looks">
          <h2>{site.ui.usedInLooks}</h2>
          <div className="used-looks-grid">
            {looks.map((look) => (
              <a
                key={look.id}
                className="used-look-card"
                href={pageUrl("collection", { id: look.id })}
              >
                <img src={asset(look.image)} alt={look.imageAlt} />
                <span>
                  {look.name}
                  <Arrow diagonal />
                </span>
              </a>
            ))}
          </div>
        </section>
      )}
      <a className="text-link" href={pageUrl("shop")}>
        ← {site.ui.backToShop}
      </a>
    </article>
  );
}
