import { Link } from "wouter";
import { EmergencyPageTemplate, IssueList, type EmergencyPageConfig } from "@/components/EmergencyPageTemplate";

const STEPS = [
  { n: "1", title: "You call — we confirm same-day availability", body: "Call (810) 998-6747 and we'll confirm we can get a technician to your Simpsonville home today. During peak summer months, calling early in the day secures the fastest slot." },
  { n: "2", title: "Technician dispatched with fully stocked service van", body: "A local contractor is dispatched immediately. Contractor service vans are stocked with the most common replacement parts for Carrier, Trane, Lennox, Rheem, Goodman, York, and other major brands." },
  { n: "3", title: "Diagnosis on arrival — explained before touching anything", body: "When the technician arrives, they perform a thorough diagnostic and walk you through exactly what failed and why. You'll never be surprised by a repair you didn't understand." },
  { n: "4", title: "Upfront quote — no surprise charges", body: "Before any work begins, we give you a written quote. The price you approve is the price you pay. No after-hours upcharge, no hidden fees." },
  { n: "5", title: "Repair completed same visit in most cases", body: "The majority of emergency AC repairs in Simpsonville are completed in a single visit. If a specialty part needs to be ordered, we'll give you a firm timeline and temporary cooling recommendations." },
];

const PROBLEMS = [
  { name: "Capacitor failure", desc: "The most common AC emergency in SC summer heat. Capacitors start the compressor and fan motors — when they fail, the system shuts down completely. Most capacitor replacements run $150–$300 and are done within the hour." },
  { name: "Refrigerant leak or low charge", desc: "Refrigerant absorbs heat from your home's air. A leak or undercharge means the system can't cool effectively. We locate the leak, repair it, and recharge the system. Refrigerant service typically runs $200–$500 depending on the type." },
  { name: "Contactor failure", desc: "The contactor switches power to your compressor and condenser fan. A burned contactor is a common emergency repair, usually running $150–$250." },
  { name: "Frozen evaporator coil", desc: "Restricted airflow or low refrigerant causes ice to form on your indoor coil, blocking all cooling. We thaw the system, identify the root cause, and fix it same-day." },
  { name: "Blown fuses or tripped breaker", desc: "Electrical faults are one of the most common causes of sudden AC shutdowns. Local licensed technicians trace the fault to its source rather than just resetting the breaker." },
  { name: "Failed blower motor", desc: "Without the blower motor, conditioned air can't circulate through your home. Blower motor replacement typically runs $300–$600 and is done same-visit in most cases." },
];

