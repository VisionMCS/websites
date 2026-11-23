# LUMIÈRE — DTC Beauty Lookbook

基于 `templates/brand` 模板改造的原创美妆 DTC 妆容手册（Lookbook）模板。
An original DTC beauty lookbook template adapted from the `templates/brand` baseline.

## 参考与定位 / Reference & positioning
- 设计参考（仅研究体验，未复制源码/素材）：https://kyliecosmetics.com/en-cn/pages/kylies-looks
- 实测还原的体验要点：长滚动 Look 卡片集合、桌面端 2 列竖幅人像大片、`<主题名> LOOK` + `Shop Now` 转化入口、黑白高级审美 + 玫瑰裸粉强调色、图片 hover 缩放。
- 品牌 LUMIÈRE 为虚构演示标识，不代表任何真实品牌背书；不使用 Kylie 的名称/商标/字体/照片。

## 已实现 / Implemented
- 页面：首页（Hero + 宣言 + 妆容精选 + 品牌故事）、Lookbook 集合页（2 列网格 + 分类筛选）、Look 详情页（大图 + 介绍 + 使用步骤 + 关联产品）、品牌故事页、FAQ、联系入口。
- 数据驱动：妆容在 `collections.items`，商品在独立 `products` 表；Look 通过 `productIds` 引用商品（关联产品不写死在卡片，新增妆容/商品只改数据）。
- 组件化：`ProductCard`、复用的 `Collections` 卡片网格、`RevealOnScroll` 暂未引入（见下）。
- 设计令牌：`src/styles/tokens.css` 黑白 + 玫瑰裸粉；响应式 Desktop 1440 / Tablet 768 / Mobile 390。
- 三语：en-US / zh-CN / ko-KR，文案原创。
- 无障碍：所有妆容图提供有意义 alt（修正参考站 alt 全空的缺陷）。

## 素材 / Assets
- 人像/故事图来自 Unsplash（Unsplash License），来源照片页记录于 `ASSET-CREDITS.json`。
- 沙箱无法在合规手段下提取 Unsplash 作者姓名（数据端点返回登录/防护页，已停止探测）；作者字段诚实标注为「见照片页」，未伪造。商用前请逐张打开照片页补全署名。
- 产品图为真实化妆品产品照，来自 Pexels（Pexels License，免费商用且不强制署名），来源照片页记录于 `ASSET-CREDITS.json`（其中 4 张已确认作者）。
- 首页人气单品（Fan-Faves）为真实妆容视频，来自 Coverr（Coverr License，免费商用）；为不占用构建产物文件数（上限 100），视频以 Coverr CDN 远程直链引用（不打包进 build），poster 复用已署名的 look 图。源页与 mp4 直链记录于 `ASSET-CREDITS.json`（`remote:` 条目）。

## 未实现 / 范围外 / Out of scope
- 独立商品列表页 PLP（`/shop/`，分类筛选）与商品详情页 PDP（`/products/{id}/`）：已实现；look↔产品双向数据关系已打通。
- 首页 IG 瓦片流可购物：点击弹 lightbox，图上产品标注点为精致小圆点（悬停出产品名气泡，非数字），右侧推荐单品可加购物袋原型并链接 PDP。
- Fan-Faves 真实视频：卡进入视口/悬停/获焦自动播放（静音循环），点击进入全屏层级播放器（带声音与控件、切换、Shop this look）。
- 购物车/结算/表单/后端：模板无运行期后端，Add to bag 与层级播放器均为不可用原型（仅本地演示，不伪造下单成功）；GSAP/ScrollTrigger 入场动效、视差滚动为后续增强项。

## 命令 / Commands
见 package.json：`pnpm test` / `pnpm typecheck` / `pnpm build`（云构建执行）。
