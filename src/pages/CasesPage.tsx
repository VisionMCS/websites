import { site } from "../content";
import { Cases } from "../sections/Cases";
import { QuoteCta } from "../sections/QuoteCta";
import { PageIntro } from "../components/DetailBlocks";
import { pageUrl } from "../content/links";

/** Case study list page with the industry filter. 带行业筛选的案例列表页。 */
export function CasesPage() {
  return (
    <>
      <PageIntro
        eyebrow={site.cases.eyebrow}
        title={site.cases.pageTitle}
        description={site.cases.pageDescription}
        links={site.cases.items.map((item) => ({
          label: item.name,
          href: pageUrl("case", { id: item.id }),
        }))}
      />
      <Cases collection />
      <QuoteCta />
    </>
  );
}
