import { useEffect, useState } from "react";
import { type CartItem, readCart, cartTotals, subscribe } from "./cart";

// Hydration-safe hook: the server render and the first client paint both show
// an empty bag, then the real contents sync from localStorage after mount.
export function useBag() {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    setItems(readCart());
    return subscribe(() => setItems(readCart()));
  }, []);
  const { subtotal, symbol, count } = cartTotals(items);
  return { items, subtotal, symbol, count };
}
