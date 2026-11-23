import { site, asset, contentId } from "../content";
import { pageUrl } from "../content/links";
import { ProductCard } from "../components/ProductCard";
import { Arrow } from "../components/Arrow";

export function CollectionPage() {
  const collection = site.collections.items.find(
    (item) => item.id === contentId,
  );
  if (!collection)
    return (
      <section className="container section">
        <h1>{site.ui.notFound}</h1>
        <a className="text-link" href={pageUrl("collections")}>
          {site.ui.backCollections}
        </a>
      </section>
    );
  // Resolve related products through the data relation, never hard-coded in the card.
  // 关联产品通过数据关系（productIds → products 表）解析，不写死在卡片中。
  const related = (collection.productIds ?? [])
    .map((id) => site.products.find((product) => product.id === id))
    .filter((product): product is (typeof site.products)[number] => !!product);
  return (
    <article className="container collection-detail">
      {/* First screen: look intro copy paired with a full portrait image.
          首屏：妆容介绍文案与完整竖幅人像图并排。 */}
      <section className="look-hero">
        <div className="look-hero-copy">
          <nav className="breadcrumbs" aria-label={site.ui.navigation}>
            <a href={pageUrl()}>{site.ui.home}</a>
            <span>/</span>
            <a href={pageUrl("collections")}>{site.collections.pageTitle}</a>
            <span>/</span>
            <span>{collection.name}</span>
          </nav>
          <p className="eyebrow">
            {site.ui.collectionLabel} / {collection.category}
          </p>
          <h1>{collection.name}</h1>
          <p className="look-summary">{collection.summary}</p>
          <a
            className="button-primary"
            href={pageUrl("collections", { id: collection.id })}
          >
            {collection.shopLabel ?? site.ui.shopNow}
            <Arrow diagonal />
          </a>
        </div>
        <div className="look-hero-media">
          <img src={asset(collection.image)} alt={collection.imageAlt} />
        </div>
      </section>
      <div className="detail-body">
        <div>
          <h2>{site.ui.collectionIntro}</h2>
          <p>{collection.detail}</p>
        </div>
        <aside>
          <h2>{site.ui.highlights}</h2>
          <ul>
            {collection.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
      {collection.steps && collection.steps.length > 0 && (
        <section className="look-steps" aria-labelledby="look-steps-title">
          <h2 id="look-steps-title">{site.ui.steps}</h2>
          <ol>
            {collection.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      )}
      {related.length > 0 && (
        <section
          className="look-products"
          aria-labelledby="look-products-title"
        >
          <div className="look-products-head">
            <h2 id="look-products-title">{site.ui.relatedProducts}</h2>
            <a
              className="button-primary"
              href={pageUrl("collections", { id: collection.id })}
            >
              {collection.shopLabel ?? site.ui.shopNow}
              <Arrow diagonal />
            </a>
          </div>
          <div className="product-grid">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
      <a className="text-link" href={pageUrl("collections")}>
        ← {site.ui.backCollections}
      </a>
    </article>
  );
}
