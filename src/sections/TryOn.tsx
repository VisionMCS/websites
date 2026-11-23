import { site, asset } from "../content";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";

export function TryOn() {
  return (
    <section className="tryon section" aria-labelledby="tryon-title">
      <div className="container tryon-inner">
        <div className="tryon-copy">
          <p className="eyebrow">{site.tryOn.eyebrow}</p>
          <h2 id="tryon-title">{site.tryOn.title}</h2>
          <p>{site.tryOn.description}</p>
          <a className="button-primary" href={pageUrl("collections")}>
            {site.tryOn.link}
            <Arrow diagonal />
          </a>
        </div>
        <div className="tryon-image">
          <img
            src={asset(site.tryOn.image)}
            alt={site.tryOn.imageAlt}
            width="900"
            height="1125"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
