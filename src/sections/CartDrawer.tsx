import { useEffect, useState } from "react";
import { site, asset } from "../content";
import { pageUrl } from "../content/links";
import { useBag } from "../content/useCart";
import { setQty, removeFromBag, formatMoney } from "../content/cart";
import { Arrow } from "../components/Arrow";

export function CartDrawer() {
  const { items, subtotal, symbol, count } = useBag();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onOpen = () => setOpen(true);
    document.addEventListener("bag:open", onOpen);
    return () => document.removeEventListener("bag:open", onOpen);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div
      className={open ? "bag-overlay is-open" : "bag-overlay"}
      onClick={() => setOpen(false)}
      aria-hidden={!open}
    >
      <aside
        className={open ? "bag-drawer is-open" : "bag-drawer"}
        role="dialog"
        aria-modal="true"
        aria-label={site.ui.cartTitle}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bag-head">
          <h2>
            {site.ui.cartTitle}
            <span className="bag-count">{count}</span>
          </h2>
          <button
            type="button"
            className="bag-close"
            aria-label={site.ui.closeMenu}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        {items.length === 0 ? (
          <div className="bag-empty">
            <p>{site.ui.cartEmpty}</p>
            <a className="button-primary" href={pageUrl("shop")}>
              {site.ui.cartEmptyCta}
            </a>
          </div>
        ) : (
          <>
            <ul className="bag-list">
              {items.map((item) => (
                <li className="bag-item" key={`${item.id}-${item.size}`}>
                  <a
                    className="bag-item-media"
                    href={pageUrl("product", { id: item.id })}
                    onClick={() => setOpen(false)}
                  >
                    <img src={asset(item.image)} alt={item.name} />
                  </a>
                  <div className="bag-item-info">
                    <p className="bag-item-name">{item.name}</p>
                    {item.size && (
                      <p className="bag-item-size">{item.size}</p>
                    )}
                    <p className="bag-item-price">
                      {item.price} × {item.qty}
                    </p>
                    <div className="bag-qty" role="group">
                      <button
                        type="button"
                        aria-label={site.ui.cartQtyDecrease}
                        onClick={() =>
                          setQty(item.id, item.size, item.qty - 1)
                        }
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        aria-label={site.ui.cartQtyIncrease}
                        onClick={() =>
                          setQty(item.id, item.size, item.qty + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="bag-remove"
                      onClick={() => removeFromBag(item.id, item.size)}
                    >
                      {site.ui.cartRemove}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bag-foot">
              <p className="bag-subtotal">
                <span>{site.ui.cartSubtotal}</span>
                <strong>{formatMoney(symbol, subtotal)}</strong>
              </p>
              <p className="prototype-note">{site.ui.prototypeNote}</p>
              <a
                className="button-primary bag-checkout"
                href={pageUrl("checkout")}
                onClick={() => setOpen(false)}
              >
                {site.ui.cartCheckout}
                <Arrow diagonal />
              </a>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
