import { Link } from "wouter";

const SERVICES = [
  ["AC Repair", "/ac-repair/"],
  ["AC Installation", "/ac-installation/"],
  ["AC Replacement", "/ac-replacement/"],
  ["HVAC Repair", "/hvac-repair/"],
  ["Heat Pump Repair", "/heat-pump-repair/"],
  ["Furnace Repair", "/furnace-repair/"],
  ["AC Maintenance", "/ac-maintenance/"],
  ["Ductless Mini Split", "/ductless-mini-split/"],
  ["Emergency AC Repair", "/emergency-ac-repair/"],
];

const LOCATIONS = [
  ["Simpsonville, SC", "/simpsonville-sc/"],
  ["Greenville, SC", "/greenville-sc/"],
  ["Mauldin, SC", "/mauldin-sc/"],
  ["Fountain Inn, SC", "/fountain-inn-sc/"],
];

const COMPANY = [
  ["About Us", "/about/"],
  ["Free Estimate", "/free-estimate/"],
  ["Emergency Service", "/emergency-ac-repair/"],
  ["Contact Us", "/contact/"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src="/logo.png" alt="Simpsonville AC Repair" className="footer-logo" />
            <div className="footer-brand-name">
              <div className="footer-bn-1">SIMPSONVILLE</div>
              <div className="footer-bn-2">AC REPAIR</div>
            </div>
          </div>
          <p className="footer-desc">Simpsonville's most trusted HVAC, plumbing, and electrical company. Serving our community with pride since 2023.</p>
          <div className="footer-contact-info">
            <div>📞 <a href="tel:8647547291" style={{ color: "inherit" }}>864-754-7291</a></div>
            <div>📞 <a href="tel:8647547291" style={{ color: "inherit" }}>864-754-7291</a></div>
            <div>🌐 simpsonvilleacrepair.com</div>
            <div>📍 Simpsonville, SC 29681</div>
          </div>
          <div className="footer-badges">
            {["✅ Licensed & Insured", "✅ Est. 2023", "✅ No Payments Until 2027"].map((b, i) => (
              <span key={i} className="fbadge">{b}</span>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-h">Services</h4>
          {SERVICES.map(([label, href], i) => (
            <Link key={i} href={href} className="footer-col-link">{label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h4 className="footer-col-h">Service Areas</h4>
          {LOCATIONS.map(([label, href], i) => (
            <Link key={i} href={href} className="footer-col-link">{label}</Link>
          ))}
          <div style={{ marginTop: 12 }}>
            {["Pelzer, SC", "Greer, SC", "Duncan, SC"].map((l, i) => (
              <div key={i} className="footer-col-link" style={{ cursor: "default" }}>{l}</div>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-h">Company</h4>
          {COMPANY.map(([label, href], i) => (
            <Link key={i} href={href} className="footer-col-link">{label}</Link>
          ))}
          <div className="footer-cta-block">
            <a href="tel:8647547291" className="footer-cta-btn">864-754-7291</a>
          </div>
        </div>
      </div>

      <div className="footer-disclaimer">
        <p><strong>DISCLAIMER:</strong> Simpsonville AC Repair is a local lead generation and referral service, not a licensed HVAC contractor. We connect homeowners in the Simpsonville, SC area with pre-screened, licensed, and insured HVAC service providers. All service inquiries submitted through this website are forwarded to third-party contractors who will contact you directly. We do not perform HVAC services ourselves. By submitting your information, you consent to be contacted by one or more licensed HVAC contractors in your area. We may receive compensation from service providers for referrals made through this site.</p>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Simpsonville AC Repair. All Rights Reserved.</div>
        <div className="footer-bottom-links">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l, i) => (
            <a key={i} href="#" className="fbl">{l}</a>
          ))}
        </div>
      </div>
      <div className="footer-flag-stripe" />
    </footer>
  );
}
