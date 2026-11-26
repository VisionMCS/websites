import type { ReactNode } from "react";
import { site, asset } from "../content";
import { pageUrl } from "../content/links";
import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";

/**
 * Shared building blocks for collection and detail pages. Everything renders
 * from data, so one component serves every record of a collection.
 * 集合页与详情页的共用模块。全部由数据渲染，因此一个组件服务集合下的所有记录。
 */

export function Breadcrumbs({
  trail,
}: {
  trail: { label: string; href: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label={site.ui.breadcrumbs}>
      <a href={pageUrl()}>{site.ui.home}</a>
      {trail.map((entry) => (
        <span className="crumb" key={entry.href}>
          <span aria-hidden="true">/</span>
          <a href={entry.href}>{entry.label}</a>
        </span>
      ))}
    </nav>
  );
}

export function DetailHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  meta,
  badges,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  meta: { label: string; value: string }[];
  badges: string[];
}) {
  return (
    <section className="container detail-hero" aria-labelledby="detail-title">
      <div className="detail-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="detail-title">{title}</h1>
        <p className="detail-lede">{description}</p>
        {badges.length > 0 && (
          <ul className="badge-row">
            {badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        )}
        <a className="button primary" href={pageUrl("contact", {}, "#inquiry-form")}>
          {site.quote.primary}
          <Arrow diagonal />
        </a>
      </div>
      <div className="detail-hero-side">
        <Reveal className="detail-hero-media">
          <img
            src={asset(image)}
            alt={imageAlt}
            width="1400"
            height="930"
            fetchPriority="high"
          />
        </Reveal>
        {meta.length > 0 && (
          <dl className="hero-meta">
            {meta.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

export function DetailBlock({
  id,
  title,
  intro,
  children,
  side,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  side?: ReactNode;
}) {
  return (
    <section id={id} className="section container detail-block">
      <div className="detail-block-head">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      <div className={side ? "detail-block-split" : "detail-block-body"}>
        <div>{children}</div>
        {side && <aside>{side}</aside>}
      </div>
    </section>
  );
}

/**
 * Collection page introduction with an in-page navigation strip.
 * 集合页顶部与页内导航条。
 */
export function PageIntro({
  eyebrow,
  title,
  description,
  links,
}: {
  eyebrow: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="container page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-lede">{description}</p>
      {links.length > 0 && (
        <nav className="quick-nav" aria-label={title}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </section>
  );
}

export function CardList({
  items,
  ordered = false,
}: {
  items: { title: string; description: string; note?: string }[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className="card-list">
      {items.map((item, index) => (
        <Reveal as="li" key={item.title} delay={(index % 3) * 60}>
          <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.note && <small>{item.note}</small>}
          </div>
        </Reveal>
      ))}
    </List>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function SpecTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <table className="spec-table">
      <caption className="sr-only">{site.ui.specsTitle}</caption>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function MaterialTable({
  rows,
}: {
  rows: { name: string; grades: string; note: string }[];
}) {
  return (
    <table className="spec-table material-table">
      <caption className="sr-only">{site.ui.materialsTitle}</caption>
      <thead>
        <tr>
          <th scope="col">{site.ui.materialGroupLabel}</th>
          <th scope="col">{site.ui.materialGradesLabel}</th>
          <th scope="col">{site.ui.materialNoteLabel}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <th scope="row">{row.name}</th>
            <td>{row.grades}</td>
            <td>{row.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Related service links resolved through the service collection.
 * 通过服务集合解析的相关服务链接。
 */
export function RelatedServices({ ids }: { ids: string[] }) {
  const items = ids
    .map((id) => site.services.items.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  if (!items.length) return null;
  return (
    <ul className="related-grid">
      {items.map((item) => (
        <li key={item.id}>
          <a href={pageUrl("service", { id: item.id })}>
            <span className="related-media">
              <img
                src={asset(item.image)}
                alt={item.imageAlt}
                width="1400"
                height="930"
                loading="lazy"
              />
            </span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <span className="text-link">
              {site.services.viewDetail}
              <Arrow />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function NotFound({ backLabel, backHref }: { backLabel: string; backHref: string }) {
  return (
    <section className="container section">
      <h1>{site.ui.notFound}</h1>
      <a className="text-link" href={backHref}>
        {backLabel}
        <Arrow />
      </a>
    </section>
  );
}

/**
 * Case studies linked to the current industry record.
 * 与当前行业记录关联的案例列表。
 */
export function RelatedCases({ industryId }: { industryId: string }) {
  const items = site.cases.items.filter((item) => item.category === industryId);
  if (!items.length) return null;
  return (
    <ul className="case-mini">
      {items.map((item) => (
        <li key={item.id}>
          <a href={pageUrl("case", { id: item.id })}>
            <span className="case-mini-label">{item.categoryLabel}</span>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            <span className="text-link">
              {site.cases.viewDetail}
              <Arrow />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
