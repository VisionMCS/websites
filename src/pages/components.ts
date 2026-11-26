import type { ComponentType } from "react";
import { HomePage } from "./HomePage";
import { ServicesPage } from "./ServicesPage";
import { ServicePage } from "./ServicePage";
import { IndustriesPage } from "./IndustriesPage";
import { IndustryPage } from "./IndustryPage";
import { CasesPage } from "./CasesPage";
import { CasePage } from "./CasePage";
import { ContactPage } from "./ContactPage";
export const components: Record<string, ComponentType> = {
  HomePage,
  ServicesPage,
  ServicePage,
  IndustriesPage,
  IndustryPage,
  CasesPage,
  CasePage,
  ContactPage,
};
