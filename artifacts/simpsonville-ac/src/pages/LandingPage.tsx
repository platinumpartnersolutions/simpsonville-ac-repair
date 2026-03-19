import { useState, useEffect, useRef } from "react";
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
  children: React.ReactNode; delay?: number; dir?: "up"|"left"|"right"|"fade"; className?: string;
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

function Stars({ n = 5, size = 15, color = "#FFD700" }: { n?: number; size?: number; color?: string }) {
  return (
    <span style={{ display:"inline-flex", gap:2 }}>
      {Array.from({length:n}).map((_,i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={color}>
          <path d="M10 1l2.4 7.2H20l-6.2 4.5 2.4 7.2L10 15.5l-6.2 4.4 2.4-7.2L0 8.2h7.6z"/>
        </svg>
      ))}
    </span>
  );
}

/* ─── TOP BAR ─── */
function TopBar() {
  return (
    <div className="topbar">
      <div className="tb-inner">
        <span>📍 Serving Simpsonville &amp; Greenville Areas</span>
        <span className="tb-div">|</span>
        <span>💼 Careers</span>
        <span className="tb-div">|</span>
        <span>🎉 Buy a New HVAC System. <strong>No Payments Until 2027!</strong></span>
      </div>
    </div>
  );
}

/* ─── HEADER ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`site-header${scrolled ? " stuck" : ""}`}>
      <div className="hdr-combined">
        <a href="#" className="brand-block">
          <img src="/logo.png" alt="Simpsonville AC Repair" className="brand-block-logo" />
          <div className="brand-block-text">
            <div className="brand-block-name">SIMPSONVILLE<br/>AC REPAIR</div>
            <div className="brand-block-services">COOLING · HEATING · PLUMBING · ELECTRICAL</div>
          </div>
        </a>

        <div className="hdr-right-col">
          <div className="hdr-top-row">
            <div className="hdr-tagline">
              <div className="hdr-tagline-text">MOST TRUSTED. MOST CONVENIENT. MOST EXPERIENCED.</div>
              <div className="hdr-rating">
                <Stars size={14} />
                <span>4.8 Google Rating</span>
              </div>
            </div>
            <div className="hdr-phones">
              <a href="tel:8109986747" className="hdr-phone">
                <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                <div>
                  <div className="phone-city">Simpsonville</div>
                  <div className="phone-num">(810) 998-6747</div>
                </div>
              </a>
              <a href="tel:8643809450" className="hdr-phone">
                <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                <div>
                  <div className="phone-city">Greenville</div>
                  <div className="phone-num">864-380-9450</div>
                </div>
              </a>
            </div>
          </div>

          <nav className="hdr-nav">
            <ul className="nav-list">
              {[
                ["AC & Heating", true], ["Plumbing", true], ["Electrical", true],
                ["Special Offers", true], ["About", true], ["Contact", false]
              ].map(([label, hasChevron], i) => (
                <li key={i}>
                  <a href="#" className="nav-link">
                    {label as string}
                    {hasChevron && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{marginLeft:3}}>
                        <path d="M2 4l4 4 4-4"/>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-right">
              <button className="nav-search-btn" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
              <a href="#contact" className="book-now">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V8h14v13z"/>
                  <path d="M7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2z"/>
                </svg>
                BOOK NOW
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  const [rdy, setRdy] = useState(false);
  useEffect(() => { const t = setTimeout(() => setRdy(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/van.jpeg" alt="Simpsonville AC Repair Service Van" className="hero-bg-img"/>
        <div className="hero-bg-overlay"/>
      </div>
      <div className="hero-inner">
        <div className="hero-content" style={{opacity: rdy?1:0, transform: rdy?"none":"translateY(28px)", transition:"all .75s ease .15s"}}>
          <a href="#reviews" className="hero-pill">
            <Stars size={14} color="#FFD700"/>
            <span>Trusted by 7,445+ Customers</span>
            <span className="gpill-g">G</span>
          </a>
          <h1 className="hero-h1">
            AC Repair &amp; HVAC Services
            <span className="hero-h1-geo">in Simpsonville, SC</span>
          </h1>
          <div className="hero-ctas">
            <a href="#contact" className="cta-primary">📅 Schedule Service Today</a>
            <a href="tel:8109986747" className="cta-outline">(810) 998-6747</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTENT + OFFER ─── */
