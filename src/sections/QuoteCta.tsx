import { site } from "../content";
import { pageUrl, homeLink } from "../content/links";
import { Arrow } from "../components/Arrow";
import { Reveal } from "../components/Reveal";

/**
 * Inquiry call to action used at the end of every page.
 * 每个页面末尾使用的询盘行动区。
 */
export function QuoteCta() {
  return (
    <section id="quote" className="section quote-section">
      <Reveal className="container quote-inner">
        <div>
          <p className="eyebrow">{site.quote.eyebrow}</p>
          <h2>{site.quote.title}</h2>
          <p className="quote-description">{site.quote.description}</p>
        </div>
        <div className="quote-side">
          <ul className="quote-points">
            {site.quote.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="quote-actions">
            <a className="button primary" href={pageUrl("contact", {}, "#inquiry-form")}>
              {site.quote.primary}
              <Arrow diagonal />
            </a>
            <a className="text-link" href={homeLink("#services")}>
              {site.quote.secondary}
              <Arrow />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
