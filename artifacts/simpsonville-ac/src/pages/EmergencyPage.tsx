import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEO, serviceSchema } from "@/components/SEO";
import { LeadForm } from "@/components/LeadForm";
import "./landing.css";

const SERVICES = [
  ["AC Repair", "/ac-repair/"],
  ["HVAC Repair", "/hvac-repair/"],
  ["AC Not Cooling", "/ac-not-cooling/"],
  ["AC Won't Turn On", "/ac-not-turning-on/"],
  ["AC Leaking Water", "/ac-leaking-water/"],
  ["AC Making Noise", "/ac-making-noise/"],
  ["Furnace Repair", "/furnace-repair/"],
  ["Heat Pump Repair", "/heat-pump-repair/"],
];

export default function EmergencyPage() {
  return (
    <div className="page-root">
      <SEO
        title="Emergency AC Repair Simpsonville SC — 24/7 | Call (810) 998-6747"
        description="Emergency AC repair in Simpsonville, SC. Available 24/7 for urgent HVAC failures. Call (810) 998-6747 right now for immediate response."
        canonical="/emergency-ac-repair/"
        schema={serviceSchema("Emergency AC Repair", "24/7 emergency AC repair in Simpsonville, SC.", "/emergency-ac-repair/")}
      />
      <div className="topbar" style={{ background: "#9b1c1c" }}>
        <div className="tb-inner">
          <span>🚨 EMERGENCY SERVICE AVAILABLE NOW</span>
          <span className="tb-div">|</span>
          <a href="tel:8109986747" style={{ color: "#fff", fontWeight: 700 }}>📞 CALL (810) 998-6747 NOW</a>
        </div>
      </div>
      <SiteHeader />

      {/* ABOVE-THE-FOLD EMERGENCY CTA — phone number visible without scrolling */}
      <div className="emergency-banner">
        <div className="emergency-banner-inner">
          <div className="emergency-pulse">🚨</div>
          <div>
            <div className="emergency-banner-label">EMERGENCY AC REPAIR — AVAILABLE NOW</div>
            <a href="tel:8109986747" className="emergency-phone-link">(810) 998-6747</a>
            <div className="emergency-banner-sub">Simpsonville &amp; Greenville Area • Same-Day Response</div>
          </div>
          <a href="tel:8109986747" className="emergency-call-btn">📞 CALL NOW</a>
        </div>
      </div>

      <div className="inner-hero" style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)", minHeight: 240 }}>
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <span>Emergency AC Repair</span>
          </div>
          <h1 className="inner-h1">Emergency AC Repair in Simpsonville, SC — 24/7</h1>
          <p style={{ color: "#fca5a5", fontSize: 15, maxWidth: 540, marginTop: 10 }}>
            AC stopped working? Don't wait. Our technicians respond fast — day, night, or weekend.
          </p>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <p className="inner-intro">
              When your air conditioner fails during a Simpsonville summer, every hour matters. A home without cooling can reach dangerous temperatures quickly — especially for young children, elderly residents, and pets. Simpsonville AC Repair offers rapid-response emergency service for AC failures, complete cooling loss, system shutdowns, and other urgent HVAC situations throughout the Simpsonville and Greenville area.
            </p>

            <h2 className="inner-h2">Common Emergency Situations We Handle</h2>
            <ul className="inner-issues-list">
              <li><span className="issue-check">🚨</span> Complete AC failure — no cooling at all</li>
              <li><span className="issue-check">🚨</span> AC tripping circuit breaker repeatedly</li>
              <li><span className="issue-check">🚨</span> Refrigerant leak with visible frost or ice</li>
              <li><span className="issue-check">🚨</span> Water actively flooding from air handler</li>
              <li><span className="issue-check">🚨</span> Burning smell from vents or unit</li>
              <li><span className="issue-check">🚨</span> Loud banging, grinding, or screeching noises</li>
              <li><span className="issue-check">🚨</span> Carbon monoxide alarm triggered by furnace</li>
              <li><span className="issue-check">🚨</span> AC won't turn on with temperatures above 90°F</li>
            </ul>

            <div className="emergency-steps">
              <h2 className="inner-h2">What to Do Right Now</h2>
              {[
                { step: "1", title: "Call Us Immediately", body: "Call (810) 998-6747. Our team will assess your situation and dispatch a technician to your Simpsonville home." },
                { step: "2", title: "Shut Off the System", body: "If you hear unusual sounds, smell burning, or see ice forming, turn the system off at the thermostat to prevent further damage." },
                { step: "3", title: "Stay Cool While You Wait", body: "Use fans, close blinds, and move to lower floors. Keep pets and vulnerable family members in the coolest room." },
                { step: "4", title: "Technician Arrives & Diagnoses", body: "Our tech will diagnose the issue, explain the cause and repair options, and restore cooling as quickly as possible." },
              ].map((s, i) => (
                <div key={i} className="emergency-step">
                  <div className="emergency-step-num">{s.step}</div>
                  <div>
                    <strong>{s.title}</strong>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="inner-h2">Emergency Service — All HVAC Types</h2>
            <div className="inner-related-grid">
              {SERVICES.map(([label, href], i) => (
                <Link key={i} href={href} className="inner-related-card">
                  <span>🔧</span> {label}
                </Link>
              ))}
            </div>
          </main>

          <aside className="inner-sidebar">
            <div className="emergency-sidebar-phone">
              <div style={{ fontSize: 13, color: "#fff", opacity: 0.8, marginBottom: 4 }}>CALL NOW — EMERGENCY LINE</div>
              <a href="tel:8109986747" style={{ fontSize: 26, fontFamily: "'Poppins',sans-serif", fontWeight: 900, color: "#fff", display: "block", marginBottom: 4 }}>
                (810) 998-6747
              </a>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>Available for urgent AC failures</div>
            </div>
            <LeadForm
              title="Request Emergency Service"
              subtitle="Fill out below and we'll call you back immediately."
              defaultService="Emergency AC Repair"
            />
            <div className="sidebar-trust" style={{ marginTop: 12 }}>
              {["✅ Fast Dispatch", "✅ Licensed Techs", "✅ All Makes & Models", "✅ Upfront Pricing"].map((b, i) => (
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
