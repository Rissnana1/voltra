import { Reveal, Stagger } from "./Reveal";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export default function Pricing() {
  return (
    <section className="section" id="business">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" /> Service plans
          </span>
          <h2 style={{ marginTop: 16 }}>Simple plans for households, and for teams scaling up.</h2>
          <p>Every plan includes genuine parts, real technicians, and tracked delivery. Upgrade or cancel anytime.</p>
        </Reveal>

        <Stagger className="pricing-grid">
          <div className="price-card">
            <h3>Essential</h3>
            <p className="price-sub">For individuals and households</p>
            <div className="price-amount">
              Free<span> to join</span>
            </div>
            <ul className="price-feats">
              <li><Check /> Marketplace access &amp; order tracking</li>
              <li><Check /> Pay-per-repair, 90-day warranty</li>
              <li><Check /> Standard delivery windows</li>
              <li><Check /> M-Pesa &amp; card payments</li>
            </ul>
            <a href="#repair-form" className="btn btn-ghost">Get started</a>
          </div>

          <div className="price-card featured">
            <h3>Home Plus</h3>
            <p className="price-sub">For households going smart</p>
            <div className="price-amount">
              KES 999<span>/mo</span>
            </div>
            <ul className="price-feats">
              <li><Check /> Everything in Essential</li>
              <li><Check /> Priority same-day repair slots</li>
              <li><Check /> Free smart home check-up, twice a year</li>
              <li><Check /> 15% off solar &amp; backup installs</li>
            </ul>
            <a href="#repair-form" className="btn btn-primary">Choose Home Plus</a>
          </div>

          <div className="price-card">
            <h3>Business</h3>
            <p className="price-sub">For offices, shops &amp; institutions</p>
            <div className="price-amount">Custom</div>
            <ul className="price-feats">
              <li><Check /> Bulk purchasing &amp; volume pricing</li>
              <li><Check /> Dedicated account manager</li>
              <li><Check /> On-site installation teams</li>
              <li><Check /> Cross-border fleet shipping</li>
            </ul>
            <a href="#repair-form" className="btn btn-ghost">Talk to sales</a>
          </div>
        </Stagger>
      </div>
    </section>
  );
}
