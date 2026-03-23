import { useState, useEffect, useRef } from "react";

export function Stars({ n = 5, size = 15, color = "#FFD700" }: { n?: number; size?: number; color?: string }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }} aria-hidden="true">
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
      </div>
    </div>
  );
}

type NavLeaf = { label: string; href: string };
type NavGroup = { label: string; dropdown: NavLeaf[] };
type NavItem = NavLeaf | NavGroup;

const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    dropdown: [
      { label: "🚨 Emergency AC Repair", href: "/emergency-ac-repair/" },
      { label: "🚨 Emergency Furnace Repair", href: "/emergency-furnace-repair/" },
      { label: "🚨 Emergency Heat Pump Repair", href: "/emergency-heat-pump-repair/" },
      { label: "AC Repair", href: "/ac-repair/" },
      { label: "AC Installation", href: "/ac-installation/" },
      { label: "AC Replacement", href: "/ac-replacement/" },
      { label: "HVAC Repair", href: "/hvac-repair/" },
      { label: "Heat Pump Repair", href: "/heat-pump-repair/" },
      { label: "Furnace Repair", href: "/furnace-repair/" },
      { label: "AC Maintenance", href: "/ac-maintenance/" },
      { label: "Ductless Mini Split", href: "/ductless-mini-split/" },
    ],
  },
  {
    label: "Problems We Fix",
    dropdown: [
      { label: "AC Not Cooling", href: "/ac-not-cooling/" },
      { label: "AC Won't Turn On", href: "/ac-not-turning-on/" },
      { label: "AC Leaking Water", href: "/ac-leaking-water/" },
      { label: "AC Making Noise", href: "/ac-making-noise/" },
      { label: "High Electric Bill", href: "/high-electric-bill/" },
    ],
  },
  {
    label: "Areas We Serve",
    dropdown: [
      { label: "Simpsonville, SC", href: "/simpsonville-sc/" },
      { label: "Mauldin, SC", href: "/mauldin-sc/" },
      { label: "Fountain Inn, SC", href: "/fountain-inn-sc/" },
      { label: "Greenville, SC", href: "/greenville-sc/" },
    ],
  },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

function ChevronDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" aria-hidden="true" style={{ marginLeft: 4, flexShrink: 0 }}>
      <path d="M1 1l4 4 4-4" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if ("href" in item) {
    return (
      <li>
        <a href={item.href} className="nav-link">{item.label}</a>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="nav-has-dd"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="nav-link nav-dd-trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown />
      </button>
      <div className={`nav-dropdown${open ? " open" : ""}`} role="menu">
        {item.dropdown.map((child, i) => (
          <a
            key={i}
            href={child.href}
            className="nav-dd-link"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            {child.label}
          </a>
        ))}
      </div>
    </li>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " stuck" : ""}`}>
        <div className="hdr-combined">
          <a href="/" className="brand-block" onClick={() => setMobileOpen(false)}>
            <img
              src="/logo.png"
              alt="Simpsonville AC Repair logo"
              className="brand-block-logo"
              width={96}
              height={96}
            />
            <div className="brand-block-text">
              <div className="brand-block-name">SIMPSONVILLE<br />AC REPAIR</div>
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
                <a href="tel:8647547291" className="hdr-phone" aria-label="Call Simpsonville AC Repair at 864-754-7291">
                  <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  <div>
                    <div className="phone-city">Simpsonville</div>
                    <div className="phone-num">864-754-7291</div>
                  </div>
                </a>
                <a href="tel:8647547291" className="hdr-phone" aria-label="Call Greenville AC Repair at 864-754-7291">
                  <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  <div>
                    <div className="phone-city">Greenville</div>
                    <div className="phone-num">864-754-7291</div>
                  </div>
                </a>
              </div>

              <button
                className={`hamburger-btn${mobileOpen ? " is-open" : ""}`}
                onClick={() => setMobileOpen(o => !o)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <span className="hb-line" />
                <span className="hb-line" />
                <span className="hb-line" />
              </button>
            </div>

            <nav className="hdr-nav" aria-label="Main navigation">
              <ul className="nav-list">
                {NAV_ITEMS.map((item, i) => (
                  <DesktopNavItem key={i} item={item} />
                ))}
              </ul>
              <div className="nav-right">
                <a href="tel:8647547291" className="nav-tel-compact" aria-label="Call Simpsonville: 864-754-7291">
                  📞 864-754-7291
                </a>
                <a href="/emergency-ac-repair/" className="book-now">
                  Emergency Service
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-nav${mobileOpen ? " mobile-nav-open" : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="mobile-nav-top">
          <a href="tel:8647547291" className="mobile-call-btn">
            📞 Call 864-754-7291
          </a>
          <a href="/free-estimate/" className="mobile-estimate-btn" onClick={() => setMobileOpen(false)}>
            📅 Get Free Estimate
          </a>
        </div>

        <nav aria-label="Mobile navigation">
          {NAV_ITEMS.map((item, i) => {
            if ("href" in item) {
              return (
                <a
                  key={i}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              );
            }
            const isOpen = expanded === item.label;
            return (
              <div key={i} className="mobile-nav-group">
                <button
                  className="mobile-nav-group-btn"
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <svg
                    width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }}
                  >
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="mobile-nav-subnav">
                    {item.dropdown.map((child, j) => (
                      <a
                        key={j}
                        href={child.href}
                        className="mobile-nav-sublink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mobile-nav-footer">
          <div style={{ fontSize: 13, color: "#666" }}>📍 Simpsonville, SC 29681</div>
          <div style={{ fontSize: 13, color: "#666" }}>Serving Simpsonville, Mauldin, Fountain Inn &amp; Greenville</div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
