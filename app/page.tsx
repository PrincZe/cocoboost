import Header from "@/components/Header";

const Arrow = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const WhatsAppIcon = ({ size = 19, fill = "currentColor" }: { size?: number; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm-4.53 6.08c.21 0 .55.01.81.63.27.65.92 2.21 1 2.37.08.16.13.35.02.56-.11.21-.16.34-.32.52-.16.18-.33.41-.47.55-.16.16-.32.33-.14.65.18.32.82 1.36 1.77 2.21 1.22 1.09 2.24 1.42 2.56 1.58.32.16.51.13.69-.08.18-.21.79-.93 1-1.24.21-.32.42-.27.71-.16.29.1 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.18 1.51-.26.74-1.53 1.42-2.14 1.51-.55.08-1.24.11-2-.13-.46-.13-1.05-.3-1.8-.59-3.16-1.23-5.22-4.41-5.38-4.62-.16-.21-1.29-1.71-1.29-3.26s.81-2.32 1.1-2.63c.29-.31.63-.39.84-.39z" />
  </svg>
);

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3F8C6E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const products = [
  {
    title: "Fresh Coconut",
    desc: "Young & mature coconuts, graded and packed for wholesale volumes.",
    art: (
      <div style={{ position: "relative", height: 172, background: "#E3EADF", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", background: "#9D8569", left: -26, bottom: -26 }} />
        <div style={{ position: "absolute", width: 74, height: 74, borderRadius: "50%", background: "#C3D3BC", right: 24, top: 24 }} />
      </div>
    ),
  },
  {
    title: "Coconut Water",
    desc: "Pure young-coconut water — bottled retail packs or bulk for processing.",
    art: (
      <div style={{ position: "relative", height: 172, background: "#DCEAE6", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 110, height: 110, borderRadius: "50%", background: "#5C9C8E", right: -22, top: -22 }} />
        <div style={{ position: "absolute", width: 60, height: 88, borderRadius: 30, background: "#EEF4F1", left: 30, bottom: 18 }} />
      </div>
    ),
  },
  {
    title: "Coconut Milk & Cream",
    desc: "UHT and chilled, with custom fat content for F&B manufacturers.",
    art: (
      <div style={{ position: "relative", height: 172, background: "#EFE9DC", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 130, height: 130, borderRadius: "50%", background: "#E8E1D0", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ position: "absolute", width: 66, height: 66, borderRadius: "50%", background: "#fff", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
      </div>
    ),
  },
  {
    title: "Desiccated Coconut",
    desc: "Fine to medium grade, low-moisture and export-ready in bulk bags.",
    art: (
      <div style={{ position: "relative", height: 172, background: "#EAE4D6", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, #F2EDE2 1.5px, transparent 1.6px)", backgroundSize: "13px 13px", opacity: 0.7 }} />
        <div style={{ position: "absolute", width: 96, height: 96, borderRadius: "50%", border: "10px solid #D8CDB6", right: 20, bottom: -30 }} />
      </div>
    ),
  },
  {
    title: "Coconut Oil",
    desc: "Virgin and RBD grades for food, cosmetic and industrial buyers.",
    art: (
      <div style={{ position: "relative", height: 172, background: "#F0EBD6", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 56, height: 96, borderRadius: 14, background: "#E4D8A8", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
        <div style={{ position: "absolute", width: 30, height: 18, borderRadius: 5, background: "#C9B86E", left: "50%", top: "30%", transform: "translate(-50%,-50%)" }} />
      </div>
    ),
  },
  {
    title: "Coir & By-products",
    desc: "Husk, shell charcoal and coir fibre for industrial and agri buyers.",
    art: (
      <div style={{ position: "relative", height: 172, background: "#E6DCCB", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", background: "#B79B72", right: -30, bottom: -30 }} />
        <div style={{ position: "absolute", width: 70, height: 70, borderRadius: "50%", background: "#8B6F4E", left: 24, top: 20 }} />
      </div>
    ),
  },
];

const capabilities = [
  {
    title: "Consistent supply",
    desc: "Year-round volumes backed by our own plantations and a vetted grower network.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F8C6E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    ),
  },
  {
    title: "Competitive wholesale pricing",
    desc: "Direct-from-source economics and transparent pricing on container loads.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F8C6E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.6 13.4 11 3.8A2 2 0 0 0 9.6 3H4v5.6A2 2 0 0 0 4.6 10l9.6 9.6a2 2 0 0 0 2.8 0l3.6-3.6a2 2 0 0 0 0-2.6z" />
        <circle cx="7.5" cy="7.5" r="1.2" fill="#3F8C6E" />
      </svg>
    ),
  },
  {
    title: "OEM & private label",
    desc: "Custom formulations, packaging and your branding — from pilot to full run.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F8C6E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8 12 3 3 8l9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Export & logistics",
    desc: "Documentation, cold chain and freight handled for smooth port-to-port delivery.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F8C6E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
    ),
  },
  {
    title: "Strict quality control",
    desc: "In-line inspection and lab checks at every stage, with full traceability.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F8C6E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Sustainable sourcing",
    desc: "Responsible farming partnerships and minimal-waste use of every coconut.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3F8C6E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20c-5 0-8-3-8-8 5 0 8 3 8 8zM13 20c0-6 4-10 8-10 0 6-3 10-8 10z" />
        <path d="M12 20v-6" />
      </svg>
    ),
  },
];

const certs = [
  { tag: "HALAL", title: "Halal / JAKIM*", size: 13 },
  { tag: "HACCP", title: "HACCP*", size: 13 },
  { tag: "ISO", title: "ISO 22000*", size: 11 },
  { tag: "MeSTI", title: "MeSTI / GMP*", size: 11 },
];

const steps = [
  { n: "01", title: "Enquire", desc: "Tell us your product, grade, volume and destination via form or WhatsApp." },
  { n: "02", title: "Sample", desc: "We send specs and samples so you can verify quality before committing." },
  { n: "03", title: "Quote", desc: "Receive a clear quotation with pricing, lead time and Incoterms." },
  { n: "04", title: "Delivery", desc: "We handle packing, documentation and freight to your door or port." },
];

const container = { maxWidth: 1180, margin: "0 auto", padding: "0 clamp(18px,5vw,48px)" } as const;
const archivo = { fontFamily: "var(--font-archivo)" } as const;

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div data-screen-label="Homepage">
      <Header />

      {/* ============ HERO ============ */}
      <section id="top" style={{ padding: "clamp(44px,7vw,84px) 0 clamp(40px,6vw,72px)" }}>
        <div style={{ ...container, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px,5vw,64px)" }}>
          <div style={{ flex: "1 1 440px", minWidth: 300 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EAF1EC", color: "#2E6B52", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em", padding: "7px 14px", borderRadius: 100, marginBottom: 22 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3F8C6E" }} />
              Malaysia-grown · B2B wholesale &amp; export
            </span>
            <h1 style={{ ...archivo, fontWeight: 800, fontSize: "clamp(2.4rem,5.4vw,4.3rem)", lineHeight: 1.04, letterSpacing: "-0.03em", color: "#211C16", margin: "0 0 20px", textWrap: "balance" }}>
              Premium coconut supply, built for serious buyers.
            </h1>
            <p style={{ fontSize: "clamp(1.05rem,1.6vw,1.25rem)", color: "#5A5249", maxWidth: 520, margin: "0 0 30px" }}>
              CocoBoost supplies fresh coconuts and coconut products at scale to distributors, manufacturers, hotels and export markets — across Malaysia and beyond.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13 }}>
              <a href="#contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "15px 28px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#fff", background: "#3F8C6E", boxShadow: "0 8px 22px rgba(63,140,110,0.26)" }}>
                Request a quote
                <Arrow />
              </a>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener" className="btn-wa-outline" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "15px 26px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#1A7A40", background: "#fff", border: "1.5px solid #25D366" }}>
                <WhatsAppIcon size={19} fill="#25D366" />
                WhatsApp us
              </a>
            </div>
            {/* trust strip */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px 24px", marginTop: 34, paddingTop: 24, borderTop: "1px solid #ECE4D5" }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8175" }}>Trusted standards</span>
              {["Halal*", "HACCP*", "ISO 22000*"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14, fontWeight: 600, color: "#3C362E" }}>
                  <Check />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* hero image placeholder */}
          <div style={{ flex: "1 1 400px", minWidth: 300 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3.4", background: "#DCE7DA", borderRadius: 22, overflow: "hidden", boxShadow: "0 24px 60px -24px rgba(33,28,22,0.32)" }}>
              <div style={{ position: "absolute", width: "62%", height: "62%", borderRadius: "50%", background: "#B6CBB1", right: "-8%", top: "-10%" }} />
              <div style={{ position: "absolute", width: "46%", height: "46%", borderRadius: "50%", background: "#9D8569", left: "-8%", bottom: "6%" }} />
              <div style={{ position: "absolute", width: "30%", height: "30%", borderRadius: "50%", background: "#EEF4EC", right: "18%", bottom: "14%" }} />
              <div style={{ position: "absolute", left: 18, top: 18, background: "rgba(33,28,22,0.55)", color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", padding: "6px 11px", borderRadius: 8, backdropFilter: "blur(2px)" }}>
                PLACEHOLDER · Hero photo — fresh young coconuts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST / STATS BAR ============ */}
      <section style={{ background: "#22382F", color: "#EAF1EC" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(32px,4vw,46px) clamp(18px,5vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "28px 20px" }}>
            {[
              { val: "1,200", suffix: "+", label: "Acres under plantation*" },
              { val: "800", suffix: " MT", label: "Monthly output capacity*" },
              { val: "18", suffix: "+", label: "Years in business*" },
              { val: "20", suffix: "+", label: "Countries served*" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ ...archivo, fontWeight: 800, fontSize: "clamp(1.9rem,3vw,2.6rem)", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  {s.val}
                  <span style={{ color: "#7FBE9E" }}>{s.suffix}</span>
                </div>
                <div style={{ fontSize: 14, color: "#A9C4B6", marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginTop: 30, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7FBE9E", marginRight: 6 }}>Certified to</span>
            {["Halal / JAKIM*", "HACCP*", "ISO 22000*", "MeSTI / GMP*"].map((c) => (
              <span key={c} style={{ fontSize: 13, fontWeight: 600, padding: "7px 14px", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 100 }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section id="products" style={{ padding: "clamp(60px,8vw,110px) 0" }}>
        <div style={container}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 18, marginBottom: 42 }}>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3F8C6E" }}>Our products</span>
              <h2 style={{ ...archivo, fontWeight: 800, fontSize: "clamp(1.9rem,3.6vw,3rem)", letterSpacing: "-0.025em", color: "#211C16", margin: "12px 0 0", maxWidth: "18ch", lineHeight: 1.08 }}>
                A complete coconut range, one supplier.
              </h2>
            </div>
            <a href="#products" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px", border: "1.5px solid #D7CFC0", borderRadius: 11, fontWeight: 700, color: "#211C16", background: "#fff", flex: "0 0 auto" }}>
              View all products
              <Arrow size={16} />
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 24 }}>
            {products.map((p) => (
              <a key={p.title} href="#products" className="product-card" style={{ display: "block", background: "#fff", border: "1px solid #ECE4D5", borderRadius: 18, overflow: "hidden" }}>
                {p.art}
                <div style={{ padding: 22 }}>
                  <h3 style={{ ...archivo, fontWeight: 700, fontSize: "1.2rem", color: "#211C16", margin: "0 0 7px" }}>{p.title}</h3>
                  <p style={{ fontSize: "14.5px", color: "#6E665C", margin: "0 0 14px" }}>{p.desc}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: "#3F8C6E" }}>
                    Explore
                    <Arrow size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section id="capabilities" style={{ background: "#F3EDE0", padding: "clamp(60px,8vw,110px) 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 50px" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3F8C6E" }}>Why choose CocoBoost</span>
            <h2 style={{ ...archivo, fontWeight: 800, fontSize: "clamp(1.9rem,3.6vw,3rem)", letterSpacing: "-0.025em", color: "#211C16", margin: "12px 0 0", lineHeight: 1.08 }}>
              A supply partner you can plan around.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 20 }}>
            {capabilities.map((c) => (
              <div key={c.title} style={{ background: "#fff", border: "1px solid #EAE2D2", borderRadius: 18, padding: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "#EAF1EC", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  {c.icon}
                </div>
                <h3 style={{ ...archivo, fontWeight: 700, fontSize: "1.18rem", color: "#211C16", margin: "0 0 8px" }}>{c.title}</h3>
                <p style={{ fontSize: "14.5px", color: "#6E665C", margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT / SOURCING ============ */}
      <section id="about" style={{ padding: "clamp(60px,8vw,110px) 0" }}>
        <div style={{ ...container, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px,5vw,64px)" }}>
          <div style={{ flex: "1 1 380px", minWidth: 300, order: 1 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3.2", background: "#D4E0CF", borderRadius: 22, overflow: "hidden", boxShadow: "0 24px 56px -28px rgba(33,28,22,0.35)" }}>
              <div style={{ position: "absolute", width: "55%", height: "70%", background: "#A9BE9F", left: 0, bottom: 0, borderRadius: "0 40px 0 0" }} />
              <div style={{ position: "absolute", width: "45%", height: "55%", background: "#8AA67C", right: "-6%", bottom: "-6%", borderRadius: "50px 0 0 0" }} />
              <div style={{ position: "absolute", width: 90, height: 90, borderRadius: "50%", background: "#EDE0C6", right: "18%", top: "14%" }} />
              <div style={{ position: "absolute", left: 18, top: 18, background: "rgba(33,28,22,0.55)", color: "#fff", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", padding: "6px 11px", borderRadius: 8 }}>
                PLACEHOLDER · Plantation / processing photo
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 380px", minWidth: 300, order: 2 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3F8C6E" }}>Our story</span>
            <h2 style={{ ...archivo, fontWeight: 800, fontSize: "clamp(1.8rem,3.4vw,2.7rem)", letterSpacing: "-0.025em", color: "#211C16", margin: "12px 0 18px", lineHeight: 1.1 }}>
              From Malaysian plantations to global shelves.
            </h2>
            <p style={{ fontSize: 16, color: "#5A5249", margin: "0 0 16px" }}>
              CocoBoost grows, processes and exports coconut products from estates across Malaysia. By owning more of the supply chain — from the tree to the container — we keep quality high and lead times predictable for the businesses that depend on us.*
            </p>
            <p style={{ fontSize: 16, color: "#5A5249", margin: "0 0 26px" }}>
              Our sourcing model pairs company-managed plantations with long-term smallholder partnerships, so volume scales without compromising on grade.*
            </p>
            <a href="#about" className="btn-about" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "13px 24px", border: "1.5px solid #3F8C6E", borderRadius: 11, fontWeight: 700, color: "#3F8C6E" }}>
              About us
              <Arrow size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATIONS ============ */}
      <section id="resources" style={{ background: "#F3EDE0", padding: "clamp(54px,7vw,90px) 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3F8C6E" }}>Quality &amp; compliance</span>
            <h2 style={{ ...archivo, fontWeight: 800, fontSize: "clamp(1.7rem,3.2vw,2.5rem)", letterSpacing: "-0.025em", color: "#211C16", margin: "12px 0 10px", lineHeight: 1.1 }}>
              Certifications buyers can audit.
            </h2>
            <p style={{ fontSize: 15, color: "#6E665C", margin: 0 }}>
              Logos and certificate numbers below are placeholders — replace with your verified, current certifications.*
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 18 }}>
            {certs.map((c) => (
              <div key={c.tag} style={{ background: "#fff", border: "1px solid #EAE2D2", borderRadius: 16, padding: 26, textAlign: "center" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", border: "2px dashed #C9BEA9", margin: "0 auto 14px", display: "flex", alignItems: "center", justifyContent: "center", ...archivo, fontWeight: 800, color: "#3F8C6E", fontSize: c.size }}>
                  {c.tag}
                </div>
                <h3 style={{ ...archivo, fontWeight: 700, fontSize: "1.05rem", color: "#211C16", margin: "0 0 4px" }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "#8A8175", margin: 0 }}>Cert no. — to be added</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section style={{ padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={container}>
          <p style={{ textAlign: "center", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8175", margin: "0 0 28px" }}>
            Trusted by buyers across F&amp;B, retail &amp; export — sample logos*
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 14, marginBottom: 48 }}>
            {[
              { name: "NORTHBAY", weight: 800, size: 17, style: "normal" },
              { name: "Pacific F&B", weight: 700, size: 17, style: "normal" },
              { name: "SAJI GROUP", weight: 800, size: 17, style: "normal" },
              { name: "Verdant", weight: 700, size: 18, style: "italic" },
              { name: "KOMBO RETAIL", weight: 800, size: 16, style: "normal" },
              { name: "EastPort", weight: 700, size: 17, style: "normal" },
            ].map((logo) => (
              <div key={logo.name} style={{ height: 74, border: "1px solid #ECE4D5", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", ...archivo, fontWeight: logo.weight, letterSpacing: "0.04em", color: "#B3A892", fontSize: logo.size, fontStyle: logo.style as "normal" | "italic" }}>
                {logo.name}
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 820, margin: "0 auto", background: "#22382F", borderRadius: 24, padding: "clamp(32px,5vw,56px)", color: "#EAF1EC", position: "relative" }}>
            <svg width="46" height="46" viewBox="0 0 24 24" fill="#3F8C6E" style={{ marginBottom: 18 }}>
              <path d="M10 8c-3 0-5 2-5 5s2 4 4 4c1 0 2-.6 2-1.8 0-2-3-1.2-3-3.2 0-1 1-2 3-2V8zm9 0c-3 0-5 2-5 5s2 4 4 4c1 0 2-.6 2-1.8 0-2-3-1.2-3-3.2 0-1 1-2 3-2V8z" />
            </svg>
            <p style={{ ...archivo, fontWeight: 600, fontSize: "clamp(1.2rem,2.4vw,1.7rem)", lineHeight: 1.4, letterSpacing: "-0.01em", color: "#fff", margin: "0 0 26px", textWrap: "balance" }}>
              &ldquo;CocoBoost has been our most reliable coconut supplier — consistent grade, on-time containers, and a team that actually picks up the phone.&rdquo;*
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#3F8C6E", display: "flex", alignItems: "center", justifyContent: "center", ...archivo, fontWeight: 800, color: "#fff" }}>PL</div>
              <div>
                <div style={{ fontWeight: 700, color: "#fff" }}>Procurement Lead*</div>
                <div style={{ fontSize: 14, color: "#A9C4B6" }}>[Client company — placeholder]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW TO ORDER ============ */}
      <section style={{ background: "#F3EDE0", padding: "clamp(60px,8vw,100px) 0" }}>
        <div style={container}>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 50px" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3F8C6E" }}>How to order</span>
            <h2 style={{ ...archivo, fontWeight: 800, fontSize: "clamp(1.8rem,3.4vw,2.7rem)", letterSpacing: "-0.025em", color: "#211C16", margin: "12px 0 0", lineHeight: 1.1 }}>
              Four steps from enquiry to delivery.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #EAE2D2", borderRadius: 18, padding: 28 }}>
                <div style={{ ...archivo, fontWeight: 800, fontSize: "1.5rem", color: "#3F8C6E", marginBottom: 14 }}>{s.n}</div>
                <h3 style={{ ...archivo, fontWeight: 700, fontSize: "1.15rem", color: "#211C16", margin: "0 0 7px" }}>{s.title}</h3>
                <p style={{ fontSize: "14.5px", color: "#6E665C", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="contact" style={{ padding: "clamp(40px,6vw,72px) clamp(18px,5vw,48px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", background: "#3F8C6E", borderRadius: 28, padding: "clamp(40px,6vw,76px) clamp(28px,5vw,64px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.07)", right: -80, top: -80 }} />
          <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", left: -60, bottom: -90 }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ ...archivo, fontWeight: 800, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.025em", color: "#fff", margin: "0 0 14px", lineHeight: 1.06, textWrap: "balance" }}>
              Ready to source coconut at scale?
            </h2>
            <p style={{ fontSize: "clamp(1rem,1.7vw,1.2rem)", color: "#DCEAE0", maxWidth: 520, margin: "0 auto 32px" }}>
              Request a quote or message us on WhatsApp — we typically reply within one business day.*
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 13, justifyContent: "center" }}>
              <a href="#contact" className="btn-white" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "16px 30px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#22382F", background: "#fff" }}>
                Request a quote
                <Arrow />
              </a>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener" className="btn-wa" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "16px 28px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#fff", background: "#25D366" }}>
                <WhatsAppIcon size={19} fill="#fff" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{ background: "#1C2A23", color: "#B9CCC0", padding: "clamp(48px,6vw,72px) clamp(18px,5vw,48px) 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "38px 28px", paddingBottom: 44 }}>
          <div style={{ gridColumn: "1/-1", maxWidth: 340 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
              <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#3F8C6E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" fill="#1C2A23" />
                  <circle cx="9.5" cy="10" r="1.3" fill="#fff" />
                  <circle cx="14.5" cy="10" r="1.3" fill="#fff" />
                  <path d="M9 14.5c1.6 1.4 4.4 1.4 6 0" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              <span style={{ ...archivo, fontWeight: 800, fontSize: 20, color: "#fff" }}>
                Coco<span style={{ color: "#7FBE9E" }}>Boost</span>
              </span>
            </div>
            <p style={{ fontSize: "14.5px", color: "#90A89A", margin: "0 0 16px", maxWidth: 300 }}>
              Premium coconut supply for distributors, manufacturers, hospitality and export buyers across Malaysia and beyond.
            </p>
            <p style={{ fontSize: "13.5px", color: "#7C988A", margin: 0, lineHeight: 1.7 }}>
              Lot 00, Jalan Industri 0/0,<br />00000 Selangor, Malaysia*<br />+60 12-345 6789* · sales@mycocoboost.com*
            </p>
          </div>

          <div>
            <h4 style={{ ...archivo, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff", margin: "0 0 16px" }}>Products</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: "14.5px" }}>
              {["Fresh coconut", "Coconut water", "Milk & cream", "Desiccated coconut", "Coconut oil"].map((t) => (
                <a key={t} href="#products" className="footer-link">{t}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ ...archivo, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff", margin: "0 0 16px" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: "14.5px" }}>
              <a href="#capabilities" className="footer-link">Capabilities</a>
              <a href="#about" className="footer-link">About us</a>
              <a href="#resources" className="footer-link">Certifications</a>
              <a href="#resources" className="footer-link">Resources</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div>
            <h4 style={{ ...archivo, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff", margin: "0 0 16px" }}>Get in touch</h4>
            <a href="#contact" className="btn-white" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 18px", borderRadius: 11, fontWeight: 700, color: "#22382F", background: "#fff", fontSize: 14, marginBottom: 12 }}>
              Request a quote
            </a>
            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener" aria-label="WhatsApp" className="social-wa" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WhatsAppIcon size={18} />
              </a>
              <a href="#contact" aria-label="Email" className="social-icon" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
              <a href="#contact" aria-label="LinkedIn" className="social-icon" style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1180, margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "22px 0 30px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <p style={{ fontSize: 13, color: "#7C988A", margin: 0 }}>© {year} CocoBoost Sdn. Bhd.* · All rights reserved.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Halal*", "HACCP*", "ISO 22000*", "MeSTI / GMP*"].map((t) => (
              <span key={t} style={{ fontSize: "11.5px", fontWeight: 600, color: "#90A89A", padding: "5px 11px", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 100 }}>{t}</span>
            ))}
          </div>
        </div>
        <p style={{ maxWidth: 1180, margin: "0 auto", fontSize: "11.5px", color: "#5E7468", paddingBottom: 26 }}>
          * Placeholder content. Replace company details, statistics, certifications, client names and testimonials with verified information before publishing.
        </p>
      </footer>

      {/* ============ FLOATING WHATSAPP ============ */}
      <a href="https://wa.me/60123456789" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" className="float-wa" style={{ position: "fixed", right: 20, bottom: 20, zIndex: 80, width: 58, height: 58, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 28px rgba(37,211,102,0.45)" }}>
        <WhatsAppIcon size={30} fill="#fff" />
      </a>
    </div>
  );
}
