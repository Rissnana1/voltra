import { Reveal, Stagger } from "./Reveal";

const pillars = [
  {
    tag: "Sell",
    title: "Curated marketplace",
    copy: "Phones, laptops, TVs and appliances, verified genuine and priced fairly — no grey-market guesswork.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 6h15l-1.5 9h-12z" />
        <circle cx="9" cy="20" r="1.4" fill="currentColor" />
        <circle cx="17" cy="20" r="1.4" fill="currentColor" />
        <path d="M3 3h2l1 3" />
      </svg>
    ),
  },
  {
    tag: "Repair",
    title: "Certified repair",
    copy: "Trained technicians, genuine spare parts, and a 90-day warranty on every job — tracked from drop-off to pickup.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6-2-2z" />
      </svg>
    ),
  },
  {
    tag: "Ship",
    title: "Pan-African delivery",
    copy: "Same-day dispatch in major cities, cross-border shipping to 9 countries, and live tracking the whole way.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="8" width="13" height="9" />
        <path d="M15 11h4l3 3v3h-7z" />
        <circle cx="6.5" cy="19.5" r="1.6" />
        <circle cx="17.5" cy="19.5" r="1.6" />
      </svg>
    ),
  },
  {
    tag: "Smart Homes",
    title: "Smart home installs",
    copy: "Lighting, security cameras and solar backup, installed and configured so power cuts stop being a problem.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="section" id="repair">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" /> What we do
          </span>
          <h2 style={{ marginTop: 16 }}>One company, the whole electronics lifecycle.</h2>
          <p>From the first purchase to the tenth repair, Voltra keeps your devices — and your home — running.</p>
        </Reveal>
        <Stagger className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.tag}>
              <span className="tag">{p.tag}</span>
              <div className="icon" aria-hidden="true">
                {p.icon}
              </div>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
