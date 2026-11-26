import { site, business } from "../content";
import { pageUrl, homeLink } from "../content/links";
import { Arrow } from "./Arrow";
import { BrandMark } from "./BrandMark";

/**
 * Global footer. Columns come from the same navigation data as the header so the
 * link set can never drift from the registered pages.
 * 全站页脚。分栏数据与页眉导航一致，链接集合不会偏离已注册页面。
 */
export function Footer() {
  const email: string | null = business.email;
  const columns = site.nav.filter((item) => item.children.length > 0);
  const company = [
    { label: site.ui.home, href: pageUrl() },
    { label: site.contact.title, href: pageUrl("contact") },
    { label: site.faq.title, href: homeLink("#faq") },
  ];
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <span className="footer-brand">
            <BrandMark size={34} />
            <span>
              {site.brand.name}
              <small>{site.brand.english}</small>
            </span>
          </span>
          <a href="#top">
            {site.ui.backTop}
            <Arrow diagonal />
          </a>
        </div>
        <div className="footer-cols">
          {columns.map((item) => (
            <div className="footer-col" key={item.href}>
              <h3>{item.label}</h3>
              <ul>
                {item.children.map((child) => (
                  <li key={`${child.page}-${child.id}`}>
                    <a href={pageUrl(child.page, { id: child.id })}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-col">
            <h3>{site.ui.footerCompany}</h3>
            <ul>
              {company.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              {email && (
                <li>
                  <a href={`mailto:${email}`}>{site.contact.emailLabel}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.brand.copyright}
          </span>
          <p>{site.ui.footerLegal}</p>
        </div>
      </div>
    </footer>
  );
}

/** Footer links always target registered pages or home section anchors. */
