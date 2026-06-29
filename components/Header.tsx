"use client";

import { useState } from "react";

const WhatsAppIcon = ({ size = 17, fill = "currentColor" }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm-4.53 6.08c.21 0 .55.01.81.63.27.65.92 2.21 1 2.37.08.16.13.35.02.56-.11.21-.16.34-.32.52-.16.18-.33.41-.47.55-.16.16-.32.33-.14.65.18.32.82 1.36 1.77 2.21 1.22 1.09 2.24 1.42 2.56 1.58.32.16.51.13.69-.08.18-.21.79-.93 1-1.24.21-.32.42-.27.71-.16.29.1 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.18 1.51-.26.74-1.53 1.42-2.14 1.51-.55.08-1.24.11-2-.13-.46-.13-1.05-.3-1.8-.59-3.16-1.23-5.22-4.41-5.38-4.62-.16-.21-1.29-1.71-1.29-3.26s.81-2.32 1.1-2.63c.29-.31.63-.39.84-.39z" />
  </svg>
);

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(251,248,240,0.86)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #ECE4D5",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(18px,5vw,48px)",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        {/* logo */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, flex: "0 0 auto" }}>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#3F8C6E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" fill="#FBF8F0" />
              <circle cx="9.5" cy="10" r="1.4" fill="#3F8C6E" />
              <circle cx="14.5" cy="10" r="1.4" fill="#3F8C6E" />
              <path d="M9 14.5c1.6 1.4 4.4 1.4 6 0" stroke="#3F8C6E" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 21, letterSpacing: "-0.02em", color: "#211C16" }}>
            Coco<span style={{ color: "#3F8C6E" }}>Boost</span>
          </span>
        </a>

        {/* desktop nav */}
        <nav
          className="desktop-only"
          style={{ alignItems: "center", gap: 30, fontSize: 15, fontWeight: 500, color: "#3C362E" }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="navlink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="desktop-only" style={{ alignItems: "center", gap: 10, flex: "0 0 auto" }}>
          <a
            href="tel:+60123456789"
            className="btn-call"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 15px",
              border: "1.5px solid #D7CFC0",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              color: "#3C362E",
              background: "#fff",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
            </svg>
            Call
          </a>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener"
            className="btn-wa"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 17px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
              background: "#25D366",
              boxShadow: "0 4px 12px rgba(37,211,102,0.28)",
            }}
          >
            <WhatsAppIcon size={17} />
            WhatsApp us
          </a>
        </div>

        {/* mobile controls */}
        <div className="mobile-only" style={{ alignItems: "center", gap: 10 }}>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener"
            style={{ width: 42, height: 42, borderRadius: 11, background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <WhatsAppIcon size={20} fill="#fff" />
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            style={{
              width: 42,
              height: 42,
              borderRadius: 11,
              border: "1.5px solid #D7CFC0",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#211C16" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {menuOpen && (
        <div
          className="mobile-only"
          style={{
            borderTop: "1px solid #ECE4D5",
            background: "#FBF8F0",
            padding: "14px clamp(18px,5vw,48px) 22px",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              style={{ padding: "12px 4px", fontSize: 17, fontWeight: 600, color: "#211C16", borderBottom: "1px solid #EEE7D8" }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <a
              href="tel:+60123456789"
              style={{ flex: 1, textAlign: "center", padding: 13, border: "1.5px solid #D7CFC0", borderRadius: 11, fontWeight: 600, color: "#3C362E", background: "#fff" }}
            >
              Call us
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              style={{ flex: 1, textAlign: "center", padding: 13, borderRadius: 11, fontWeight: 700, color: "#fff", background: "#3F8C6E" }}
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
