import { site } from "../content";
import { InquiryForm } from "../sections/InquiryForm";
import { Faq } from "../sections/Faq";
import { PageIntro } from "../components/DetailBlocks";

/** Contact and inquiry page. 联系与询盘页。 */
export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow={site.contact.eyebrow}
        title={site.contact.title}
        description={site.contact.description}
        links={[]}
      />
      <InquiryForm />
      <Faq />
    </>
  );
}
