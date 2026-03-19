import { useState, useEffect, useRef } from "react";
import "./styles.css";

/* ─── Hooks ─── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, dir = "up", className = "" }: { children: React.ReactNode; delay?: number; dir?: "up" | "left" | "right" | "scale"; className?: string }) {
  const { ref, inView } = useInView();
  const hidden = dir === "up" ? "translateY(36px)" : dir === "left" ? "translateX(-36px)" : dir === "right" ? "translateX(36px)" : "scale(0.92)";
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : hidden, transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── Stars ─── */
function Stars({ n = 5, size = 14, color = "#FFD700" }: { n?: number; size?: number; color?: string }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={color}><path d="M10 1l2.4 7.2H20l-6.2 4.5 2.4 7.2L10 15.5l-6.2 4.4 2.4-7.2L0 8.2h7.6z" /></svg>
      ))}
    </span>
  );
}

/* ─── TOP ANNOUNCEMENT BAR ─── */
function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <span className="topbar-item">📍 Serving Simpsonville &amp; Greenville Areas</span>
        <span className="topbar-sep">|</span>
        <span className="topbar-item">💼 Careers</span>
        <span className="topbar-sep">|</span>
        <span className="topbar-item">🎉 Buy a New HVAC System. No Payments Until 2027!</span>
      </div>
    </div>
  );
}

/* ─── MAIN HEADER ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      {/* Row 1 */}
      <div className="header-row1">
        <div className="header-inner">
          {/* Logo */}
          <a href="#" className="logo-wrap">
            <div className="logo-icon">❄️</div>
            <div className="logo-text">
              <div className="logo-line1">SIMPSONVILLE</div>
              <div className="logo-line2">AC REPAIR</div>
              <div className="logo-line3">COOLING · HEATING · PLUMBING · ELECTRICAL</div>
            </div>
          </a>

          {/* Center tagline */}
          <div className="header-tagline">
            <div className="tagline-main">MOST TRUSTED. MOST CONVENIENT. MOST EXPERIENCED.</div>
            <div className="tagline-rating">
              <Stars size={15} />
              <span className="tagline-rating-text">4.8 Google Rating</span>
            </div>
          </div>

          {/* Phone numbers */}
          <div className="header-phones">
            <a href="tel:8647915340" className="phone-block">
              <div className="phone-icon">📞</div>
              <div>
                <div className="phone-city">Greenville</div>
                <div className="phone-num">864-791-5340</div>
              </div>
            </a>
            <a href="tel:8433809450" className="phone-block">
              <div className="phone-icon">📞</div>
              <div>
                <div className="phone-city">Simpsonville</div>
                <div className="phone-num">864-380-9450</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 – Nav bar */}
      <div className="header-row2">
        <div className="header-inner">
          <nav className="main-nav">
            {["AC &amp; Heating", "Plumbing", "Electrical", "Special Offers", "About", "Contact"].map((item, i) => (
              <a key={i} href="#" className="nav-item" dangerouslySetInnerHTML={{ __html: item + (i < 5 ? " <span class='nav-chevron'>▾</span>" : "") }} />
            ))}
          </nav>
          <div className="nav-actions">
            <button className="nav-search" aria-label="Search">🔍</button>
            <a href="#contact" className="book-now-btn">
              <span>📅</span> BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─── HERO SECTION ─── */
function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 80); }, []);

  return (
    <section className="hero-section">
      {/* Flag accent stripe */}
      <div className="hero-stripe" />
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-inner">
        {/* Left col */}
        <div className="hero-left">
          {/* Rating pill */}
          <a
            href="#reviews"
            className="hero-rating-pill"
            style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(16px)", transition: "all .6s ease .1s" }}
          >
            <Stars size={15} />
            <span>Trusted by 7445+ Customers</span>
            <span className="google-g">G</span>
          </a>

          <h1
            className="hero-h1"
            style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(28px)", transition: "all .7s ease .2s" }}
          >
            AC Repair &amp; HVAC Services<br />
            <span className="hero-h1-accent">in Simpsonville, SC</span>
          </h1>

          <p
            className="hero-sub"
            style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)", transition: "all .7s ease .35s" }}
          >
            Simpsonville's most trusted heating, cooling, plumbing, and electrical experts. Locally owned, fully licensed, and ready 24/7.
          </p>

          <div
            className="hero-ctas"
            style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)", transition: "all .7s ease .5s" }}
          >
            <a href="#contact" className="btn-primary-red">📅 Schedule Service Today</a>
            <a href="tel:8647915340" className="btn-outline-white">📞 864-791-5340</a>
          </div>
        </div>

        {/* Right col – hero image */}
        <div
          className="hero-right"
          style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateX(50px)", transition: "all .9s ease .3s" }}
        >
          <img src="/__mockup/images/hero-technician.png" alt="Simpsonville AC Repair Technician" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

