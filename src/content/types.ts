export interface SiteContent {
  brand: {
    name: string;
    english: string;
    descriptor: string;
    copyright: string;
  };
  // Announcement bar above the header / 顶部公告条
  announcement: string;
  // Virtual try-on band on the home page / 首页虚拟试妆分区
  tryOn: {
    eyebrow: string;
    title: string;
    description: string;
    link: string;
    image: string;
    imageAlt: string;
  };
  // Social lookbook grid (SHOP OUR IG style, masonry) / 社媒妆容网格（SHOP OUR IG 风格，瓦片流）
  social: {
    eyebrow: string;
    title: string;
    handle: string;
    items: Array<{
      image: string;
      alt: string;
      size?: "tall" | "wide" | "square";
    }>;
  };
  // Holiday fan-faves: horizontal shoppable video-card carousel / 热门单品：横向可滑动视频卡轮播
  fanFaves: {
    eyebrow: string;
    title: string;
    description: string;
    shopLabel: string;
    items: Array<{ image: string; alt: string; label: string }>;
  };
  // Email signup band (prototype only, nothing is sent) / 邮件订阅分区（仅原型，不会发送）
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    note: string;
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
  hero: {
    eyebrow: string;
    title: Array<string>;
    description: string;
    primary: string;
    image: string;
    imageAlt: string;
    caption: string;
    note: string;
  };
  manifesto: {
    eyebrow: string;
    title: string;
    description: string;
  };
  collections: {
    eyebrow: string;
    title: string;
    pageTitle: string;
    intro: string;
    allLabel: string;
    items: Array<{
      id: string;
      name: string;
      category: string;
      summary: string;
      image: string;
      imageAlt: string;
      detail: string;
      highlights: Array<string>;
      // Look 详情页：使用步骤与关联产品（通过 id 引用 products 表，不写死在卡片）
      // Look detail: application steps and related products (referenced by id, not hard-coded)
      steps?: Array<string>;
      productIds?: Array<string>;
      shopLabel?: string;
    }>;
  };
  products: Array<{
    id: string;
    name: string;
    category: string;
    price: string;
    shade: string;
    image: string;
    imageAlt: string;
  }>;
  story: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string;
    paragraphs: Array<string>;
    values: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    placeholder: string;
    note: string;
  };
  ui: {
    menu: string;
    closeMenu: string;
    viewCollection: string;
    collectionLabel: string;
    highlights: string;
    skip: string;
    backTop: string;
    navigation: string;
    categories: string;
    language: string;
    home: string;
    allCollections: string;
    backCollections: string;
    notFound: string;
    collectionIntro: string;
    steps: string;
    relatedProducts: string;
    shopNow: string;
    emailLabel: string;
  };
  meta: {
    title: string;
    description: string;
  };
}
export type Collection = SiteContent["collections"]["items"][number];
export interface BusinessConfig {
  email: string | null;
}
