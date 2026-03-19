import React from "react";
import { Link } from "wouter";
import { SiteHeader, TopBar } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEO, FAQ_SCHEMA, serviceSchema } from "@/components/SEO";
import { LeadForm } from "@/components/LeadForm";
import "../pages/landing.css";

export interface EmergencyFAQ {
  q: string;
  a: string;
}

export interface EmergencySection {
  heading: string;
  content: React.ReactNode;
}

export interface EmergencyPageConfig {
  seo: { title: string; description: string; canonical: string };
  breadcrumb: string;
  h1: string;
  tagline: string;
  bannerLabel: string;
  defaultService: string;
  heroColor?: string;
  sections: EmergencySection[];
  faqs: EmergencyFAQ[];
  internalLinks: { label: string; href: string }[];
  bottomCta: string;
}

function IssueList({ items }: { items: string[] }) {
  return (
    <ul className="inner-issues-list">
      {items.map((item, i) => (
        <li key={i}><span className="issue-check">🚨</span> {item}</li>
      ))}
    </ul>
  );
}

function FAQAccordion({ faqs }: { faqs: EmergencyFAQ[] }) {
  const [open, setOpen] = React.useState<number | null>(null);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
          <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
            <span>{f.q}</span>
            <span className="faq-toggle">{open === i ? "−" : "+"}</span>
          </button>
          <div className="faq-body" style={{ maxHeight: open === i ? 400 : 0 }}>
            <p className="faq-ans">{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function EmergencyPageTemplate({ config }: { config: EmergencyPageConfig }) {
  const heroGrad = config.heroColor || "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)";
  const schemas = [
    {
      ...serviceSchema(config.h1, config.tagline, config.seo.canonical),
      "openingHours": "Mo-Su 00:00-23:59",
    },
    FAQ_SCHEMA(config.faqs),
  ];

  return (
    <div className="page-root">
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        canonical={config.seo.canonical}
        schema={schemas}
      />

      {/* Emergency top bar — replaces normal topbar */}
      <div className="topbar" style={{ background: "#9b1c1c" }}>
        <div className="tb-inner">
          <span>🚨 EMERGENCY SERVICE AVAILABLE NOW</span>
          <span className="tb-div">|</span>
          <a href="tel:8647547291" style={{ color: "#fff", fontWeight: 700 }}>📞 CALL 864-754-7291 NOW</a>
        </div>
      </div>
      <SiteHeader />

      {/* Above-fold phone CTA — phone must be visible without scrolling */}
      <div className="emergency-banner">
        <div className="emergency-banner-inner">
          <div className="emergency-pulse">🚨</div>
          <div>
            <div className="emergency-banner-label">{config.bannerLabel}</div>
            <a href="tel:8647547291" className="emergency-phone-link">864-754-7291</a>
            <div className="emergency-banner-sub">Simpsonville &amp; Greenville Area · Same-Day Response</div>
          </div>
          <a href="tel:8647547291" className="emergency-call-btn">📞 CALL NOW</a>
        </div>
      </div>

      {/* Hero */}
      <div className="inner-hero" style={{ background: heroGrad, minHeight: 220 }}>
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <span>{config.breadcrumb}</span>
          </div>
          <h1 className="inner-h1">{config.h1}</h1>
          <p style={{ color: "#fca5a5", fontSize: 15, maxWidth: 600, marginTop: 10 }}>{config.tagline}</p>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">

            {/* Render each body section */}
            {config.sections.map((section, i) => (
              <div key={i}>
                <h2 className="inner-h2">{section.heading}</h2>
                {section.content}
              </div>
            ))}

            {/* FAQ Section */}
            <h2 className="inner-h2">Frequently Asked Questions</h2>
            <FAQAccordion faqs={config.faqs} />

            {/* Internal links */}
            <div className="inner-related-grid" style={{ marginTop: 32 }}>
              {config.internalLinks.map(({ label, href }, i) => (
                <Link key={i} href={href} className="inner-related-card">
                  <span>🔧</span> {label}
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{ marginTop: 40, padding: "28px 24px", background: "#9b1c1c", borderRadius: 12, textAlign: "center" }}>
              <p style={{ color: "#fca5a5", fontSize: 15, marginBottom: 16 }}>{config.bottomCta}</p>
              <a href="tel:8647547291" className="cta-primary" style={{ display: "inline-flex" }}>
                📞 Call 864-754-7291 Now
              </a>
            </div>
          </main>

          <aside className="inner-sidebar">
            <div className="emergency-sidebar-phone">
              <div style={{ fontSize: 13, color: "#fff", opacity: 0.8, marginBottom: 4 }}>CALL NOW — EMERGENCY LINE</div>
              <a href="tel:8647547291" style={{ fontSize: 26, fontFamily: "'Poppins',sans-serif", fontWeight: 900, color: "#fff", display: "block", marginBottom: 4 }}>
                864-754-7291
              </a>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Available for urgent HVAC failures</div>
            </div>
            <LeadForm
              title="Request Emergency Service"
              subtitle="Fill out below and we'll call you back immediately."
              defaultService={config.defaultService}
            />
            <div className="sidebar-trust" style={{ marginTop: 12 }}>
              {["✅ Fast Dispatch", "✅ No After-Hours Upcharge", "✅ All Makes & Models", "✅ Upfront Pricing"].map((b, i) => (
                <div key={i} className="sidebar-trust-item">{b}</div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

/* Reusable sub-components exported for use in page data */
export { IssueList };