/* ─── CONTENT + OFFER SIDEBAR ─── */
function ContentWithOffer() {
  return (
    <section className="content-offer-section">
      <div className="content-offer-inner">
        {/* Main text */}
        <div className="content-text">
          <Reveal>
            <p>Simpsonville has become one of the most active residential communities in the Greenville area. Neighborhoods continue expanding across the city while long-established homes remain a central part of the community. With more families moving into the area each year, homes rely heavily on dependable systems that keep everyday life running smoothly.</p>
          </Reveal>
          <Reveal delay={80}>
            <p>Heating and cooling systems help manage the Upstate's hot summers and cooler winter nights. Plumbing systems support daily water use throughout the home. Electrical systems power everything from lighting to modern appliances and home technology.</p>
          </Reveal>
          <Reveal delay={160}>
            <p>Simpsonville AC Repair works with homeowners across Simpsonville to support these essential systems. Our technicians regularly assist homes throughout the area, helping ensure the systems behind the walls and ceilings continue operating reliably.</p>
          </Reveal>
        </div>

        {/* Offer card */}
        <Reveal dir="left" delay={100}>
          <div className="offer-card">
            <div className="offer-badge">$100 OFF</div>
            <div className="offer-service">AC Tune-Up &amp; Repair</div>
            <div className="offer-condition">WHEN YOU BOOK A SEASONAL MAINTENANCE VISIT</div>
            <div className="offer-disclaimer">
              <span className="offer-disclaimer-toggle">Disclaimer ↓</span>
            </div>
            <a href="#contact" className="offer-cta-btn">📅 SCHEDULE NOW</a>
            <div className="offer-thumb">
              <img src="/__mockup/images/hero-technician.png" alt="Technician" className="offer-thumb-img" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── LOCAL FACTORS ─── */
function LocalFactors() {
  const factors = [
    { title: "Extended summer heat", body: "Summers across the Greenville area bring long stretches of warm weather. Cooling systems often run throughout the day, especially during peak summer months when humidity levels climb." },
    { title: "Rapid housing growth", body: "Simpsonville continues to attract new residential development. Many homes are part of newer subdivisions, while others have been part of the community for decades. This mix of housing means system needs can vary widely across neighborhoods." },
    { title: "Storm activity during warmer months", body: "Afternoon thunderstorms are common in the Upstate during the summer. Sudden downpours and lightning can occasionally affect electrical components or expose weaknesses in plumbing systems." },
    { title: "Busy household usage", body: "With many growing families living in the area, household systems often see heavy daily use. Water heaters, cooling systems, and electrical circuits all work hard to support modern living." },
  ];

  return (
    <section className="local-factors-section">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-h2-caps">Local Factors That Affect Simpsonville Homes</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="section-lead">Like much of the Upstate, Simpsonville homes deal with environmental conditions that can place steady demand on household systems.</p>
        </Reveal>
        {factors.map((f, i) => (
          <Reveal key={i} delay={i * 60}>
            <p className="factor-para"><strong>{f.title}</strong><br />{f.body}</p>
          </Reveal>
        ))}
        <Reveal delay={300}>
          <p>Simpsonville AC Repair regularly helps homeowners maintain these systems so they continue performing reliably.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── ESSENTIAL SYSTEMS ─── */
function EssentialSystems() {
  const services = [
    { label: "HVAC Services:", desc: "Heating and cooling systems that manage indoor temperatures through the Upstate's changing seasons.", href: "#" },
    { label: "Plumbing Services:", desc: "Household plumbing systems responsible for water flow, drainage, and fixtures throughout the home.", href: "#" },
    { label: "Electrical Services:", desc: "Residential electrical systems that power lighting, appliances, and modern home equipment.", href: "#" },
  ];

  return (
    <section className="systems-section">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-h2-caps">Essential Systems Supported for Simpsonville Homes</h2>
        </Reveal>
        <Reveal delay={80}>
          <p>Every home relies on several key systems working together to maintain comfort and safety. Simpsonville AC Repair supports these systems for residents throughout Simpsonville.</p>
        </Reveal>
        <div className="systems-layout">
          <div className="systems-list">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="system-item">
                  <div className="system-bullet" />
                  <p><a href={s.href} className="system-link"><strong>{s.label}</strong></a> {s.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <p className="systems-footer-note">Together, these systems form the backbone of everyday home functionality.</p>
            </Reveal>
          </div>

          {/* CTA card */}
          <Reveal dir="left" delay={120}>
            <div className="schedule-card">
              <div className="schedule-icon">❄️</div>
              <div className="schedule-title">Schedule Service <em>Today!</em></div>
              <a href="#contact" className="schedule-btn">
                <span>📅</span> Book Now
              </a>
              <img src="/__mockup/images/tech-working.png" alt="Technician" className="schedule-card-img" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── NEIGHBORHOODS ─── */
function Neighborhoods() {
  return (
    <section className="neighborhoods-section">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-h2">Working in Neighborhoods Across Simpsonville</h2>
        </Reveal>
        <Reveal delay={80}>
          <p>Simpsonville AC Repair regularly assists homeowners throughout Simpsonville and nearby parts of the Greenville area. Our technicians travel local roads and residential communities daily, helping maintain the systems that homes depend on.</p>
        </Reveal>
        <Reveal delay={160}>
          <p>From neighborhoods near downtown Simpsonville to growing developments expanding along the city's main corridors, homes throughout the area rely on heating, plumbing, and electrical systems year-round.</p>
        </Reveal>
        <Reveal delay={240}>
          <p>As the Simpsonville community continues to grow, Simpsonville AC Repair remains a dependable resource for homeowners maintaining the essential systems inside their homes.</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="neighborhoods-img-wrap">
            <img src="/__mockup/images/neighborhood.png" alt="Simpsonville Neighborhoods" className="neighborhoods-img" />
            <div className="neighborhoods-img-overlay">
              <div className="neighborhoods-img-badge">
                <div className="badge-city">Simpsonville, SC</div>
                <div className="badge-sub">Serving Surrounding Areas</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const FAQS = [
  { q: "Why is latent heat management a unique challenge for Simpsonville HVAC systems?", a: "The Piedmont climate produces high levels of ambient humidity that can overwhelm standard residential cooling equipment. Your air conditioner must function as a high-capacity dehumidifier before it can effectively lower the indoor temperature. Simpsonville AC Repair recalibrates blower speeds and refrigerant levels to optimize this specific moisture extraction process." },
  { q: "How does the regional water supply in Simpsonville impact modern appliance longevity?", a: "Water sourced from regional utility districts in Greenville County often contains high concentrations of dissolved minerals. These solids form a hard scale inside your tankless water heater, dishwasher, and laundry equipment. We provide specialized descaling treatments and point-of-entry filtration to neutralize these deposits." },
  { q: "What causes drainage inconsistencies in Simpsonville's modernized subdivisions?", a: "The topography of the Golden Strip often features complex grading designed to manage heavy rainfall in the Piedmont. When suburban drainage systems become obstructed by debris or root intrusion, the resulting hydrostatic pressure can stress your subterranean plumbing. We use fiber-optic imaging to monitor the structural integrity of your waste lines." },
  { q: "Why should I prioritize voltage stabilization for my Simpsonville smart home technology?", a: "Grid switching and Upstate storms cause frequent voltage spikes that can damage sensitive control boards in your HVAC, security systems, and high-value electronics. Standard power strips do not provide sufficient defense against these local utility surges. Simpsonville AC Repair installs Type 2 surge suppressors at the main electrical panel to block excess voltage before it reaches your interior circuits." },
  { q: "How does proximity to high-traffic suburban corridors impact my indoor air quality?", a: "Homes near major Simpsonville thoroughfares, such as Highway 14 and Fairview Road, are exposed to higher levels of ambient particulate matter and other environmental pollutants. These micro particles can bypass standard filters and settle on your internal cooling coils, which reduces system efficiency. We install HEPA systems and provide deep mechanical cleaning of your HVAC components." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-toggle">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-a-wrap" style={{ maxHeight: open ? 400 : 0 }}>
        <p className="faq-a">{a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section className="faq-section">
      <div className="section-inner">
        <Reveal>
          <div className="section-label">Frequently Asked Questions</div>
          <h2 className="section-h2">Expert Answers To Common Questions</h2>
        </Reveal>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <FAQItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS = [
  { name: "Timothy Fuller", time: "1 day ago", text: "Replacement of faulty products. Outstanding and professional service from start to finish." },
  { name: "salemgrace31525", time: "2 days ago", text: "From the beginning of the service call to the end it was an awesome experience! Dee at the service call was great and very sweet and knowledgeable." },
  { name: "Lois Cox", time: "2 days ago", text: "Chris Crawford was our technician today and he went above and beyond for us." },
  { name: "S Bar565", time: "2 days ago", text: "Freddie was wonderful. Very knowledgeable and professional." },
  { name: "Brendan Clark", time: "2 days ago", text: "Corey was a pleasure to work with! Great company all around." },
  { name: "Kate Stark", time: "2 days ago", text: "Nick provided excellent plumbing service from start to finish. He communicated clearly, showed up on time, and quickly resolved our clogged kitchen drain with professionalism and care." },
  { name: "Alonzo McMorris", time: "2 days ago", text: "They replaced my HVAC system today and the Technicians did an outstanding job! So happy to get this unit done!" },
  { name: "Elsabe Enslin", time: "2 days ago", text: "Griffin King did an excellent job today. Thanks!" },
  { name: "Paula Norman", time: "2 days ago", text: "I was very pleased with Will Smith. He knew what he had to do once he located my problems and had everything needed to fix my issues." },
];

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-meta">
          <Stars size={14} color="#FFD700" />
          <div className="review-name">{t.name}</div>
          <div className="review-time">{t.time}</div>
        </div>
        <div className="review-google-icon">
          <span className="google-g-lg">G</span>
        </div>
      </div>
      <p className="review-text">{t.text}</p>
    </div>
  );
}

function Testimonials() {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const t = setInterval(() => {
      setStartIdx(i => (i + 1) % (TESTIMONIALS.length - visibleCount + 1));
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const visible = TESTIMONIALS.slice(startIdx, startIdx + visibleCount);

  return (
    <section className="testimonials-section">
      <div className="section-inner">
        <Reveal>
          <div className="section-label">Testimonials</div>
          <h2 className="section-h2">Hear From Our Satisfied Customers</h2>
          <div className="rating-link">
            <Stars size={18} color="#FFD700" />
            <a href="#" className="rating-link-text">4.8 Google Rating</a>
          </div>
        </Reveal>

        <div className="reviews-carousel">
          {visible.map((t, i) => (
            <Reveal key={startIdx + i} delay={i * 80}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        {/* Carousel dots */}
        <div className="carousel-dots">
          {TESTIMONIALS.slice(0, TESTIMONIALS.length - visibleCount + 1).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === startIdx ? "active" : ""}`}
              onClick={() => setStartIdx(i)}
            />
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="#" className="btn-outline-navy">View More Reviews →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const cols = [
    {
      title: "Services",
      links: ["AC Repair & Installation", "Heating Systems", "Plumbing Services", "Electrical Work", "Drain Cleaning", "Water Heaters", "Air Quality"],
    },
    {
      title: "Service Areas",
      links: ["Simpsonville, SC", "Greenville, SC", "Mauldin, SC", "Fountain Inn, SC", "Pelzer, SC", "Greer, SC", "Duncan, SC"],
    },
    {
      title: "Company",
      links: ["About Us", "Reviews", "Careers", "Blog", "Special Offers", "Customer Portal", "Contact"],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand col */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">❄️</div>
            <div>
              <div className="footer-logo-l1">SIMPSONVILLE</div>
              <div className="footer-logo-l2">AC REPAIR</div>
            </div>
          </div>
          <p className="footer-brand-desc">Simpsonville's most trusted HVAC, plumbing, and electrical company. Serving our community with pride since day one.</p>
          <div className="footer-contact">
            <div>📞 864-791-5340</div>
            <div>📍 Simpsonville, SC 29681</div>
            <div>✉️ service@simpsonvilleac.com</div>
          </div>
          <div className="footer-trust">
            <span>✅ Licensed &amp; Insured</span>
            <span>✅ Same-Day Service</span>
            <span>✅ No Payments Until 2027</span>
          </div>
        </div>

        {cols.map((col, i) => (
          <div key={i} className="footer-col">
            <h4 className="footer-col-title">{col.title}</h4>
            {col.links.map((l, j) => (
              <a key={j} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 Simpsonville AC Repair. All rights reserved. Licensed Contractor SC #12345</span>
        <div className="footer-legal">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l, i) => (
            <a key={i} href="#" className="footer-legal-link">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ─── */
export function LandingPage() {
  return (
    <div className="page-root">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ContentWithOffer />
        <LocalFactors />
        <EssentialSystems />
        <Neighborhoods />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
