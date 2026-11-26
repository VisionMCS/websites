import { site } from "../content";
import { Industries } from "../sections/Industries";
import { QuoteCta } from "../sections/QuoteCta";
import { PageIntro } from "../components/DetailBlocks";
import { pageUrl } from "../content/links";

/** Industry solution list page. 行业方案列表页。 */
export function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow={site.industries.eyebrow}
        title={site.industries.pageTitle}
        description={site.industries.pageDescription}
        links={site.industries.items.map((item) => ({
          label: item.name,
          href: pageUrl("industry", { id: item.id }),
        }))}
      />
      <Industries collection />
      <QuoteCta />
    </>
  );
}
