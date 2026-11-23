import { Hero } from "../sections/Hero";
import { Collections } from "../sections/Collections";
import { FanFaves } from "../sections/FanFaves";
import { TryOn } from "../sections/TryOn";
import { SocialGrid } from "../sections/SocialGrid";
import { Story } from "../sections/Story";
import { Newsletter } from "../sections/Newsletter";
import { site } from "../content";
export function HomePage() {
  return (
    <>
      <Hero />
      <section className="manifesto container section" id="approach">
        <p className="eyebrow">{site.manifesto.eyebrow}</p>
        <h2>{site.manifesto.title}</h2>
        <p>{site.manifesto.description}</p>
      </section>
      <Collections />
      <FanFaves />
      <TryOn />
      <SocialGrid />
      <Story />
      <Newsletter />
    </>
  );
}
