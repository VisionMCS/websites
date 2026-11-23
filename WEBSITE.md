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
- 产品图当前为演示占位（复用已署名手册摄影），商用前必须替换为真实产品图并更新 `ASSET-CREDITS.json`。

## 未实现 / 范围外（本轮聚焦 Lookbook 主线）/ Out of scope
- 独立商品列表页 PLP / 商品详情页 PDP 全套：未做，商品仅在 Look 详情内以关联产品展示。
- shoppable 视频、视差滚动、GSAP/ScrollTrigger 入场动效：未引入（参考站 hover 缩放已用 CSS 实现；滚动入场为后续增强项）。
- 购物车/结算/表单提交/后端：模板无运行期后端，Shop Now 为演示 CTA，不伪造购买成功。

## 命令 / Commands
见 package.json：`pnpm test` / `pnpm typecheck` / `pnpm build`（云构建执行）。
