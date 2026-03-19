import { useState, useEffect } from "react";
import { Link } from "wouter";

export function Stars({ n = 5, size = 15, color = "#FFD700" }: { n?: number; size?: number; color?: string }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={color}>
          <path d="M10 1l2.4 7.2H20l-6.2 4.5 2.4 7.2L10 15.5l-6.2 4.4 2.4-7.2L0 8.2h7.6z" />
        </svg>
      ))}
    </span>
  );
}

export function TopBar() {
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

const NAV_ITEMS: [string, string, boolean][] = [
  ["AC & Heating", "/ac-repair/", true],
  ["Plumbing", "#", true],
  ["Electrical", "#", true],
  ["Special Offers", "/free-estimate/", true],
  ["About", "/about/", true],
  ["Contact", "/contact/", false],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`site-header${scrolled ? " stuck" : ""}`}>
      <div className="hdr-combined">
        <Link href="/" className="brand-block">
          <img src="/logo.png" alt="Simpsonville AC Repair" className="brand-block-logo" />
          <div className="brand-block-text">
            <div className="brand-block-name">SIMPSONVILLE<br />AC REPAIR</div>
            <div className="brand-block-services">COOLING · HEATING · PLUMBING · ELECTRICAL</div>
          </div>
        </Link>

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
                <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <div>
                  <div className="phone-city">Simpsonville</div>
                  <div className="phone-num">(810) 998-6747</div>
                </div>
              </a>
              <a href="tel:8643809450" className="hdr-phone">
                <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <div>
                  <div className="phone-city">Greenville</div>
                  <div className="phone-num">864-380-9450</div>
                </div>
              </a>
            </div>
          </div>

          <nav className="hdr-nav">
            <ul className="nav-list">
              {NAV_ITEMS.map(([label, href, hasChevron], i) => (
                <li key={i}>
                  <Link href={href} className="nav-link">
                    {label}
                    {hasChevron && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ marginLeft: 3 }}>
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav-right">
              <a href="tel:8109986747" className="nav-tel-compact">📞 (810) 998-6747</a>
              <Link href="/book-now/" className="book-now">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V8h14v13z" />
                  <path d="M7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2z" />
                </svg>
                BOOK NOW
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
