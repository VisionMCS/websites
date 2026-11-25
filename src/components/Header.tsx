import { useEffect, useState } from "react";
import { site } from "../content";
import { LanguageMenu } from "./LanguageMenu";
import { pageUrl, homeLink } from "../content/links";
import { Arrow } from "./Arrow";
import { useBag } from "../content/useCart";
import { openBag } from "../content/cart";

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useBag();
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("nav-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          href={pageUrl()}
          className="brand"
          aria-label={`${site.brand.name} · ${site.ui.backTop}`}
        >
          <span>
            {site.brand.name}
            <small>{site.brand.english}</small>
          </span>
        </a>
        <LanguageMenu />
        <button
          type="button"
          className="bag-toggle"
          aria-label={site.ui.bag}
          onClick={() => openBag()}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              d="M6 8h12l-1 12H7L6 8Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M9 8V6a3 3 0 0 1 6 0v2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          <span className="bag-badge">{count}</span>
        </button>
        <button
          id="nav-toggle"
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? site.ui.closeMenu : site.ui.menu}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-nav"
          className={open ? "navigation is-open" : "navigation"}
          aria-label={site.ui.navigation}
        >
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={
                link.href.startsWith("#")
                  ? homeLink(link.href)
                  : pageUrl(link.href)
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            {site.contact.emailLabel}
            <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
