import type { ComponentType } from "react";
import { HomePage } from "./HomePage";
import { CollectionsPage } from "./CollectionsPage";
import { CollectionPage } from "./CollectionPage";
import { ShopPage } from "./ShopPage";
import { ProductPage } from "./ProductPage";
import { StoryPage } from "./StoryPage";
import { CheckoutPage } from "./CheckoutPage";
import { NotFoundPage } from "./NotFoundPage";
export const components: Record<string, ComponentType> = {
  HomePage,
  CollectionsPage,
  CollectionPage,
  ShopPage,
  ProductPage,
  StoryPage,
  CheckoutPage,
  NotFoundPage,
};
