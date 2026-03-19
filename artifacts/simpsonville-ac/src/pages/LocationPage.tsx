import { useLocation, Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { SEO, serviceSchema } from "@/components/SEO";
import "./landing.css";

interface LocationData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  city: string;
  intro: string;
  context: string;
  services: string[];
}

const DATA: Record<string, LocationData> = {
  "/simpsonville-sc/": {
    h1: "HVAC & AC Repair Services in Simpsonville, SC",
    metaTitle: "HVAC Simpsonville SC | Local Cooling & Heating Experts",
    metaDesc: "Trusted HVAC and AC repair in Simpsonville, SC. Licensed local technicians, same-day service. Call (810) 998-6747 for a free estimate.",
    city: "Simpsonville",
    intro: "Simpsonville is one of the fastest-growing communities in Upstate South Carolina, with thousands of homes across established neighborhoods and new developments depending on reliable heating, cooling, and plumbing systems. Simpsonville AC Repair is a locally based team serving homeowners throughout the city — from neighborhoods near downtown and Five Forks to expanding subdivisions along Highway 14 and Fairview Road.",
    context: "Simpsonville's climate presents real challenges for home systems. Summers bring extended stretches of hot, humid weather that keep cooling systems running for months. Winters are moderate but require reliable heating. Our technicians understand the local infrastructure, common equipment found in Simpsonville homes, and the seasonal demands that homeowners face throughout the year.",
    services: ["AC Repair", "AC Installation", "HVAC Repair", "Furnace Repair", "Heat Pump Repair", "AC Maintenance", "Ductless Mini Split"],
  },
  "/mauldin-sc/": {
    h1: "AC Repair & HVAC Services in Mauldin, SC",
    metaTitle: "AC Repair Mauldin SC | Serving Mauldin & Surrounding Areas",
    metaDesc: "Fast AC repair and HVAC service in Mauldin, SC. Same-day service, licensed technicians. Call (810) 998-6747.",
    city: "Mauldin",
    intro: "Mauldin is a thriving Greenville County community located just minutes from Simpsonville and Greenville. Homeowners in Mauldin rely on their HVAC systems year-round to manage the Upstate's warm summers and variable winters. Simpsonville AC Repair provides fast, reliable HVAC and AC repair service to homes throughout Mauldin and the surrounding area.",
    context: "From established neighborhoods near Butler Road to newer developments throughout the city, Mauldin homes face the same HVAC challenges common to Greenville County — high summer humidity that stresses cooling systems, occasional cold snaps that test heating equipment, and the general wear that comes from systems running most of the year. Our technicians serve Mauldin regularly and are familiar with the area's residential HVAC landscape.",
    services: ["AC Repair", "AC Installation", "HVAC Repair", "Furnace Repair", "Heat Pump Repair", "AC Maintenance"],
  },
  "/fountain-inn-sc/": {
    h1: "AC Repair & HVAC Services in Fountain Inn, SC",
    metaTitle: "AC Repair Fountain Inn SC | Fast Local HVAC Service",
    metaDesc: "Reliable AC repair and HVAC service in Fountain Inn, SC. Same-day appointments, free estimates. Call (810) 998-6747.",
    city: "Fountain Inn",
    intro: "Fountain Inn is a growing community on the southern edge of the Greenville area, where residential development continues to expand alongside its established historic core. Homeowners in Fountain Inn depend on dependable HVAC systems through the Upstate's hot summers and cooler winter months. Simpsonville AC Repair extends its service area to include Fountain Inn and surrounding neighborhoods.",
    context: "Many Fountain Inn homes are newer construction with modern HVAC equipment, while others feature older systems that require expert diagnosis and repair. Our technicians are experienced with the full range of residential HVAC equipment — from current high-efficiency systems to older units that may need parts sourced from specialty suppliers. We're committed to fast response times that minimize discomfort for Fountain Inn families.",
    services: ["AC Repair", "AC Installation", "HVAC Repair", "Heat Pump Repair", "AC Maintenance", "Ductless Mini Split"],
  },
  "/greenville-sc/": {
    h1: "AC Repair & HVAC Services in Greenville, SC",
    metaTitle: "AC Repair Greenville SC | Trusted Local HVAC Technicians",
    metaDesc: "Professional AC repair and HVAC service in Greenville, SC. Licensed technicians, same-day service. Call (810) 998-6747.",
    city: "Greenville",
    intro: "Greenville is the hub of Upstate South Carolina's growing metro area, home to thousands of residential properties ranging from historic homes near downtown to sprawling newer subdivisions on the city's outskirts. Simpsonville AC Repair serves homeowners throughout the Greenville area, providing AC repair, heating service, and HVAC maintenance from a locally based team that understands the regional climate and common residential systems.",
    context: "Greenville County's combination of hot, humid summers and variable winters places steady demand on residential HVAC systems throughout the year. Whether you're in an established neighborhood near Parkins Mill, a newer subdivision in the northern parts of the county, or anywhere in between, our technicians can diagnose and repair your system quickly. We're based in Simpsonville and serve Greenville as part of our core service area.",
    services: ["AC Repair", "AC Installation", "AC Replacement", "HVAC Repair", "Heat Pump Repair", "Furnace Repair", "AC Maintenance", "Ductless Mini Split"],
  },
};

