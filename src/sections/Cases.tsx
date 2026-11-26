import { useState } from "react";
import { site, asset } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";
import { Reveal } from "../components/Reveal";

/**
 * Case study cards with an industry filter. The filter keeps the template's
 * existing `useState` pattern and is enabled on the collection page.
 * 带行业筛选的案例卡片。筛选沿用模板原有的 useState 模式，仅在列表页启用。
 */
export function Cases({ collection = false }: { collection?: boolean }) {
  const [filter, setFilter] = useState("");
  const categories = [
    { key: "", label: site.cases.allLabel },
    ...Array.from(
      new Map(
        site.cases.items.map((item) => [item.category, item.categoryLabel]),
      ).entries(),
    ).map(([key, label]) => ({ key, label })),
  ];
  const visible = site.cases.items.filter(
    (item) => filter === "" || item.category === filter,
  );
  return (
    <section id="cases" className="section cases-section">
      <div className="container">
        <SectionHeading
          eyebrow={site.cases.eyebrow}
          title={site.cases.title}
          intro={
            collection ? site.cases.pageDescription : site.cases.intro
          }
        />
        {collection && (
          <div className="filters" role="group" aria-label={site.ui.categories}>
            {categories.map((entry) => (
              <button
                type="button"
                aria-pressed={filter === entry.key}
                key={entry.key || "all"}
                onClick={() => setFilter(entry.key)}
              >
                {entry.label}
              </button>
            ))}
          </div>
        )}
        {collection && (
          <p className="filter-count" aria-live="polite">
            {site.ui.filterLabel} {visible.length} {site.ui.filterCount}
          </p>
        )}
        <div className="project-grid">
          {visible.map((item, index) => (
            <Reveal as="article" className="project" key={item.id} delay={(index % 2) * 70}>
              <a
                className="project-open"
                href={pageUrl("case", { id: item.id })}
                aria-label={`${site.ui.viewProject}: ${item.name}`}
              >
                <div className="project-image">
                  <img
                    src={asset(item.image)}
                    alt={item.imageAlt}
                    width="1400"
                    height="930"
                    loading="lazy"
                  />
                  <span className="project-label">
                    {site.cases.demoLabel}
                  </span>
                  <span className="project-arrow">
                    <Arrow diagonal />
                  </span>
                </div>
                <div className="project-heading">
                  <h3>{item.name}</h3>
                  <span>{item.categoryLabel}</span>
                </div>
                <p>{item.summary}</p>
              </a>
            </Reveal>
          ))}
        </div>
        {!collection && (
          <a className="text-link collection-link" href={pageUrl("cases")}>
            {site.ui.allProjects}
            <Arrow />
          </a>
        )}
        <p className="demo-note">{site.cases.demoDisclaimer}</p>
      </div>
    </section>
  );
}
