"use client";

import { useRef, useState } from "react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "My laptop screen cracked two days before a client pitch. Dropped it off in Westlands in the morning, had it back by evening — genuine panel, receipt, warranty card, all of it.",
    initials: "AM",
    name: "Amani M.",
    place: "Nairobi, Kenya",
    color: "var(--copper)",
  },
  {
    quote:
      "We kitted out our whole shop with Voltra's solar backup and security cameras. Power cuts used to shut us down for hours — now we barely notice them.",
    initials: "TO",
    name: "Tunde O.",
    place: "Lagos, Nigeria",
    color: "var(--teal)",
  },
  {
    quote:
      "Ordered a fridge and two TVs for a new apartment complex. Tracking was accurate to the hour, and the delivery team called ahead — small thing, but it mattered.",
    initials: "GN",
    name: "Grace N.",
    place: "Kampala, Uganda",
    color: "#FFCE8A",
  },
  {
    quote:
      "Traded in three old office laptops toward a bulk order of new ones. The credit was fair and the whole office was set up with support included.",
    initials: "SK",
    name: "Sarah K.",
    place: "Dar es Salaam, Tanzania",
    color: "var(--copper)",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const d = Math.abs(el.offsetLeft - track.scrollLeft);
      if (d < min) {
        min = d;
        closest = i;
      }
    });
    setActive(closest);
  }

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" /> Customers
          </span>
          <h2 style={{ marginTop: 16 }}>People who&apos;d rather not think about their electronics again.</h2>
        </Reveal>

        <Reveal className="testi-wrap">
          <div className="testi-track" ref={trackRef} onScroll={handleScroll}>
            {testimonials.map((t) => (
              <article className="testi-card" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-person">
                  <span className="testi-avatar" style={{ background: t.color, color: "#0C0704" }}>
                    {t.initials}
                  </span>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.place}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="testi-controls">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                className={`testi-dot${active === i ? " active" : ""}`}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
