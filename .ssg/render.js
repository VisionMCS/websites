import { renderToString } from "react-dom/server";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/content/locales/en-US.json
var en_US_exports = /* @__PURE__ */ __exportAll({
	announcement: () => announcement$2,
	brand: () => brand$2,
	collections: () => collections$2,
	contact: () => contact$2,
	default: () => en_US_default,
	fanFaves: () => fanFaves$2,
	faq: () => faq$2,
	hero: () => hero$2,
	manifesto: () => manifesto$2,
	meta: () => meta$2,
	nav: () => nav$2,
	newsletter: () => newsletter$2,
	products: () => products$2,
	social: () => social$2,
	story: () => story$2,
	tryOn: () => tryOn$2,
	ui: () => ui$2
});
var brand$2 = {
	"name": "LUMIÈRE",
	"english": "BEAUTY IN MOTION",
	"descriptor": "Looks worth recreating.",
	"copyright": "LUMIÈRE · Demonstration brand"
};
var announcement$2 = "Enjoy complimentary shipping on every look";
var tryOn$2 = {
	"eyebrow": "VIRTUAL TRY-ON",
	"title": "Find your shade before you wear it.",
	"description": "Try lipsticks, blushes and highlighters on your own photo to discover your next favourite.",
	"link": "Discover now",
	"image": "images/look-dewy.jpg",
	"imageAlt": "Model previewing a soft tinted lip during a virtual try-on"
};
var social$2 = {
	"eyebrow": "SHOP THE LOOKBOOK",
	"title": "As worn by our community.",
	"handle": "@lumiere.beauty",
	"items": [
		{
			"image": "images/look-soft-glam.jpg",
			"alt": "Soft glam look recreated by a community member",
			"size": "wide"
		},
		{
			"image": "images/look-sunset.jpg",
			"alt": "Sunset glam look shared on social",
			"size": "square"
		},
		{
			"image": "images/look-red-lip.jpg",
			"alt": "Red carpet look with a bold red lip",
			"size": "tall"
		},
		{
			"image": "images/look-smoky.jpg",
			"alt": "Smoky night eye look",
			"size": "square"
		},
		{
			"image": "images/look-editorial.jpg",
			"alt": "Editorial runway-inspired look",
			"size": "square"
		},
		{
			"image": "images/look-dewy.jpg",
			"alt": "Dewy fresh everyday look",
			"size": "tall"
		}
	]
};
var fanFaves$2 = {
	"eyebrow": "FAN-FAVE LOOKS",
	"title": "Loved and rewatched.",
	"description": "The looks our community reaches for again and again.",
	"shopLabel": "Shop the look",
	"items": [
		{
			"image": "images/look-soft-glam.jpg",
			"alt": "Soft glam look video preview",
			"label": "Soft Glam"
		},
		{
			"image": "images/look-sunset.jpg",
			"alt": "Sunset glam look video preview",
			"label": "Sunset Glam"
		},
		{
			"image": "images/look-red-lip.jpg",
			"alt": "Red carpet look video preview",
			"label": "Red Carpet"
		},
		{
			"image": "images/look-smoky.jpg",
			"alt": "Smoky night look video preview",
			"label": "Smoky Night"
		},
		{
			"image": "images/look-dewy.jpg",
			"alt": "Dewy fresh look video preview",
			"label": "Dewy Fresh"
		},
		{
			"image": "images/look-editorial.jpg",
			"alt": "Editorial look video preview",
			"label": "Editorial"
		}
	]
};
var newsletter$2 = {
	"title": "Get the next look first.",
	"description": "New looks, shade drops and styling notes, straight to your inbox.",
	"placeholder": "Email address",
	"button": "Sign up",
	"note": "Prototype only — this form does not send or store any information."
};
var nav$2 = [
	{
		"label": "Lookbook",
		"href": "collections"
	},
	{
		"label": "Our story",
		"href": "story"
	},
	{
		"label": "The house",
		"href": "#approach"
	}
];
var hero$2 = {
	"eyebrow": "THE LOOKBOOK",
	"title": ["Every look,", "one ritual."],
	"description": "A curated collection of signature makeup looks, each paired with the exact products to recreate it.",
	"primary": "Explore the looks",
	"image": "images/hero.jpg",
	"imageAlt": "Close-up editorial portrait of a model with soft glowing makeup",
	"caption": "Wear the look. Shop the ritual.",
	"note": "SEASON 01"
};
var manifesto$2 = {
	"eyebrow": "THE LUMIÈRE PERSPECTIVE",
	"title": "Not more makeup.\nMore intention.",
	"description": "A defined brow. A lit cheekbone. A lip that finishes the look. We design each look as a complete ritual, then show you everything it takes to wear it."
};
var collections$2 = {
	"eyebrow": "SIGNATURE LOOKS",
	"title": "A study in wearable beauty.",
	"pageTitle": "The Lookbook",
	"intro": "Explore six visual directions across finish, colour and mood. Every look is a demonstration, illustrated with credited photography and paired with related products.",
	"allLabel": "All looks",
	"items": [
		{
			"id": "soft-glam",
			"name": "Soft Glam",
			"category": "Everyday",
			"summary": "A polished, second-skin finish with a diffused glow.",
			"image": "images/look-soft-glam.jpg",
			"imageAlt": "Model with a soft natural glam look and dewy skin",
			"detail": "Soft Glam is the everyday signature: a blurred base, a warm wash of neutral shadow and a skin-like glow. It reads polished on camera and effortless in daylight.",
			"highlights": [
				"A second-skin, blurred base",
				"Warm neutral shadow wash",
				"A diffused lit-from-within glow"
			],
			"steps": [
				"Even the complexion with a light skin tint, blending outward.",
				"Sweep a neutral shadow across the lid and softly into the crease.",
				"Add a touch of highlighter to the high points of the cheekbone.",
				"Finish the lip with a conditioning lip oil in a nude tone."
			],
			"productIds": [
				"skin-tint",
				"eyeshadow-palette",
				"highlighter",
				"lip-oil"
			],
			"shopLabel": "Shop this look"
		},
		{
			"id": "sunset-glam",
			"name": "Sunset Glam",
			"category": "Evening",
			"summary": "Warm copper and gold tones for a golden-hour flush.",
			"image": "images/look-sunset.jpg",
			"imageAlt": "Model with warm copper eyeshadow and glowing skin",
			"detail": "Sunset Glam pulls the golden hour onto the face: copper and gold shadow, a flushed warm cheek and a glossy nude lip. Made for evening light and candlelit rooms.",
			"highlights": [
				"Copper-to-gold shadow gradient",
				"A flushed warm cheek",
				"A glossy nude lip"
			],
			"steps": [
				"Press a copper shade across the lid and blend upward.",
				"Layer a gold shimmer on the centre of the lid.",
				"Warm the cheeks with a peach blush.",
				"Line and fill the lips, then add a clear gloss."
			],
			"productIds": [
				"eyeshadow-palette",
				"blush",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "Shop this look"
		},
		{
			"id": "red-carpet",
			"name": "Red Carpet",
			"category": "Event",
			"summary": "A bold red lip against a clean, sculpted base.",
			"image": "images/look-red-lip.jpg",
			"imageAlt": "Model with a bold classic red lip and sculpted complexion",
			"detail": "The timeless red-carpet formula: a flawless sculpted base, a defined eye kept quiet, and a precise red lip as the single focal point.",
			"highlights": [
				"A flawless sculpted base",
				"A softly defined eye",
				"A precise, high-impact red lip"
			],
			"steps": [
				"Build a smooth, even base and set the T-zone.",
				"Define the lash line with a coat of volumising mascara.",
				"Trace the lip with a liner for crisp edges.",
				"Fill with a bold red and blot for a lasting finish."
			],
			"productIds": [
				"skin-tint",
				"mascara",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "Shop this look"
		},
		{
			"id": "dewy-fresh",
			"name": "Dewy Fresh",
			"category": "No-makeup",
			"summary": "A hydrated, barely-there glow with a tinted lip.",
			"image": "images/look-dewy.jpg",
			"imageAlt": "Model with a fresh dewy no-makeup look and tinted lips",
			"detail": "Dewy Fresh is the no-makeup makeup look: hydrated skin, groomed brows, a hint of flush and a soft tinted lip that looks like your own, only brighter.",
			"highlights": [
				"Hydrated, glass-like skin",
				"Groomed, feathered brows",
				"A soft tinted lip"
			],
			"steps": [
				"Hydrate and even with a sheer skin tint only where needed.",
				"Brush the brows upward for a groomed finish.",
				"Dab a cream blush high on the cheek.",
				"Press a lip tint onto the centre of the lips and blend."
			],
			"productIds": [
				"skin-tint",
				"blush",
				"lip-oil"
			],
			"shopLabel": "Shop this look"
		},
		{
			"id": "smoky-night",
			"name": "Smoky Night",
			"category": "Evening",
			"summary": "A deep, diffused charcoal eye with a soft lip.",
			"image": "images/look-smoky.jpg",
			"imageAlt": "Model with a deep smoky charcoal eye and neutral lip",
			"detail": "Smoky Night keeps the drama on the eyes: a diffused charcoal gradient, tight-lined waterline and a quiet nude lip so the gaze does all the work.",
			"highlights": [
				"A diffused charcoal gradient",
				"A tight-lined waterline",
				"A quiet, balanced nude lip"
			],
			"steps": [
				"Sweep a matte shade across the lid as a base.",
				"Smudge charcoal into the crease and outer corner.",
				"Tight-line the upper lash line and add mascara.",
				"Keep the lip soft with a conditioning nude oil."
			],
			"productIds": [
				"eyeshadow-palette",
				"mascara",
				"lip-oil"
			],
			"shopLabel": "Shop this look"
		},
		{
			"id": "editorial",
			"name": "Editorial",
			"category": "Runway",
			"summary": "A high-contrast, magazine-ready statement look.",
			"image": "images/look-editorial.jpg",
			"imageAlt": "Model with a bold high-contrast editorial makeup look",
			"detail": "The runway statement: graphic lines, sculpted light and an unexpected finish. Editorial is where the house experiments, then distils it into something you can wear.",
			"highlights": [
				"Graphic, sculpted lines",
				"High-contrast light and shadow",
				"A signature statement finish"
			],
			"steps": [
				"Sculpt the face with a defined contour and bright highlight.",
				"Draw a clean, graphic line along the eye.",
				"Load the lashes for volume and lift.",
				"Choose one bold focal point and keep the rest refined."
			],
			"productIds": [
				"highlighter",
				"mascara",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "Shop this look"
		}
	]
};
var products$2 = [
	{
		"id": "skin-tint",
		"name": "Weightless Skin Tint",
		"category": "Face",
		"price": "¥180",
		"shade": "6 shades",
		"image": "images/product-skin-tint.jpg",
		"imageAlt": "Weightless skin tint bottle on a neutral background"
	},
	{
		"id": "eyeshadow-palette",
		"name": "Sunset Eyeshadow Palette",
		"category": "Eyes",
		"price": "¥300",
		"shade": "12 tones",
		"image": "images/product-palette.jpg",
		"imageAlt": "Twelve-pan warm neutral eyeshadow palette"
	},
	{
		"id": "highlighter",
		"name": "Liquid Glow Highlighter",
		"category": "Face",
		"price": "¥210",
		"shade": "Champagne",
		"image": "images/product-highlighter.jpg",
		"imageAlt": "Liquid highlighter dropper bottle with a luminous finish"
	},
	{
		"id": "blush",
		"name": "Cloud Blur Blush",
		"category": "Face",
		"price": "¥190",
		"shade": "Petal",
		"image": "images/product-blush.jpg",
		"imageAlt": "Cream blush compact in a soft petal pink"
	},
	{
		"id": "lip-oil",
		"name": "Velvet Lip Oil",
		"category": "Lips",
		"price": "¥170",
		"shade": "Nude 01",
		"image": "images/product-lip-oil.jpg",
		"imageAlt": "Nude conditioning lip oil in a frosted tube"
	},
	{
		"id": "lip-liner",
		"name": "Precision Lip Liner",
		"category": "Lips",
		"price": "¥140",
		"shade": "Rosewood",
		"image": "images/product-liner.jpg",
		"imageAlt": "Rosewood lip liner pencil on a neutral surface"
	},
	{
		"id": "mascara",
		"name": "Lash Volume Mascara",
		"category": "Eyes",
		"price": "¥160",
		"shade": "Black",
		"image": "images/product-mascara.jpg",
		"imageAlt": "Volumising mascara tube with a curved wand"
	},
	{
		"id": "lip-gloss",
		"name": "Glass Lip Gloss",
		"category": "Lips",
		"price": "¥150",
		"shade": "Clear",
		"image": "images/product-gloss.jpg",
		"imageAlt": "High-shine clear lip gloss with a flocked applicator"
	}
];
var story$2 = {
	"eyebrow": "OUR STORY",
	"title": "Beauty, designed as a ritual.",
	"description": "LUMIÈRE is an imagined beauty house built around one idea: a great look is not a product, it is a complete ritual you can repeat.",
	"image": "images/story.jpg",
	"imageAlt": "Makeup artist working on a model backstage",
	"link": "Read our story",
	"paragraphs": ["We start with the look, then work backwards to the few products it truly needs. Every formula is chosen for how it behaves on real skin, in real light.", "This demonstration pairs an editorial identity with a lookbook of visual directions. The photographs belong to their credited creators; they do not document a LUMIÈRE studio or products for sale."],
	"values": [
		{
			"title": "Looks, not just products",
			"description": "Each look is a complete, repeatable ritual with the exact steps and pairings to wear it."
		},
		{
			"title": "Formulated for real light",
			"description": "We choose finishes that read beautifully on camera and feel natural in daylight."
		},
		{
			"title": "Editorial, but wearable",
			"description": "We experiment on the runway, then distil it into something you can actually wear."
		}
	]
};
var faq$2 = {
	"title": "A few things to know",
	"items": [
		{
			"question": "Can I purchase the products shown here?",
			"answer": "This is a brand presentation template, not an active shop. The looks and products illustrate a creative direction. Availability and checkout need to be configured by the actual brand."
		},
		{
			"question": "Are these photographs of a LUMIÈRE campaign?",
			"answer": "No. The images are licensed reference photographs from Unsplash. Their creators and original sources are listed in the asset credits."
		},
		{
			"question": "How can I make an enquiry?",
			"answer": "Once a real contact email is configured, the enquiry link opens your email application. This template does not collect messages or store personal information."
		}
	]
};
var contact$2 = {
	"eyebrow": "BEGIN A CONVERSATION",
	"title": "Something on your mind?",
	"description": "For collaborations, press and new possibilities.",
	"emailLabel": "Make an enquiry",
	"placeholder": "Enquiries coming soon",
	"note": "A demonstration brand. Photography is illustrative; no products are offered for sale."
};
var ui$2 = {
	"menu": "Open menu",
	"closeMenu": "Close menu",
	"viewCollection": "View this look",
	"collectionLabel": "The look",
	"highlights": "The direction",
	"skip": "Skip to content",
	"backTop": "Back to top",
	"navigation": "Main navigation",
	"categories": "Look categories",
	"language": "Choose language",
	"home": "Home",
	"allCollections": "View all looks",
	"backCollections": "All looks",
	"notFound": "Look not found",
	"collectionIntro": "About this look",
	"steps": "How to recreate it",
	"relatedProducts": "Shop the look",
	"shopNow": "Shop now",
	"emailLabel": "Email address"
};
var meta$2 = {
	"title": "LUMIÈRE — Beauty in motion",
	"description": "A curated makeup lookbook. Explore signature looks, the steps to recreate them and the products behind each ritual."
};
var en_US_default = {
	brand: brand$2,
	announcement: announcement$2,
	tryOn: tryOn$2,
	social: social$2,
	fanFaves: fanFaves$2,
	newsletter: newsletter$2,
	nav: nav$2,
	hero: hero$2,
	manifesto: manifesto$2,
	collections: collections$2,
	products: products$2,
	story: story$2,
	faq: faq$2,
	contact: contact$2,
	ui: ui$2,
	meta: meta$2
};
//#endregion
//#region src/content/locales/ko-KR.json
var ko_KR_exports = /* @__PURE__ */ __exportAll({
	announcement: () => announcement$1,
	brand: () => brand$1,
	collections: () => collections$1,
	contact: () => contact$1,
	default: () => ko_KR_default,
	fanFaves: () => fanFaves$1,
	faq: () => faq$1,
	hero: () => hero$1,
	manifesto: () => manifesto$1,
	meta: () => meta$1,
	nav: () => nav$1,
	newsletter: () => newsletter$1,
	products: () => products$1,
	social: () => social$1,
	story: () => story$1,
	tryOn: () => tryOn$1,
	ui: () => ui$1
});
var brand$1 = {
	"name": "LUMIÈRE",
	"english": "움직이는 아름다움",
	"descriptor": "다시 하고 싶은 메이크업 룩.",
	"copyright": "LUMIÈRE · 데모 브랜드"
};
var announcement$1 = "모든 룩 무료 배송";
var tryOn$1 = {
	"eyebrow": "버추얼 트라이온",
	"title": "바르기 전에, 당신 컬러를 찾아보세요.",
	"description": "당신의 사진으로 립, 블러시, 하이라이터를 시도해 다음 최애 컬러를 찾아보세요.",
	"link": "지금 둘러보기",
	"image": "images/look-dewy.jpg",
	"imageAlt": "버추얼 트라이온으로 틴티드 립을 미리 보는 모델"
};
var social$1 = {
	"eyebrow": "룩북으로 쇼핑",
	"title": "커뮤니티가 함께한 룩.",
	"handle": "@lumiere.beauty",
	"items": [
		{
			"image": "images/look-soft-glam.jpg",
			"alt": "커뮤니티가 재현한 소프트 글램 룩",
			"size": "wide"
		},
		{
			"image": "images/look-sunset.jpg",
			"alt": "소셜에 공유된 선셋 글램 룩",
			"size": "square"
		},
		{
			"image": "images/look-red-lip.jpg",
			"alt": "볼드한 레드 립의 레드 카펫 룩",
			"size": "tall"
		},
		{
			"image": "images/look-smoky.jpg",
			"alt": "스모키 나이트 아이 룩",
			"size": "square"
		},
		{
			"image": "images/look-editorial.jpg",
			"alt": "에디토리얼 런웨이 룩",
			"size": "square"
		},
		{
			"image": "images/look-dewy.jpg",
			"alt": "듀이 프레시 데일리 룩",
			"size": "tall"
		}
	]
};
var fanFaves$1 = {
	"eyebrow": "팬페이브 룩",
	"title": "다시 보고, 다시 하는 룩.",
	"description": "커뮤니티가 계속 선택하는 시그니처 룩.",
	"shopLabel": "이 룩 담기",
	"items": [
		{
			"image": "images/look-soft-glam.jpg",
			"alt": "소프트 글램 룩 영상 미리보기",
			"label": "소프트 글램"
		},
		{
			"image": "images/look-sunset.jpg",
			"alt": "선셋 글램 룩 영상 미리보기",
			"label": "선셋 글램"
		},
		{
			"image": "images/look-red-lip.jpg",
			"alt": "레드 카펫 룩 영상 미리보기",
			"label": "레드 카펫"
		},
		{
			"image": "images/look-smoky.jpg",
			"alt": "스모키 나이트 룩 영상 미리보기",
			"label": "스모키 나이트"
		},
		{
			"image": "images/look-dewy.jpg",
			"alt": "듀이 프레시 룩 영상 미리보기",
			"label": "듀이 프레시"
		},
		{
			"image": "images/look-editorial.jpg",
			"alt": "에디토리얼 룩 영상 미리보기",
			"label": "에디토리얼"
		}
	]
};
var newsletter$1 = {
	"title": "다음 룩을 가장 먼저.",
	"description": "새로운 룩, 컬러 드롭, 스타일링 노트를 메일로 받아보세요.",
	"placeholder": "이메일 주소",
	"button": "구독",
	"note": "프로토타입 안내 — 이 양식은 어떤 정보도 전송하거나 저장하지 않습니다."
};
var nav$1 = [
	{
		"label": "룩북",
		"href": "collections"
	},
	{
		"label": "브랜드 이야기",
		"href": "story"
	},
	{
		"label": "우리의 관점",
		"href": "#approach"
	}
];
var hero$1 = {
	"eyebrow": "룩북",
	"title": ["모든 룩,", "하나의 의식."],
	"description": "시그니처 메이크업 룩 큐레이션. 각 룩을 그대로 재현하는 데 필요한 제품까지 함께 제안합니다.",
	"primary": "룩 둘러보기",
	"image": "images/hero.jpg",
	"imageAlt": "부드럽게 빛나는 메이크업의 모델 클로즈업 편집 컷",
	"caption": "룩을 입고, 의식을 담다.",
	"note": "시즌 01"
};
var manifesto$1 = {
	"eyebrow": "LUMIÈRE의 관점",
	"title": "더 많은 화장이 아닌\n더 깊은 의도.",
	"description": "정돈된 눈썹, 빛나는 광대, 룩을 완성하는 입술. 우리는 모든 룩을 하나의 완성된 의식으로 설계하고, 그것을 표현하는 데 필요한 모든 것을 보여 줍니다."
};
var collections$1 = {
	"eyebrow": "시그니처 룩",
	"title": "실용적인 아름다움의 탐색.",
	"pageTitle": "룩북",
	"intro": "마감, 컬러, 무드를 따라 여섯 가지 시각적 방향을 만나보세요. 모든 룩은 출처가 명시된 사진으로 표현한 데모이며, 관련 제품과 함께 제안됩니다.",
	"allLabel": "전체 룩",
	"items": [
		{
			"id": "soft-glam",
			"name": "소프트 글램",
			"category": "데일리",
			"summary": "피부처럼 밀착된 마무리와 은은한 광택.",
			"image": "images/look-soft-glam.jpg",
			"imageAlt": "자연스러운 소프트 글램 룩과 물광 피부의 모델",
			"detail": "소프트 글램은 브랜드의 데일리 시그니처입니다. 블러드된 베이스, 따뜻한 뉴트럴 섀도, 피부 같은 광택. 카메라 앞에서는 정돈되고 낮에는 편안해 보입니다.",
			"highlights": [
				"피부 같은 밀착 베이스",
				"따뜻한 뉴트럴 섀도",
				"안에서부터 번지는 은은한 광택"
			],
			"steps": [
				"가벼운 스킨 틴트로 얼굴을 고르게 바깥쪽으로 블렌딩합니다.",
				"뉴트럴 섀도를 눈두덩과 아이홀에 부드럽게 얹습니다.",
				"광대 높은 곳에 하이라이터를 살짝 더합니다.",
				"누드 톤의 립 오일로 입술을 마무리합니다."
			],
			"productIds": [
				"skin-tint",
				"eyeshadow-palette",
				"highlighter",
				"lip-oil"
			],
			"shopLabel": "이 룩 담기"
		},
		{
			"id": "sunset-glam",
			"name": "선셋 글램",
			"category": "이브닝",
			"summary": "황혼의 빛을 담은 따뜻한 코퍼와 골드.",
			"image": "images/look-sunset.jpg",
			"imageAlt": "따뜻한 코퍼 섀도와 윤기 있는 피부의 모델",
			"detail": "선셋 글램은 황혼의 빛을 얼굴에 옮깁니다. 코퍼에서 골드 그라데이션, 따뜻한 블러시, 글로시한 누드 립. 저녁 빛과 촛불을 위한 룩입니다.",
			"highlights": [
				"코퍼에서 골드 그라데이션",
				"따뜻하게 물든 볼",
				"글로시한 누드 립"
			],
			"steps": [
				"코퍼 섀도를 눈두덩에 눌러 위쪽으로 블렌딩합니다.",
				"눈두덩 중앙에 골드 쉬머를 겹쳐 얹습니다.",
				"피치 블러시로 볼을 따뜻하게 물들입니다.",
				"립을 그리워 채운 뒤 클리어 글로스를 얹습니다."
			],
			"productIds": [
				"eyeshadow-palette",
				"blush",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "이 룩 담기"
		},
		{
			"id": "red-carpet",
			"name": "레드 카펫",
			"category": "이벤트",
			"summary": "깔끔하게 조각한 베이스 위의 강렬한 레드 립.",
			"image": "images/look-red-lip.jpg",
			"imageAlt": "클래식한 레드 립과 조각된 베이스의 모델",
			"detail": "변하지 않는 레드 카펫 공식. 결점 없이 조각한 베이스, 차분하게 정리한 눈매, 그리고 유일한 초점이 되는 정밀한 레드 립.",
			"highlights": [
				"결점 없는 조각된 베이스",
				"부드럽게 정리한 눈매",
				"정밀한 임팩트의 레드 립"
			],
			"steps": [
				"매끄럽고 고른 베이스를 만들고 T존을 세팅합니다.",
				"볼류마라이저 마스카라로 속눈썹 라인을 정의합니다.",
				"립 라이너로 또렷한 입술 라인을 잡습니다.",
				"볼드한 레드로 채운 뒤 틴트로 지속력을 높입니다."
			],
			"productIds": [
				"skin-tint",
				"mascara",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "이 룩 담기"
		},
		{
			"id": "dewy-fresh",
			"name": "듀이 프레시",
			"category": "노메이크업",
			"summary": "촉촉한 민무늬 광채와 틴티드 립.",
			"image": "images/look-dewy.jpg",
			"imageAlt": "상큼한 물광 노메이크업 룩과 틴티드 립의 모델",
			"detail": "듀이 프레시는 노메이크업 메이크업 룩입니다. 촉촉한 피부, 정돈된 눈썹, 은은한 혈색, 그리고 내 입술보다 한층 밝아 보이는 틴티드 립.",
			"highlights": [
				"촉촉한 유리알 피부",
				"정돈된 눈썹",
				"부드러운 틴티드 립"
			],
			"steps": [
				"필요한 부에만 시어 스킨 틴트로 균일하게 정리합니다.",
				"눈썹을 위로 빗어 정돈된 결을 만듭니다.",
				"광대 위에 크림 블러시를 톡톡 얹습니다.",
				"립 틴트를 입술 중앙에 눌러 바깥으로 블렌딩합니다."
			],
			"productIds": [
				"skin-tint",
				"blush",
				"lip-oil"
			],
			"shopLabel": "이 룩 담기"
		},
		{
			"id": "smoky-night",
			"name": "스모키 나이트",
			"category": "이브닝",
			"summary": "깊이 번제한 차콜 스모키와 차분한 립.",
			"image": "images/look-smoky.jpg",
			"imageAlt": "깊은 차콜 스모키 아이와 뉴트럴 립의 모델",
			"detail": "스모키 나이트는 드라마를 눈에 남깁니다. 번제한 차콜 그라데이션, 타이트라인, 그리고 조용한 누드 립으로 시선만이 역할을 하게 합니다.",
			"highlights": [
				"번제한 차콜 그라데이션",
				"타이트라인",
				"조용하고 균형 잡힌 누드 립"
			],
			"steps": [
				"매트 섀도로 눈두덩을 베이스처럼 덮습니다.",
				"차콜을 아이홀과 바깥 꼬리에 스머지합니다.",
				"속눈썹 라인을 타이트라인하고 마스카라를 얹습니다.",
				"립은 누드 오일로 부드럽게 유지합니다."
			],
			"productIds": [
				"eyeshadow-palette",
				"mascara",
				"lip-oil"
			],
			"shopLabel": "이 룩 담기"
		},
		{
			"id": "editorial",
			"name": "에디토리얼",
			"category": "런웨이",
			"summary": "잡지 표지를 위한 대비 강한 스테이트먼트 룩.",
			"image": "images/look-editorial.jpg",
			"imageAlt": "대비 강한 에디토리얼 스테이트먼트 메이크업의 모델",
			"detail": "런웨이 스테이트먼트. 그래픽한 라인, 조각된 빛, 예상치 못한 마감. 에디토리얼은 브랜드가 실험하는 지점이며, 그것을 당신이 입을 수 있게 정제합니다.",
			"highlights": [
				"그래픽하고 조각된 라인",
				"대비 강한 명암",
				"시그니처 스테이트먼트 마감"
			],
			"steps": [
				"컨투어와 하이라이터로 얼굴을 조각하듯 정리합니다.",
				"눈 주위에 또렷한 그래픽 라인을 긋습니다.",
				"마스카라로 볼륨과 컬을 쌓습니다.",
				"하나의 볼드한 초점을 고르고 나머지는 단정하게 남깁니다."
			],
			"productIds": [
				"highlighter",
				"mascara",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "이 룩 담기"
		}
	]
};
var products$1 = [
	{
		"id": "skin-tint",
		"name": "웨이트리스 스킨 틴트",
		"category": "페이스",
		"price": "₩36,000",
		"shade": "6 쉐이드",
		"image": "images/product-skin-tint.jpg",
		"imageAlt": "중성 배경의 웨이트리스 스킨 틴트 병"
	},
	{
		"id": "eyeshadow-palette",
		"name": "선셋 아이섀도 팔레트",
		"category": "아이",
		"price": "₩60,000",
		"shade": "12 컬러",
		"image": "images/product-palette.jpg",
		"imageAlt": "따뜻한 뉴트럴 12구 아이섀도 팔레트"
	},
	{
		"id": "highlighter",
		"name": "리퀴드 글로우 하이라이터",
		"category": "페이스",
		"price": "₩42,000",
		"shade": "샴페인",
		"image": "images/product-highlighter.jpg",
		"imageAlt": "빛나는 마감의 드롭형 리퀴드 하이라이터"
	},
	{
		"id": "blush",
		"name": "클라우드 블러 블러시",
		"category": "페이스",
		"price": "₩38,000",
		"shade": "페탈",
		"image": "images/product-blush.jpg",
		"imageAlt": "부드러운 페탈 핑크의 크림 블러시"
	},
	{
		"id": "lip-oil",
		"name": "벨벳 립 오일",
		"category": "립",
		"price": "₩34,000",
		"shade": "누드 01",
		"image": "images/product-lip-oil.jpg",
		"imageAlt": "플로스트 튜브의 누드 컨디셔닝 립 오일"
	},
	{
		"id": "lip-liner",
		"name": "프리시전 립 라이너",
		"category": "립",
		"price": "₩28,000",
		"shade": "로즈우드",
		"image": "images/product-liner.jpg",
		"imageAlt": "중성 표면 위의 로즈우드 립 라이너"
	},
	{
		"id": "mascara",
		"name": "래시 볼륨 마스카라",
		"category": "아이",
		"price": "₩32,000",
		"shade": "블랙",
		"image": "images/product-mascara.jpg",
		"imageAlt": "커브드 워드가 있는 볼륨 마스카라"
	},
	{
		"id": "lip-gloss",
		"name": "글라스 립 글로스",
		"category": "립",
		"price": "₩30,000",
		"shade": "클리어",
		"image": "images/product-gloss.jpg",
		"imageAlt": "플록 애플리케이터의 하이샤인 클리어 립 글로스"
	}
];
var story$1 = {
	"eyebrow": "브랜드 이야기",
	"title": "아름다움을 의식으로 설계하다.",
	"description": "LUMIÈRE는 하나의 생각에서 출발한 가상의 뷰티 하우스입니다. 좋은 룩은 제품이 아니라, 반복할 수 있는 완성된 의식이라는 생각.",
	"image": "images/story.jpg",
	"imageAlt": "백스테이지에서 모델을 위해 작업하는 메이크업 아티스트",
	"link": "브랜드 이야기 읽기",
	"paragraphs": ["우리는 룩에서 시작해, 정말로 필요한 몇 가지 제품으로 거꾸로 좁혀 갑니다. 모든 포뮬러는 실제 피부와 실제 빛에서 어떻게 행동하는지로 선택됩니다.", "이 데모는 편집적인 브랜드 아이덴티티와 룩북의 시각적 탐색을 결합합니다. 사진의 권리는 출처에 명시된 창작자에게 있으며, LUMIÈRE의 공방이나 판매 상품을 기록한 것이 아닙니다."],
	"values": [
		{
			"title": "제품이 아닌 룩",
			"description": "모든 룩은 그대로 재현하는 단계와 조합까지 갖춘 완성된 의식입니다."
		},
		{
			"title": "실제 빛을 위한 처방",
			"description": "카메라 앞에서 아름답고 낮빛에서는 자연스러운 마감을 선택합니다."
		},
		{
			"title": "에디토리얼, 그러나 실용적으로",
			"description": "런웨이에서 실험하고, 당신이 실제로 입을 수 있게 정제합니다."
		}
	]
};
var faq$1 = {
	"title": "알아두면 좋은 이야기",
	"items": [
		{
			"question": "여기 있는 제품을 구매할 수 있나요?",
			"answer": "이 사이트는 브랜드 소개 템플릿이며 운영 중인 쇼핑몰이 아닙니다. 룩과 제품은 창작 방향을 보여 줍니다. 판매 여부와 구매 방법은 실제 브랜드가 설정해야 합니다."
		},
		{
			"question": "이 사진은 LUMIÈRE 캠페인인가요?",
			"answer": "아닙니다. Unsplash에서 제공하는 라이선스가 있는 참고 사진입니다. 창작자와 원본 출처는 소재 출처 목록에 기록되어 있습니다."
		},
		{
			"question": "어떻게 문의하나요?",
			"answer": "실제 연락 이메일이 설정되면 문의 링크가 이메일 앱을 엽니다. 이 템플릿은 메시지를 수집하거나 개인정보를 저장하지 않습니다."
		}
	]
};
var contact$1 = {
	"eyebrow": "대화를 시작해 보세요",
	"title": "나누고 싶은 이야기가 있나요?",
	"description": "콜라보레이션, 프레스, 그리고 새로운 가능성을 기다립니다.",
	"emailLabel": "문의하기",
	"placeholder": "문의 창구 준비 중",
	"note": "데모 브랜드입니다. 사진은 참고용이며 판매 상품을 제공하지 않습니다."
};
var ui$1 = {
	"menu": "메뉴 열기",
	"closeMenu": "메뉴 닫기",
	"viewCollection": "이 룩 보기",
	"collectionLabel": "룩",
	"highlights": "룩의 방향",
	"skip": "본문으로 이동",
	"backTop": "맨 위로",
	"navigation": "주 메뉴",
	"categories": "룩 분류",
	"language": "언어 선택",
	"home": "홈",
	"allCollections": "모든 룩 보기",
	"backCollections": "전체 룩",
	"notFound": "룩을 찾을 수 없습니다",
	"collectionIntro": "이 룩에 대하여",
	"steps": "재현하는 방법",
	"relatedProducts": "이 룩의 제품",
	"shopNow": "담기",
	"emailLabel": "이메일 주소"
};
var meta$1 = {
	"title": "LUMIÈRE — 움직이는 아름다움",
	"description": "큐레이션된 메이크업 룩북. 시그니처 룩과 재현 단계, 각 의식 뒤의 제품을 만나보세요."
};
var ko_KR_default = {
	brand: brand$1,
	announcement: announcement$1,
	tryOn: tryOn$1,
	social: social$1,
	fanFaves: fanFaves$1,
	newsletter: newsletter$1,
	nav: nav$1,
	hero: hero$1,
	manifesto: manifesto$1,
	collections: collections$1,
	products: products$1,
	story: story$1,
	faq: faq$1,
	contact: contact$1,
	ui: ui$1,
	meta: meta$1
};
//#endregion
//#region src/content/locales/zh-CN.json
var zh_CN_exports = /* @__PURE__ */ __exportAll({
	announcement: () => announcement,
	brand: () => brand,
	collections: () => collections,
	contact: () => contact,
	default: () => zh_CN_default,
	fanFaves: () => fanFaves,
	faq: () => faq,
	hero: () => hero,
	manifesto: () => manifesto,
	meta: () => meta,
	nav: () => nav,
	newsletter: () => newsletter,
	products: () => products,
	social: () => social,
	story: () => story,
	tryOn: () => tryOn,
	ui: () => ui
});
var brand = {
	"name": "LUMIÈRE",
	"english": "流动之美",
	"descriptor": "值得复刻的妆容。",
	"copyright": "LUMIÈRE · 品牌展示示例"
};
var announcement = "全场妆容，顺丰包邮";
var tryOn = {
	"eyebrow": "虚拟试妆",
	"title": "上脸之前，先找到你的色号。",
	"description": "用自己的照片试唇、腮红与高光，发现下一个本命色。",
	"link": "立即体验",
	"image": "images/look-dewy.jpg",
	"imageAlt": "模特在虚拟试妆中预览柔和有色唇妆"
};
var social = {
	"eyebrow": "入手同款妆容",
	"title": "来自社群的真实演绎。",
	"handle": "@lumiere.beauty",
	"items": [
		{
			"image": "images/look-soft-glam.jpg",
			"alt": "社群成员复刻的柔雾日常妆",
			"size": "wide"
		},
		{
			"image": "images/look-sunset.jpg",
			"alt": "社群分享的落日妆",
			"size": "square"
		},
		{
			"image": "images/look-red-lip.jpg",
			"alt": "红毯妆的正红唇",
			"size": "tall"
		},
		{
			"image": "images/look-smoky.jpg",
			"alt": "暗夜烟熏眼妆",
			"size": "square"
		},
		{
			"image": "images/look-editorial.jpg",
			"alt": "杂志大片风秀场妆",
			"size": "square"
		},
		{
			"image": "images/look-dewy.jpg",
			"alt": "水光裸感日常妆",
			"size": "tall"
		}
	]
};
var fanFaves = {
	"eyebrow": "人气妆容",
	"title": "百看不厌的人气之选。",
	"description": "社群反复回看、反复上手的那些妆容。",
	"shopLabel": "入手本妆",
	"items": [
		{
			"image": "images/look-soft-glam.jpg",
			"alt": "柔雾日常妆视频预览",
			"label": "柔雾日常"
		},
		{
			"image": "images/look-sunset.jpg",
			"alt": "落日妆视频预览",
			"label": "落日妆"
		},
		{
			"image": "images/look-red-lip.jpg",
			"alt": "红毯妆视频预览",
			"label": "红毯妆"
		},
		{
			"image": "images/look-smoky.jpg",
			"alt": "暗夜烟熏妆视频预览",
			"label": "暗夜烟熏"
		},
		{
			"image": "images/look-dewy.jpg",
			"alt": "水光裸感妆视频预览",
			"label": "水光裸感"
		},
		{
			"image": "images/look-editorial.jpg",
			"alt": "杂志大片妆视频预览",
			"label": "杂志大片"
		}
	]
};
var newsletter = {
	"title": "第一时间获取新妆容。",
	"description": "新妆容、新色号与上妆心得，直达你的邮箱。",
	"placeholder": "邮箱地址",
	"button": "订阅",
	"note": "仅为原型演示 — 此表单不会发送或存储任何信息。"
};
var nav = [
	{
		"label": "妆容手册",
		"href": "collections"
	},
	{
		"label": "品牌故事",
		"href": "story"
	},
	{
		"label": "我们的理念",
		"href": "#approach"
	}
];
var hero = {
	"eyebrow": "妆容手册",
	"title": ["每一种妆容，", "都是一套仪式。"],
	"description": "精选标志性妆容合集，每一个都搭配可完整复刻的对应产品。",
	"primary": "探索妆容",
	"image": "images/hero.jpg",
	"imageAlt": "特写杂志感模特肖像，呈现柔和光泽的妆容",
	"caption": "复刻妆容，入手同款仪式。",
	"note": "第一辑"
};
var manifesto = {
	"eyebrow": "LUMIÈRE 的视角",
	"title": "不是更多彩妆，\n而是更有想法。",
	"description": "利落的眉形、被点亮的高光、收束整个妆容的唇色。我们把每一个妆容设计成完整的仪式，再告诉你复刻它所需的一切。"
};
var collections = {
	"eyebrow": "标志性妆容",
	"title": "可日常的美妆研究。",
	"pageTitle": "妆容手册",
	"intro": "从妆效、色彩与情绪出发，探索六个视觉方向。以下为展示妆容，使用已记录来源的摄影素材，并搭配相关单品。",
	"allLabel": "全部妆容",
	"items": [
		{
			"id": "soft-glam",
			"name": "柔雾日常",
			"category": "日常",
			"summary": "贴肤的柔雾底妆，由内而外的光感。",
			"image": "images/look-soft-glam.jpg",
			"imageAlt": "模特呈现自然柔雾妆容与水光肌",
			"detail": "柔雾日常是品牌的日常标志：雾面贴肤的底妆、一抹暖调中性眼影，以及贴近肌肤的光泽。镜头前精致得体，日光下毫不费力。",
			"highlights": [
				"贴肤雾面底妆",
				"暖调中性眼影",
				"由内而外的柔光"
			],
			"steps": [
				"用轻薄肤色乳均匀全脸，向外晕染。",
				"将中性色眼影扫过眼窝并向眼褶晕开。",
				"在颧骨高点轻点高光。",
				"以裸色唇油收尾，滋润双唇。"
			],
			"productIds": [
				"skin-tint",
				"eyeshadow-palette",
				"highlighter",
				"lip-oil"
			],
			"shopLabel": "入手本妆"
		},
		{
			"id": "sunset-glam",
			"name": "落日妆",
			"category": "晚宴",
			"summary": "暖铜与金调，重现黄昏时分的红润。",
			"image": "images/look-sunset.jpg",
			"imageAlt": "模特呈现暖铜色眼影与光泽肌肤",
			"detail": "落日妆把黄昏的光留在脸上：铜金渐变眼影、暖调腮红与裸色亮泽唇妆，为夜晚的灯光与烛光而生。",
			"highlights": [
				"铜金渐变眼影",
				"暖调红润腮红",
				"裸色亮泽唇妆"
			],
			"steps": [
				"将铜色眼影按压上眼并向上晕染。",
				"在眼皮中央叠加金色细闪。",
				"用蜜桃色腮红扫出暖调气色。",
				"勾勒并填满唇形，再叠透明唇釉。"
			],
			"productIds": [
				"eyeshadow-palette",
				"blush",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "入手本妆"
		},
		{
			"id": "red-carpet",
			"name": "红毯妆",
			"category": "活动",
			"summary": "利落雕塑底妆之上的一抹正红。",
			"image": "images/look-red-lip.jpg",
			"imageAlt": "模特呈现经典正红唇与精致轮廓底妆",
			"detail": "永恒的红毯公式：无瑕雕塑底妆、克制的眼妆，以及作为唯一焦点的精准红唇。",
			"highlights": [
				"无瑕雕塑底妆",
				"柔和的眼部轮廓",
				"高冲击力的精准红唇"
			],
			"steps": [
				"打造平滑均匀底妆并定妆 T 区。",
				"以浓密睫毛膏勾勒睫毛线。",
				"用唇线笔描出清晰唇形。",
				"填满正红并轻抿，持色更久。"
			],
			"productIds": [
				"skin-tint",
				"mascara",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "入手本妆"
		},
		{
			"id": "dewy-fresh",
			"name": "水光裸感",
			"category": "伪素颜",
			"summary": "水润通透的淡颜，配一抹有色唇。",
			"image": "images/look-dewy.jpg",
			"imageAlt": "模特呈现水润伪素颜妆容与有色唇",
			"detail": "水光裸感是「伪素颜」妆：水润的肌肤、梳理的眉形、一抹红晕，以及看似本色却更明亮的有色唇。",
			"highlights": [
				"水润玻璃肌",
				"自然毛流眉",
				"柔和有色唇"
			],
			"steps": [
				"仅在需要的部位用轻薄肤色乳均匀。",
				"向上梳理眉形，呈现自然毛流。",
				"在颧骨高处点按膏状腮红。",
				"把唇釉点涂在唇中并向外晕开。"
			],
			"productIds": [
				"skin-tint",
				"blush",
				"lip-oil"
			],
			"shopLabel": "入手本妆"
		},
		{
			"id": "smoky-night",
			"name": "暗夜烟熏",
			"category": "晚宴",
			"summary": "深邃晕染的炭黑白眼妆，配柔雾唇。",
			"image": "images/look-smoky.jpg",
			"imageAlt": "模特呈现深邃炭黑白眼妆与裸色唇",
			"detail": "暗夜烟熏把戏剧感留给眼睛：晕染的炭黑渐变、贴根内眼线，以及安静的裸色唇，让眼神成为全部焦点。",
			"highlights": [
				"晕染炭黑渐变",
				"贴根内眼线",
				"平衡的安静裸唇"
			],
			"steps": [
				"以哑光色铺满眼窝打底。",
				"将炭黑晕入眼褶与眼尾。",
				"贴近睫毛根部描线并刷睫毛膏。",
				"以滋润裸色唇油保持唇部柔和。"
			],
			"productIds": [
				"eyeshadow-palette",
				"mascara",
				"lip-oil"
			],
			"shopLabel": "入手本妆"
		},
		{
			"id": "editorial",
			"name": "杂志大片",
			"category": "秀场",
			"summary": "高对比度的可上杂志宣言妆。",
			"image": "images/look-editorial.jpg",
			"imageAlt": "模特呈现高对比度杂志感宣言妆容",
			"detail": "秀场宣言：利落的线条、雕塑般的光影与出人意料的妆效。杂志大片是品牌实验的所在，再把它凝练成你也能复刻的样子。",
			"highlights": [
				"利落的雕塑线条",
				"高对比光影",
				"标志性的宣言妆效"
			],
			"steps": [
				"以修容与高光雕塑面部轮廓。",
				"沿眼部画出利落的图形线条。",
				"叠加睫毛膏营造浓密与翘度。",
				"选定一个大胆焦点，其余保持精致。"
			],
			"productIds": [
				"highlighter",
				"mascara",
				"lip-liner",
				"lip-gloss"
			],
			"shopLabel": "入手本妆"
		}
	]
};
var products = [
	{
		"id": "skin-tint",
		"name": "轻透肤色乳",
		"category": "脸部",
		"price": "¥180",
		"shade": "6 个色号",
		"image": "images/product-skin-tint.jpg",
		"imageAlt": "中性背景上的轻透肤色乳瓶身"
	},
	{
		"id": "eyeshadow-palette",
		"name": "落日眼影盘",
		"category": "眼部",
		"price": "¥300",
		"shade": "12 色",
		"image": "images/product-palette.jpg",
		"imageAlt": "十二色暖调中性眼影盘"
	},
	{
		"id": "highlighter",
		"name": "水光液体高光",
		"category": "脸部",
		"price": "¥210",
		"shade": "香槟色",
		"image": "images/product-highlighter.jpg",
		"imageAlt": "带滴管的液体高光，呈现光泽妆效"
	},
	{
		"id": "blush",
		"name": "柔焦膏状腮红",
		"category": "脸部",
		"price": "¥190",
		"shade": "花瓣粉",
		"image": "images/product-blush.jpg",
		"imageAlt": "柔和花瓣粉的膏状腮红"
	},
	{
		"id": "lip-oil",
		"name": "丝绒唇油",
		"category": "唇部",
		"price": "¥170",
		"shade": "裸色 01",
		"image": "images/product-lip-oil.jpg",
		"imageAlt": "磨砂管身的裸色滋润唇油"
	},
	{
		"id": "lip-liner",
		"name": "精准唇线笔",
		"category": "唇部",
		"price": "¥140",
		"shade": "玫瑰木",
		"image": "images/product-liner.jpg",
		"imageAlt": "中性台面上的玫瑰木色唇线笔"
	},
	{
		"id": "mascara",
		"name": "浓密睫毛膏",
		"category": "眼部",
		"price": "¥160",
		"shade": "黑色",
		"image": "images/product-mascara.jpg",
		"imageAlt": "带弧形刷头的浓密睫毛膏"
	},
	{
		"id": "lip-gloss",
		"name": "玻璃唇釉",
		"category": "唇部",
		"price": "¥150",
		"shade": "透明",
		"image": "images/product-gloss.jpg",
		"imageAlt": "带绒毛刷头的高光泽透明唇釉"
	}
];
var story = {
	"eyebrow": "品牌故事",
	"title": "把美妆，设计成一种仪式。",
	"description": "LUMIÈRE 是一个虚构的美妆品牌，源于一个简单的想法：一个好看的妆容不是某件单品，而是一套你可以反复复刻的完整仪式。",
	"image": "images/story.jpg",
	"imageAlt": "化妆师在后台为模特上妆",
	"link": "了解我们的故事",
	"paragraphs": ["我们从妆容出发，再倒推出它真正需要的少数几件单品。每一支配方，都以它在真实肌肤、真实光线下的表现来挑选。", "这个展示模板将编辑式品牌视觉与妆容手册结合。摄影作品属于已记录来源的创作者，并非 LUMIÈRE 的真实工坊记录或在售商品。"],
	"values": [
		{
			"title": "是妆容，不只是单品",
			"description": "每个妆容都是一套完整、可复刻的仪式，附带复刻所需的步骤与搭配。"
		},
		{
			"title": "为真实光线而调配",
			"description": "我们挑选在镜头前动人、在日光下自然的妆效。"
		},
		{
			"title": "秀场感，也能日常",
			"description": "我们在秀场大胆实验，再把它变成你日常也能复刻的妆容。"
		}
	]
};
var faq = {
	"title": "你可能想了解",
	"items": [
		{
			"question": "可以购买这里展示的单品吗？",
			"answer": "这是品牌展示模板，并非正在营业的商店。妆容与单品用于表达视觉方向，实际品牌需另行配置商品供应与购买方式。"
		},
		{
			"question": "这些照片是 LUMIÈRE 的广告实拍吗？",
			"answer": "不是。图片是来自 Unsplash 的授权参考摄影，创作者和原始链接均记录在素材清单中。"
		},
		{
			"question": "如何发起咨询？",
			"answer": "配置真实联系邮箱后，咨询入口会打开邮件应用。模板本身不收集消息，也不存储个人信息。"
		}
	]
};
var contact = {
	"eyebrow": "从一次对话开始",
	"title": "有一些想法，想与我们分享？",
	"description": "期待合作、媒体，以及新的可能。",
	"emailLabel": "发起咨询",
	"placeholder": "咨询入口待配置",
	"note": "品牌展示示例。摄影素材仅作视觉参考，本站不销售商品。"
};
var ui = {
	"menu": "打开菜单",
	"closeMenu": "关闭菜单",
	"viewCollection": "查看本妆容",
	"collectionLabel": "本妆容",
	"highlights": "妆容方向",
	"skip": "跳到主要内容",
	"backTop": "回到顶部",
	"navigation": "主要导航",
	"categories": "妆容分类",
	"language": "选择语言",
	"home": "首页",
	"allCollections": "查看全部妆容",
	"backCollections": "全部妆容",
	"notFound": "未找到该妆容",
	"collectionIntro": "妆容介绍",
	"steps": "如何复刻",
	"relatedProducts": "入手同款",
	"shopNow": "立即购买",
	"emailLabel": "邮箱地址"
};
var meta = {
	"title": "LUMIÈRE — 流动之美",
	"description": "精选美妆妆容手册。探索标志性妆容、复刻步骤，以及每个仪式背后的单品。"
};
var zh_CN_default = {
	brand,
	announcement,
	tryOn,
	social,
	fanFaves,
	newsletter,
	nav,
	hero,
	manifesto,
	collections,
	products,
	story,
	faq,
	contact,
	ui,
	meta
};
var config_default = {
	defaultLocale: "en-US",
	locales: [
		{
			"code": "zh-CN",
			"label": "简体中文",
			"prefix": "zh"
		},
		{
			"code": "en-US",
			"label": "English",
			"prefix": "en"
		},
		{
			"code": "ko-KR",
			"label": "한국어",
			"prefix": "ko"
		}
	]
};
var business_default = { email: null };
//#endregion
//#region src/pages/registry.json
var registry_default = [
	{
		"id": "home",
		"path": "",
		"component": "HomePage",
		"title": "meta.title"
	},
	{
		"id": "collections",
		"path": "collections/",
		"component": "CollectionsPage",
		"title": "collections.pageTitle"
	},
	{
		"id": "collection",
		"path": "collections/{id}/",
		"component": "CollectionPage",
		"collection": "collections.items",
		"title": "name",
		"description": "summary"
	},
	{
		"id": "story",
		"path": "story/",
		"component": "StoryPage",
		"title": "story.title",
		"description": "story.description"
	}
];
//#endregion
//#region src/content/routes.js
var segment = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function validateConfig(config) {
	if (!config.locales.length || !config.locales.some((item) => item.code === config.defaultLocale)) throw new Error("Invalid defaultLocale");
	const codes = /* @__PURE__ */ new Set();
	const prefixes = /* @__PURE__ */ new Set();
	for (const entry of config.locales) {
		if (!/^[a-zA-Z]{2,8}(?:-[a-zA-Z0-9]{2,8})*$/.test(entry.code) || codes.has(entry.code)) throw new Error("Invalid or duplicate locale code");
		if (!segment.test(entry.prefix) || prefixes.has(entry.prefix)) throw new Error("Invalid or duplicate locale prefix");
		codes.add(entry.code);
		prefixes.add(entry.prefix);
	}
}
function routePath(config, locale, page = "home", contentId = "", definitions = registry_default) {
	validateConfig(config);
	const entry = config.locales.find((item) => item.code === locale);
	if (!entry) throw new Error(`Unknown locale: ${locale}`);
	const definition = definitions.find((item) => item.id === page);
	if (!definition) throw new Error(`Unknown page: ${page}`);
	let path = definition.path;
	if (path.includes("{id}")) {
		if (!segment.test(contentId)) throw new Error("Invalid content slug");
		path = path.replace("{id}", contentId);
	}
	if (path && (!path.endsWith("/") || !path.slice(0, -1).split("/").every((value) => segment.test(value)))) throw new Error("Invalid page path");
	return `${locale === config.defaultLocale ? "" : entry.prefix + "/"}${path}`;
}
function rootPrefix(path) {
	return "../".repeat(path.split("/").filter(Boolean).length) || "./";
}
var dictionaries = Object.fromEntries(Object.entries(/* @__PURE__ */ Object.assign({
	"./locales/en-US.json": en_US_exports,
	"./locales/ko-KR.json": ko_KR_exports,
	"./locales/zh-CN.json": zh_CN_exports
})).map(([path, module]) => [path.slice(10, -5), module.default]));
var business = business_default;
validateConfig(config_default);
for (const entry of config_default.locales) if (!dictionaries[entry.code]) throw new Error(`Missing locale: ${entry.code}`);
var locales = config_default.locales;
var locale = config_default.defaultLocale;
var site = dictionaries[locale];
var page = "home";
var contentId = "";
var relativeRoot = "./";
function configurePage(language, kind, id = "") {
	if (!dictionaries[language]) throw new Error(`Missing locale: ${language}`);
	const path = routePath(config_default, language, kind, id);
	locale = language;
	site = dictionaries[language];
	page = kind;
	contentId = id;
	relativeRoot = rootPrefix(path);
}
if (typeof document !== "undefined") {
	const data = document.documentElement.dataset;
	configurePage(document.documentElement.lang, data.page ?? "home", data.contentId ?? "");
}
var asset = (path) => `${relativeRoot}${path}`;
var localizedPath = (language, kind = page, id = contentId) => `${relativeRoot}${routePath(config_default, language, kind, id)}`;
//#endregion
//#region src/components/LanguageMenu.tsx
function LanguageMenu() {
	const [open, setOpen] = useState(false);
	const root = useRef(null);
	useEffect(() => {
		if (!open) return;
		const outside = (event) => {
			if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
		};
		document.addEventListener("pointerdown", outside);
		return () => document.removeEventListener("pointerdown", outside);
	}, [open]);
	return /* @__PURE__ */ jsxs("div", {
		className: "language-menu",
		ref: root,
		onBlur: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
		},
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "language-trigger",
			"aria-label": site.ui.language,
			"aria-expanded": open,
			"aria-controls": "language-options",
			onClick: () => setOpen(!open),
			children: [
				/* @__PURE__ */ jsxs("svg", {
					width: "17",
					height: "17",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.5",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("circle", {
							cx: "12",
							cy: "12",
							r: "9"
						}),
						/* @__PURE__ */ jsx("ellipse", {
							cx: "12",
							cy: "12",
							rx: "4",
							ry: "9"
						}),
						/* @__PURE__ */ jsx("path", { d: "M3 12h18" })
					]
				}),
				locales.find((item) => item.code === locale)?.label,
				/* @__PURE__ */ jsx("span", {
					className: "language-chevron",
					"aria-hidden": "true",
					children: "⌄"
				})
			]
		}), open && /* @__PURE__ */ jsx("ul", {
			id: "language-options",
			className: "language-options",
			"aria-label": site.ui.language,
			children: locales.map((item) => {
				return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
					href: localizedPath(item.code),
					onClick: (event) => {
						const hash = window.location.hash;
						if (hash && document.getElementById(hash.slice(1))) event.currentTarget.hash = hash;
					},
					lang: item.code,
					hrefLang: item.code,
					"aria-current": locale === item.code ? "true" : void 0,
					children: [item.label, /* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: locale === item.code ? "✓" : ""
					})]
				}) }, item.code);
			})
		})]
	});
}
//#endregion
//#region src/content/links.ts
function pageUrl(page = "home", params = {}, hash = "") {
	return `${localizedPath(locale, page, params.id ?? "")}${hash}`;
}
var homeLink = (hash) => page === "home" ? hash : pageUrl("home", {}, hash);
//#endregion
//#region src/components/Arrow.tsx
function Arrow({ diagonal = false }) {
	return /* @__PURE__ */ jsx("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", { d: diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6" })
	});
}
//#endregion
//#region src/components/Header.tsx
function Header() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (!open) return;
		const escape = (event) => {
			if (event.key === "Escape") {
				setOpen(false);
				document.getElementById("nav-toggle")?.focus();
			}
		};
		document.addEventListener("keydown", escape);
		return () => document.removeEventListener("keydown", escape);
	}, [open]);
	return /* @__PURE__ */ jsx("header", {
		className: "header",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container header-inner",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: pageUrl(),
					className: "brand",
					"aria-label": `${site.brand.name} · ${site.ui.backTop}`,
					children: /* @__PURE__ */ jsxs("span", { children: [site.brand.name, /* @__PURE__ */ jsx("small", { children: site.brand.english })] })
				}),
				/* @__PURE__ */ jsx(LanguageMenu, {}),
				/* @__PURE__ */ jsxs("button", {
					id: "nav-toggle",
					type: "button",
					className: "nav-toggle",
					"aria-expanded": open,
					"aria-controls": "main-nav",
					onClick: () => setOpen(!open),
					children: [open ? site.ui.closeMenu : site.ui.menu, /* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: open ? "×" : "☰"
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					id: "main-nav",
					className: open ? "navigation is-open" : "navigation",
					"aria-label": site.ui.navigation,
					children: [site.nav.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href.startsWith("#") ? homeLink(link.href) : pageUrl(link.href),
						onClick: () => setOpen(false),
						children: link.label
					}, link.href)), /* @__PURE__ */ jsxs("a", {
						href: "#contact",
						className: "nav-contact",
						onClick: () => setOpen(false),
						children: [site.contact.emailLabel, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/sections/AnnouncementBar.tsx
function AnnouncementBar() {
	return /* @__PURE__ */ jsx("div", {
		className: "announcement",
		role: "region",
		"aria-label": site.announcement,
		children: /* @__PURE__ */ jsx("div", {
			className: "container announcement-inner",
			children: /* @__PURE__ */ jsx("p", { children: site.announcement })
		})
	});
}
//#endregion
//#region src/sections/Contact.tsx
function Contact() {
	const email = business.email;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "contact-section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container contact-inner",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: site.contact.eyebrow
				}),
				/* @__PURE__ */ jsx("h2", { children: site.contact.title }),
				/* @__PURE__ */ jsx("p", { children: site.contact.description })
			] }), /* @__PURE__ */ jsxs("div", {
				className: "contact-action",
				children: [email ? /* @__PURE__ */ jsxs("a", {
					className: "button primary",
					href: `mailto:${email}`,
					children: [site.contact.emailLabel, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
				}) : /* @__PURE__ */ jsxs("span", {
					className: "contact-placeholder",
					children: [site.contact.placeholder, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
				}), /* @__PURE__ */ jsx("p", { children: email ?? site.brand.descriptor })]
			})]
		})
	}), /* @__PURE__ */ jsxs("footer", {
		className: "container footer",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "footer-top",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "footer-brand",
				children: [site.brand.name, /* @__PURE__ */ jsx("small", { children: site.brand.english })]
			}), /* @__PURE__ */ jsxs("a", {
				href: "#top",
				children: [site.ui.backTop, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "footer-bottom",
			children: [/* @__PURE__ */ jsxs("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				site.brand.copyright
			] }), /* @__PURE__ */ jsx("p", { children: site.contact.note })]
		})]
	})] });
}
//#endregion
//#region src/sections/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "hero",
		"aria-labelledby": "hero-title",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container hero-heading",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: site.hero.eyebrow
			}), /* @__PURE__ */ jsxs("h1", {
				id: "hero-title",
				children: [
					site.hero.title[0],
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", { children: site.hero.title[1] })
				]
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "hero-description",
				children: [/* @__PURE__ */ jsx("p", { children: site.hero.description }), /* @__PURE__ */ jsxs("a", {
					className: "text-link",
					href: pageUrl("collections"),
					children: [site.hero.primary, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
				})]
			})]
		}), /* @__PURE__ */ jsxs("figure", {
			className: "hero-visual",
			children: [/* @__PURE__ */ jsx("img", {
				src: asset(site.hero.image),
				alt: site.hero.imageAlt,
				width: "1800",
				height: "1100",
				fetchPriority: "high"
			}), /* @__PURE__ */ jsxs("figcaption", { children: [/* @__PURE__ */ jsx("span", { children: site.hero.note }), /* @__PURE__ */ jsx("span", { children: site.hero.caption })] })]
		})]
	});
}
//#endregion
//#region src/components/SectionHeading.tsx
function SectionHeading({ eyebrow, title, intro }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "section-heading",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "eyebrow",
			children: eyebrow
		}), /* @__PURE__ */ jsx("h2", { children: title })] }), intro && /* @__PURE__ */ jsx("p", {
			className: "section-intro",
			children: intro
		})]
	});
}
//#endregion
//#region src/sections/Collections.tsx
function Collections({ collection = false }) {
	const [filter, setFilter] = useState(site.collections.allLabel);
	const filters = [site.collections.allLabel, ...new Set(site.collections.items.map((item) => item.category))];
	return /* @__PURE__ */ jsx("section", {
		id: "collections",
		className: "collections-section section",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, { ...site.collections }),
				collection && /* @__PURE__ */ jsx("div", {
					className: "filters",
					role: "group",
					"aria-label": site.ui.categories,
					children: filters.map((value) => /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-pressed": filter === value,
						onClick: () => setFilter(value),
						children: value
					}, value))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "collection-grid",
					children: site.collections.items.filter((item) => filter === site.collections.allLabel || item.category === filter).map((item) => /* @__PURE__ */ jsx("article", {
						className: "collection",
						children: /* @__PURE__ */ jsxs("a", {
							className: "collection-open",
							href: pageUrl("collection", { id: item.id }),
							"aria-label": `${site.ui.viewCollection}：${item.name}`,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "collection-image",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: asset(item.image),
											alt: item.imageAlt,
											width: "720",
											height: "540",
											loading: "lazy"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "collection-label",
											children: site.ui.collectionLabel
										}),
										/* @__PURE__ */ jsx("span", {
											className: "collection-arrow",
											children: /* @__PURE__ */ jsx(Arrow, { diagonal: true })
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "collection-heading",
									children: [/* @__PURE__ */ jsx("h3", { children: item.name }), /* @__PURE__ */ jsx("span", { children: item.category })]
								}),
								/* @__PURE__ */ jsx("p", { children: item.summary })
							]
						})
					}, item.id))
				}),
				!collection && /* @__PURE__ */ jsxs("a", {
					className: "text-link collection-link",
					href: pageUrl("collections"),
					children: [site.ui.allCollections, /* @__PURE__ */ jsx(Arrow, {})]
				})
			]
		})
	});
}
//#endregion
//#region src/sections/FanFaves.tsx
function FanFaves() {
	const trackRef = useRef(null);
	const scrollBy = (direction) => {
		const track = trackRef.current;
		if (!track) return;
		const card = track.querySelector(".fanfave-card");
		const step = card ? card.offsetWidth + 24 : track.clientWidth * .8;
		track.scrollBy({
			left: direction * step,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ jsx("section", {
		className: "fanfaves section",
		"aria-labelledby": "fanfaves-title",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-head-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: site.fanFaves.eyebrow
					}),
					/* @__PURE__ */ jsx("h2", {
						id: "fanfaves-title",
						children: site.fanFaves.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "fanfaves-desc",
						children: site.fanFaves.description
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "fanfaves-shell",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "fanfaves-track",
						ref: trackRef,
						children: site.fanFaves.items.map((item, index) => /* @__PURE__ */ jsxs("a", {
							className: "fanfave-card",
							href: pageUrl("collections"),
							"aria-label": `${site.fanFaves.shopLabel}: ${item.label}`,
							children: [
								/* @__PURE__ */ jsx("img", {
									src: asset(item.image),
									alt: item.alt,
									width: "600",
									height: "800",
									loading: "lazy"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "fanfave-play",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx("svg", {
										viewBox: "0 0 24 24",
										width: "22",
										height: "22",
										children: /* @__PURE__ */ jsx("path", {
											d: "M8 5v14l11-7z",
											fill: "currentColor"
										})
									})
								}),
								/* @__PURE__ */ jsx("span", {
									className: "fanfave-bag",
									"aria-hidden": "true",
									children: /* @__PURE__ */ jsx("svg", {
										viewBox: "0 0 24 24",
										width: "18",
										height: "18",
										fill: "none",
										children: /* @__PURE__ */ jsx("path", {
											d: "M6 8h12l-1 12H7L6 8Zm3 0a3 3 0 0 1 6 0",
											stroke: "currentColor",
											strokeWidth: "1.6",
											strokeLinejoin: "round"
										})
									})
								}),
								/* @__PURE__ */ jsx("span", {
									className: "fanfave-label",
									children: item.label
								})
							]
						}, index))
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						className: "fanfaves-arrow fanfaves-prev",
						onClick: () => scrollBy(-1),
						"aria-label": site.ui.backTop,
						children: "‹"
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						className: "fanfaves-arrow fanfaves-next",
						onClick: () => scrollBy(1),
						"aria-label": site.ui.allCollections,
						children: "›"
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/sections/TryOn.tsx
function TryOn() {
	return /* @__PURE__ */ jsx("section", {
		className: "tryon section",
		"aria-labelledby": "tryon-title",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container tryon-inner",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "tryon-copy",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: site.tryOn.eyebrow
					}),
					/* @__PURE__ */ jsx("h2", {
						id: "tryon-title",
						children: site.tryOn.title
					}),
					/* @__PURE__ */ jsx("p", { children: site.tryOn.description }),
					/* @__PURE__ */ jsxs("a", {
						className: "button-primary",
						href: pageUrl("collections"),
						children: [site.tryOn.link, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "tryon-image",
				children: /* @__PURE__ */ jsx("img", {
					src: asset(site.tryOn.image),
					alt: site.tryOn.imageAlt,
					width: "900",
					height: "1125",
					loading: "lazy"
				})
			})]
		})
	});
}
//#endregion
//#region src/sections/SocialGrid.tsx
function SocialGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "social section",
		"aria-labelledby": "social-title",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "section-head-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: site.social.eyebrow
					}),
					/* @__PURE__ */ jsx("h2", {
						id: "social-title",
						children: site.social.title
					}),
					/* @__PURE__ */ jsx("span", {
						className: "social-handle",
						children: site.social.handle
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "social-grid",
				children: site.social.items.map((item, index) => /* @__PURE__ */ jsx("figure", {
					className: `social-item social-${item.size ?? "square"}`,
					children: /* @__PURE__ */ jsx("img", {
						src: asset(item.image),
						alt: item.alt,
						loading: "lazy"
					})
				}, index))
			})]
		})
	});
}
//#endregion
//#region src/sections/Story.tsx
function Story() {
	return /* @__PURE__ */ jsxs("section", {
		className: "story-teaser container section",
		children: [/* @__PURE__ */ jsx("div", {
			className: "story-image",
			children: /* @__PURE__ */ jsx("img", {
				src: asset(site.story.image),
				alt: site.story.imageAlt,
				width: "900",
				height: "1100",
				loading: "lazy"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "story-copy",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: site.story.eyebrow
				}),
				/* @__PURE__ */ jsx("h2", { children: site.story.title }),
				/* @__PURE__ */ jsx("p", { children: site.story.description }),
				/* @__PURE__ */ jsxs("a", {
					className: "text-link",
					href: pageUrl("story"),
					children: [site.story.link, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
				})
			]
		})]
	});
}
//#endregion
//#region src/sections/Newsletter.tsx
function Newsletter() {
	const [value, setValue] = useState("");
	return /* @__PURE__ */ jsx("section", {
		className: "newsletter section",
		"aria-labelledby": "newsletter-title",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container newsletter-inner",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "newsletter-copy",
					children: [/* @__PURE__ */ jsx("h2", {
						id: "newsletter-title",
						children: site.newsletter.title
					}), /* @__PURE__ */ jsx("p", { children: site.newsletter.description })]
				}),
				/* @__PURE__ */ jsxs("form", {
					className: "newsletter-form",
					onSubmit: (event) => event.preventDefault(),
					children: [
						/* @__PURE__ */ jsx("label", {
							className: "visually-hidden",
							htmlFor: "newsletter-email",
							children: site.ui.emailLabel
						}),
						/* @__PURE__ */ jsx("input", {
							id: "newsletter-email",
							type: "email",
							value,
							placeholder: site.newsletter.placeholder,
							onChange: (event) => setValue(event.target.value)
						}),
						/* @__PURE__ */ jsx("button", {
							className: "button-primary",
							type: "submit",
							children: site.newsletter.button
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "newsletter-note",
					children: site.newsletter.note
				})
			]
		})
	});
}
//#endregion
//#region src/pages/HomePage.tsx
function HomePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "manifesto container section",
			id: "approach",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: site.manifesto.eyebrow
				}),
				/* @__PURE__ */ jsx("h2", { children: site.manifesto.title }),
				/* @__PURE__ */ jsx("p", { children: site.manifesto.description })
			]
		}),
		/* @__PURE__ */ jsx(Collections, {}),
		/* @__PURE__ */ jsx(FanFaves, {}),
		/* @__PURE__ */ jsx(TryOn, {}),
		/* @__PURE__ */ jsx(SocialGrid, {}),
		/* @__PURE__ */ jsx(Story, {}),
		/* @__PURE__ */ jsx(Newsletter, {})
	] });
}
//#endregion
//#region src/pages/CollectionsPage.tsx
function CollectionsPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "container page-title",
		children: [/* @__PURE__ */ jsx("p", {
			className: "eyebrow",
			children: site.brand.name
		}), /* @__PURE__ */ jsx("h1", { children: site.collections.pageTitle })]
	}), /* @__PURE__ */ jsx(Collections, { collection: true })] });
}
//#endregion
//#region src/components/ProductCard.tsx
function ProductCard({ product }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "product-card",
		children: [/* @__PURE__ */ jsx("div", {
			className: "product-image",
			children: /* @__PURE__ */ jsx("img", {
				src: asset(product.image),
				alt: product.imageAlt,
				width: "600",
				height: "600",
				loading: "lazy"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "product-info",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "product-category",
					children: product.category
				}),
				/* @__PURE__ */ jsx("h3", { children: product.name }),
				/* @__PURE__ */ jsxs("p", {
					className: "product-meta",
					children: [/* @__PURE__ */ jsx("span", { children: product.shade }), /* @__PURE__ */ jsx("span", { children: product.price })]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/CollectionPage.tsx
function CollectionPage() {
	const collection = site.collections.items.find((item) => item.id === contentId);
	if (!collection) return /* @__PURE__ */ jsxs("section", {
		className: "container section",
		children: [/* @__PURE__ */ jsx("h1", { children: site.ui.notFound }), /* @__PURE__ */ jsx("a", {
			className: "text-link",
			href: pageUrl("collections"),
			children: site.ui.backCollections
		})]
	});
	const related = (collection.productIds ?? []).map((id) => site.products.find((product) => product.id === id)).filter((product) => !!product);
	return /* @__PURE__ */ jsxs("article", {
		className: "container collection-detail",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "breadcrumbs",
				"aria-label": site.ui.navigation,
				children: [
					/* @__PURE__ */ jsx("a", {
						href: pageUrl(),
						children: site.ui.home
					}),
					/* @__PURE__ */ jsx("span", { children: "/" }),
					/* @__PURE__ */ jsx("a", {
						href: pageUrl("collections"),
						children: site.collections.pageTitle
					}),
					/* @__PURE__ */ jsx("span", { children: "/" }),
					/* @__PURE__ */ jsx("span", { children: collection.name })
				]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "detail-heading",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "eyebrow",
						children: [
							site.ui.collectionLabel,
							" / ",
							collection.category
						]
					}),
					/* @__PURE__ */ jsx("h1", { children: collection.name }),
					/* @__PURE__ */ jsx("p", { children: collection.summary })
				]
			}),
			/* @__PURE__ */ jsx("img", {
				className: "detail-cover",
				src: asset(collection.image),
				alt: collection.imageAlt
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "detail-body",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", { children: site.ui.collectionIntro }), /* @__PURE__ */ jsx("p", { children: collection.detail })] }), /* @__PURE__ */ jsxs("aside", { children: [/* @__PURE__ */ jsx("h2", { children: site.ui.highlights }), /* @__PURE__ */ jsx("ul", { children: collection.highlights.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) })] })]
			}),
			collection.steps && collection.steps.length > 0 && /* @__PURE__ */ jsxs("section", {
				className: "look-steps",
				"aria-labelledby": "look-steps-title",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "look-steps-title",
					children: site.ui.steps
				}), /* @__PURE__ */ jsx("ol", { children: collection.steps.map((step, index) => /* @__PURE__ */ jsx("li", { children: step }, index)) })]
			}),
			related.length > 0 && /* @__PURE__ */ jsxs("section", {
				className: "look-products",
				"aria-labelledby": "look-products-title",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "look-products-head",
					children: [/* @__PURE__ */ jsx("h2", {
						id: "look-products-title",
						children: site.ui.relatedProducts
					}), /* @__PURE__ */ jsxs("a", {
						className: "button-primary",
						href: pageUrl("collections", { id: collection.id }),
						children: [collection.shopLabel ?? site.ui.shopNow, /* @__PURE__ */ jsx(Arrow, { diagonal: true })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "product-grid",
					children: related.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id))
				})]
			}),
			/* @__PURE__ */ jsxs("a", {
				className: "text-link",
				href: pageUrl("collections"),
				children: ["← ", site.ui.backCollections]
			})
		]
	});
}
//#endregion
//#region src/sections/Faq.tsx
function Faq() {
	return /* @__PURE__ */ jsxs("section", {
		className: "section container faq-section",
		"aria-labelledby": "faq-title",
		children: [/* @__PURE__ */ jsx("h2", {
			id: "faq-title",
			children: site.faq.title
		}), /* @__PURE__ */ jsx("div", { children: site.faq.items.map((item) => /* @__PURE__ */ jsxs("details", {
			name: "faq",
			children: [/* @__PURE__ */ jsxs("summary", { children: [item.question, /* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				children: "+"
			})] }), /* @__PURE__ */ jsx("p", { children: item.answer })]
		}, item.question)) })]
	});
}
//#endregion
//#region src/pages/StoryPage.tsx
function StoryPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("header", {
			className: "container story-heading",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: site.story.eyebrow
				}),
				/* @__PURE__ */ jsx("h1", { children: site.story.title }),
				/* @__PURE__ */ jsx("p", { children: site.story.description })
			]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "container story-editorial",
			children: [/* @__PURE__ */ jsx("img", {
				src: asset(site.story.image),
				alt: site.story.imageAlt,
				width: "900",
				height: "1100"
			}), /* @__PURE__ */ jsx("div", { children: site.story.paragraphs.map((text) => /* @__PURE__ */ jsx("p", { children: text }, text)) })]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container section values-grid",
			id: "approach",
			children: site.story.values.map((value, index) => /* @__PURE__ */ jsxs("article", { children: [
				/* @__PURE__ */ jsxs("span", {
					className: "eyebrow",
					children: ["0", index + 1]
				}),
				/* @__PURE__ */ jsx("h2", { children: value.title }),
				/* @__PURE__ */ jsx("p", { children: value.description })
			] }, value.title))
		}),
		/* @__PURE__ */ jsx(Faq, {})
	] });
}
//#endregion
//#region src/pages/components.ts
var components = {
	HomePage,
	CollectionsPage,
	CollectionPage,
	StoryPage
};
//#endregion
//#region src/App.tsx
function App() {
	const definition = registry_default.find((item) => item.id === page);
	const Page = definition && components[definition.component];
	if (!Page) throw new Error(`Missing page component: ${page}`);
	return /* @__PURE__ */ jsxs("div", {
		id: "top",
		children: [
			/* @__PURE__ */ jsx("a", {
				className: "skip-link",
				href: "#main",
				children: site.ui.skip
			}),
			/* @__PURE__ */ jsx(AnnouncementBar, {}),
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", {
				id: "main",
				children: [/* @__PURE__ */ jsx(Page, {}), /* @__PURE__ */ jsx(Contact, {})]
			})
		]
	});
}
//#endregion
//#region src/pages/definitions.js
function getValue(object, path) {
	return path.split(".").reduce((value, key) => value?.[key], object);
}
function expandPages(content, registry) {
	return registry.flatMap((definition) => {
		const records = definition.collection ? getValue(content, definition.collection) : [null];
		if (!Array.isArray(records)) throw new Error(`Invalid collection: ${definition.collection}`);
		return records.map((record) => {
			const title = getValue(record ?? content, definition.title);
			const description = definition.description ? getValue(record ?? content, definition.description) : content.meta.description;
			if (typeof title !== "string" || typeof description !== "string") throw new Error(`Missing page metadata: ${definition.id}`);
			return {
				page: definition.id,
				id: record?.id ?? "",
				title: definition.id === "home" ? title : `${title} | ${content.meta.title}`,
				description
			};
		});
	});
}
//#endregion
//#region src/render.tsx
function renderPages() {
	const pages = [];
	for (const entry of config_default.locales) {
		const content = dictionaries[entry.code];
		for (const route of expandPages(content, registry_default)) {
			configurePage(entry.code, route.page, route.id);
			const path = routePath(config_default, entry.code, route.page, route.id);
			pages.push({
				...route,
				locale: entry.code,
				path,
				root: rootPrefix(path),
				html: renderToString(/* @__PURE__ */ jsx(App, {}))
			});
		}
	}
	return pages;
}
//#endregion
export { renderPages };
