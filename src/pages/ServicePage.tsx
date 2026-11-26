import { site, projectId } from "../content";
import { pageUrl } from "../content/links";
import { QuoteCta } from "../sections/QuoteCta";
import { Faq } from "../sections/Faq";
import { Process } from "../sections/Process";
import {
  Breadcrumbs,
  CardList,
  DetailBlock,
  DetailHero,
  MaterialTable,
  RelatedServices,
  SpecTable,
} from "../components/DetailBlocks";
import { Reveal } from "../components/Reveal";

/**
 * Reusable service detail page. Every record in `services.items` is rendered by
 * this single component from its own data, with no per-service copy.
 * 可复用的服务详情页：`services.items` 下的每条记录都由本组件按自身数据渲染，
 * 不为单个服务复制一套组件。
 */
export function ServicePage() {
  const service = site.services.items.find((item) => item.id === projectId);
  if (!service) {
    return (
      <section className="container section">
        <h1>{site.ui.notFound}</h1>
        <a className="text-link" href={pageUrl("services")}>
          {site.ui.backToServices}
        </a>
      </section>
    );
  }
  return (
    <article>
      <div className="container detail-nav">
        <Breadcrumbs
          trail={[
            { label: site.services.pageTitle, href: pageUrl("services") },
            { label: service.title, href: pageUrl("service", { id: service.id }) },
          ]}
        />
      </div>
      <DetailHero
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        meta={service.specs.slice(0, 4).map((row) => ({
          label: row.label,
          value: row.value,
        }))}
        badges={service.tags}
      />
      <DetailBlock
        id="service-capabilities"
        title={site.ui.capabilitiesTitle}
        intro={service.summary}
      >
        <CardList items={service.capabilities} />
      </DetailBlock>
      <DetailBlock
        id="service-materials"
        title={site.ui.materialsTitle}
        side={<p className="block-note">{site.capabilities.note}</p>}
      >
        <MaterialTable rows={service.materials} />
      </DetailBlock>
      <DetailBlock id="service-applications" title={site.ui.applicationsTitle}>
        <CardList items={service.applications} />
      </DetailBlock>
      <DetailBlock
        id="service-specs"
        title={site.ui.specsTitle}
        intro={site.hero.statsNote}
      >
        <SpecTable rows={service.specs} />
      </DetailBlock>
      <div className="detail-embed">
        <Process />
      </div>
      <DetailBlock id="service-quality" title={site.ui.qualityTitle}>
        <Reveal className="quality-aside">
          <CardList items={service.quality} />
        </Reveal>
      </DetailBlock>
      <Faq
        id="service-faq"
        eyebrow={service.heroEyebrow}
        title={site.ui.faqTitle}
        intro={site.faq.intro}
        items={service.faq}
      />
      <DetailBlock id="service-related" title={site.ui.relatedServices}>
        <RelatedServices
          ids={site.services.items
            .filter((item) => item.id !== service.id)
            .slice(0, 3)
            .map((item) => item.id)}
        />
      </DetailBlock>
      <div className="detail-back">
        <a className="text-link" href={pageUrl("services")}>
          ← {site.ui.backToServices}
        </a>
      </div>
      <QuoteCta />
    </article>
  );
}
