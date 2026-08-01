"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#shop", label: "Shop" },
    { href: "#repair", label: "Repair" },
    { href: "#smart-homes", label: "Smart Homes" },
    { href: "#business", label: "For Business" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap">
          <a href="#top" className="brand">
            <span className="mark" aria-hidden="true">
              <svg viewBox="0 0 30 30" width="30" height="30">
                <rect x="1" y="1" width="28" height="28" rx="8" fill="url(#gmark)" />
                <path d="M16.5 6 L9 17h5.2l-1.4 7L21 12h-5.2z" fill="#0B0E15" />
                <defs>
                  <linearGradient id="gmark" x1="0" y1="0" x2="30" y2="30">
                    <stop offset="0" stopColor="#F2994A" />
                    <stop offset="1" stopColor="#34E5C8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            Voltra
          </a>
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <button className="btn btn-ghost btn-sm cart-btn" onClick={openCart} aria-label="Open cart">
              Cart
              {count > 0 && <span className="cart-badge">{count}</span>}
            </button>
            <a href="#repair-form" className="btn btn-primary btn-sm">
              Get started
            </a>
            <button
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#repair-form" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Get started
        </a>
      </div>
    </>
  );
}
