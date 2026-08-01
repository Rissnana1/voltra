import { Reveal } from "./Reveal";

const benefits = [
  {
    num: "01",
    title: "Pay the way you already do",
    copy: "M-Pesa, mobile money, card or bank transfer — no forced conversions, no surprise fees.",
  },
  {
    num: "02",
    title: "Trade in, don't throw out",
    copy: "Bring an old device toward a new one or a repair — we grade and credit it on the spot.",
  },
  {
    num: "03",
    title: "Genuine parts, real warranty",
    copy: "Every repair is logged, warrantied for 90 days, and traceable back to the technician who did it.",
  },
  {
    num: "04",
    title: "Built for offices and shops too",
    copy: "Bulk supply, on-site IT support and priority repair queues for growing businesses.",
  },
];

export default function Benefits() {
  return (
    <section className="section" id="smart-homes">
      <div className="wrap benefits">
        <Reveal>
          <span className="eyebrow">
            <span className="dot" /> Why Voltra
          </span>
          <h2 style={{ marginTop: 16, fontSize: "clamp(28px,3.6vw,38px)" }}>
            Built around how people actually pay, move, and rebuild power here.
          </h2>
          <div className="benefit-list" style={{ marginTop: 34 }}>
            {benefits.map((b) => (
              <div className="benefit-item" key={b.num}>
                <span className="benefit-num">{b.num}</span>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="benefit-visual">
          <div className="payment-card">
            <div className="row">
              <span>PAY WITH</span>
              <span style={{ color: "var(--slate)", fontSize: 12 }}>M-Pesa</span>
            </div>
            <div className="row">
              <span>REPAIR — SCREEN REPLACEMENT</span>
            </div>
            <div className="amount">KES 3,200</div>
            <div className="pill-badges">
              <span>90-day warranty</span>
              <span>Genuine part</span>
              <span>Ready in 48h</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
