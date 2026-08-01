const brands = ["Samsung", "Apple", "Hisense", "TECNO", "Infinix", "Xiaomi", "LG", "Anker", "JBL", "Dell"];

export default function SocialProof() {
  return (
    <section className="proof">
      <div className="wrap">
        <p className="proof-label">Genuine parts &amp; devices from brands people already trust</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...brands, ...brands].map((b, i) => (
              <span key={i}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