const SERVICE_LINKS: Record<string, string> = {
  "AC Repair": "/ac-repair/",
  "AC Installation": "/ac-installation/",
  "AC Replacement": "/ac-replacement/",
  "HVAC Repair": "/hvac-repair/",
  "Heat Pump Repair": "/heat-pump-repair/",
  "Furnace Repair": "/furnace-repair/",
  "AC Maintenance": "/ac-maintenance/",
  "Ductless Mini Split": "/ductless-mini-split/",
};

export default function LocationPage() {
  const [location] = useLocation();
  const data = DATA[location];

  if (!data) return null;

  return (
    <div className="page-root">
      <SEO
        title={data.metaTitle}
        description={data.metaDesc}
        canonical={location}
        schema={serviceSchema(data.h1, data.metaDesc, location)}
      />
      <TopBar />
      <SiteHeader />

      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <span>{data.city}, SC</span>
          </div>
          <h1 className="inner-h1">{data.h1}</h1>
          <a href="tel:8109986747" className="inner-cta-phone">
            📞 <strong>(810) 998-6747</strong> — Serving {data.city} & Surrounding Areas
          </a>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <p className="inner-intro">{data.intro}</p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28 }}>{data.context}</p>

            <h2 className="inner-h2">HVAC Services Available in {data.city}</h2>
            <div className="loc-services-grid">
              {data.services.map((svc, i) => (
                <Link key={i} href={SERVICE_LINKS[svc] || "/"} className="loc-service-card">
                  <span className="loc-svc-icon">
                    {svc.includes("AC Repair") ? "❄️" : svc.includes("Install") ? "📦" : svc.includes("Replace") ? "🔄" : svc.includes("HVAC") ? "🌡️" : svc.includes("Heat Pump") ? "♻️" : svc.includes("Furnace") ? "🔥" : svc.includes("Main") ? "🛠️" : "🎯"}
                  </span>
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 14, color: "#0D2D6E" }}>{svc}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>in {data.city}, SC →</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="inner-cta-strip">
              <div>
                <strong>Serving {data.city}, SC</strong> — Call for same-day service.
              </div>
              <div className="inner-cta-strip-btns">
                <a href="tel:8109986747" className="cta-primary">📞 (810) 998-6747</a>
                <Link href="/free-estimate/" className="cta-outline-dark">Free Estimate →</Link>
              </div>
            </div>

            <div className="inner-trust-row">
              {["Licensed & Insured", "Same-Day Service", "Free Estimates", "4.8★ Rating", "Est. 2023"].map((t, i) => (
                <div key={i} className="inner-trust-badge">✅ {t}</div>
              ))}
            </div>
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title={`Service in ${data.city}`}
              subtitle="We serve your area. Get a free estimate today."
            />
            <div className="sidebar-trust">
              {["✅ Licensed & Insured", "✅ Same-Day Service", "✅ Free Estimates", "✅ No Payments Until 2027", "✅ 4.8★ Google Rating"].map((b, i) => (
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

function TopBar() {
  return (
    <div className="topbar">
      <div className="tb-inner">
        <span>📍 Serving Simpsonville, Greenville &amp; Surrounding Areas</span>
        <span className="tb-div">|</span>
        <span>🎉 No Payments Until 2027!</span>
      </div>
    </div>
  );
}
