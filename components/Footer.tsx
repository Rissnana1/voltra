export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#top" className="brand" style={{ fontSize: 19 }}>
              <span className="mark" aria-hidden="true">
                <svg viewBox="0 0 30 30" width="26" height="26">
                  <rect x="1" y="1" width="28" height="28" rx="8" fill="url(#gmark2)" />
                  <path d="M16.5 6 L9 17h5.2l-1.4 7L21 12h-5.2z" fill="#0B0E15" />
                  <defs>
                    <linearGradient id="gmark2" x1="0" y1="0" x2="30" y2="30">
                      <stop offset="0" stopColor="#F2994A" />
                      <stop offset="1" stopColor="#34E5C8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              Voltra
            </a>
            <p>Electronics sold, repaired, shipped and installed across Africa — built to keep working, wherever you are.</p>
            <div className="countries-row">
              <span>Kenya</span>
              <span>Uganda</span>
              <span>Tanzania</span>
              <span>Nigeria</span>
              <span>Ghana</span>
              <span>Rwanda</span>
            </div>
          </div>
          <div className="foot-col">
            <h5>Shop</h5>
            <ul>
              <li><a href="#shop">Phones &amp; tablets</a></li>
              <li><a href="#shop">Laptops</a></li>
              <li><a href="#shop">TVs &amp; audio</a></li>
              <li><a href="#shop">Appliances</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#repair">Device repair</a></li>
              <li><a href="#smart-homes">Smart home installs</a></li>
              <li><a href="#shop">Solar &amp; backup</a></li>
              <li><a href="#business">Business supply</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About Voltra</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Support</h5>
            <ul>
              <li><a href="#">Track an order</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Warranty policy</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Voltra Electronics Ltd. All rights reserved.</span>
          <div className="foot-social" aria-label="Social links">
            <a href="#" aria-label="X (Twitter)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h3l-7.5 8.6L22.5 22H16l-5-6.5L5 22H2l8-9.1L1.8 2H8l4.5 6z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V23h-4zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23h-4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
