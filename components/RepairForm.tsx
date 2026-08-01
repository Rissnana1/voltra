"use client";

import { useState, FormEvent } from "react";
import { Reveal } from "./Reveal";

export default function RepairForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      device_type: (form.elements.namedItem("device_type") as HTMLInputElement).value,
      issue: (form.elements.namedItem("issue") as HTMLTextAreaElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/repairs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setMessage(`Booked! Reference ${json.repair.id}. We'll text you at ${data.phone} with next steps.`);
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Couldn't submit your request. Please try again.");
    }
  }

  return (
    <section className="section" id="repair-form">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <Reveal className="section-head" style={{ maxWidth: "none" }}>
          <span className="eyebrow">
            <span className="dot" /> Book a repair
          </span>
          <h2 style={{ marginTop: 16 }}>Tell us what&apos;s wrong — we&apos;ll take it from there.</h2>
          <p>A technician will confirm your slot by phone within a few hours.</p>
        </Reveal>

        <Reveal
          className="price-card"
          style={{ maxWidth: "none" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required placeholder="Jane Wanjiru" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" required placeholder="07xx xxx xxx" />
            </div>
            <div className="field">
              <label htmlFor="device_type">Device</label>
              <input id="device_type" name="device_type" type="text" required placeholder="e.g. iPhone 13, Dell XPS 13" />
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" placeholder="Nairobi" />
            </div>
            <div className="field">
              <label htmlFor="issue">What&apos;s the issue?</label>
              <textarea id="issue" name="issue" required placeholder="Cracked screen, won't charge, etc." />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={status === "loading"}>
              {status === "loading" ? "Submitting…" : "Request repair"}
            </button>
            {status === "success" && <div className="form-status success">{message}</div>}
            {status === "error" && <div className="form-status error">{message}</div>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
