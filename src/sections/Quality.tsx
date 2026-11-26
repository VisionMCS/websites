import { site, asset } from "../content";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

/**
 * Quality system and certification placeholders. Certification entries are
 * labelled as placeholders: no certificate is claimed for the demonstration
 * brand and no certification body is represented.
 * 质量体系与认证占位说明。认证条目明确标注为占位：本演示品牌不声称取得任何证书，
 * 也不代表任何认证机构。
 */
export function Quality() {
  return (
    <section id="quality" className="section quality-section">
      <div className="container">
        <SectionHeading
          eyebrow={site.quality.eyebrow}
          title={site.quality.title}
          intro={site.quality.intro}
        />
        <div className="quality-layout">
          <Reveal className="quality-media">
            <img
              src={asset(site.quality.image)}
              alt={site.quality.imageAlt}
              width="1400"
              height="2098"
              loading="lazy"
            />
          </Reveal>
          <div className="quality-content">
            <ul className="control-grid">
              {site.quality.controls.map((item, index) => (
                <Reveal as="li" key={item.title} delay={(index % 3) * 60}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Reveal>
              ))}
            </ul>
            <div className="cert-block">
              <h3>{site.quality.certificationsLabel}</h3>
              <ul className="cert-list">
                {site.quality.certifications.map((item) => (
                  <li key={item.id}>
                    <span className="cert-name">{item.name}</span>
                    <span className="cert-scope">{item.scope}</span>
                    <span className="cert-status">{item.status}</span>
                  </li>
                ))}
              </ul>
              <p className="demo-note">{site.quality.certificationsNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
