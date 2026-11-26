import { site, asset } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";
import { Reveal } from "../components/Reveal";

/**
 * Manufacturing service cards. The same component powers the home overview and
 * the collection page, driven only by `services.items`.
 * 制造服务卡片。同一组件同时用于首页概览与列表页，完全由 `services.items` 驱动。
 */
export function Services({ collection = false }: { collection?: boolean }) {
  return (
    <section id="services" className="section container services">
      <SectionHeading
        eyebrow={site.services.eyebrow}
        title={site.services.title}
        intro={collection ? site.services.pageDescription : site.services.intro}
      />
      <div className="service-grid">
        {site.services.items.map((item, index) => (
          <Reveal as="article" className="service" key={item.id} delay={index * 70}>
            <a
              className="service-media"
              href={pageUrl("service", { id: item.id })}
              aria-label={`${site.services.viewDetail}: ${item.title}`}
            >
              <img
                src={asset(item.image)}
                alt={item.imageAlt}
                width="1400"
                height="930"
                loading="lazy"
              />
            </a>
            <div className="service-body">
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>
                <a href={pageUrl("service", { id: item.id })}>{item.title}</a>
              </h3>
              <p>{item.summary}</p>
              <ul className="tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {collection && (
                <ul className="mini-list">
                  {item.capabilities.slice(0, 3).map((capability) => (
                    <li key={capability.title}>{capability.title}</li>
                  ))}
                </ul>
              )}
              <a
                className="text-link service-link"
                href={pageUrl("service", { id: item.id })}
              >
                {site.services.viewDetail}
                <Arrow />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
