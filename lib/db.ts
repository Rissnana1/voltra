import { Product, RepairRequest, Order } from "./types";

/**
 * MOCK DATA LAYER
 * ------------------------------------------------------------------
 * This file simulates a database using in-memory arrays so the whole
 * app works end-to-end with zero external services.
 *
 * When you're ready to go live, replace the contents of each function
 * below with calls to Supabase (or whatever DB you choose). The
 * function signatures are deliberately shaped like a real DB client so
 * the swap only touches this file — no component or API route needs
 * to change.
 *
 * Example future swap (Supabase):
 *   import { createClient } from "@supabase/supabase-js";
 *   const supabase = createClient(url, key);
 *   export async function getProducts() {
 *     const { data } = await supabase.from("products").select("*");
 *     return data;
 *   }
 * ------------------------------------------------------------------
 */

// ---- seed data -----------------------------------------------------

let products: Product[] = [
  {
    id: "p1",
    name: "Galaxy A56 5G",
    category: "phones",
    price: 42999,
    currency: "KES",
    stock_qty: 24,
    image_emoji: "📱",
    description: "Unlocked, 128GB, 12-month manufacturer warranty.",
  },
  {
    id: "p2",
    name: "Infinix Note 40 Pro",
    category: "phones",
    price: 27999,
    currency: "KES",
    stock_qty: 41,
    image_emoji: "📱",
    description: "8GB RAM, 256GB storage, dual SIM.",
  },
  {
    id: "p3",
    name: "MacBook Air M2",
    category: "laptops",
    price: 139999,
    currency: "KES",
    stock_qty: 9,
    image_emoji: "💻",
    description: "13-inch, 8GB/256GB, sealed box.",
  },
  {
    id: "p4",
    name: "Dell Inspiron 15",
    category: "laptops",
    price: 68999,
    currency: "KES",
    stock_qty: 15,
    image_emoji: "💻",
    description: "Core i5, 8GB RAM, 512GB SSD — great for business use.",
  },
  {
    id: "p5",
    name: "Hisense 55\" 4K Smart TV",
    category: "tv-audio",
    price: 54999,
    currency: "KES",
    stock_qty: 12,
    image_emoji: "📺",
    description: "4K UHD, built-in streaming apps, free wall mount.",
  },
  {
    id: "p6",
    name: "JBL Flip 6 Speaker",
    category: "tv-audio",
    price: 12999,
    currency: "KES",
    stock_qty: 30,
    image_emoji: "🔊",
    description: "Portable, waterproof, 12-hour battery.",
  },
  {
    id: "p7",
    name: "Double Door Fridge 250L",
    category: "appliances",
    price: 47999,
    currency: "KES",
    stock_qty: 8,
    image_emoji: "🧊",
    description: "Energy-saving inverter compressor, free delivery.",
  },
  {
    id: "p8",
    name: "Smart Security Camera Kit",
    category: "smart-home",
    price: 15999,
    currency: "KES",
    stock_qty: 20,
    image_emoji: "📷",
    description: "2-camera kit, night vision, app alerts, easy install.",
  },
  {
    id: "p9",
    name: "1kVA Solar Inverter + Battery",
    category: "solar",
    price: 64999,
    currency: "KES",
    stock_qty: 11,
    image_emoji: "🔋",
    description: "Covers lighting, router and TV during outages.",
  },
];

let repairs: RepairRequest[] = [];
let orders: Order[] = [];

// ---- products --------------------------------------------------------

export async function getProducts(category?: string): Promise<Product[]> {
  if (category && category !== "all") {
    return products.filter((p) => p.category === category);
  }
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

// ---- repairs -----------------------------------------------------------

export async function createRepairRequest(
  input: Omit<RepairRequest, "id" | "status" | "created_at">
): Promise<RepairRequest> {
  const repair: RepairRequest = {
    ...input,
    id: `r_${Date.now()}`,
    status: "received",
    created_at: new Date().toISOString(),
  };
  repairs.push(repair);
  return repair;
}

export async function getRepairsByPhone(phone: string): Promise<RepairRequest[]> {
  return repairs.filter((r) => r.phone === phone);
}

// ---- orders --------------------------------------------------------------

export async function createOrder(
  input: Omit<Order, "id" | "status" | "created_at" | "total">
): Promise<Order> {
  const total = await calculateOrderTotal(input.items);
  const order: Order = {
    ...input,
    id: `o_${Date.now()}`,
    total,
    status: "pending",
    created_at: new Date().toISOString(),
  };
  orders.push(order);
  return order;
}

async function calculateOrderTotal(items: { product_id: string; qty: number }[]) {
  let total = 0;
  for (const item of items) {
    const product = await getProductById(item.product_id);
    if (product) total += product.price * item.qty;
  }
  return total;
}

export async function getOrdersByPhone(phone: string): Promise<Order[]> {
  return orders.filter((o) => o.phone === phone);
}
