import { site, business } from "../content";
import { pageUrl, homeLink } from "../content/links";
import { Arrow } from "../components/Arrow";
export function Contact() {
  const email: string | null = business.email;
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">{site.contact.eyebrow}</p>
            <h2>{site.contact.title}</h2>
            <p>{site.contact.description}</p>
          </div>
          <div className="contact-action">
            {email ? (
              <a className="button primary" href={`mailto:${email}`}>
                {site.contact.emailLabel}
                <Arrow diagonal />
              </a>
            ) : (
              <span className="contact-placeholder">
                {site.contact.placeholder}
                <Arrow diagonal />
              </span>
            )}
            <p>{email ?? site.brand.descriptor}</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">
              {site.brand.name}
              <small>{site.brand.english}</small>
            </span>
            <p className="footer-tagline">{site.brand.descriptor}</p>
          </div>
          <nav className="footer-col" aria-label={site.ui.footerShop}>
            <h3>{site.ui.footerShop}</h3>
            <a href={pageUrl("shop")}>{site.ui.shop}</a>
            <a href={pageUrl("collections")}>{site.ui.allCollections}</a>
            <a href={pageUrl("checkout")}>{site.ui.cartTitle}</a>
          </nav>
          <nav className="footer-col" aria-label={site.ui.footerDiscover}>
            <h3>{site.ui.footerDiscover}</h3>
            <a href={pageUrl("story")}>{site.story.title}</a>
            <a href={homeLink("#fanfaves-title")}>{site.fanFaves.title}</a>
            <a href={homeLink("#social-title")}>{site.social.title}</a>
          </nav>
          <nav className="footer-col" aria-label={site.ui.footerSupport}>
            <h3>{site.ui.footerSupport}</h3>
            <a href={pageUrl("story", {}, "#faq-title")}>{site.faq.title}</a>
            <a href={homeLink("#tryon-title")}>{site.tryOn.title}</a>
            <a href={homeLink("#contact")}>{site.contact.title}</a>
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.brand.copyright}
          </span>
          <a className="footer-top-link" href="#top">
            {site.ui.backTop}
            <Arrow diagonal />
          </a>
        </div>
      </footer>
    </>
  );
}
