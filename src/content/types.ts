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
    // 点击瀑布流图弹出的可购物 lightbox 文案 / shoppable lightbox copy
    shopLabel: string;
    closeLabel: string;
    prevLabel: string;
    nextLabel: string;
    sourceLabel: string;
    items: Array<{
      image: string;
      alt: string;
      size?: "tall" | "wide" | "square";
      // 社媒配文与来源 / caption + source line
      caption: string;
      source: string;
      // 推荐产品：引用 products 表 id（双向数据关系，不写死）
      productIds: Array<string>;
      // 图上产品标注点（百分比坐标 + 指向的产品 id）
      hotspots: Array<{ x: number; y: number; product: string }>;
    }>;
  };
  // Holiday fan-faves: horizontal shoppable video-card carousel / 热门单品：横向可滑动视频卡轮播
  fanFaves: {
    eyebrow: string;
    title: string;
    description: string;
    shopLabel: string;
    // 层级视频播放器文案 / video lightbox copy
    watchLabel: string;
    playLabel: string;
    pauseLabel: string;
    muteLabel: string;
    closeLabel: string;
    prevLabel: string;
    nextLabel: string;
    sourceLabel: string;
    items: Array<{
      image: string;
      alt: string;
      label: string;
      // 远程竖幅/横幅视频直链（Coverr CDN，不在构建包内，不占产物文件数）
      video: string;
      source: string;
      lookId: string;
    }>;
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
    // PDP 商品详情页字段（三语结构必须一致）
    description: string;
    highlights: Array<string>;
    sizes: Array<string>;
    howToUse: string;
    ingredients: string;
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
    // Shop / PLP / PDP
    shop: string;
    shopTitle: string;
    shopIntro: string;
    allCategories: string;
    filtersLabel: string;
    productCount: string;
    viewProduct: string;
    addToBag: string;
    bagAdded: string;
    sizeLabel: string;
    categoryLabel: string;
    descriptionLabel: string;
    howToUseLabel: string;
    ingredientsLabel:
      string;
    usedInLooks: string;
    backToShop: string;
    prototypeNote: string;
    selectSize: string;
    // Shopping bag / checkout prototype
    bag: string;
    cartTitle: string;
    cartEmpty: string;
    cartEmptyCta: string;
    cartSubtotal: string;
    cartCheckout: string;
    cartRemove: string;
    cartQtyIncrease: string;
    cartQtyDecrease: string;
    checkoutTitle: string;
    checkoutIntro: string;
    checkoutShipping: string;
    checkoutShippingFree: string;
    checkoutTotal: string;
    checkoutPlaceOrder: string;
    checkoutEmpty: string;
    checkoutPlaced: string;
    // 404 / footer information architecture
    notFoundTitle: string;
    notFoundIntro: string;
    notFoundHome: string;
    notFoundShop: string;
    footerShop: string;
    footerDiscover: string;
    footerSupport: string;
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
