import { useEffect, useRef, useState } from "react";
import { site } from "../content";
import { LanguageMenu } from "./LanguageMenu";
import { pageUrl, homeLink } from "../content/links";
import { Arrow } from "./Arrow";
import { BrandMark } from "./BrandMark";

/**
 * Mega navigation. Entries resolve through the page registry, so no per-page
 * branch exists here; entries with children open a full-width panel that lists
 * the mapped collection records.
 * 巨型导航。所有条目通过页面注册表解析，此处不存在按页面分支；带子项的条目展开
 * 整宽面板，列出映射到的集合记录。
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // The desktop panel is controlled by state instead of pure CSS :hover, so the
  // pointer can cross the gap between the trigger and the full-width panel
  // without the panel disappearing first.
  // 桌面面板由状态控制而非纯 CSS :hover，指针可以安全穿过触发项与整宽面板之间的
  // 空隙，不会在到达面板前就先关闭。
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openNav = (key: string) => {
    cancelClose();
    setActiveNav(key);
  };
  // A short grace period keeps the panel open while the pointer travels to it.
  // 短暂宽限期让指针在移向面板的过程中菜单保持展开。
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      setActiveNav(null);
    }, 180);
  };
  const closeNav = () => {
    cancelClose();
    setActiveNav(null);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        document.getElementById("nav-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeNav) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNav();
    };
    // A pointer press outside the open item closes the panel; presses inside it
    // (trigger or panel links) are ignored.
    // 打开项之外的指针按下会关闭面板；打开项内部（触发链接或面板链接）忽略。
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest(".nav-item"))
        closeNav();
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [activeNav]);

  // Timers must not outlive the component. 计时器不能比组件存活更久。
  useEffect(
    () => () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  return (
    <header className="header">
      <div className="container header-inner">
        <a
          href={pageUrl()}
          className="brand"
          aria-label={`${site.brand.name} · ${site.ui.backTop}`}
        >
          <span className="brand-mark" aria-hidden="true">
            <BrandMark size={38} />
          </span>
          <span className="brand-text">
            {site.brand.name}
            <small>{site.brand.english}</small>
          </span>
        </a>
        <LanguageMenu />
        <button
          id="nav-toggle"
          type="button"
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? site.ui.closeMenu : site.ui.menu}
          <span aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-nav"
          className={mobileOpen ? "navigation is-open" : "navigation"}
          aria-label={site.ui.navigation}
        >
          <ul className="nav-list">
            {site.nav.map((item) => {
              const href = item.href.startsWith("#")
                ? homeLink(item.href)
                : pageUrl(item.href);
              const hasChildren = item.children.length > 0;
              const isOpen = hasChildren && activeNav === item.href;
              return (
                <li
                  className={isOpen ? "nav-item is-active" : "nav-item"}
                  key={item.href}
                  onPointerEnter={hasChildren ? () => openNav(item.href) : undefined}
                  onPointerLeave={hasChildren ? scheduleClose : undefined}
                  onFocus={hasChildren ? () => openNav(item.href) : undefined}
                  onBlur={
                    hasChildren
                      ? (event) => {
                          if (!event.currentTarget.contains(event.relatedTarget))
                            scheduleClose();
                        }
                      : undefined
                  }
                >
                  <a
                    href={href}
                    className={hasChildren ? "nav-trigger" : undefined}
                    aria-expanded={hasChildren ? isOpen : undefined}
                    onClick={() => {
                      setMobileOpen(false);
                      closeNav();
                    }}
                  >
                    {item.label}
                    {hasChildren && (
                      <span className="nav-caret" aria-hidden="true">
                        ⌄
                      </span>
                    )}
                  </a>
                  {hasChildren && (
                    <>
                      <div
                        className="mega"
                        role="group"
                        aria-label={item.label}
                        aria-hidden={!isOpen}
                      >
                        <div className="container mega-inner">
                          <div className="mega-lead">
                            <p className="eyebrow">{item.label}</p>
                            <p>{item.description}</p>
                            <a
                              className="text-link"
                              href={href}
                              onClick={() => {
                                setMobileOpen(false);
                                closeNav();
                              }}
                            >
                              {item.label}
                              <Arrow />
                            </a>
                          </div>
                          <ul className="mega-grid">
                            {item.children.map((child) => (
                              <li key={`${child.page}-${child.id}`}>
                                <a
                                  href={pageUrl(child.page, { id: child.id })}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    closeNav();
                                  }}
                                >
                                  <span className="mega-title">
                                    {child.label}
                                    <Arrow diagonal />
                                  </span>
                                  <span className="mega-note">
                                    {child.description}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <ul className="nav-sub" aria-label={item.label}>
                        {item.children.map((child) => (
                          <li key={`sub-${child.page}-${child.id}`}>
                            <a
                              href={pageUrl(child.page, { id: child.id })}
                              onClick={() => {
                                setMobileOpen(false);
                                closeNav();
                              }}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href={pageUrl("contact")}
            className="nav-contact"
            onClick={() => {
              setMobileOpen(false);
              closeNav();
            }}
          >
            {site.ui.requestQuote}
            <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
