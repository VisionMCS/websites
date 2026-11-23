import { site, asset } from "../content";

// Masonry collage of community looks, echoing the reference SHOP OUR IG grid.
// 社群妆容瓦片流，呼应参考站 SHOP OUR IG 的瀑布流网格。
export function SocialGrid() {
  return (
    <section className="social section" aria-labelledby="social-title">
      <div className="container">
        <div className="section-head-center">
          <p className="eyebrow">{site.social.eyebrow}</p>
          <h2 id="social-title">{site.social.title}</h2>
          <span className="social-handle">{site.social.handle}</span>
        </div>
        <div className="social-grid">
          {site.social.items.map((item, index) => (
            <figure
              className={`social-item social-${item.size ?? "square"}`}
              key={index}
            >
              <img
                src={asset(item.image)}
                alt={item.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
