import { site } from "../content";
import { pageUrl } from "../content/links";
import { Arrow } from "../components/Arrow";

export function NotFoundPage() {
  return (
    <section className="container section notfound-page">
      <p className="eyebrow">404</p>
      <h1>{site.ui.notFoundTitle}</h1>
      <p className="notfound-intro">{site.ui.notFoundIntro}</p>
      <div className="notfound-actions">
        <a className="button-primary" href={pageUrl("home")}>
          {site.ui.notFoundHome}
        </a>
        <a className="text-link" href={pageUrl("shop")}>
          {site.ui.notFoundShop}
          <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
