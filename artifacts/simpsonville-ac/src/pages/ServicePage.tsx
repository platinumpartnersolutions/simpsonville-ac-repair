import { useLocation, Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { SEO, serviceSchema } from "@/components/SEO";
import "./landing.css";

interface ServiceData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  benefits: { icon: string; title: string; body: string }[];
  commonIssues: string[];
  relatedSymptom?: string;
  defaultService: string;
  emergencyHref?: string;
  emergencyLabel?: string;
}

const DATA: Record<string, ServiceData> = {
  "/ac-repair/": {
    h1: "AC Repair in Simpsonville, SC",
    metaTitle: "AC Repair Simpsonville SC | Same-Day Service | Free Estimate",
    metaDesc: "Fast, reliable AC repair in Simpsonville, SC. Licensed technicians, same-day service, free estimates. Call (810) 998-6747 now.",
    intro: "When your air conditioner stops working or struggles to keep your home cool during Simpsonville's hot summers, you need fast, dependable repair service. Licensed technicians in our network diagnose and fix all makes and models of central air conditioning systems — from refrigerant leaks and frozen coils to faulty compressors and electrical failures. We connect you with same-day service and transparent pricing with no surprise fees.",
    benefits: [
      { icon: "⚡", title: "Same-Day Service", body: "Local licensed contractors are dispatched quickly so you're not stuck in the heat. Most repairs are completed on the first visit." },
      { icon: "🔧", title: "All Makes & Models", body: "We repair Carrier, Trane, Lennox, Goodman, Rheem, and every other major brand of central AC and heat pump systems." },
      { icon: "💰", title: "Upfront Pricing", body: "You'll know the cost before we start. No hidden fees, no surprises — just honest quotes from certified technicians." },
      { icon: "🛡️", title: "Licensed & Insured", body: "All work is performed by SC-licensed HVAC technicians. Every repair is backed by our workmanship warranty." },
    ],
    commonIssues: [
      "AC blowing warm or hot air",
      "Unit not turning on or cycling off quickly",
      "Ice or frost forming on the coil",
      "Strange noises (banging, squealing, clicking)",
      "Water leaking from the indoor unit",
      "Refrigerant leak — low cooling performance",
      "Thermostat not communicating with the unit",
    ],
    relatedSymptom: "/ac-not-cooling/",
    defaultService: "AC Repair",
    emergencyHref: "/emergency-ac-repair/",
    emergencyLabel: "Emergency AC Repair",
  },
  "/hvac-repair/": {
    h1: "HVAC Repair in Simpsonville, SC",
    metaTitle: "HVAC Repair Simpsonville SC | Licensed Technicians | Call Today",
    metaDesc: "Professional HVAC repair in Simpsonville, SC. Licensed contractors, all systems serviced. Call (810) 998-6747 for same-day service.",
    intro: "Your HVAC system is responsible for keeping your home comfortable year-round in Simpsonville's climate — from humid summer heat to cooler winter evenings. When heating or cooling performance drops, a properly trained HVAC technician can diagnose the root cause and restore reliable operation. We service all types of residential HVAC systems, including split systems, packaged units, heat pumps, and gas furnace combinations.",
    benefits: [
      { icon: "🌡️", title: "Full System Diagnostics", body: "We test every component — compressor, blower motor, heat exchanger, refrigerant levels — to find the exact cause of your issue." },
      { icon: "🔩", title: "Heating & Cooling", body: "Whether the problem is with your air conditioner in July or your furnace in January, we handle both sides of your HVAC system." },
      { icon: "📋", title: "Detailed Report", body: "After every service call you receive a written report of what was found and what was fixed, with maintenance recommendations." },
      { icon: "📅", title: "Flexible Scheduling", body: "We work around your schedule with morning, afternoon, and emergency appointment windows available 7 days a week." },
    ],
    commonIssues: [
      "System short-cycling (turning on and off rapidly)",
      "Uneven temperatures between rooms",
      "HVAC running constantly without reaching setpoint",
      "Dirty or clogged air filters reducing airflow",
      "Blower motor failure — no air movement",
      "Control board or thermostat faults",
      "Ductwork leaks causing efficiency loss",
    ],
    defaultService: "HVAC Repair",
  },
  "/ac-installation/": {
    h1: "AC Installation in Simpsonville, SC",
    metaTitle: "AC Installation Simpsonville SC | New Units | Free Estimate",
    metaDesc: "Expert AC installation in Simpsonville, SC. All major brands, free estimates, financing available. Call (810) 998-6747.",
    intro: "Installing a new air conditioning system in your Simpsonville home is one of the most impactful comfort upgrades you can make. A properly sized and installed central AC unit delivers consistent, efficient cooling through the Upstate's long, hot summers. Licensed installation teams handle everything from equipment selection and load calculations to refrigerant charging and system commissioning — leaving your home cool and your new system running correctly from day one.",
    benefits: [
      { icon: "📐", title: "Proper Load Calculation", body: "We size your new system correctly using Manual J load calculations — not guesswork. Correct sizing means lower bills and fewer breakdowns." },
      { icon: "🏆", title: "Top Brand Equipment", body: "We install Carrier, Trane, Lennox, Goodman, Daikin, and other leading brands. We'll help you choose the right unit for your home and budget." },
      { icon: "💳", title: "Financing Available", body: "New system installations qualify for flexible financing. No payments until 2027 on qualifying purchases — ask for details." },
      { icon: "📦", title: "Full Turnkey Install", body: "We handle equipment delivery, old unit removal, refrigerant disposal, electrical hookups, and system testing — everything included." },
    ],
    commonIssues: [
      "Old system over 12–15 years old — replacement is more cost-effective",
      "Frequent repairs adding up — new system saves money long-term",
      "High utility bills from an inefficient aging unit",
      "R-22 refrigerant (Freon) system — replacement parts unavailable",
      "Building a new home or addition requiring fresh installation",
      "Upgrading to a higher-efficiency SEER2-rated system",
    ],
    defaultService: "AC Installation",
  },
  "/ac-replacement/": {
    h1: "AC Replacement in Simpsonville, SC",
    metaTitle: "AC Replacement Simpsonville SC | Same-Day Quotes | All Brands",
    metaDesc: "Fast AC replacement in Simpsonville, SC. Same-day quotes, all brands, financing available. Call (810) 998-6747.",
    intro: "When repairing your existing air conditioner no longer makes financial sense, replacing it with a modern high-efficiency unit is the smarter investment. Our network of licensed contractors helps Simpsonville homeowners navigate the replacement process — from selecting the right capacity and efficiency rating to professional removal of the old system and complete installation of the new one. We connect you with competitive pricing and same-day quotes so you can make an informed decision quickly.",
    benefits: [
      { icon: "💡", title: "Energy Savings", body: "Modern SEER2-rated systems use significantly less electricity than units from 10+ years ago. Most homeowners see monthly savings immediately." },
      { icon: "🔄", title: "Old Unit Removal", body: "We properly remove and dispose of your old system, including refrigerant recovery per EPA regulations — all included in your quote." },
      { icon: "⏱️", title: "Fast Turnaround", body: "In most cases we can complete the replacement within 24–48 hours of your approval. We keep common equipment in stock." },
      { icon: "📜", title: "Warranty Coverage", body: "New systems come with manufacturer warranties (typically 10 years on parts) plus our installation workmanship guarantee." },
    ],
    commonIssues: [
      "System over 15 years old with declining performance",
      "Repair costs exceed 50% of a new system price",
      "Using outdated R-22 refrigerant (no longer manufactured)",
      "Visible rust, corrosion, or physical damage to the unit",
      "Consistent refrigerant leaks requiring repeated recharging",
      "SEER rating below 10 — inefficient by modern standards",
    ],
    defaultService: "AC Replacement",
  },
  "/heat-pump-repair/": {
    h1: "Heat Pump Repair & Installation in Simpsonville, SC",
    metaTitle: "Heat Pump Repair Simpsonville SC | Install & Replace | Call Now",
    metaDesc: "Expert heat pump repair and installation in Simpsonville, SC. All brands serviced. Call (810) 998-6747 for same-day service.",
    intro: "Heat pumps are the most energy-efficient way to heat and cool homes in Simpsonville's moderate climate — moving heat rather than generating it. When your heat pump struggles in either cooling or heating mode, local licensed technicians can diagnose the issue quickly, from reversing valve failures and defrost cycle problems to refrigerant leaks and compressor issues. We also connect you with full heat pump installations and replacements for homeowners upgrading from gas or older systems.",
    benefits: [
      { icon: "♻️", title: "Dual-Mode Expertise", body: "We service heat pumps in both cooling and heating modes — understanding the full refrigerant cycle and reversing valve operation." },
      { icon: "🌿", title: "Energy Efficiency", body: "Modern heat pumps achieve COPs of 3.0+, making them 2–3x more efficient than electric resistance heating. We help you maximize performance." },
      { icon: "❄️", title: "Cold-Weather Performance", body: "We optimize defrost cycles and refrigerant charge for Upstate South Carolina winters — ensuring reliable heating down to low ambient temperatures." },
      { icon: "🔋", title: "Inverter/Variable Speed", body: "We service modern inverter-driven heat pumps from Bosch, Mitsubishi, Daikin, and other leading variable-speed brands." },
    ],
    commonIssues: [
      "Heat pump blowing cold air in heating mode",
      "Outdoor unit icing up and not defrosting",
      "System stuck in one mode (cooling only or heating only)",
      "Reversing valve failure — common heat pump repair",
      "Poor heating efficiency in colder weather",
      "Short-cycling or tripping the breaker",
    ],
    defaultService: "Heat Pump Repair",
    emergencyHref: "/emergency-heat-pump-repair/",
    emergencyLabel: "Emergency Heat Pump Repair",
  },
  "/furnace-repair/": {
    h1: "Furnace Repair in Simpsonville, SC",
    metaTitle: "Furnace Repair Simpsonville SC | Same-Day Heat Restored",
    metaDesc: "Fast furnace repair in Simpsonville, SC. Same-day service, gas and electric furnaces, licensed technicians. Call (810) 998-6747.",
    intro: "When your furnace stops working during a Simpsonville winter, licensed technicians in our network respond quickly to restore heat to your home. We connect you with repair service for all types of residential furnaces including gas, electric, and oil systems — diagnosing ignition failures, heat exchanger cracks, blower motor issues, and control board faults. Most furnace repairs are completed on the same day, and contractor service vehicles carry common repair parts.",
    benefits: [
      { icon: "🔥", title: "Same-Day Heat Restoration", body: "We prioritize furnace calls during cold weather, dispatching technicians quickly to get your heat working again as fast as possible." },
      { icon: "🛡️", title: "Safety Inspections", body: "Every furnace service includes a heat exchanger inspection and carbon monoxide check — critical safety steps we never skip." },
      { icon: "🔧", title: "Gas & Electric Systems", body: "We service both natural gas and electric furnaces, as well as oil furnaces and dual-fuel heat pump/furnace combinations." },
      { icon: "🏷️", title: "Honest Repair Quotes", body: "We'll tell you whether repair or replacement is the better investment for your specific system before any work begins." },
    ],
    commonIssues: [
      "Furnace won't ignite — no heat at all",
      "Igniter or pilot light failure",
      "Blower fan not working — heat not distributed",
      "Furnace cycling on and off (limit switch issue)",
      "Yellow or orange burner flame (should be blue)",
      "Unusual smell from vents when heating",
      "Carbon monoxide alarm triggered",
    ],
    defaultService: "Furnace Repair",
    emergencyHref: "/emergency-furnace-repair/",
    emergencyLabel: "Emergency Furnace Repair",
  },
  "/ac-maintenance/": {
    h1: "AC Tune-Up & Maintenance in Simpsonville, SC",
    metaTitle: "AC Maintenance Simpsonville SC | Tune-Up & Service Plans",
    metaDesc: "Professional AC tune-up and maintenance in Simpsonville, SC. Prevent breakdowns, lower bills, extend system life. Call (810) 998-6747.",
    intro: "Regular AC maintenance is the most cost-effective way to prevent breakdowns, lower your monthly energy bills, and extend the life of your Simpsonville home's cooling system. Our comprehensive seasonal tune-up includes over 20 inspection and service points — from cleaning the evaporator coil and checking refrigerant levels to lubricating moving parts and testing electrical connections. Schedule your tune-up before peak cooling season to ensure your system is ready for Simpsonville's summer heat.",
    benefits: [
      { icon: "📋", title: "20-Point Inspection", body: "We check refrigerant levels, inspect coils, test capacitors, clean drain lines, measure airflow, and verify all electrical connections." },
      { icon: "💰", title: "Lower Energy Bills", body: "A well-maintained AC runs more efficiently. Most homeowners see measurable energy savings after a professional tune-up." },
      { icon: "🏥", title: "Prevent Breakdowns", body: "Catching worn capacitors, low refrigerant, and dirty coils before they fail saves you the cost and discomfort of an emergency repair." },
      { icon: "📅", title: "Service Plans", body: "Join our annual maintenance plan for priority scheduling, discounts on repairs, and peace of mind through every season." },
    ],
    commonIssues: [
      "Dirty evaporator and condenser coils reducing efficiency",
      "Clogged condensate drain causing water damage",
      "Low refrigerant reducing cooling capacity",
      "Worn capacitors and contactors near failure",
      "Restricted airflow from dirty filters or blocked registers",
      "Electrical connections loose or corroded",
    ],
    defaultService: "AC Maintenance / Tune-Up",
  },
  "/ductless-mini-split/": {
    h1: "Ductless Mini Split Installation in Simpsonville, SC",
    metaTitle: "Mini Split Installation Simpsonville SC | Ductless HVAC Experts",
    metaDesc: "Professional ductless mini split installation in Simpsonville, SC. Multi-zone systems, all brands. Call (810) 998-6747 for a free estimate.",
    intro: "Ductless mini split systems are the ideal solution for Simpsonville homes without existing ductwork, room additions, garages, sunrooms, and spaces where traditional ducted systems can't reach. These systems provide precise zone-by-zone temperature control with exceptional energy efficiency. Licensed technicians in our network handle design, installation, and commissioning of single-zone and multi-zone mini split systems from all major manufacturers.",
    benefits: [
      { icon: "🎯", title: "Zone Control", body: "Each indoor unit controls a specific zone independently. No more heating or cooling unoccupied rooms — saving energy and money." },
      { icon: "🔇", title: "Ultra Quiet Operation", body: "Mini split systems operate at whisper-quiet levels — often below 20dB for indoor units — making them ideal for bedrooms and offices." },
      { icon: "⚡", title: "High Efficiency", body: "Modern mini splits achieve SEER2 ratings of 20+, often qualifying for utility rebates and federal tax credits." },
      { icon: "🏗️", title: "No Ductwork Needed", body: "Installation requires only a small refrigerant line set — perfect for additions, garages, converted spaces, and older homes without ducts." },
    ],
    commonIssues: [
      "Home addition or sunroom needing independent temperature control",
      "Garage or workshop too hot in summer",
      "Older home with boiler or window ACs needing modern HVAC",
      "Home office or bedroom with comfort complaints",
      "Replacing inefficient window or portable AC units",
    ],
    defaultService: "Ductless Mini Split",
  },
};

