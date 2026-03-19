import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEO } from "@/components/SEO";
import { LeadForm } from "@/components/LeadForm";
import "./landing.css";

export default function AboutPage() {
  return (
    <div className="page-root">
      <SEO
        title="About Simpsonville AC Repair | Local HVAC Experts Since 2023"
        description="Learn about Simpsonville AC Repair — a locally owned HVAC company serving Simpsonville and Greenville, SC since 2023. Licensed, insured, and trusted."
        canonical="/about/"
      />
      <div className="topbar">
        <div className="tb-inner">
          <span>📍 Locally Owned &amp; Operated in Simpsonville, SC</span>
          <span className="tb-div">|</span>
          <span>✅ Licensed &amp; Insured Since 2023</span>
        </div>
      </div>
      <SiteHeader />

      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <span>About Us</span>
          </div>
          <h1 className="inner-h1">Simpsonville's Local AC Repair Experts</h1>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <div className="about-van-wrap">
              <img src="/van.jpeg" alt="Simpsonville AC Repair service van" className="about-van-img" />
              <div className="about-van-overlay">
                <img src="/logo.png" alt="" style={{ width: 64, height: 64, objectFit: "contain" }} />
                <div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 16, color: "#fff" }}>Simpsonville AC Repair</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.75)" }}>Est. 2023 · simpsonvilleacrepair.com</div>
                </div>
              </div>
            </div>

            <h2 className="inner-h2">Who We Are</h2>
            <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
              Simpsonville AC Repair is a locally owned heating, cooling, plumbing, and electrical company based in Simpsonville, South Carolina. Founded in 2023, we set out with a straightforward mission: provide honest, skilled, and fast home service to the families and homeowners in our community.
            </p>
            <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16 }}>
              Our network consists of licensed SC contractors who grew up in the Upstate and understand the unique demands that the region's climate places on residential systems. From the long stretches of summer heat that push AC units to their limits, to the occasional winter cold snaps that test heating equipment — we've seen it all, and we know how to fix it.
            </p>
            <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 32 }}>
              We believe in transparent pricing, same-day service when possible, and treating every home we enter with the respect it deserves. When you call Simpsonville AC Repair, you'll speak with a real local person who can help.
            </p>

            <h2 className="inner-h2">License &amp; Insurance</h2>
            <div className="inner-benefits-grid">
              {[
                { icon: "📋", title: "SC Licensed Contractors", body: "All work is performed by South Carolina licensed HVAC and electrical contractors in our network. License numbers verified prior to dispatch." },
                { icon: "🛡️", title: "Fully Insured", body: "Every contractor in our network carries full general liability and workers' compensation insurance — protecting you and the technicians on the job." },
                { icon: "🌡️", title: "EPA Certified", body: "Network technicians hold EPA Section 608 certification for proper refrigerant handling and recovery." },
                { icon: "🏅", title: "NATE Certified", body: "Lead technicians in our network hold North American Technician Excellence (NATE) certification — the industry's highest credential." },
              ].map((b, i) => (
                <div key={i} className="inner-benefit-card">
                  <div className="inner-benefit-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>

            <h2 className="inner-h2" style={{ marginTop: 36 }}>Service Area</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
              We serve residential customers throughout Simpsonville, Greenville, Mauldin, Fountain Inn, and surrounding Greenville County communities.
            </p>
            <div className="inner-related-grid">
              {[
                ["Simpsonville, SC", "/simpsonville-sc/"],
                ["Greenville, SC", "/greenville-sc/"],
                ["Mauldin, SC", "/mauldin-sc/"],
                ["Fountain Inn, SC", "/fountain-inn-sc/"],
              ].map(([label, href], i) => (
                <Link key={i} href={href} className="inner-related-card">
                  <span>📍</span> {label}
                </Link>
              ))}
            </div>
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title="Schedule Service"
              subtitle="Call or fill out the form to book a visit."
            />
            <div className="sidebar-trust" style={{ marginTop: 12 }}>
              {["✅ Licensed & Insured", "✅ Est. 2023", "✅ 4.8★ Google Rating", "✅ Same-Day Service", "✅ Free Estimates"].map((b, i) => (
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