function ContentOffer() {
  return (
    <section className="co-section">
      <div className="co-inner">
        <div className="co-text">
          <Reveal><p>Simpsonville has become one of the most active residential communities in the Greenville area. Neighborhoods continue expanding across the city while long-established homes remain a central part of the community. With more families moving into the area each year, homes rely heavily on dependable systems that keep everyday life running smoothly.</p></Reveal>
          <Reveal delay={80}><p>Heating and cooling systems help manage the Upstate's hot summers and cooler winter nights. Plumbing systems support daily water use throughout the home. Electrical systems power everything from lighting to modern appliances and home technology.</p></Reveal>
          <Reveal delay={160}><p>Simpsonville AC Repair works with homeowners across Simpsonville to support these essential systems. Our technicians regularly assist homes throughout the area, helping ensure the systems behind the walls and ceilings continue operating reliably.</p></Reveal>
        </div>

        <Reveal dir="left" delay={100}>
          <div className="offer-card">
            <div className="offer-header">
              <div className="offer-amount">$100 OFF</div>
              <div className="offer-service">AC Tune-Up &amp; Repair</div>
            </div>
            <div className="offer-body">
              <div className="offer-cond">WHEN YOU BOOK A SEASONAL MAINTENANCE VISIT</div>
              <div className="offer-disclaimer">
                <span>Disclaimer</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 7L1 3h8z"/></svg>
              </div>
              <a href="#contact" className="offer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V8h14v13z"/></svg>
                SCHEDULE NOW
              </a>
            </div>
            <div className="offer-logo-wrap">
              <img src="/logo.png" alt="" className="offer-logo-img"/>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── LOCAL FACTORS ─── */
const FACTORS = [
  { icon:"☀️", title:"Extended Summer Heat", body:"Summers across the Greenville area bring long stretches of warm weather. Cooling systems often run throughout the day, especially during peak summer months when humidity levels climb." },
  { icon:"🏘️", title:"Rapid Housing Growth", body:"Simpsonville continues to attract new residential development. Many homes are part of newer subdivisions, while others have been part of the community for decades. This mix of housing means system needs can vary widely across neighborhoods." },
  { icon:"⛈️", title:"Storm Activity", body:"Afternoon thunderstorms are common in the Upstate during summer. Sudden downpours and lightning can occasionally affect electrical components or expose weaknesses in plumbing systems." },
  { icon:"👨‍👩‍👧", title:"Busy Household Usage", body:"With many growing families living in the area, household systems often see heavy daily use. Water heaters, cooling systems, and electrical circuits all work hard to support modern living." },
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
          {FACTORS.map((f,i) => (
            <Reveal key={i} delay={i*90}>
              <div className="factor-card">
                <div className="factor-icon-wrap"><span className="factor-icon">{f.icon}</span></div>
                <div>
                  <h3 className="factor-title">{f.title}</h3>
                  <p className="factor-desc">{f.body}</p>
                </div>
                <div className="factor-accent"/>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
const SERVICES = [
  { icon:"❄️", title:"AC & Heating", desc:"Heating and cooling systems that manage indoor temperatures through the Upstate's changing seasons." },
  { icon:"🔧", title:"Plumbing Services", desc:"Household plumbing systems responsible for water flow, drainage, and fixtures throughout the home." },
  { icon:"⚡", title:"Electrical Services", desc:"Residential electrical systems that power lighting, appliances, and modern home equipment." },
];

function Services() {
  return (
    <section className="services-section">
      <div className="sec-inner">
        <Reveal>
          <div className="sec-eyebrow" style={{color:"#fca5a5"}}>OUR EXPERTISE</div>
          <h2 className="sec-h2" style={{color:"#fff"}}>Essential Systems We Support</h2>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((s,i) => (
            <Reveal key={i} delay={i*100}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <a href="#" className="service-link">Learn More →</a>
              </div>
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
            <Reveal delay={80}><p>Simpsonville AC Repair regularly assists homeowners throughout Simpsonville and nearby parts of the Greenville area. Our technicians travel local roads and residential communities daily, helping maintain the systems that homes depend on.</p></Reveal>
            <Reveal delay={160}><p>From neighborhoods near downtown Simpsonville to growing developments along the city's main corridors, homes throughout the area rely on heating, plumbing, and electrical systems year-round.</p></Reveal>
            <Reveal delay={240}><p>As the Simpsonville community continues to grow, Simpsonville AC Repair remains a dependable resource for homeowners maintaining the essential systems inside their homes.</p></Reveal>
            <Reveal delay={300}>
              <div className="nbhd-service-note">
                <h3>Service Support for Simpsonville Residents</h3>
                <p>When home systems begin to show signs of wear or simply need professional attention, experienced technicians can help restore reliable operation. Contact us today for prompt, professional service.</p>
                <a href="#contact" className="cta-red">Schedule an Inspection →</a>
              </div>
            </Reveal>
          </div>
          <div className="nbhd-right">
            <Reveal dir="right" delay={100}>
              <div className="nbhd-img-wrap">
                <img src="/van.jpeg" alt="Simpsonville AC Repair Van" className="nbhd-img"/>
                <div className="nbhd-img-tag">
                  <img src="/logo.png" alt="Logo" style={{width:48,height:48,objectFit:"contain"}}/>
                  <div>
                    <div style={{fontFamily:"'Poppins',sans-serif",fontWeight:800,fontSize:13,color:"#fff"}}>Simpsonville AC Repair</div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,.75)"}}>simpsonvilleacrepair.com</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={200}>
              <div className="schedule-cta-card">
                <div className="scc-eyebrow">Schedule Service</div>
                <div className="scc-title"><em>Today!</em></div>
                <a href="#contact" className="scc-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V8h14v13z"/></svg>
                  Book Now
                </a>
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
  { q:"Why is latent heat management a unique challenge for Simpsonville HVAC systems?", a:"The Piedmont climate produces high levels of ambient humidity that can overwhelm standard residential cooling equipment. Your air conditioner must function as a high-capacity dehumidifier before it can effectively lower the indoor temperature. We recalibrate blower speeds and refrigerant levels to optimize moisture extraction." },
  { q:"How does the regional water supply in Simpsonville impact modern appliance longevity?", a:"Water sourced from regional utility districts in Greenville County often contains high concentrations of dissolved minerals. These solids form a hard scale inside your tankless water heater, dishwasher, and laundry equipment. We provide specialized descaling treatments and point-of-entry filtration." },
  { q:"What causes drainage inconsistencies in Simpsonville's modernized subdivisions?", a:"The topography of the Golden Strip features complex grading designed to manage heavy rainfall. When drainage systems become obstructed by debris or root intrusion, hydrostatic pressure can stress your plumbing. We use fiber-optic imaging to monitor the structural integrity of your waste lines." },
  { q:"Why should I prioritize voltage stabilization for my Simpsonville smart home?", a:"Grid switching and Upstate storms cause frequent voltage spikes that can damage sensitive control boards in HVAC, security systems, and high-value electronics. We install Type 2 surge suppressors at the main electrical panel to block excess voltage before it reaches interior circuits." },
  { q:"How does proximity to major roads affect my indoor air quality?", a:"Homes near Highway 14 and Fairview Road are exposed to higher levels of ambient particulate matter. These micro particles bypass standard filters and settle on cooling coils, reducing efficiency. We install HEPA systems and provide deep mechanical cleaning of HVAC components." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open?" open":""}`}>
      <button className="faq-btn" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="faq-toggle">{open?"−":"+"}</span>
      </button>
      <div className="faq-body" style={{maxHeight: open?400:0}}>
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
          {FAQS.map((f,i) => (
            <Reveal key={i} delay={i*50}><FAQItem q={f.q} a={f.a}/></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const TESTIMONIALS = [
  { name:"Timothy Fuller", time:"1 day ago", stars:5, text:"Replacement of faulty products done flawlessly. Outstanding and professional service." },
  { name:"Grace Salem", time:"2 days ago", stars:5, text:"From the beginning of the service call to the end it was an awesome experience! Dee was great, very knowledgeable and did a great job fixing our toilet." },
  { name:"Lois Cox", time:"2 days ago", stars:5, text:"Chris Crawford was our technician today and he went above and beyond for us." },
  { name:"S. Barber", time:"2 days ago", stars:5, text:"Freddie was wonderful. Very knowledgeable and professional." },
  { name:"Brendan Clark", time:"2 days ago", stars:5, text:"Corey was a pleasure to work with! Great company all around." },
  { name:"Kate Stark", time:"2 days ago", stars:5, text:"Nick provided excellent plumbing service from start to finish. He communicated clearly, showed up on time, and quickly resolved our clogged kitchen drain." },
  { name:"Alonzo McMorris", time:"2 days ago", stars:5, text:"They replaced my HVAC system today and the technicians did an outstanding job! So happy to get this unit done! Thank You." },
  { name:"Paula Norman", time:"2 days ago", stars:5, text:"I was very pleased with Will Smith. He knew what he had to do once he located my problems and had everything needed to fix my issues." },
  { name:"Zanyah Smalls", time:"3 days ago", stars:5, text:"Sam was very professional and knowledgeable about the installation of our water heater. I highly recommend Simpsonville AC Repair for your home service needs." },
];

function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(TESTIMONIALS.length / perPage);
  useEffect(() => {
    const t = setInterval(() => setPage(p => (p+1)%pages), 5000);
    return () => clearInterval(t);
  }, [pages]);
  const visible = TESTIMONIALS.slice(page*perPage, page*perPage+perPage);
  return (
    <section className="reviews-section" id="reviews">
      <div className="sec-inner">
        <Reveal>
          <div className="sec-eyebrow">Testimonials</div>
          <h2 className="sec-h2">Hear From Our Satisfied Customers</h2>
          <div className="reviews-rating-row">
            <Stars size={20} color="#FFD700"/>
            <a href="#" className="reviews-rating-link">4.8 Google Rating</a>
          </div>
        </Reveal>
        <div className="reviews-grid">
          {visible.map((r,i) => (
            <Reveal key={`${page}-${i}`} delay={i*70}>
              <div className="review-card">
                <div className="rc-top">
                  <div className="rc-meta">
                    <Stars size={13} color="#FFD700" n={r.stars}/>
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
          {Array.from({length:pages}).map((_,i) => (
            <button key={i} className={`dot${i===page?" active":""}`} onClick={()=>setPage(i)}/>
          ))}
        </div>
        <Reveal delay={150}>
          <div style={{textAlign:"center",marginTop:28}}>
            <a href="#" className="cta-outline-dark">View All Reviews →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CONTACT SECTION ─── */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"", message:"" });
  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({...f, [e.target.name]: e.target.value}));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section className="contact-section" id="contact">
      <div className="sec-inner">
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <div className="sec-eyebrow" style={{color:"#fca5a5"}}>GET IN TOUCH</div>
              <h2 className="sec-h2" style={{color:"#fff"}}>Schedule Your Service Today</h2>
              <p style={{color:"#a8c4e8",marginBottom:28}}>Our expert technicians are ready to help. Call us now or fill out the form and we'll get back to you quickly.</p>
              <div className="contact-detail">
                <span className="contact-icon">📞</span>
                <div>
                  <div style={{color:"rgba(255,255,255,.6)",fontSize:12}}>Simpsonville</div>
                  <a href="tel:8109986747" style={{color:"#fff",fontFamily:"'Poppins',sans-serif",fontWeight:700,fontSize:20}}>(810) 998-6747</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">📞</span>
                <div>
                  <div style={{color:"rgba(255,255,255,.6)",fontSize:12}}>Greenville</div>
                  <a href="tel:8643809450" style={{color:"#fff",fontFamily:"'Poppins',sans-serif",fontWeight:700,fontSize:20}}>864-380-9450</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">🌐</span>
                <a href="https://simpsonvilleacrepair.com" style={{color:"#a8c4e8"}}>simpsonvilleacrepair.com</a>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">📍</span>
                <span style={{color:"#a8c4e8"}}>Simpsonville, SC 29681</span>
              </div>
              <div className="contact-badges">
                {["✅ Licensed & Insured","✅ Same-Day Service","✅ No Payments Until 2027","✅ Est. 2023"].map((b,i) => (
                  <span key={i} className="contact-badge">{b}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal dir="right" delay={100}>
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <div style={{fontSize:48,marginBottom:16}}>✅</div>
                  <h3>Request Received!</h3>
                  <p>We'll contact you shortly to confirm your appointment.</p>
                  <a href="tel:8109986747" className="cta-primary" style={{marginTop:16,display:"inline-flex"}}>Call Now: (810) 998-6747</a>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <h3 className="form-title">Request Service</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="John Smith"/>
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handle} required placeholder="(810) 555-0000"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@example.com"/>
                  </div>
                  <div className="form-group">
                    <label>Service Needed *</label>
                    <select name="service" value={form.service} onChange={handle} required>
                      <option value="">Select a service…</option>
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>Heating Repair</option>
                      <option>Plumbing Service</option>
                      <option>Electrical Service</option>
                      <option>Seasonal Tune-Up</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={3} placeholder="Describe your issue…"/>
                  </div>
                  <button type="submit" className="form-submit">📅 Request Service Appointment</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src="/logo.png" alt="Simpsonville AC Repair" className="footer-logo"/>
            <div className="footer-brand-name">
              <div className="footer-bn-1">SIMPSONVILLE</div>
              <div className="footer-bn-2">AC REPAIR</div>
            </div>
          </div>
          <p className="footer-desc">Simpsonville's most trusted HVAC, plumbing, and electrical company. Serving our community with pride since 2023.</p>
          <div className="footer-contact-info">
            <div>📞 (810) 998-6747</div>
            <div>🌐 simpsonvilleacrepair.com</div>
            <div>📍 Simpsonville, SC 29681</div>
          </div>
          <div className="footer-badges">
            {["✅ Licensed & Insured","✅ Est. 2023","✅ No Payments Until 2027"].map((b,i)=>(
              <span key={i} className="fbadge">{b}</span>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-h">Services</h4>
          {["AC Repair & Installation","Heating Systems","Plumbing Services","Electrical Work","Drain Cleaning","Water Heaters","Air Quality"].map((l,i)=>(
            <a key={i} href="#" className="footer-col-link">{l}</a>
          ))}
        </div>
        <div className="footer-col">
          <h4 className="footer-col-h">Service Areas</h4>
          {["Simpsonville, SC","Greenville, SC","Mauldin, SC","Fountain Inn, SC","Pelzer, SC","Greer, SC","Duncan, SC"].map((l,i)=>(
            <a key={i} href="#" className="footer-col-link">{l}</a>
          ))}
        </div>
        <div className="footer-col">
          <h4 className="footer-col-h">Company</h4>
          {["About Us","Reviews","Careers","Blog","Special Offers","Contact Us"].map((l,i)=>(
            <a key={i} href="#" className="footer-col-link">{l}</a>
          ))}
          <div className="footer-cta-block">
            <a href="tel:8109986747" className="footer-cta-btn">(810) 998-6747</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Simpsonville AC Repair. All Rights Reserved. SC Contractor License #12345</div>
        <div className="footer-bottom-links">
          {["Privacy Policy","Terms of Service","Sitemap"].map((l,i)=>(
            <a key={i} href="#" className="fbl">{l}</a>
          ))}
        </div>
      </div>
      <div className="footer-flag-stripe"/>
    </footer>
  );
}

/* ─── ROOT PAGE ─── */
export default function LandingPage() {
  return (
    <div className="page-root">
      <TopBar/>
      <Header/>
      <main>
        <Hero/>
        <ContentOffer/>
        <LocalFactors/>
        <Services/>
        <Neighborhoods/>
        <FAQ/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