export default function ServicePage() {
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
            <span>{data.h1.split(" in ")[0]}</span>
          </div>
          <h1 className="inner-h1">{data.h1}</h1>
          <a href="tel:8109986747" className="inner-cta-phone">
            📞 <strong>(810) 998-6747</strong> — Call for Same-Day Service
          </a>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <p className="inner-intro">{data.intro}</p>

            <h2 className="inner-h2">Why Choose Simpsonville AC Repair?</h2>
            <div className="inner-benefits-grid">
              {data.benefits.map((b, i) => (
                <div key={i} className="inner-benefit-card">
                  <div className="inner-benefit-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>

            <h2 className="inner-h2">Common Issues We Address</h2>
            <ul className="inner-issues-list">
              {data.commonIssues.map((issue, i) => (
                <li key={i}><span className="issue-check">✓</span> {issue}</li>
              ))}
            </ul>

            <div className="inner-cta-strip">
              <div>
                <strong>Need service now?</strong> Licensed contractors are standing by.
              </div>
              <div className="inner-cta-strip-btns">
                <a href="tel:8109986747" className="cta-primary">📞 (810) 998-6747</a>
                <Link href="/free-estimate/" className="cta-outline-dark">Free Estimate →</Link>
              </div>
            </div>

            <div className="inner-related-links">
              <h3>Related Services</h3>
              <div className="inner-related-grid">
                <Link href="/free-estimate/" className="inner-related-card">
                  <span>📋</span> Get a Free Estimate
                </Link>
                <Link href={data.emergencyHref || "/emergency-ac-repair/"} className="inner-related-card">
                  <span>🚨</span> {data.emergencyLabel || "Emergency AC Repair"}
                </Link>
                {data.relatedSymptom && (
                  <Link href={data.relatedSymptom} className="inner-related-card">
                    <span>🔍</span> Troubleshooting Guide
                  </Link>
                )}
                <Link href="/ac-maintenance/" className="inner-related-card">
                  <span>🛠️</span> AC Maintenance Plans
                </Link>
              </div>
            </div>
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title="Get a Free Estimate"
              subtitle="Fill out the form and we'll contact you within the hour."
              defaultService={data.defaultService}
            />
            <div className="sidebar-trust">
              {["✅ Licensed & Insured", "✅ Same-Day Service", "✅ Free Estimates", "✅ No Payments Until 2027", "✅ 4.8★ Google Rating"].map((b, i) => (
                <div key={i} className="sidebar-trust-item">{b}</div>
              ))}
            </div>
            <div className="sidebar-emergency">
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 15, color: "#CC2229", marginBottom: 6 }}>🚨 Emergency Service</div>
              <p style={{ fontSize: 13, color: "#555", margin: "0 0 12px" }}>AC out in the heat? We offer rapid-response emergency repairs.</p>
              <Link href={data.emergencyHref || "/emergency-ac-repair/"} className="cta-red" style={{ display: "block", textAlign: "center" }}>{data.emergencyLabel || "Emergency AC Repair"} →</Link>
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
        <span>📍 Serving Simpsonville &amp; Greenville Areas</span>
        <span className="tb-div">|</span>
        <span>🎉 No Payments Until 2027!</span>
      </div>
    </div>
  );
}
