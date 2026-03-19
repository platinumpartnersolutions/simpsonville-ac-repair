import { useLocation, Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { SEO, serviceSchema } from "@/components/SEO";
import "./landing.css";

interface SymptomData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  causes: { icon: string; cause: string; detail: string }[];
  relatedService: string;
  relatedServicePath: string;
  defaultService: string;
}

const DATA: Record<string, SymptomData> = {
  "/ac-not-cooling/": {
    h1: "AC Not Cooling in Simpsonville, SC? We Fix It Fast.",
    metaTitle: "AC Not Cooling Simpsonville SC | Emergency Repair | Call Now",
    metaDesc: "AC blowing warm air in Simpsonville? Get fast diagnosis and repair. Same-day service available. Call 864-754-7291 now.",
    intro: "If your air conditioner is running but not cooling your Simpsonville home, several issues could be responsible — ranging from a simple refrigerant shortage to a failing compressor. The longer you wait, the hotter your home gets and the more stress is placed on the system. Local licensed technicians diagnose the exact cause quickly and restore cooling, usually on the same visit.",
    causes: [
      { icon: "🧊", cause: "Low or No Refrigerant", detail: "Refrigerant doesn't get used up — if levels are low, your system has a leak. We locate and repair the leak, then recharge to the correct level." },
      { icon: "🔌", cause: "Failed Compressor", detail: "The compressor is the heart of your AC. If it fails, the system runs but can't cool. Compressor replacement or full system upgrade may be needed." },
      { icon: "❄️", cause: "Frozen Evaporator Coil", detail: "A dirty filter, low refrigerant, or blocked airflow can cause the coil to ice over, blocking heat transfer. Thawing and addressing the root cause restores cooling." },
      { icon: "🌫️", cause: "Dirty Condenser Coil", detail: "Outdoor coils clogged with debris prevent heat rejection. Professional cleaning restores full cooling capacity quickly." },
      { icon: "⚙️", cause: "Thermostat / Controls Issue", detail: "A faulty thermostat, failed capacitor, or wiring issue can cause the AC to run without properly engaging the compressor." },
      { icon: "🌀", cause: "Oversized or Undersized System", detail: "A system that's too large short-cycles (doesn't run long enough to dehumidify), while an undersized unit can never catch up on hot days." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },
  "/ac-not-turning-on/": {
    h1: "AC Won't Turn On in Simpsonville, SC?",
    metaTitle: "AC Not Turning On Simpsonville SC | Same-Day Diagnosis",
    metaDesc: "AC won't start in Simpsonville? Get same-day diagnosis and repair. Call 864-754-7291 for fast service.",
    intro: "An air conditioner that won't start or respond to the thermostat is one of the most urgent AC problems during Simpsonville's summer heat. The cause can be as simple as a tripped breaker or as involved as a failed control board. Local licensed technicians work through the diagnostic process systematically to find the exact cause and restore your system as quickly as possible.",
    causes: [
      { icon: "⚡", cause: "Tripped Circuit Breaker", detail: "AC units draw high current on startup. A tripped breaker — often caused by a power surge or an overloaded circuit — is the first thing to check." },
      { icon: "🔋", cause: "Failed Run/Start Capacitor", detail: "Capacitors give the motors the startup boost they need. When they fail (very common in summer heat), the motors can't start and the unit won't run." },
      { icon: "🌡️", cause: "Thermostat Problem", detail: "Dead batteries, incorrect settings, or a failed thermostat can prevent the signal that starts your AC from ever being sent." },
      { icon: "🔒", cause: "Safety Shutoff Triggered", detail: "High-pressure, low-pressure, and float switches shut the system off to prevent damage. These need to be diagnosed and the root cause resolved." },
      { icon: "🖥️", cause: "Control Board Failure", detail: "The circuit board that controls your AC can fail due to power surges, age, or moisture. Replacement restores full operation." },
      { icon: "🔌", cause: "Wiring or Disconnect Issue", detail: "Loose wiring, a blown fuse in the disconnect box, or a failed contactor can prevent power from reaching the unit." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },
  "/ac-leaking-water/": {
    h1: "AC Leaking Water in Simpsonville, SC?",
    metaTitle: "AC Leaking Water Simpsonville SC | Fast Repair Service",
    metaDesc: "AC leaking water in Simpsonville? We diagnose and repair drain clogs, frozen coils, and more. Call 864-754-7291.",
    intro: "Water leaking from your air conditioner — whether dripping from the indoor air handler or pooling on the floor — needs to be addressed quickly to prevent water damage, mold growth, and structural issues. In Simpsonville's humid climate, condensate drainage is critical to system performance and home health. Local licensed technicians diagnose the cause and fix it during the same visit in most cases.",
    causes: [
      { icon: "🚿", cause: "Clogged Condensate Drain Line", detail: "The most common cause. Algae, debris, and dirt build up in the drain line over time. We clear the blockage and treat the line to prevent regrowth." },
      { icon: "❄️", cause: "Frozen Evaporator Coil Thawing", detail: "When a frozen coil melts, excess water can overwhelm the drain pan. The freeze itself needs to be diagnosed and addressed." },
      { icon: "🪣", cause: "Cracked or Overflowing Drain Pan", detail: "Older drain pans can crack or corrode over time. A pan that's overflowing means the drain line is blocked or the pan itself needs replacement." },
      { icon: "💧", cause: "Low Refrigerant Causing Condensation", detail: "Low refrigerant causes the coil to run too cold, creating excessive condensation that can overwhelm the drain system." },
      { icon: "🌬️", cause: "Poor Airflow / Dirty Filter", detail: "Restricted airflow causes the coil to freeze, then thaw repeatedly — producing excess water that leaks past normal drain capacity." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },
  "/ac-making-noise/": {
    h1: "AC Making Loud Noise in Simpsonville, SC?",
    metaTitle: "AC Making Noise Simpsonville SC | Diagnose & Fix Today",
    metaDesc: "Strange AC noises in Simpsonville? We diagnose banging, squealing, clicking, and rattling. Call 864-754-7291 for same-day service.",
    intro: "Your air conditioner should operate with a steady, low hum. Any new or unusual noise — banging, squealing, grinding, clicking, rattling, or hissing — is a signal that something is wrong inside the system. Catching and addressing these sounds early usually prevents more serious and expensive failures. Local licensed technicians can identify exactly what's causing the noise and repair it the same day.",
    causes: [
      { icon: "💥", cause: "Banging or Clanking", detail: "A loose or broken part — like a connecting rod, piston, or fan blade — hitting the housing or other components. Shut the system off and call us immediately." },
      { icon: "🎵", cause: "Squealing or Screeching", detail: "Typically a worn blower belt (older systems) or failing blower motor bearings. This often gets worse over time until the motor seizes." },
      { icon: "🔊", cause: "Grinding", detail: "Bearing failure in the motor or compressor. The motor needs to be replaced before complete failure occurs and damages other components." },
      { icon: "🖱️", cause: "Clicking at Startup/Shutdown", detail: "Normal to hear a click or two. Repeated or continuous clicking indicates a failed relay, capacitor, or thermostat control issue." },
      { icon: "🔩", cause: "Rattling", detail: "Usually loose panels, debris in the unit, or a loose fan blade. Sometimes just requires tightening hardware — sometimes more involved." },
      { icon: "🐍", cause: "Hissing", detail: "A hissing sound, especially from the refrigerant lines, often indicates a refrigerant leak — which needs prompt professional attention." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },
  "/high-electric-bill/": {
    h1: "High Electric Bill from Your HVAC in Simpsonville, SC?",
    metaTitle: "HVAC High Electric Bill Simpsonville SC | Tune-Up & Repair",
    metaDesc: "High electric bills from your HVAC in Simpsonville? A tune-up or repair could cut your costs. Call 864-754-7291.",
    intro: "If your electric bill has risen noticeably while your usage habits haven't changed, your HVAC system is often the culprit. Cooling and heating account for the largest portion of residential energy use in the Upstate, and an inefficient or struggling system can add hundreds of dollars to your annual utility costs. Local licensed technicians diagnose the specific cause of your system's energy waste and restore efficient operation.",
    causes: [
      { icon: "🌡️", cause: "Low Refrigerant", detail: "An AC with low refrigerant runs continuously trying to reach the setpoint — consuming electricity without effective cooling." },
      { icon: "🧹", cause: "Dirty Coils", detail: "Dirty evaporator or condenser coils can reduce efficiency by 20–30%, forcing the system to run longer to move the same amount of heat." },
      { icon: "💨", cause: "Ductwork Leaks", detail: "Leaky ducts in attics and crawl spaces can waste 20–30% of conditioned air before it reaches living spaces — your system compensates by running more." },
      { icon: "📊", cause: "Wrong System Size", detail: "An oversized system short-cycles; an undersized one never stops running. Either way, efficiency suffers significantly." },
      { icon: "🔋", cause: "Aging, Inefficient Equipment", detail: "Older AC units with SEER ratings of 8–10 use twice the electricity of modern 18–20 SEER2 systems for the same cooling output." },
      { icon: "⚙️", cause: "Failing Components", detail: "Weak capacitors, a failing compressor, or worn motors draw more current than normal — increasing consumption without improving comfort." },
    ],
    relatedService: "AC Maintenance",
    relatedServicePath: "/ac-maintenance/",
    defaultService: "AC Maintenance / Tune-Up",
  },
};

export default function SymptomPage() {
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

      <div className="inner-hero symptom-hero">
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <Link href={data.relatedServicePath}>{data.relatedService}</Link>
            <span> › </span>
            <span>Troubleshooting</span>
          </div>
          <h1 className="inner-h1">{data.h1}</h1>
          <a href="tel:8647547291" className="inner-cta-phone urgent">
            🚨 <strong>864-754-7291</strong> — Call for Same-Day Diagnosis
          </a>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <p className="inner-intro">{data.intro}</p>

            <h2 className="inner-h2">Common Causes</h2>
            <div className="symptom-causes-grid">
              {data.causes.map((c, i) => (
                <div key={i} className="symptom-cause-card">
                  <div className="symptom-cause-icon">{c.icon}</div>
                  <div>
                    <h3 className="symptom-cause-title">{c.cause}</h3>
                    <p className="symptom-cause-detail">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="symptom-cta-box">
              <div>
                <strong>Stop guessing — get a professional diagnosis today.</strong>
                <p>Local licensed technicians will identify the exact cause and provide a written repair quote.</p>
              </div>
              <div className="inner-cta-strip-btns">
                <a href="tel:8647547291" className="cta-primary">📞 Call Now</a>
                <Link href={data.relatedServicePath} className="cta-outline-dark">{data.relatedService} →</Link>
              </div>
            </div>

            <div className="inner-related-links">
              <h3>Related Pages</h3>
              <div className="inner-related-grid">
                <Link href={data.relatedServicePath} className="inner-related-card">
                  <span>🔧</span> {data.relatedService}
                </Link>
                <Link href="/emergency-ac-repair/" className="inner-related-card">
                  <span>🚨</span> Emergency AC Repair
                </Link>
                <Link href="/free-estimate/" className="inner-related-card">
                  <span>📋</span> Free Estimate
                </Link>
                <Link href="/ac-maintenance/" className="inner-related-card">
                  <span>🛠️</span> Prevent Problems — Maintenance
                </Link>
              </div>
            </div>
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title="Schedule Diagnosis"
              subtitle="We'll identify the issue and provide an upfront repair quote."
              defaultService={data.defaultService}
            />
            <div className="sidebar-trust">
              {["✅ Same-Day Diagnosis", "✅ Upfront Pricing", "✅ Licensed Techs", "✅ All Makes & Models"].map((b, i) => (
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
        <span>📍 Serving Simpsonville &amp; Greenville Areas</span>
        <span className="tb-div">|</span>
        <span>🚨 Same-Day AC Repair Available — Call Now</span>
      </div>
    </div>
  );
}
