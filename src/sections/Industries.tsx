import { site, asset } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";
import { Reveal } from "../components/Reveal";

/**
 * Industry solution cards, shared by the home overview and the industry list.
 * 行业解决方案卡片，首页概览与行业列表共用。
 */
export function Industries({ collection = false }: { collection?: boolean }) {
  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <SectionHeading
          eyebrow={site.industries.eyebrow}
          title={site.industries.title}
          intro={
            collection
              ? site.industries.pageDescription
              : site.industries.intro
          }
        />
        <div className="industry-grid">
          {site.industries.items.map((item, index) => (
            <Reveal
              as="article"
              className="industry-card"
              key={item.id}
              delay={(index % 3) * 70}
            >
              <a
                className="industry-media"
                href={pageUrl("industry", { id: item.id })}
                aria-label={`${site.industries.viewDetail}: ${item.name}`}
              >
                <img
                  src={asset(item.image)}
                  alt={item.imageAlt}
                  width="1400"
                  height="930"
                  loading="lazy"
                />
                <span className="industry-count" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
              <div className="industry-body">
                <h3>
                  <a href={pageUrl("industry", { id: item.id })}>{item.name}</a>
                </h3>
                <p>{item.summary}</p>
                <ul className="chip-row">
                  {item.services.slice(0, 3).map((serviceId) => {
                    const service = site.services.items.find(
                      (entry) => entry.id === serviceId,
                    );
                    return <li key={serviceId}>{service?.title ?? serviceId}</li>;
                  })}
                </ul>
                <a
                  className="text-link"
                  href={pageUrl("industry", { id: item.id })}
                >
                  {site.industries.viewDetail}
                  <Arrow />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        {!collection && (
          <a className="text-link collection-link" href={pageUrl("industries")}>
            {site.industries.pageTitle}
            <Arrow />
          </a>
        )}
      </div>
    </section>
  );
}
