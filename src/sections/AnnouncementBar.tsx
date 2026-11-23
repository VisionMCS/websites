import { site } from "../content";

export function AnnouncementBar() {
  return (
    <div className="announcement" role="region" aria-label={site.announcement}>
      <div className="container announcement-inner">
        <p>{site.announcement}</p>
      </div>
    </div>
  );
}
