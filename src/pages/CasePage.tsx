import { site, projectId } from "../content";
import { pageUrl } from "../content/links";
import { QuoteCta } from "../sections/QuoteCta";
import {
  Breadcrumbs,
  CardList,
  DetailBlock,
  DetailHero,
  RelatedServices,
} from "../components/DetailBlocks";
import { Reveal } from "../components/Reveal";

/**
 * Reusable case study detail page. Content is demonstration material and stays
 * labelled as such.
 * 可复用的案例详情页。内容为演示材料并保留演示标注。
 */
export function CasePage() {
  const entry = site.cases.items.find((item) => item.id === projectId);
  if (!entry) {
    return (
      <section className="container section">
        <h1>{site.ui.notFound}</h1>
        <a className="text-link" href={pageUrl("cases")}>
          {site.ui.backToCases}
        </a>
      </section>
    );
  }
  return (
    <article>
      <div className="container detail-nav">
        <Breadcrumbs
          trail={[
            { label: site.cases.pageTitle, href: pageUrl("cases") },
            { label: entry.name, href: pageUrl("case", { id: entry.id }) },
          ]}
        />
      </div>
      <DetailHero
        eyebrow={`${site.cases.demoLabel} · ${entry.categoryLabel}`}
        title={entry.name}
        description={entry.summary}
        image={entry.image}
        imageAlt={entry.imageAlt}
        meta={[
          { label: site.cases.servicesTitle, value: entry.services
              .map(
                (id) =>
                  site.services.items.find((item) => item.id === id)?.title ?? id,
              )
              .join(" · ") },
          { label: site.ui.categories, value: entry.categoryLabel },
        ]}
        badges={[site.cases.demoLabel]}
      />
      <DetailBlock id="case-background" title={site.cases.backgroundTitle}>
        <p className="prose">{entry.background}</p>
      </DetailBlock>
      <DetailBlock id="case-need" title={site.cases.needTitle}>
        <p className="prose">{entry.clientNeed}</p>
      </DetailBlock>
      <DetailBlock id="case-challenges" title={site.cases.challengeTitle}>
        <CardList items={entry.challenges} ordered />
      </DetailBlock>
      <DetailBlock id="case-solution" title={site.cases.solutionTitle}>
        <p className="prose">{entry.solution}</p>
        <ul className="bullet-list">
          {entry.solutionPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </DetailBlock>
      <DetailBlock
        id="case-outcomes"
        title={site.cases.outcomeTitle}
        intro={site.cases.demoDisclaimer}
      >
        <div className="outcome-grid">
          {entry.outcomes.map((outcome, index) => (
            <Reveal as="div" className="outcome" key={outcome.label} delay={index * 70}>
              <span className="outcome-value">{outcome.value}</span>
              <h3>{outcome.label}</h3>
              <p>{outcome.note}</p>
            </Reveal>
          ))}
        </div>
      </DetailBlock>
      <DetailBlock
        id="case-deliverables"
        title={site.cases.deliverablesTitle}
        side={
          <a className="button primary" href={pageUrl("contact", {}, "#inquiry-form")}>
            {site.quote.primary}
          </a>
        }
      >
        <ul className="bullet-list">
          {entry.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DetailBlock>
      <DetailBlock id="case-services" title={site.cases.servicesTitle}>
        <RelatedServices ids={entry.services} />
      </DetailBlock>
      <div className="detail-back">
        <a className="text-link" href={pageUrl("cases")}>
          ← {site.ui.backToCases}
        </a>
      </div>
      <QuoteCta />
    </article>
  );
}
