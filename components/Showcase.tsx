"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import { useCart } from "./CartContext";
import { Reveal } from "./Reveal";

const categories = [
  { id: "all", label: "All" },
  { id: "phones", label: "Phones & tablets" },
  { id: "laptops", label: "Laptops" },
  { id: "tv-audio", label: "TV & audio" },
  { id: "appliances", label: "Appliances" },
  { id: "smart-home", label: "Smart home" },
  { id: "solar", label: "Solar & backup" },
];

export default function Showcase() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products?category=${category}`)
      .then((r) => r.json())
      .then((data) => setProducts(data.products ?? []))
      .finally(() => setLoading(false));
  }, [category]);

  function handleAdd(product: Product) {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  }

  return (
    <section className="section" id="shop" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" /> Shop by category
          </span>
          <h2 style={{ marginTop: 16 }}>Everything that plugs in, one place to find it.</h2>
          <p>Built for real conditions — unstable grids, long distances, and homes that run on more than one device per room.</p>
        </Reveal>

        <div className="shop-filters">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter-chip${category === c.id ? " active" : ""}`}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="product-grid" aria-live="polite">
          {loading && <p style={{ color: "var(--slate)" }}>Loading products…</p>}
          {!loading && products.length === 0 && (
            <p style={{ color: "var(--slate)" }}>No products in this category yet.</p>
          )}
          {!loading &&
            products.map((p) => (
              <div className="product-card" key={p.id}>
                <span className="product-emoji" aria-hidden="true">
                  {p.image_emoji}
                </span>
                <h4>{p.name}</h4>
                <p className="desc">{p.description}</p>
                <div className="row">
                  <span className="product-price">KES {p.price.toLocaleString()}</span>
                  <span className="product-stock">{p.stock_qty} in stock</span>
                </div>
                <button
                  className={`add-btn${addedId === p.id ? " added" : ""}`}
                  onClick={() => handleAdd(p)}
                >
                  {addedId === p.id ? "Added ✓" : "Add to cart"}
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
