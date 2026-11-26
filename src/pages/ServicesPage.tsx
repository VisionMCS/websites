import { site } from "../content";
import { Services } from "../sections/Services";
import { QuoteCta } from "../sections/QuoteCta";
import { PageIntro } from "../components/DetailBlocks";
import { pageUrl } from "../content/links";

/** Manufacturing service list page. 制造服务列表页。 */
export function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow={site.services.eyebrow}
        title={site.services.pageTitle}
        description={site.services.pageDescription}
        links={site.services.items.map((item) => ({
          label: item.title,
          href: pageUrl("service", { id: item.id }),
        }))}
      />
      <Services collection />
      <QuoteCta />
    </>
  );
}
