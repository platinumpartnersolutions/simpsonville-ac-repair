import { Link } from "wouter";
import { EmergencyPageTemplate, IssueList, type EmergencyPageConfig } from "@/components/EmergencyPageTemplate";

const PROBLEMS = [
  { name: "Failed ignitor", desc: "The most common furnace emergency — the ignitor lights the gas burner. When it fails, the furnace attempts to start but produces no heat. Ignitor replacement averages $150–$300 and is almost always a same-visit repair." },
  { name: "Bad flame sensor", desc: "A dirty or failed flame sensor causes the burner to ignite briefly then shut off repeatedly. Cleaning or replacing the flame sensor typically runs $100–$200 and takes under an hour." },
  { name: "Cracked heat exchanger", desc: "A cracked heat exchanger is a safety emergency — it can allow combustion gases including carbon monoxide to enter your home's airflow. We treat every suspected heat exchanger failure as urgent and will advise you on next steps." },
  { name: "Failed blower motor", desc: "The blower motor circulates heated air through your home. When it fails, heat builds up in the heat exchanger and the system shuts down on the high-limit switch. Replacement runs $300–$600." },
  { name: "Tripped high-limit switch", desc: "The high-limit switch is a safety device that shuts the furnace off when it overheats. A tripped switch usually means restricted airflow from a clogged filter or a failing blower — we diagnose the root cause, not just reset the switch." },
  { name: "Gas valve failure", desc: "If the gas valve fails to open, the furnace will attempt to ignite but produce no heat. Gas valve replacement typically runs $300–$600 depending on the unit." },
];

