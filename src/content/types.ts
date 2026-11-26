/**
 * Content contract for the B2B digital manufacturing template.
 * B2B 数字化精密制造模板的内容合同。
 *
 * Every enabled dictionary must implement this shape exactly; the locales test
 * compares structures, so optional data is always an array or an empty string.
 * 每个启用的字典必须完整实现本结构；locales 测试会比对形状，
 * 因此可选数据统一使用数组或空字符串，不使用缺字段或 null。
 */

/** Reusable capability row: label plus a concrete value. 标签加具体数值的参数行。 */
export interface SpecRow {
  label: string;
  value: string;
}

/** Title/description pair used across detail pages. 详情页通用的标题与说明。 */
export interface DetailItem {
  title: string;
  description: string;
}

/** Link inside data: registry page id plus collection record id. 数据内链接。 */
export interface ContentLink {
  page: string;
  id: string;
}

export interface NavChild {
  label: string;
  description: string;
  /** Registry page id, for example "service". 注册表页面 id，例如 "service"。 */
  page: string;
  /** Collection record id used for {id}. 集合记录 id，用于 {id}。 */
  id: string;
}

export interface NavItem {
  label: string;
  /** Registry page id; anchors are expressed as "#section". 注册表页面 id 或锚点。 */
  href: string;
  description: string;
  children: NavChild[];
}

export interface ServiceRecord {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  heroEyebrow: string;
  capabilities: DetailItem[];
  materials: Array<{ name: string; grades: string; note: string }>;
  applications: DetailItem[];
  specs: SpecRow[];
  quality: DetailItem[];
  faq: Array<{ question: string; answer: string }>;
}

export interface IndustryRecord {
  id: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  challenges: DetailItem[];
  solutions: DetailItem[];
  applications: Array<{ title: string; description: string; service: string }>;
  /** Related service record ids. 相关制造服务记录 id。 */
  services: string[];
  assurance: DetailItem[];
}

export interface CaseRecord {
  id: string;
  name: string;
  /** Industry record id used for filtering. 用于筛选的行业记录 id。 */
  category: string;
  categoryLabel: string;
  summary: string;
  image: string;
  imageAlt: string;
  background: string;
  clientNeed: string;
  challenges: DetailItem[];
  solution: string;
  solutionPoints: string[];
  outcomes: Array<{ label: string; value: string; note: string }>;
  services: string[];
  deliverables: string[];
}

export interface SiteContent {
  brand: {
    name: string;
    english: string;
    descriptor: string;
    copyright: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string[];
    description: string;
    primary: string;
    secondary: string;
    image: string;
    imageAlt: string;
    caption: string;
    note: string;
    statsLabel: string;
    stats: Array<{ value: string; suffix: string; label: string; note: string }>;
    statsNote: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    image: string;
    imageAlt: string;
    items: Array<{ title: string; description: string }>;
    metrics: SpecRow[];
    note: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    pageTitle: string;
    pageDescription: string;
    categoriesLabel: string;
    viewDetail: string;
    items: ServiceRecord[];
  };
  industries: {
    eyebrow: string;
    title: string;
    intro: string;
    pageTitle: string;
    pageDescription: string;
    viewDetail: string;
    challengesTitle: string;
    solutionsTitle: string;
    applicationsTitle: string;
    servicesTitle: string;
    casesTitle: string;
    assuranceTitle: string;
    items: IndustryRecord[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ title: string; description: string; note: string }>;
  };
  quality: {
    eyebrow: string;
    title: string;
    intro: string;
    image: string;
    imageAlt: string;
    certificationsLabel: string;
    certificationsNote: string;
    certifications: Array<{ id: string; name: string; scope: string; status: string }>;
    controls: Array<{ title: string; description: string }>;
  };
  cases: {
    eyebrow: string;
    title: string;
    intro: string;
    allLabel: string;
    pageTitle: string;
    pageDescription: string;
    demoLabel: string;
    viewDetail: string;
    backgroundTitle: string;
    needTitle: string;
    challengeTitle: string;
    solutionTitle: string;
    outcomeTitle: string;
    deliverablesTitle: string;
    servicesTitle: string;
    demoDisclaimer: string;
    items: CaseRecord[];
  };
  insights: {
    eyebrow: string;
    title: string;
    intro: string;
    categoryLabel: string;
    items: Array<{
      id: string;
      title: string;
      summary: string;
      category: string;
      image: string;
      imageAlt: string;
      page: string;
      id_target: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ question: string; answer: string }>;
  };
  quote: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    points: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    placeholder: string;
    note: string;
    infoTitle: string;
    officeLabel: string;
    officeValue: string;
    hoursLabel: string;
    hoursValue: string;
    responseLabel: string;
    responseValue: string;
    channels: Array<{ label: string; value: string; state: string }>;
    formTitle: string;
    formIntro: string;
    backendNoticeTitle: string;
    backendNotice: string;
    integrationTitle: string;
    integration: string[];
    privacyTitle: string;
    privacy: string;
    fields: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      country: string;
      countryPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      quantity: string;
      quantityPlaceholder: string;
      material: string;
      materialPlaceholder: string;
      tolerance: string;
      tolerancePlaceholder: string;
      budget: string;
      budgetPlaceholder: string;
      drawings: string;
      drawingsPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      optional: string;
      required: string;
    };
    upload: {
      label: string;
      hint: string;
      button: string;
      accepted: string;
      maxFiles: string;
      clear: string;
      empty: string;
    };
    submit: string;
    submitting: string;
    validation: {
      required: string;
      email: string;
      summary: string;
    };
    preview: {
      title: string;
      intro: string;
      filesLabel: string;
      filesNone: string;
      reset: string;
    };
  };
  ui: {
    menu: string;
    closeMenu: string;
    skip: string;
    backTop: string;
    navigation: string;
    language: string;
    home: string;
    notFound: string;
    viewProject: string;
    projectLabel: string;
    deliverables: string;
    categories: string;
    allProjects: string;
    backProjects: string;
    projectIntro: string;
    languageCurrent: string;
    openMega: string;
    closeMega: string;
    breadcrumbs: string;
    requestQuote: string;
    quoteCta: string;
    capabilitiesTitle: string;
    specsTitle: string;
    materialsTitle: string;
    applicationsTitle: string;
    qualityTitle: string;
    processTitle: string;
    faqTitle: string;
    relatedServices: string;
    backToServices: string;
    backToIndustries: string;
    backToCases: string;
    filterLabel: string;
    filterCount: string;
    demoBadge: string;
    unconfigured: string;
    materialGroupLabel: string;
    materialGradesLabel: string;
    materialNoteLabel: string;
    imagePlaceholder: string;
    footerServices: string;
    footerIndustries: string;
    footerCompany: string;
    footerLegal: string;
    revealLabel: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export type Project = SiteContent["cases"]["items"][number];
export type Service = SiteContent["services"]["items"][number];
export type Industry = SiteContent["industries"]["items"][number];
export interface BusinessConfig {
  email: string | null;
}
