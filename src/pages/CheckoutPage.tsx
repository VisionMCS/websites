import { useState } from "react";
import { site, asset } from "../content";
import { pageUrl } from "../content/links";
import { useBag } from "../content/useCart";
import { formatMoney } from "../content/cart";

export function CheckoutPage() {
  const { items, subtotal, symbol, count } = useBag();
  const [placed, setPlaced] = useState(false);
  return (
    <article className="container section checkout-page">
      <nav className="breadcrumbs" aria-label={site.ui.navigation}>
        <a href={pageUrl()}>{site.ui.home}</a>
        <span>/</span>
        <a href={pageUrl("shop")}>{site.ui.shop}</a>
        <span>/</span>
        <span>{site.ui.checkoutTitle}</span>
      </nav>
      <p className="eyebrow">{site.brand.name}</p>
      <h1>{site.ui.checkoutTitle}</h1>
      <p className="checkout-intro">{site.ui.checkoutIntro}</p>
      {count === 0 ? (
        <div className="checkout-empty">
          <p>{site.ui.checkoutEmpty}</p>
          <a className="button-primary" href={pageUrl("shop")}>
            {site.ui.cartEmptyCta}
          </a>
        </div>
      ) : (
        <div className="checkout-layout">
          <div className="checkout-summary">
            <ul className="checkout-list">
              {items.map((item) => (
                <li className="checkout-row" key={`${item.id}-${item.size}`}>
                  <img
                    className="checkout-thumb"
                    src={asset(item.image)}
                    alt={item.name}
                  />
                  <div className="checkout-row-info">
                    <p className="checkout-row-name">{item.name}</p>
                    {item.size && (
                      <p className="checkout-row-size">
                        {site.ui.sizeLabel}: {item.size}
                      </p>
                    )}
                    <p className="checkout-row-qty">× {item.qty}</p>
                  </div>
                  <p className="checkout-row-price">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="checkout-order">
            <h2>{site.ui.cartTitle}</h2>
            <dl className="checkout-totals">
              <div>
                <dt>{site.ui.cartSubtotal}</dt>
                <dd>{formatMoney(symbol, subtotal)}</dd>
              </div>
              <div>
                <dt>{site.ui.checkoutShipping}</dt>
                <dd>{site.ui.checkoutShippingFree}</dd>
              </div>
              <div className="checkout-total">
                <dt>{site.ui.checkoutTotal}</dt>
                <dd>{formatMoney(symbol, subtotal)}</dd>
              </div>
            </dl>
            <button
              type="button"
              className="button-primary checkout-place"
              onClick={() => setPlaced(true)}
            >
              {site.ui.checkoutPlaceOrder}
            </button>
            {placed && (
              <p className="bag-added">✓ {site.ui.checkoutPlaced}</p>
            )}
            <p className="prototype-note">{site.ui.prototypeNote}</p>
            <a className="text-link" href={pageUrl("shop")}>
              ← {site.ui.backToShop}
            </a>
          </aside>
        </div>
      )}
    </article>
  );
}