const config: EmergencyPageConfig = {
  seo: {
    title: "Emergency Furnace Repair Simpsonville SC | Same-Day | Call 864-754-7291",
    description: "Furnace out in Simpsonville? Same-day emergency furnace repair available. Licensed, local, ready now. No after-hours upcharge. Call 864-754-7291.",
    canonical: "/emergency-furnace-repair/",
  },
  breadcrumb: "Emergency Furnace Repair",
  h1: "Emergency Furnace Repair in Simpsonville, SC — Same-Day Service",
  tagline: "If your furnace stopped working in Simpsonville, we provide same-day emergency furnace repair — most homes are restored to heat within 2–4 hours of your call. Call 864-754-7291 now.",
  bannerLabel: "EMERGENCY FURNACE REPAIR — AVAILABLE NOW",
  defaultService: "Emergency AC Repair",
  heroColor: "linear-gradient(135deg, #1e3a5f 0%, #0d2d6e 100%)",
  sections: [
    {
      heading: "Signs Your Furnace Needs Emergency Repair",
      content: (
        <>
          <IssueList items={[
            "No heat with indoor temperatures dropping below 60°F",
            "Furnace running but blowing cold air through all vents",
            "Furnace cycling on and off every few minutes (short-cycling)",
            "Gas smell near the furnace — evacuate and call the gas company first, then call us",
            "Loud banging, screeching, or booming sounds on startup",
            "Carbon monoxide alarm triggered anywhere in the home",
          ]} />
          <p className="inner-intro" style={{ marginTop: 16 }}>
            In our experience servicing Simpsonville homes, furnace emergencies in winter are just as urgent as AC failures in summer. A home without heat can reach dangerous low temperatures overnight, particularly for elderly residents, infants, and pets. If you smell gas, leave the property immediately and call your gas provider before calling us — gas leaks require immediate emergency utility response.
          </p>
        </>
      ),
    },
    {
      heading: "What to Do While You Wait for Our Technician",
      content: (
        <>
          <ul className="inner-issues-list">
            <li><span className="issue-check">✅</span> Turn the thermostat to "off" to stop repeated failed ignition attempts</li>
            <li><span className="issue-check">✅</span> Check the furnace filter — a severely clogged filter is a common cause of shutdowns</li>
            <li><span className="issue-check">✅</span> Check the circuit breaker for the furnace — reset once if tripped</li>
            <li><span className="issue-check">✅</span> If you smell gas, leave immediately and call the gas company before anything else</li>
            <li><span className="issue-check">✅</span> Use electric space heaters safely in occupied rooms while you wait</li>
          </ul>
          <p className="inner-intro" style={{ marginTop: 16 }}>
            Do not repeatedly attempt to restart a furnace that isn't igniting — each failed start dumps unburned gas into the heat exchanger. If the furnace is short-cycling (starting and stopping every few minutes), turn it off at the thermostat and wait for the technician to diagnose the root cause safely.
          </p>
        </>
      ),
    },
    {
      heading: "Our Emergency Furnace Repair Process in Simpsonville",
      content: (
        <div className="emergency-steps">
          {[
            { n: "1", title: "You call — we confirm same-day availability", body: "Call 864-754-7291 and we confirm a technician can get to your Simpsonville home today. Most emergency furnace calls are dispatched within the hour." },
            { n: "2", title: "Technician arrives with fully stocked service van", body: "Contractor service vans carry ignitors, flame sensors, capacitors, contactors, and other commonly failed furnace components for all major brands." },
            { n: "3", title: "Safety check before diagnosis", body: "We test for gas leaks and carbon monoxide before beginning diagnostic work. Safety is step one on every furnace call." },
            { n: "4", title: "Diagnosis explained clearly before any repair", body: "We show you exactly what failed and why. You'll understand the problem before we quote the repair." },
            { n: "5", title: "Upfront quote, same-visit repair in most cases", body: "You approve the price before we touch anything. Most emergency furnace repairs are completed in a single visit." },
          ].map((s, i) => (
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
      heading: "Common Emergency Furnace Problems We Fix Same-Day",
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
      heading: "Emergency Furnace Repair Cost in Simpsonville",
      content: (
        <p className="inner-intro">
          Most emergency furnace repairs run <strong>$150–$700</strong>. Ignitor replacement averages $150–$300. Flame sensor cleaning or replacement runs $100–$200. High-limit switch replacement runs $150–$300. Blower motor replacement runs $300–$600. Gas valve replacement runs $300–$600. We quote before we touch anything — no after-hours upcharge, no surprise charges.
        </p>
      ),
    },
    {
      heading: "Why Simpsonville Homeowners Trust Us for Furnace Emergencies",
      content: (
        <ul className="inner-issues-list">
          <li><span className="issue-check">✅</span> <strong>Safety first</strong> — we test for CO and gas leaks before any diagnostic work</li>
          <li><span className="issue-check">✅</span> <strong>All brands serviced</strong> — Carrier, Trane, Lennox, Rheem, Goodman, York, and more</li>
          <li><span className="issue-check">✅</span> <strong>Stocked vans</strong> — most repairs completed in one visit</li>
          <li><span className="issue-check">✅</span> <strong>No after-hours upcharge</strong> on emergency calls</li>
          <li><span className="issue-check">✅</span> <strong>Licensed and insured</strong> in South Carolina</li>
          <li><span className="issue-check">✅</span> Also see: <Link href="/furnace-repair/" style={{ color: "#1A7AC4" }}>our standard furnace repair service</Link> · <Link href="/emergency-ac-repair/" style={{ color: "#1A7AC4" }}>emergency AC repair</Link></li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      q: "How quickly can you respond to a furnace emergency in Simpsonville?",
      a: "In most cases we dispatch within 1 hour of your call and arrive within 2–3 hours. For morning calls, same-day service is almost always available.",
    },
    {
      q: "Is a gas smell a furnace emergency?",
      a: "Yes — if you smell gas near your furnace, leave the property immediately, call your gas utility's emergency line, and do not use any electrical switches or open flames. Once the utility has confirmed safety, call us to inspect and repair the furnace.",
    },
    {
      q: "What if my furnace needs a part that isn't on the service van?",
      a: "We stock the most common replacement parts on every van. If your system needs a specialty part, we'll give you a firm delivery timeline and discuss temporary heating options while you wait.",
    },
    {
      q: "Should I turn off my furnace if it's making a loud noise?",
      a: "Yes. A loud banging, screeching, or booming noise typically indicates a mechanical failure — a failing motor bearing, an ignition issue, or a heat exchanger problem. Turn off the system at the thermostat and call us immediately.",
    },
    {
      q: "Do you repair all furnace brands?",
      a: "Yes. We connect you with technicians who service Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant, and other major brands. Contractor service vans carry components for the most common models in Simpsonville homes.",
    },
  ],
  internalLinks: [
    { label: "Standard Furnace Repair Service", href: "/furnace-repair/" },
    { label: "Emergency AC Repair", href: "/emergency-ac-repair/" },
    { label: "Emergency Heat Pump Repair", href: "/emergency-heat-pump-repair/" },
    { label: "Schedule a Free Diagnostic", href: "/free-estimate/" },
  ],
  bottomCta: "Don't go without heat. Call now for emergency furnace repair in Simpsonville, SC — same-day service, no after-hours upcharge.",
};

export default function EmergencyFurnacePage() {
  return <EmergencyPageTemplate config={config} />;
}
