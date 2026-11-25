// 前端购物袋状态：localStorage 持久化 + 同页事件总线，跨静态页共享。
// Front-end shopping bag: localStorage persistence + an in-page event bus so
// every statically generated page can share the same bag. This is a prototype
// store — no real checkout or order is ever created.
export type CartItem = {
  id: string;
  name: string;
  price: string;
  size: string;
  qty: number;
  image: string;
};

const STORAGE_KEY = "lumiere.bag";
export const bagKey = (id: string, size: string) => `${id}::${size}`;

// Sandboxed previews can throw on any localStorage access; keep a module-level
// mirror so the bag still works in-memory when persistence is unavailable.
let memory: CartItem[] | null = null;

// Split a localized price string such as "¥180" or "₩36,000" into its numeric
// amount and currency symbol so totals can be summed at runtime.
export function parsePrice(price: string): { num: number; symbol: string } {
  const num = parseFloat((price || "").replace(/[^0-9.]/g, ""));
  const symbol = (price || "").replace(/[0-9.,\s]/g, "");
  return { num: Number.isFinite(num) ? num : 0, symbol };
}

export function readCart(): CartItem[] {
  if (memory) return memory;
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    memory = raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    memory = [];
  }
  return Array.isArray(memory) ? memory : [];
}

function emit() {
  if (typeof document !== "undefined")
    document.dispatchEvent(new CustomEvent("bag:update"));
}

function persist(items: CartItem[]) {
  memory = items;
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Sandboxed environment: in-memory mirror above keeps the bag usable.
  }
  emit();
}

export function subscribe(callback: () => void): () => void {
  const handler = () => callback();
  if (typeof document !== "undefined")
    document.addEventListener("bag:update", handler);
  if (typeof window !== "undefined")
    window.addEventListener("storage", handler);
  return () => {
    if (typeof document !== "undefined")
      document.removeEventListener("bag:update", handler);
    if (typeof window !== "undefined")
      window.removeEventListener("storage", handler);
  };
}

export function openBag() {
  if (typeof document !== "undefined")
    document.dispatchEvent(new CustomEvent("bag:open"));
}

export function addToBag(input: Omit<CartItem, "qty">, qty = 1): void {
  const items = readCart();
  const key = bagKey(input.id, input.size);
  const found = items.find((item) => bagKey(item.id, item.size) === key);
  if (found) found.qty += qty;
  else items.push({ ...input, qty });
  persist(items);
  openBag();
}

export function setQty(id: string, size: string, qty: number): void {
  const items = readCart()
    .map((item) =>
      bagKey(item.id, item.size) === bagKey(id, size)
        ? { ...item, qty: Math.max(0, qty) }
        : item,
    )
    .filter((item) => item.qty > 0);
  persist(items);
}

export function removeFromBag(id: string, size: string): void {
  persist(
    readCart().filter((item) => bagKey(item.id, item.size) !== bagKey(id, size)),
  );
}

export function clearBag(): void {
  persist([]);
}

export function cartTotals(items: CartItem[]) {
  let subtotal = 0;
  let symbol = "";
  let count = 0;
  for (const item of items) {
    const parsed = parsePrice(item.price);
    subtotal += parsed.num * item.qty;
    if (!symbol) symbol = parsed.symbol;
    count += item.qty;
  }
  return { subtotal, symbol, count };
}

export function formatMoney(symbol: string, value: number): string {
  const amount =
    value % 1 === 0 ? value.toLocaleString() : value.toFixed(2);
  return `${symbol}${amount}`;
}
