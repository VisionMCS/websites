import { Hero } from "../sections/Hero";
import { Capabilities } from "../sections/Capabilities";
import { Services } from "../sections/Services";
import { Industries } from "../sections/Industries";
import { Process } from "../sections/Process";
import { Quality } from "../sections/Quality";
import { Cases } from "../sections/Cases";
import { Insights } from "../sections/Insights";
import { Faq } from "../sections/Faq";
import { QuoteCta } from "../sections/QuoteCta";

/** Home page: capability, services, industries, process, quality, cases, resources. */
export function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Services />
      <Industries />
      <Process />
      <Quality />
      <Cases />
      <Insights />
      <Faq />
      <QuoteCta />
    </>
  );
}
