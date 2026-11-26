import { site } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

/**
 * Manufacturing flow. Reused on the home page and on every service detail page.
 * 制造流程，首页与每个服务详情页复用同一份数据与组件。
 */
export function Process({ compact = false }: { compact?: boolean }) {
  return (
    <section id="process" className="section container process">
      <SectionHeading
        eyebrow={site.process.eyebrow}
        title={site.process.title}
        intro={site.process.intro}
      />
      <ol className="process-grid">
        {site.process.steps.map((item, index) => (
          <Reveal as="li" key={item.title} delay={(index % 3) * 70}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {!compact && <small>{item.note}</small>}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
