import { site, projectId } from "../content";
import { pageUrl } from "../content/links";
import { QuoteCta } from "../sections/QuoteCta";
import { Quality } from "../sections/Quality";
import {
  Breadcrumbs,
  CardList,
  DetailBlock,
  DetailHero,
  RelatedCases,
  RelatedServices,
} from "../components/DetailBlocks";
import { Arrow } from "../components/Arrow";

/**
 * Reusable industry detail page driven by a single `industries.items` record.
 * 可复用的行业详情页，由 `industries.items` 中的单条记录驱动。
 */
export function IndustryPage() {
  const industry = site.industries.items.find((item) => item.id === projectId);
  if (!industry) {
    return (
      <section className="container section">
        <h1>{site.ui.notFound}</h1>
        <a className="text-link" href={pageUrl("industries")}>
          {site.ui.backToIndustries}
        </a>
      </section>
    );
  }
  return (
    <article>
      <div className="container detail-nav">
        <Breadcrumbs
          trail={[
            { label: site.industries.pageTitle, href: pageUrl("industries") },
            {
              label: industry.name,
              href: pageUrl("industry", { id: industry.id }),
            },
          ]}
        />
      </div>
      <DetailHero
        eyebrow={site.industries.eyebrow}
        title={industry.name}
        description={industry.description}
        image={industry.image}
        imageAlt={industry.imageAlt}
        meta={[
          {
            label: site.industries.applicationsTitle,
            value: industry.applications
              .map((entry) => entry.title)
              .join(" · "),
          },
          {
            label: site.industries.servicesTitle,
            value: industry.services
              .map(
                (id) =>
                  site.services.items.find((item) => item.id === id)?.title ??
                  id,
              )
              .join(" · "),
          },
        ]}
        badges={[site.cases.demoLabel]}
      />
      <DetailBlock
        id="industry-challenges"
        title={site.industries.challengesTitle}
      >
        <CardList items={industry.challenges} ordered />
      </DetailBlock>
      <DetailBlock
        id="industry-solutions"
        title={site.industries.solutionsTitle}
        intro={industry.summary}
      >
        <CardList items={industry.solutions} />
      </DetailBlock>
      <DetailBlock
        id="industry-applications"
        title={site.industries.applicationsTitle}
      >
        <ul className="application-list">
          {industry.applications.map((entry) => (
            <li key={entry.title}>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
              <a
                className="text-link"
                href={pageUrl("service", { id: entry.service })}
              >
                {site.services.items.find((item) => item.id === entry.service)
                  ?.title ?? entry.service}
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </DetailBlock>
      <DetailBlock
        id="industry-services"
        title={site.industries.servicesTitle}
      >
        <RelatedServices ids={industry.services} />
      </DetailBlock>
      <DetailBlock id="industry-cases" title={site.industries.casesTitle}>
        <RelatedCases industryId={industry.id} />
      </DetailBlock>
      <div className="detail-embed">
        <Quality />
      </div>
      <DetailBlock
        id="industry-assurance"
        title={site.industries.assuranceTitle}
      >
        <CardList items={industry.assurance} />
      </DetailBlock>
      <div className="detail-back">
        <a className="text-link" href={pageUrl("industries")}>
          ← {site.ui.backToIndustries}
        </a>
      </div>
      <QuoteCta />
    </article>
  );
}