const config: EmergencyPageConfig = {
  seo: {
    title: "Emergency AC Repair Simpsonville SC | Same-Day | Call (810) 998-6747",
    description: "AC broke down in Simpsonville? Our emergency AC repair team is available same-day. Licensed, local, and ready. Call (810) 998-6747 — no after-hours upcharge.",
    canonical: "/emergency-ac-repair/",
  },
  breadcrumb: "Emergency AC Repair",
  h1: "Emergency AC Repair in Simpsonville, SC — Available Now",
  tagline: "If your AC just stopped working in Simpsonville, we offer same-day emergency repair service — most calls are diagnosed and repaired within 2–4 hours of your call. Call (810) 998-6747 now and we'll dispatch a technician to your home today.",
  bannerLabel: "EMERGENCY AC REPAIR — AVAILABLE NOW",
  defaultService: "Emergency AC Repair",
  sections: [
    {
      heading: "What Counts as an AC Emergency in Simpsonville?",
      content: (
        <>
          <IssueList items={[
            "Complete system failure in 90°F+ SC summer heat",
            "AC running but no cold air with indoor temps rising above 80°F",
            "Electrical burning smell coming from the unit or vents",
            "Water actively flooding from the air handler or indoor unit",
            "System short-cycling — turning on and off every few minutes",
          ]} />
          <p className="inner-intro" style={{ marginTop: 16 }}>
            In our experience servicing Simpsonville homes, a complete AC failure in July or August is a genuine safety emergency — not just a comfort issue. Indoor temperatures in poorly ventilated slab-foundation homes can exceed 95°F within hours. Elderly residents, young children, and pets are especially vulnerable. If any of the situations above describe your home right now, call us before doing anything else.
          </p>
        </>
      ),
    },
    {
      heading: "What to Do While You Wait for Our Technician",
      content: (
        <>
          <ul className="inner-issues-list">
            <li><span className="issue-check">✅</span> Turn off the system at the thermostat to prevent further damage</li>
            <li><span className="issue-check">✅</span> Check and replace the air filter if it's accessible and visibly clogged</li>
            <li><span className="issue-check">✅</span> Close blinds on south- and west-facing windows to block radiant heat</li>
            <li><span className="issue-check">✅</span> Keep interior doors open to allow air circulation between rooms</li>
            <li><span className="issue-check">✅</span> Do not run the system if you smell burning — turn it off at the breaker</li>
          </ul>
          <p className="inner-intro" style={{ marginTop: 16 }}>
            Moving to the lowest floor of your home, running ceiling fans to maintain airflow, and staying hydrated will make the wait significantly more manageable. If temperatures indoors are approaching dangerous levels and you have vulnerable household members, consider moving to a neighbor's home or a public air-conditioned space while we're en route.
          </p>
        </>
      ),
    },
    {
      heading: "Our Emergency AC Repair Process in Simpsonville",
      content: (
        <div className="emergency-steps">
          {STEPS.map((s, i) => (
            <div key={i} className="emergency-step">
              <div className="emergency-step-num">{s.n}</div>
              <div>
                <strong>{s.title}</strong>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      heading: "Common Emergency AC Problems We Fix Same-Day",
      content: (
        <div>
          {PROBLEMS.map((p, i) => (
            <div key={i} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < PROBLEMS.length - 1 ? "1px solid #eef0f8" : "none" }}>
              <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, color: "#0D2D6E", marginBottom: 4 }}>
                🔧 {p.name}
              </h3>
              <p style={{ color: "#444", fontSize: 14, margin: 0, lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      heading: "Emergency AC Repair Cost in Simpsonville, SC",
      content: (
        <p className="inner-intro">
          Most emergency AC repairs in Simpsonville run between <strong>$150–$600</strong> depending on the part needed. Capacitor replacements average $150–$300. Refrigerant recharge runs $200–$500 depending on refrigerant type (R-22 systems cost more due to limited supply). Contactor replacements run $150–$250. Blower motor replacements run $300–$600. We give you an exact quote before any work begins — no guessing, no surprises. We do not charge an after-hours premium on emergency calls.
        </p>
      ),
    },
    {
      heading: "Why Simpsonville Homeowners Call Us First",
      content: (
        <ul className="inner-issues-list">
          <li><span className="issue-check">✅</span> <strong>Local</strong> — we know Simpsonville neighborhoods, housing stock, and common system types</li>
          <li><span className="issue-check">✅</span> <strong>Stocked vans</strong> — most repairs completed in one visit, no waiting for parts</li>
          <li><span className="issue-check">✅</span> <strong>Licensed and insured</strong> in South Carolina</li>
          <li><span className="issue-check">✅</span> <strong>No after-hours upcharge</strong> — same rate regardless of time of day</li>
          <li><span className="issue-check">✅</span> <strong>Same technician</strong> from diagnosis through repair — no handoffs</li>
          <li><span className="issue-check">✅</span> <strong>Internal links:</strong>{" "}<Link href="/ac-repair/" style={{ color: "#1A7AC4" }}>our standard AC repair service</Link> · <Link href="/ac-not-cooling/" style={{ color: "#1A7AC4" }}>AC running but not cooling</Link> · <Link href="/simpsonville-sc/" style={{ color: "#1A7AC4" }}>serving all of Simpsonville SC</Link></li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      q: "How fast can you get to my house for emergency AC repair in Simpsonville?",
      a: "In most cases we dispatch within 1 hour of your call and arrive within 2–3 hours. During peak summer months we recommend calling early in the day to secure same-day service.",
    },
    {
      q: "Do you charge extra for emergency or after-hours AC repair?",
      a: "No. Our service call rate is the same regardless of time of day. You pay for the diagnosis and repair — not a premium for urgency.",
    },
    {
      q: "What if my AC can't be repaired same-day?",
      a: "If a part needs to be ordered, we'll tell you immediately, give you a timeline, and in some cases provide a temporary cooling solution recommendation while you wait.",
    },
    {
      q: "Is it safe to run my AC during an emergency situation?",
      a: "If you smell burning or see sparks, turn it off at the breaker immediately. If it's just blowing warm air or not turning on, it's generally safe to attempt a restart — but call us before running it for extended periods in a failed state.",
    },
    {
      q: "Do you service all AC brands in emergency situations?",
      a: "Yes. We carry parts for Carrier, Trane, Lennox, Rheem, Goodman, York, and most other major brands on every service van.",
    },
  ],
  internalLinks: [
    { label: "Standard AC Repair Service", href: "/ac-repair/" },
    { label: "AC Running But Not Cooling", href: "/ac-not-cooling/" },
    { label: "Schedule a Free Diagnostic", href: "/free-estimate/" },
    { label: "Serving All of Simpsonville SC", href: "/simpsonville-sc/" },
    { label: "Emergency Furnace Repair", href: "/emergency-furnace-repair/" },
    { label: "Emergency Heat Pump Repair", href: "/emergency-heat-pump-repair/" },
  ],
  bottomCta: "Don't wait in the heat. Call now for emergency AC repair in Simpsonville, SC — same-day service available, no after-hours upcharge.",
};

export default function EmergencyPage() {
  return <EmergencyPageTemplate config={config} />;
}
