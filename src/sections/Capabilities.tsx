import { site, asset } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function Capabilities() {
  return (
    <section id="capabilities" className="section container capabilities">
      <SectionHeading {...site.capabilities} />
      <div className="capability-layout">
        <Reveal className="capability-media">
          <img
            src={asset(site.capabilities.image)}
            alt={site.capabilities.imageAlt}
            width="1400"
            height="930"
            loading="lazy"
          />
          <div className="capability-metrics">
            <ul>
              {site.capabilities.metrics.map((metric) => (
                <li key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <ul className="capability-grid">
          {site.capabilities.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 60}>
              <span className="capability-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
      <p className="demo-note">{site.capabilities.note}</p>
    </section>
  );
}
