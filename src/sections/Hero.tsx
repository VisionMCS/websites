import { site, asset } from "../content";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";
import { CountUp } from "../components/CountUp";
import { Reveal } from "../components/Reveal";

export function Hero() {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" />
          {site.hero.eyebrow}
        </p>
        <h1 id="hero-title">
          {site.hero.title[0]}
          <br />
          <span>{site.hero.title[1]}</span>
        </h1>
        <p className="hero-description">{site.hero.description}</p>
        <div className="hero-actions">
          <a className="button primary" href={pageUrl("contact")}>
            {site.hero.primary}
            <Arrow diagonal />
          </a>
          <a className="text-link" href={pageUrl("services")}>
            {site.hero.secondary}
            <Arrow />
          </a>
        </div>
        <p className="hero-signature">{site.brand.descriptor}</p>
      </div>
      <div>
        <Reveal className="hero-visual">
          <img
            src={asset(site.hero.image)}
            alt={site.hero.imageAlt}
            width="1400"
            height="940"
            fetchPriority="high"
          />
          <span className="image-index" aria-hidden="true">
            V / MFG — 01
          </span>
          <figcaption>
            <span>{site.hero.note}</span>
            <strong>{site.hero.caption}</strong>
          </figcaption>
        </Reveal>
        <Reveal className="hero-stats" delay={80}>
          <p className="hero-stats-label">{site.hero.statsLabel}</p>
          <dl>
            {site.hero.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <dt>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dt>
                <dd>
                  <strong>{stat.label}</strong>
                  <span>{stat.note}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="hero-stats-note">{site.hero.statsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
