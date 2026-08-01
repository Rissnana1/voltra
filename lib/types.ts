export type Product = {
  id: string;
  name: string;
  category: "phones" | "laptops" | "tv-audio" | "appliances" | "smart-home" | "solar";
  price: number;
  currency: "KES";
  stock_qty: number;
  image_emoji: string; // placeholder visual token until real product photos are added
  description: string;
};

export type RepairRequest = {
  id: string;
  name: string;
  phone: string;
  device_type: string;
  issue: string;
  city: string;
  status: "received" | "diagnosing" | "in_repair" | "ready" | "completed";
  created_at: string;
};

export type OrderItem = {
  product_id: string;
  qty: number;
};

export type Order = {
  id: string;
  name: string;
  phone: string;
  delivery_country: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "paid" | "shipped" | "delivered";
  created_at: string;
};
