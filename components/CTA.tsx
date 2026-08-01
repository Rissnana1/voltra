import { Reveal } from "./Reveal";

export default function CTA() {
  return (
    <section className="section" id="cta">
      <div className="wrap">
        <Reveal className="cta-band">
          <span className="eyebrow">
            <span className="dot" /> Join the network
          </span>
          <h2 style={{ marginTop: 18 }}>Let&apos;s build the electronics company Africa reaches for first.</h2>
          <p>Create a free account to shop, book repairs, or bring your business on board — wherever you are.</p>
          <div className="cta-actions">
            <a href="#repair-form" className="btn btn-primary">
              Create free account
            </a>
            <a href="#business" className="btn btn-ghost">
              Talk to our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
