import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEO, serviceSchema } from "@/components/SEO";
import { LeadForm } from "@/components/LeadForm";
import "./landing.css";

const TRUST = [
  { icon: "⏱️", title: "Response Within 1 Hour", body: "We call back every estimate request within one business hour during normal service hours." },
  { icon: "💰", title: "No Obligation", body: "Our estimates are completely free with no pressure to schedule. We want you to feel comfortable with your decision." },
  { icon: "📋", title: "Written Quote", body: "You receive a detailed written estimate specifying exactly what work will be performed and the total cost." },
  { icon: "🏷️", title: "Competitive Pricing", body: "We price our services fairly. If you've received a competing quote, let us know — we work hard to earn your business." },
];

export default function FreeEstimate() {
  return (
    <div className="page-root">
      <SEO
        title="Free AC & HVAC Estimate Simpsonville SC | No Obligation Quote"
        description="Get a free, no-obligation HVAC estimate in Simpsonville, SC. We'll call within 1 hour. Call (810) 998-6747 or fill out the form."
        canonical="/free-estimate/"
        schema={serviceSchema("Free HVAC Estimate", "Free, no-obligation HVAC estimates in Simpsonville, SC.", "/free-estimate/")}
      />
      <div className="topbar">
        <div className="tb-inner">
          <span>📍 Serving Simpsonville &amp; Greenville Areas</span>
          <span className="tb-div">|</span>
          <span>📋 Free Estimates — No Obligation</span>
        </div>
      </div>
      <SiteHeader />

      <div className="inner-hero" style={{ background: "linear-gradient(135deg, #0D2D6E 0%, #091d4d 100%)" }}>
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <span>Free Estimate</span>
          </div>
          <h1 className="inner-h1">Get a Free AC &amp; HVAC Estimate in Simpsonville, SC</h1>
          <p style={{ color: "#a8c4e8", fontSize: 16, maxWidth: 540, marginTop: 10 }}>
            No obligation. No pressure. Just an honest quote from licensed local technicians.
          </p>
          <a href="tel:8109986747" className="inner-cta-phone" style={{ marginTop: 14 }}>
            📞 <strong>(810) 998-6747</strong> — Call for an Immediate Response
          </a>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <h2 className="inner-h2">What to Expect</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28 }}>
              Whether you need AC repair, a new system installation, or a seasonal tune-up, we make getting a quote simple and stress-free. Fill out the form, and a member of our team will contact you within the hour to discuss your system and schedule a convenient time to visit your Simpsonville home.
            </p>

            <div className="inner-benefits-grid">
              {TRUST.map((t, i) => (
                <div key={i} className="inner-benefit-card">
                  <div className="inner-benefit-icon">{t.icon}</div>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              ))}
            </div>

            <h2 className="inner-h2" style={{ marginTop: 36 }}>Services We Estimate</h2>
            <div className="inner-related-grid">
              {[
                ["AC Repair", "/ac-repair/"],
                ["AC Installation", "/ac-installation/"],
                ["AC Replacement", "/ac-replacement/"],
                ["HVAC Repair", "/hvac-repair/"],
                ["Heat Pump Repair", "/heat-pump-repair/"],
                ["Furnace Repair", "/furnace-repair/"],
                ["AC Maintenance", "/ac-maintenance/"],
                ["Ductless Mini Split", "/ductless-mini-split/"],
              ].map(([label, href], i) => (
                <Link key={i} href={href} className="inner-related-card">
                  <span>→</span> {label}
                </Link>
              ))}
            </div>

            <div className="inner-trust-row" style={{ marginTop: 28 }}>
              {["Licensed & Insured", "Est. 2023", "4.8★ Google Rating", "No Payments Until 2027", "SC Contractor Licensed"].map((t, i) => (
                <div key={i} className="inner-trust-badge">✅ {t}</div>
              ))}
            </div>
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title="Request a Free Estimate"
              subtitle="We'll call back within 1 hour during business hours."
              dark
            />
            <div className="sidebar-emergency" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 15, color: "#CC2229", marginBottom: 6 }}>🚨 Need Service Today?</div>
              <p style={{ fontSize: 13, color: "#555", margin: "0 0 12px" }}>Don't wait for an estimate — call us directly for same-day service.</p>
              <a href="tel:8109986747" className="cta-primary" style={{ display: "block", textAlign: "center" }}>📞 (810) 998-6747</a>
            </div>
            <Link href="/emergency-ac-repair/" className="cta-red" style={{ display: "block", textAlign: "center", marginTop: 10 }}>
              Emergency AC Repair →
            </Link>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
