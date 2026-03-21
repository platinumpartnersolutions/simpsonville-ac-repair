import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { SiteHeader, Stars, TopBar } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEO, LOCAL_BUSINESS_SCHEMA, FAQ_SCHEMA } from "@/components/SEO";
import { LeadForm } from "@/components/LeadForm";
import { getHvacIcon } from "@/components/Icons";
import "./landing.css";

function useInView(threshold = 0.1) {
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

function Reveal({ children, delay = 0, dir = "up", className = "" }: {
  children: React.ReactNode; delay?: number; dir?: "up" | "left" | "right" | "fade"; className?: string;
}) {
  const { ref, inView } = useInView();
  const transforms: Record<string, string> = {
    up: "translateY(32px)", left: "translateX(-32px)", right: "translateX(32px)", fade: "none"
  };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[dir],
      transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="/van-hero.webp"
          srcSet="/van-hero-mobile.webp 768w, /van-hero.webp 1440w"
          sizes="(max-width: 768px) 100vw, 1440px"
          alt="Simpsonville AC Repair service van in Simpsonville, SC"
          className="hero-bg-img"
          width={1440}
          height={966}
          fetchPriority="high"
          loading="eager"
          decoding="sync"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <a href="#reviews" className="hero-pill">
            <Stars size={14} color="#FFD700" />
            <span>Trusted Providers</span>
            <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
          </a>
          <h1 className="hero-h1">
            AC Repair &amp; HVAC Services
            <span className="hero-h1-geo">in Simpsonville, SC</span>
          </h1>
          <div className="hero-ctas">
            <a href="tel:8647547291" className="cta-primary">Call Now — Same Day Service</a>
            <a href="tel:8647547291" className="cta-outline">864-754-7291</a>
          </div>
          <div style={{ marginTop: 14 }}>
            <Link href="/emergency-ac-repair/" style={{ color: "#fff", fontSize: 13.5, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6, textShadow: "-0.4px -0.4px 0 #CC2229, 0.4px -0.4px 0 #CC2229, -0.4px 0.4px 0 #CC2229, 0.4px 0.4px 0 #CC2229" }}>
              Need emergency service right now?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUST BADGES ─── */
function TrustBadges() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {[
          { icon: "star",       label: "4.8 Google Rating", sub: "Trusted Providers" },
          { icon: "shield",     label: "Licensed & Insured", sub: "SC Contractors" },
          { icon: "lightning",  label: "Same-Day Service", sub: "Available now" },
          { icon: "dollar",     label: "Free Estimates", sub: "No obligation" },
          { icon: "certificate", label: "SC Licensed", sub: "Verified contractors" },
        ].map((b, i) => (
          <div key={i} className="trust-badge-item">
            <span className="trust-badge-icon">{getHvacIcon(b.icon, 24)}</span>
            <div>
              <div className="trust-badge-label">{b.label}</div>
              <div className="trust-badge-sub">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ALL SERVICES GRID ─── */
const ALL_SERVICES = [
  { icon: "ac",          title: "AC Repair",          path: "/ac-repair/",          desc: "Fast diagnosis and repair for all central AC systems." },
  { icon: "hvac",        title: "HVAC Repair",         path: "/hvac-repair/",        desc: "Full heating and cooling system repair and restoration." },
  { icon: "install",     title: "AC Installation",     path: "/ac-installation/",    desc: "New AC system installation — all brands, proper sizing." },
  { icon: "replace",     title: "AC Replacement",      path: "/ac-replacement/",     desc: "Upgrade from your old, inefficient unit to a modern system." },
  { icon: "heatpump",    title: "Heat Pump Repair",    path: "/heat-pump-repair/",   desc: "Expert heat pump diagnosis, repair, and installation." },
  { icon: "furnace",     title: "Furnace Repair",      path: "/furnace-repair/",     desc: "Same-day furnace repair — gas, electric, and oil systems." },
  { icon: "maintenance", title: "AC Maintenance",      path: "/ac-maintenance/",     desc: "Seasonal tune-ups to prevent breakdowns and lower bills." },
  { icon: "minisplit",   title: "Ductless Mini Split", path: "/ductless-mini-split/",desc: "Zone cooling for additions, garages, and rooms without ducts." },
];

function ServicesGrid() {
  return (
    <section className="all-services-section">
      <div className="sec-inner">
        <Reveal>
          <div className="sec-eyebrow">WHAT WE DO</div>
          <h2 className="sec-h2">Complete HVAC Services in Simpsonville, SC</h2>
          <p className="sec-lead">From emergency AC repair to full system replacement, local licensed technicians in our network handle every aspect of residential heating and cooling.</p>
        </Reveal>
        <div className="all-services-grid">
          {ALL_SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <Link href={s.path} className="all-service-card">
                <div className="asc-icon">{getHvacIcon(s.icon, 44)}</div>
                <h3 className="asc-title">{s.title}</h3>
                <p className="asc-desc">{s.desc}</p>
                <span className="asc-link">Learn More →</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/emergency-ac-repair/" className="cta-red">🚨 24/7 Emergency AC Repair →</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CONTENT + OFFER ─── */
function ContentOffer() {
  return (
    <section className="co-section">
      <div className="co-text-full">
        <Reveal><p>Simpsonville has become one of the most active residential communities in the Greenville area. Neighborhoods continue expanding across the city while long-established homes remain a central part of the community. With more families moving into the area each year, homes rely heavily on dependable systems that keep everyday life running smoothly.</p></Reveal>
        <Reveal delay={80}><p>Heating and cooling systems help manage the Upstate's hot summers and cooler winter nights. Plumbing systems support daily water use throughout the home. Electrical systems power everything from lighting to modern appliances and home technology.</p></Reveal>
        <Reveal delay={160}><p>Simpsonville AC Repair works with homeowners across Simpsonville to support these essential systems. Local licensed technicians in our network regularly assist homes throughout the area, helping ensure the systems behind the walls and ceilings continue operating reliably.</p></Reveal>
      </div>
    </section>
  );
}

/* ─── LOCAL FACTORS ─── */
const FACTORS = [
  { icon: "sun",    title: "Extended Summer Heat",  body: "Summers across the Greenville area bring long stretches of warm weather. Cooling systems often run throughout the day, especially during peak summer months when humidity levels climb." },
  { icon: "house",  title: "Rapid Housing Growth",  body: "Simpsonville continues to attract new residential development. Many homes are part of newer subdivisions, while others have been part of the community for decades. This mix of housing means system needs can vary widely across neighborhoods." },
  { icon: "storm",  title: "Storm Activity",         body: "Afternoon thunderstorms are common in the Upstate during summer. Sudden downpours and lightning can occasionally affect electrical components or expose weaknesses in plumbing systems." },
  { icon: "family", title: "Busy Household Usage",  body: "With many growing families living in the area, household systems often see heavy daily use. Water heaters, cooling systems, and electrical circuits all work hard to support modern living." },
];

function LocalFactors() {
  return (
    <section className="factors-section">
      <div className="sec-inner">
        <Reveal>
          <div className="sec-eyebrow">LOCAL EXPERTISE</div>
          <h2 className="sec-h2">Local Factors That Affect Simpsonville Homes</h2>
          <p className="sec-lead">Like much of the Upstate, Simpsonville homes deal with environmental conditions that can place steady demand on household systems.</p>
        </Reveal>
        <div className="factors-grid">
          {FACTORS.map((f, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="factor-card">
                <div className="factor-icon-wrap">{getHvacIcon(f.icon, 40)}</div>
                <div>
                  <h3 className="factor-title">{f.title}</h3>
                  <p className="factor-desc">{f.body}</p>
                </div>
                <div className="factor-accent" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── AREAS SERVED ─── */
const AREAS = [
  { city: "Simpsonville", path: "/simpsonville-sc/" },
  { city: "Greenville", path: "/greenville-sc/" },
  { city: "Mauldin", path: "/mauldin-sc/" },
  { city: "Fountain Inn", path: "/fountain-inn-sc/" },
  { city: "Pelzer", path: "/" },
  { city: "Greer", path: "/" },
  { city: "Duncan", path: "/" },
  { city: "Taylors", path: "/" },
];

function AreasServed() {
  return (
    <section className="areas-section">
      <div className="sec-inner">
        <Reveal>
          <div className="sec-eyebrow">SERVICE AREA</div>
          <h2 className="sec-h2">Cities We Serve in Upstate SC</h2>
          <p className="sec-lead">Our licensed technicians travel throughout Simpsonville and the surrounding Greenville area to provide fast, reliable HVAC service.</p>
        </Reveal>
        <div className="areas-grid">
          {AREAS.map((a, i) => (
            <Reveal key={i} delay={i * 60}>
              <Link href={a.path} className="area-chip">
                📍 {a.city}, SC
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── NEIGHBORHOODS ─── */
function Neighborhoods() {
  return (
    <section className="nbhd-section">
      <div className="sec-inner">
        <div className="nbhd-grid">
          <div className="nbhd-text">
            <Reveal><h2 className="sec-h2">Working in Neighborhoods Across Simpsonville</h2></Reveal>
            <Reveal delay={80}><p>Simpsonville AC Repair regularly assists homeowners throughout Simpsonville and nearby parts of the Greenville area. Local licensed technicians travel local roads and residential communities daily, helping maintain the systems that homes depend on.</p></Reveal>
            <Reveal delay={160}><p>From neighborhoods near downtown Simpsonville to growing developments along the city's main corridors, homes throughout the area rely on heating, plumbing, and electrical systems year-round.</p></Reveal>
            <Reveal delay={240}><p>As the Simpsonville community continues to grow, Simpsonville AC Repair remains a dependable resource for homeowners maintaining the essential systems inside their homes.</p></Reveal>
            <Reveal delay={300}>
              <div className="nbhd-service-note">
                <h3>Service Support for Simpsonville Residents</h3>
                <p>When home systems begin to show signs of wear or simply need professional attention, experienced technicians can help restore reliable operation.</p>
                <Link href="/free-estimate/" className="cta-red">Schedule an Inspection →</Link>
              </div>
            </Reveal>
          </div>
          <div className="nbhd-right">
            <Reveal dir="right" delay={100}>
              <div className="nbhd-img-wrap">
                <img src="/van.jpeg" alt="Simpsonville AC Repair Van" className="nbhd-img" />
                <div className="nbhd-img-tag">
                  <img src="/logo.png" alt="Logo" style={{ width: 48, height: 48, objectFit: "contain" }} />
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 13, color: "#fff" }}>Simpsonville AC Repair</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.75)" }}>simpsonvilleacrepair.com</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={200}>
              <div className="schedule-cta-card">
                <div className="scc-eyebrow">Schedule Service</div>
                <div className="scc-title"><em>Today!</em></div>
                <Link href="/free-estimate/" className="scc-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V8h14v13z" /></svg>
                  Book Now
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const FAQS = [
  { q: "Why is latent heat management a unique challenge for Simpsonville HVAC systems?", a: "The Piedmont climate produces high levels of ambient humidity that can overwhelm standard residential cooling equipment. Your air conditioner must function as a high-capacity dehumidifier before it can effectively lower the indoor temperature. We recalibrate blower speeds and refrigerant levels to optimize moisture extraction." },
  { q: "How does the regional water supply in Simpsonville impact modern appliance longevity?", a: "Water sourced from regional utility districts in Greenville County often contains high concentrations of dissolved minerals. These solids form a hard scale inside your tankless water heater, dishwasher, and laundry equipment. We provide specialized descaling treatments and point-of-entry filtration." },
  { q: "What causes drainage inconsistencies in Simpsonville's modernized subdivisions?", a: "The topography of the Golden Strip features complex grading designed to manage heavy rainfall. When drainage systems become obstructed by debris or root intrusion, hydrostatic pressure can stress your plumbing. We use fiber-optic imaging to monitor the structural integrity of your waste lines." },
  { q: "Why should I prioritize voltage stabilization for my Simpsonville smart home?", a: "Grid switching and Upstate storms cause frequent voltage spikes that can damage sensitive control boards in HVAC, security systems, and high-value electronics. We install Type 2 surge suppressors at the main electrical panel to block excess voltage before it reaches interior circuits." },
  { q: "How does proximity to major roads affect my indoor air quality?", a: "Homes near Highway 14 and Fairview Road are exposed to higher levels of ambient particulate matter. These micro particles bypass standard filters and settle on cooling coils, reducing efficiency. We install HEPA systems and provide deep mechanical cleaning of HVAC components." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-btn" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="faq-toggle">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-body" style={{ maxHeight: open ? 400 : 0 }}>
        <p className="faq-ans">{a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section className="faq-section">
      <div className="sec-inner">
        <Reveal>
          <div className="sec-eyebrow">Frequently Asked Questions</div>
          <h2 className="sec-h2">Expert Answers To Common Questions</h2>
        </Reveal>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 50}><FAQItem q={f.q} a={f.a} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS = [
  { name: "Timothy Fuller", time: "1 day ago", stars: 5, text: "Replacement of faulty products done flawlessly. Outstanding and professional service." },
  { name: "Grace Salem", time: "2 days ago", stars: 5, text: "From the beginning of the service call to the end it was an awesome experience! Dee was great, very knowledgeable and did a great job fixing our toilet." },
  { name: "Lois Cox", time: "2 days ago", stars: 5, text: "Chris Crawford was the technician today and he went above and beyond for us." },
  { name: "S. Barber", time: "2 days ago", stars: 5, text: "Freddie was wonderful. Very knowledgeable and professional." },
  { name: "Brendan Clark", time: "2 days ago", stars: 5, text: "Corey was a pleasure to work with! Great company all around." },
  { name: "Kate Stark", time: "2 days ago", stars: 5, text: "Nick provided excellent plumbing service from start to finish. He communicated clearly, showed up on time, and quickly resolved our clogged kitchen drain." },
  { name: "Alonzo McMorris", time: "2 days ago", stars: 5, text: "They replaced my HVAC system today and the technicians did an outstanding job! So happy to get this unit done! Thank You." },
  { name: "Paula Norman", time: "2 days ago", stars: 5, text: "I was very pleased with Will Smith. He knew what he had to do once he located my problems and had everything needed to fix my issues." },
  { name: "Zanyah Smalls", time: "3 days ago", stars: 5, text: "Sam was very professional and knowledgeable about the installation of our water heater. I highly recommend Simpsonville AC Repair for your home service needs." },
];

function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(TESTIMONIALS.length / perPage);
  useEffect(() => {
    const t = setInterval(() => setPage(p => (p + 1) % pages), 5000);
    return () => clearInterval(t);
  }, [pages]);
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);
  return (
    <section className="reviews-section" id="reviews">
      <div className="sec-inner">
        <Reveal>
          <div className="sec-eyebrow">Testimonials</div>
          <h2 className="sec-h2">Hear From Our Satisfied Customers</h2>
          <div className="reviews-rating-row">
            <Stars size={20} color="#FFD700" />
            <a href="#" className="reviews-rating-link">4.8 Google Rating</a>
          </div>
        </Reveal>
        <div className="reviews-grid">
          {visible.map((r, i) => (
            <Reveal key={`${page}-${i}`} delay={i * 70}>
              <div className="review-card">
                <div className="rc-top">
                  <div className="rc-meta">
                    <Stars size={13} color="#FFD700" n={r.stars} />
                    <div className="rc-name">{r.name}</div>
                    <div className="rc-time">{r.time}</div>
                  </div>
                  <div className="rc-glogo">G</div>
                </div>
                <p className="rc-text">&ldquo;{r.text}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="reviews-dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} className={`dot${i === page ? " active" : ""}`} onClick={() => setPage(i)} />
          ))}
        </div>
        <Reveal delay={150}>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a href="#" className="cta-outline-dark">View All Reviews →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── HOME LEAD FORM SECTION ─── */
function HomeLeadForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="sec-inner">
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <div className="sec-eyebrow" style={{ color: "#fca5a5" }}>GET IN TOUCH</div>
              <h2 className="sec-h2" style={{ color: "#fff" }}>Schedule Your Service Today</h2>
              <p style={{ color: "#a8c4e8", marginBottom: 28 }}>Our expert technicians are ready to help. Call us now or fill out the form and we'll get back to you quickly.</p>
              <div className="contact-detail">
                <span className="contact-icon">📞</span>
                <div>
                  <div style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>Simpsonville</div>
                  <a href="tel:8647547291" style={{ color: "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 20 }}>864-754-7291</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">📞</span>
                <div>
                  <div style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>Greenville</div>
                  <a href="tel:8647547291" style={{ color: "#fff", fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 20 }}>864-754-7291</a>
                </div>
              </div>
              <div className="contact-badges">
                {["✅ Licensed & Insured", "✅ Same-Day Service", "✅ Free Estimates", "✅ Est. 2023"].map((b, i) => (
                  <span key={i} className="contact-badge">{b}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal dir="right" delay={100}>
            <LeadForm
              title="Request Service"
              subtitle="Fill out the form and we'll contact you within the hour."
              dark
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── ROOT PAGE ─── */
export default function LandingPage() {
  return (
    <div className="page-root">
      <SEO
        title="AC Repair Simpsonville SC | 24/7 HVAC Service | Call Now"
        description="Simpsonville's most trusted AC repair and HVAC company. Same-day service, free estimates, licensed technicians. Call 864-754-7291."
        canonical="/"
        schema={[LOCAL_BUSINESS_SCHEMA, FAQ_SCHEMA(FAQS)]}
      />
      <TopBar />
      <SiteHeader />
      <main>
        <Hero />
        <TrustBadges />
        <ServicesGrid />
        <ContentOffer />
        <LocalFactors />
        <AreasServed />
        <Neighborhoods />
        <FAQ />
        <Testimonials />
        <HomeLeadForm />
      </main>
      <SiteFooter />
    </div>
  );
}
