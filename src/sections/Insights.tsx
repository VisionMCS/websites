import { site, asset } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";
import { Reveal } from "../components/Reveal";

/**
 * Resource and insight teasers. Each card points at a registered page rather
 * than an invented article route, so no dead link is produced.
 * 资源与洞察摘要。每张卡片指向已注册的页面，而不是虚构的文章路由，避免产生死链。
 */
export function Insights() {
  return (
    <section id="insights" className="section container insights">
      <SectionHeading {...site.insights} />
      <div className="insight-grid">
        {site.insights.items.map((item, index) => (
          <Reveal as="article" className="insight" key={item.id} delay={index * 70}>
            <a href={pageUrl(item.page, { id: item.id_target })}>
              <div className="insight-media">
                <img
                  src={asset(item.image)}
                  alt={item.imageAlt}
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              </div>
              <p className="insight-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="insight-summary">{item.summary}</p>
              <span className="text-link">
                {site.ui.revealLabel}
                <Arrow />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
