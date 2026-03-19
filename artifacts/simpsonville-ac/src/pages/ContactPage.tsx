import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";
import { LeadForm } from "@/components/LeadForm";
import "./landing.css";

export default function ContactPage() {
  return (
    <div className="page-root">
      <SEO
        title="Contact Simpsonville AC Repair | (810) 998-6747"
        description="Contact Simpsonville AC Repair for HVAC, plumbing, and electrical service. Call (810) 998-6747 or fill out our online form. Serving Simpsonville & Greenville SC."
        canonical="/contact/"
      />
      <div className="topbar">
        <div className="tb-inner">
          <span>📍 Serving Simpsonville &amp; Greenville Areas</span>
          <span className="tb-div">|</span>
          <span>📞 <a href="tel:8109986747" style={{ color: "#fff", fontWeight: 700 }}>(810) 998-6747</a></span>
        </div>
      </div>
      <SiteHeader />

      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <span>Contact</span>
          </div>
          <h1 className="inner-h1">Contact Simpsonville AC Repair</h1>
          <a href="tel:8109986747" className="inner-cta-phone">
            📞 <strong>(810) 998-6747</strong> — Call Anytime
          </a>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <h2 className="inner-h2">Get in Touch</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28 }}>
              Whether you need to schedule a service call, get a free estimate, ask a question, or reach us about an emergency, we're here to help. Use any of the contact methods below or fill out the form and we'll respond quickly.
            </p>

            <div className="contact-details-grid">
              <div className="contact-detail-card">
                <div className="contact-detail-icon">📞</div>
                <h3>Phone</h3>
                <a href="tel:8109986747" className="contact-detail-val">(810) 998-6747</a>
                <div className="contact-detail-sub">Simpsonville Line</div>
                <a href="tel:8643809450" className="contact-detail-val">864-380-9450</a>
                <div className="contact-detail-sub">Greenville Line</div>
              </div>
              <div className="contact-detail-card">
                <div className="contact-detail-icon">📍</div>
                <h3>Service Area</h3>
                <div className="contact-detail-val" style={{ fontSize: 15 }}>Simpsonville, SC 29681</div>
                <div className="contact-detail-sub">Serving Simpsonville, Greenville,<br />Mauldin &amp; Fountain Inn</div>
              </div>
              <div className="contact-detail-card">
                <div className="contact-detail-icon">🕐</div>
                <h3>Service Hours</h3>
                <div className="contact-detail-val" style={{ fontSize: 15 }}>Mon–Fri: 7am – 7pm</div>
                <div className="contact-detail-sub">Sat–Sun: Emergency Service<br />24/7 Emergency Line Available</div>
              </div>
              <div className="contact-detail-card">
                <div className="contact-detail-icon">🌐</div>
                <h3>Online</h3>
                <div className="contact-detail-val" style={{ fontSize: 14 }}>simpsonvilleacrepair.com</div>
                <div className="contact-detail-sub">Fill out our form for a<br />response within 1 hour</div>
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <h2 className="inner-h2">Service Area Map</h2>
              <div className="map-embed-wrap">
                <iframe
                  title="Simpsonville SC Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52975.35!2d-82.2532!3d34.7376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88580e0a7e4b2d83%3A0xa4e6b01f04ee2b24!2sSimpsonville%2C%20SC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="340"
                  style={{ border: 0, borderRadius: 10 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="inner-related-links" style={{ marginTop: 28 }}>
              <h3>Quick Links</h3>
              <div className="inner-related-grid">
                <Link href="/free-estimate/" className="inner-related-card"><span>📋</span> Free Estimate</Link>
                <Link href="/emergency-ac-repair/" className="inner-related-card"><span>🚨</span> Emergency Repair</Link>
                <Link href="/ac-repair/" className="inner-related-card"><span>❄️</span> AC Repair</Link>
                <Link href="/ac-maintenance/" className="inner-related-card"><span>🛠️</span> AC Maintenance</Link>
              </div>
            </div>
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title="Send Us a Message"
              subtitle="We'll call you back within 1 hour."
              dark
            />
            <div className="sidebar-emergency" style={{ marginTop: 16 }}>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 15, color: "#CC2229", marginBottom: 6 }}>🚨 Emergency Service</div>
              <p style={{ fontSize: 13, color: "#555", margin: "0 0 12px" }}>AC out right now? Call us directly for fastest response.</p>
              <a href="tel:8109986747" className="cta-primary" style={{ display: "block", textAlign: "center" }}>📞 (810) 998-6747</a>
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
