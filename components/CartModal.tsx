"use client";

import { useState, FormEvent } from "react";
import { useCart } from "./CartContext";

export default function CartModal() {
  const { items, removeItem, total, isCartOpen, closeCart } = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleCheckout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (items.length === 0) return;
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("cname") as HTMLInputElement).value,
      phone: (form.elements.namedItem("cphone") as HTMLInputElement).value,
      delivery_country: (form.elements.namedItem("ccountry") as HTMLSelectElement).value,
      items: items.map((i) => ({ product_id: i.product.id, qty: i.qty })),
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setMessage(`Order placed! Reference ${json.order.id}. Total KES ${json.order.total.toLocaleString()}.`);
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Couldn't place your order. Please try again.");
    }
  }

  return (
    <div className={`modal-overlay${isCartOpen ? " open" : ""}`} onClick={closeCart}>
      <div className="modal-box" style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeCart} aria-label="Close cart">
          ×
        </button>
        <h3>Your cart</h3>
        <p className="sub">Review your items, then check out with M-Pesa or card.</p>

        {items.length === 0 ? (
          <p style={{ color: "var(--slate)", fontSize: 14 }}>Your cart is empty — go add something from the shop.</p>
        ) : (
          <>
            <div className="cart-panel">
              {items.map((i) => (
                <div className="cart-line" key={i.product.id}>
                  <span>
                    {i.product.name} × {i.qty}
                  </span>
                  <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    KES {(i.product.price * i.qty).toLocaleString()}
                    <button
                      onClick={() => removeItem(i.product.id)}
                      aria-label={`Remove ${i.product.name}`}
                      style={{ background: "none", border: "none", color: "var(--slate-dim)", fontSize: 16 }}
                    >
                      ×
                    </button>
                  </span>
                </div>
              ))}
              <div className="cart-total">
                <span>Total</span>
                <span>KES {total.toLocaleString()}</span>
              </div>
            </div>

            <form onSubmit={handleCheckout} style={{ marginTop: 24 }}>
              <div className="field">
                <label htmlFor="cname">Full name</label>
                <input id="cname" name="cname" type="text" required placeholder="Jane Wanjiru" />
              </div>
              <div className="field">
                <label htmlFor="cphone">Phone number</label>
                <input id="cphone" name="cphone" type="tel" required placeholder="07xx xxx xxx" />
              </div>
              <div className="field">
                <label htmlFor="ccountry">Delivery country</label>
                <select id="ccountry" name="ccountry" required defaultValue="Kenya">
                  <option>Kenya</option>
                  <option>Uganda</option>
                  <option>Tanzania</option>
                  <option>Rwanda</option>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Ethiopia</option>
                  <option>Zambia</option>
                  <option>Malawi</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={status === "loading"}>
                {status === "loading" ? "Placing order…" : "Checkout"}
              </button>
              {status === "success" && <div className="form-status success">{message}</div>}
              {status === "error" && <div className="form-status error">{message}</div>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
