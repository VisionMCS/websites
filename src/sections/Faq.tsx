import { site } from "../content";
import { SectionHeading } from "../components/SectionHeading";

/**
 * Accordion built on native `details`, so it works before hydration.
 * 基于原生 `details` 的折叠面板，在脚本接管前即可使用。
 */
export function Faq({
  id = "faq",
  eyebrow,
  title,
  intro,
  items = site.faq.items,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: { question: string; answer: string }[];
}) {
  return (
    <section id={id} className="section container faq-section">
      <SectionHeading
        eyebrow={eyebrow ?? site.faq.eyebrow}
        title={title ?? site.faq.title}
        intro={intro ?? site.faq.intro}
      />
      <div className="faq-list">
        {items.map((item) => (
          <details name="faq" key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
