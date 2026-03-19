import { useState, useEffect, useRef } from "react";
import "./styles.css";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const NAV_ITEMS = [
  { label: "AC & Heating", href: "#" },
  { label: "Plumbing", href: "#" },
  { label: "Electrical", href: "#" },
  { label: "Special Offers", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const SERVICES = [
  {
    icon: "❄️",
    title: "AC & Heating",
    desc: "Keep your home comfortable year-round with expert HVAC installation, repair, and maintenance services.",
  },
  {
    icon: "🔧",
    title: "Plumbing",
    desc: "From leaky faucets to full system installations, our licensed plumbers handle every job with precision.",
  },
  {
    icon: "⚡",
    title: "Electrical",
    desc: "Safe, certified electrical work for your home — panels, outlets, surge protection, and more.",
  },
];

const TESTIMONIALS = [
  { name: "Timothy Fuller", time: "1 day ago", text: "Replacement of faulty products done perfectly. Professional and on time!" },
  { name: "Lois Cox", time: "2 days ago", text: "Chris Crawford was our technician today and he went above and beyond for us. Truly exceptional service." },
  { name: "Kate Stark", time: "2 days ago", text: "Nick provided excellent plumbing service from start to finish. He communicated clearly, showed up on time, and quickly resolved our clogged kitchen drain." },
  { name: "Alonzo McMorris", time: "2 days ago", text: "They replaced my HVAC system today and the technicians did an outstanding job! So happy to get this unit done!" },
  { name: "Paula Norman", time: "2 days ago", text: "I was very pleased with Will Smith. He knew what he had to do once he located my problems and had everything he needed to fix my issues." },
  { name: "Zanyah Smalls", time: "3 days ago", text: "Sam was very professional and knowledgeable about the installation of our water heater. I highly recommend Simpsonville AC Repair for all your home service needs." },
];

const FAQS = [
  {
    q: "Why is humidity management a unique challenge for Simpsonville HVAC systems?",
    a: "The Piedmont climate produces high levels of ambient humidity that can overwhelm standard residential cooling equipment. Your AC must function as a high-capacity dehumidifier before it can effectively lower indoor temperatures. Our technicians recalibrate blower speeds and refrigerant levels to optimize moisture extraction.",
  },
  {
    q: "How does the regional water supply impact appliance longevity?",
    a: "Water in Greenville County often contains high concentrations of dissolved minerals that form hard scale inside tankless water heaters, dishwashers, and laundry equipment. We provide specialized descaling treatments and point-of-entry filtration to neutralize these deposits.",
  },
  {
    q: "What causes drainage issues in Simpsonville's newer subdivisions?",
    a: "The Golden Strip's topography features complex grading designed to manage heavy rainfall. When drainage systems become obstructed by debris or root intrusion, hydrostatic pressure can stress your plumbing. We use fiber-optic imaging to monitor the structural integrity of your waste lines.",
  },
  {
    q: "Should I prioritize surge protection for my smart home systems?",
    a: "Absolutely. Grid switching and Upstate storms cause frequent voltage spikes that damage sensitive control boards in HVAC, security systems, and high-value electronics. We install Type 2 surge suppressors at the main electrical panel to block excess voltage before it reaches interior circuits.",
  },
  {
    q: "How does proximity to major roads affect my indoor air quality?",
    a: "Homes near Highway 14 and Fairview Road are exposed to higher levels of ambient particulate matter. These micro particles can bypass standard filters and settle on cooling coils, reducing efficiency. We install HEPA systems and provide deep mechanical cleaning of HVAC components.",
  },
];

function StarRating() {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FFD700">
          <path d="M10 1l2.4 7.2H20l-6.2 4.5 2.4 7.2L10 15.5l-6.2 4.4 2.4-7.2L0 8.2h7.6z" />
        </svg>
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 10,
        marginBottom: 12,
        overflow: "hidden",
        background: "#fff",
        boxShadow: open ? "0 4px 20px rgba(0,47,135,0.08)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "18px 22px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          color: "#002F87",
        }}
      >
        <span>{q}</span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 300,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
            color: "#DC2626",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p style={{ padding: "0 22px 18px", margin: 0, color: "#475569", lineHeight: 1.7, fontSize: 14, fontFamily: "Roboto, sans-serif" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "#002F87", color: "#fff", fontSize: 12, padding: "6px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>📍 Serving Simpsonville & Greenville Areas</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>💼 Careers</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>🎉 No Payments Until 2027!</span>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
            📞 <strong>864-791-5340</strong>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        style={{
          background: "#fff",
          boxShadow: scrolled ? "0 4px 24px rgba(0,47,135,0.15)" : "0 2px 8px rgba(0,0,0,0.06)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "linear-gradient(135deg, #002F87, #DC2626)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, flexShrink: 0
            }}>❄️</div>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 17, color: "#002F87", lineHeight: 1.1 }}>
                SIMPSONVILLE
              </div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#DC2626", lineHeight: 1.1 }}>
                AC REPAIR
              </div>
              <div style={{ fontSize: 9, color: "#64748b", fontFamily: "Roboto, sans-serif", letterSpacing: 0.5 }}>
                COOLING · HEATING · PLUMBING · ELECTRICAL
              </div>
            </div>
          </div>

          {/* Center tagline */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#002F87" }}>
              MOST TRUSTED. MOST CONVENIENT. MOST EXPERIENCED.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
              <StarRating />
              <span style={{ fontSize: 12, color: "#64748b", fontFamily: "Roboto, sans-serif" }}>4.8 Google Rating</span>
            </div>
          </div>

          {/* Book now */}
          <a
            href="#contact"
            style={{
              background: "linear-gradient(135deg, #DC2626, #991B1B)",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              padding: "10px 22px",
              borderRadius: 25,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 16px rgba(220,38,38,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 8px 24px rgba(220,38,38,0.5)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.transform = "translateY(0)"; (e.target as HTMLElement).style.boxShadow = "0 4px 16px rgba(220,38,38,0.4)"; }}
          >
            📅 BOOK NOW
          </a>
        </div>

        {/* Nav links */}
        <div style={{ background: "#002F87", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", gap: 0 }}>
            {NAV_ITEMS.map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  borderBottom: "3px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.color = "#FCA5A5"; el.style.borderBottomColor = "#DC2626"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.color = "#fff"; el.style.borderBottomColor = "transparent"; }}
              >
                {item.label} {["AC & Heating", "Plumbing", "Electrical", "Special Offers", "About"].includes(item.label) ? "▾" : ""}
              </a>
            ))}
            <a
              href="#"
              style={{
                marginLeft: "auto",
                background: "#DC2626",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                padding: "8px 20px",
                borderRadius: 4,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              🔍
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div style={{ position: "relative", minHeight: 480, overflow: "hidden", background: "linear-gradient(135deg, #001a5e 0%, #002F87 50%, #1a3a8f 100%)" }}>
      {/* Animated background stars/particles */}
      <div className="hero-particles" />

      {/* Flag stripe accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "linear-gradient(90deg, #DC2626 33%, #fff 33%, #fff 66%, #002F87 66%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px", display: "flex", alignItems: "center", gap: 40, minHeight: 480 }}>
        {/* Left content */}
        <div style={{ flex: "1 1 55%", color: "#fff" }}>
          {/* Rating badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 30,
              padding: "6px 14px",
              marginBottom: 24,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
              backdropFilter: "blur(8px)",
            }}
          >
            <StarRating />
            <span style={{ fontFamily: "Roboto, sans-serif", fontSize: 13, color: "#e2e8f0" }}>
              Trusted by 7,445+ Customers
            </span>
            <span style={{ fontSize: 14 }}>🇺🇸</span>
          </div>

          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              margin: "0 0 20px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.2s",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            <span style={{ color: "#fff" }}>AC Repair &amp; HVAC Services</span>
            <br />
            <span style={{ color: "#FCA5A5" }}>in Simpsonville, SC</span>
          </h1>

          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#cbd5e1",
              margin: "0 0 32px",
              maxWidth: 520,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.35s",
            }}
          >
            Simpsonville's most trusted heating, cooling, plumbing, and electrical experts. Locally owned, fully licensed, and ready to serve your home 24/7.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.5s",
            }}
          >
            <a
              href="#contact"
              style={{
                background: "linear-gradient(135deg, #DC2626, #B91C1C)",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 30px",
                borderRadius: 30,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 6px 24px rgba(220,38,38,0.5)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget).style.transform = "translateY(-3px) scale(1.02)"; }}
              onMouseLeave={e => { (e.currentTarget).style.transform = "translateY(0) scale(1)"; }}
            >
              📅 Schedule Service Today
            </a>
            <a
              href="tel:8647915340"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "2px solid rgba(255,255,255,0.4)",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 30px",
                borderRadius: 30,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                backdropFilter: "blur(8px)",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget).style.background = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget).style.background = "rgba(255,255,255,0.12)"; }}
            >
              📞 864-791-5340
            </a>
          </div>
        </div>

        {/* Right image */}
        <div
          style={{
            flex: "1 1 40%",
            position: "relative",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(60px)",
            transition: "all 0.9s ease 0.3s",
          }}
        >
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            border: "3px solid rgba(255,255,255,0.2)",
            position: "relative",
          }}>
            <img
              src="/__mockup/images/hero-technician.png"
              alt="Simpsonville AC Repair Technician"
              style={{ width: "100%", display: "block", maxHeight: 360, objectFit: "cover" }}
            />
            {/* Offer badge overlay */}
            <div style={{
              position: "absolute",
              top: 16, right: 16,
              background: "linear-gradient(135deg, #DC2626, #991B1B)",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              borderRadius: 12,
              padding: "12px 16px",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(220,38,38,0.5)",
              animation: "pulse-badge 2s ease-in-out infinite",
            }}>
              <div style={{ fontSize: 22, fontWeight: 800 }}>$100 OFF</div>
              <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.9 }}>AC Repair Service</div>
              <div style={{ fontSize: 10, opacity: 0.8, marginTop: 2 }}>Book Today!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalFactors() {
  const factors = [
    { icon: "☀️", title: "Extended Summer Heat", desc: "Long stretches of warm weather push cooling systems hard, especially during peak summer months when humidity climbs." },
    { icon: "🏘️", title: "Rapid Housing Growth", desc: "Simpsonville continues to attract new residential development, meaning system needs vary widely across neighborhoods." },
    { icon: "⛈️", title: "Storm Activity", desc: "Afternoon thunderstorms are common in the Upstate. Lightning and sudden downpours can affect electrical components." },
    { icon: "👨‍👩‍👧‍👦", title: "Busy Household Usage", desc: "With many growing families in the area, water heaters, cooling systems, and electrical circuits work hard daily." },
  ];

  return (
    <section style={{ padding: "80px 20px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: "#DC2626", textTransform: "uppercase", letterSpacing: 3 }}>
              LOCAL EXPERTISE
            </span>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#002F87", margin: "10px 0 0" }}>
              Local Factors That Affect Simpsonville Homes
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {factors.map((f, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "28px 24px",
                  boxShadow: "0 2px 16px rgba(0,47,135,0.06)",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 12px 40px rgba(0,47,135,0.14)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 2px 16px rgba(0,47,135,0.06)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#002F87", margin: "0 0 10px" }}>
                  {f.title}
                </h3>
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: 14, color: "#475569", lineHeight: 1.7, margin: 0 }}>
                  {f.desc}
                </p>
                <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #DC2626, #002F87)", borderRadius: 2, marginTop: 16 }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section style={{ padding: "80px 20px", background: "linear-gradient(135deg, #002F87 0%, #001a5e 100%)", position: "relative", overflow: "hidden" }}>
      <div className="section-wave-bg" />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: "#FCA5A5", textTransform: "uppercase", letterSpacing: 3 }}>
              OUR EXPERTISE
            </span>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#fff", margin: "10px 0 0" }}>
              Essential Systems We Support
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {SERVICES.map((s, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 20,
                  padding: "36px 28px",
                  textAlign: "center",
                  backdropFilter: "blur(12px)",
                  transition: "background 0.3s, transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.15)"; el.style.transform = "translateY(-8px)"; el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.08)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: 52, marginBottom: 18 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", margin: "0 0 12px" }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: 14, color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 24px" }}>
                  {s.desc}
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "linear-gradient(135deg, #DC2626, #B91C1C)",
                    color: "#fff",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    padding: "10px 22px",
                    borderRadius: 25,
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(220,38,38,0.35)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget).style.transform = "scale(1.05)"; }}
                  onMouseLeave={e => { (e.currentTarget).style.transform = "scale(1)"; }}
                >
                  Learn More →
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: "80px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: "#DC2626", textTransform: "uppercase", letterSpacing: 3 }}>
              TESTIMONIALS
            </span>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#002F87", margin: "10px 0 8px" }}>
              Hear From Our Satisfied Customers
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <StarRating />
              <span style={{ fontFamily: "Roboto, sans-serif", fontSize: 14, color: "#64748b" }}>4.8 Google Rating</span>
            </div>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 40 }}>
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                style={{
                  background: i % 3 === 0 ? "#f0f4ff" : i % 3 === 1 ? "#fff5f5" : "#fff",
                  border: `1px solid ${i % 3 === 0 ? "#c7d7ff" : i % 3 === 1 ? "#fecaca" : "#e2e8f0"}`,
                  borderTop: `3px solid ${i % 3 === 0 ? "#002F87" : i % 3 === 1 ? "#DC2626" : "#64748b"}`,
                  borderRadius: 16,
                  padding: "24px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 32px rgba(0,47,135,0.10)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <StarRating />
                <p style={{ fontFamily: "Roboto, sans-serif", fontSize: 14, color: "#334155", lineHeight: 1.7, margin: "12px 0 16px", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "linear-gradient(135deg, #002F87, #DC2626)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#002F87" }}>{t.name}</div>
                    <div style={{ fontFamily: "Roboto, sans-serif", fontSize: 11, color: "#94a3b8" }}>{t.time}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ textAlign: "center" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: "2px solid #002F87",
                color: "#002F87",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 28px",
                borderRadius: 30,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#002F87"; el.style.color = "#fff"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#fff"; el.style.color = "#002F87"; }}
            >
              View All Reviews →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section style={{ padding: "80px 20px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: "#DC2626", textTransform: "uppercase", letterSpacing: 3 }}>
              FAQ
            </span>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#002F87", margin: "10px 0 0" }}>
              Expert Answers to Common Questions
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div>
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, inView } = useInView(0.3);
  return (
    <section
      ref={ref}
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #DC2626 0%, #991B1B 50%, #7f1d1d 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div className="cta-flag-stripes" />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.8)",
            transition: "all 0.6s ease",
          }}
        >
          <div style={{ fontSize: 60, marginBottom: 16 }}>❄️</div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#fff", margin: "0 0 16px" }}>
            Schedule Service Today!
          </h2>
          <p style={{ fontFamily: "Roboto, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.85)", margin: "0 0 36px", lineHeight: 1.7 }}>
            Don't wait for a breakdown. Our licensed technicians are ready to keep your home comfortable and safe year-round.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                background: "#fff",
                color: "#DC2626",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: 16,
                padding: "16px 36px",
                borderRadius: 30,
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget).style.transform = "translateY(-4px) scale(1.03)"; }}
              onMouseLeave={e => { (e.currentTarget).style.transform = "translateY(0) scale(1)"; }}
            >
              📅 Book Online Now
            </a>
            <a
              href="tel:8647915340"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.5)",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 36px",
                borderRadius: 30,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={e => { (e.currentTarget).style.background = "rgba(255,255,255,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget).style.background = "rgba(255,255,255,0.15)"; }}
            >
              📞 Call 864-791-5340
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#001540", color: "#e2e8f0", padding: "60px 20px 30px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "linear-gradient(135deg, #002F87, #DC2626)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
              }}>❄️</div>
              <div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 16, color: "#fff" }}>SIMPSONVILLE</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: "#FCA5A5" }}>AC REPAIR</div>
              </div>
            </div>
            <p style={{ fontFamily: "Roboto, sans-serif", fontSize: 13, color: "#94a3b8", lineHeight: 1.7, margin: "0 0 16px" }}>
              Simpsonville's most trusted home services company. Serving our community with pride.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["f", "in", "tw"].map(s => (
                <div key={s} style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#94a3b8", fontSize: 12, cursor: "pointer",
                  transition: "background 0.2s",
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", margin: "0 0 16px" }}>Services</h4>
            {["AC Repair & Installation", "Heating Systems", "Plumbing Services", "Electrical Work", "Drain Cleaning", "Water Heaters"].map(s => (
              <a key={s} href="#" style={{ display: "block", fontFamily: "Roboto, sans-serif", fontSize: 13, color: "#94a3b8", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget).style.color = "#FCA5A5"; }}
                onMouseLeave={e => { (e.currentTarget).style.color = "#94a3b8"; }}
              >{s}</a>
            ))}
          </div>

          {/* Areas */}
          <div>
            <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", margin: "0 0 16px" }}>Service Areas</h4>
            {["Simpsonville, SC", "Greenville, SC", "Mauldin, SC", "Fountain Inn, SC", "Pelzer, SC", "Greer, SC"].map(a => (
              <a key={a} href="#" style={{ display: "block", fontFamily: "Roboto, sans-serif", fontSize: 13, color: "#94a3b8", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget).style.color = "#FCA5A5"; }}
                onMouseLeave={e => { (e.currentTarget).style.color = "#94a3b8"; }}
              >{a}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", margin: "0 0 16px" }}>Contact Us</h4>
            <div style={{ fontFamily: "Roboto, sans-serif", fontSize: 13, color: "#94a3b8", lineHeight: 2 }}>
              <div>📞 864-791-5340</div>
              <div>📍 Simpsonville, SC 29681</div>
              <div>✉️ service@simpsonvilleac.com</div>
              <div style={{ marginTop: 12, color: "#4ade80" }}>✅ Licensed & Insured</div>
              <div style={{ color: "#4ade80" }}>✅ Same-Day Service Available</div>
              <div style={{ color: "#4ade80" }}>✅ No Payments Until 2027</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "Roboto, sans-serif", fontSize: 12, color: "#64748b", margin: 0 }}>
            © 2026 Simpsonville AC Repair. All rights reserved. Licensed Contractor SC #12345
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(l => (
              <a key={l} href="#" style={{ fontFamily: "Roboto, sans-serif", fontSize: 12, color: "#64748b", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "Roboto, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <LocalFactors />
      <Services />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
