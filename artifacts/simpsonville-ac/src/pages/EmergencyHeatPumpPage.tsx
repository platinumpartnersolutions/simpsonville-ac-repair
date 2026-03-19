import { Link } from "wouter";
import { EmergencyPageTemplate, IssueList, type EmergencyPageConfig } from "@/components/EmergencyPageTemplate";

const PROBLEMS = [
  { name: "Heat pump stuck in one mode", desc: "If your heat pump is heating when you need cooling (or vice versa), the reversing valve is likely stuck or failed. The reversing valve shifts refrigerant flow direction — when it fails, the system locks into one mode. Most reversing valve repairs run $400–$700." },
  { name: "Outdoor unit iced over", desc: "Heat pumps can ice up in both winter (normal, but excessive icing is a problem) and summer (abnormal — usually indicates low refrigerant or airflow restriction). We diagnose the cause and restore normal operation, typically in one visit." },
  { name: "Reversing valve failure", desc: "The reversing valve is unique to heat pumps and has no equivalent in standard AC systems. A failed reversing valve means complete loss of either heating or cooling mode. We stock reversing valves for the most common brands on our service vans." },
  { name: "Complete system lockout", desc: "Most modern heat pumps have protection lockouts that trigger when the system detects a fault. A locked-out system won't operate at all. Our technicians diagnose the fault code, identify the underlying cause, and restore operation." },
  { name: "Refrigerant leak causing no heating or cooling", desc: "Heat pumps use refrigerant to move heat in both directions. A leak affects both heating and cooling performance equally. We locate the leak, repair it, and recharge the system — refrigerant service typically runs $200–$500." },
];

const config: EmergencyPageConfig = {
  seo: {
    title: "Emergency Heat Pump Repair Simpsonville SC | Same-Day Service | (810) 998-6747",
    description: "Heat pump failure in Simpsonville? Same-day emergency repair available. Local, licensed, ready now. No after-hours upcharge. Call (810) 998-6747.",
    canonical: "/emergency-heat-pump-repair/",
  },
  breadcrumb: "Emergency Heat Pump Repair",
  h1: "Emergency Heat Pump Repair in Simpsonville, SC",
  tagline: "A heat pump failure in Simpsonville means losing both your heating and cooling in one failure — we provide same-day emergency heat pump repair so you're not stuck without climate control. Call (810) 998-6747 now.",
  bannerLabel: "EMERGENCY HEAT PUMP REPAIR — AVAILABLE NOW",
  defaultService: "Heat Pump Repair",
  heroColor: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
  sections: [
    {
      heading: "Common Emergency Heat Pump Failures We Fix",
      content: (
        <>
          <IssueList items={[
            "Heat pump stuck in heating mode during summer, or cooling mode during winter",
            "Outdoor unit iced over completely — in summer or winter",
            "Reversing valve failure — system can only heat or cool, not both",
            "Complete system lockout — no response at thermostat",
            "Refrigerant leak causing no effective heating or cooling",
            "Outdoor unit running but indoor air handler producing no airflow",
          ]} />
        </>
      ),
    },
    {
      heading: "Heat Pump vs. AC Emergency — What's Different",
      content: (
        <p className="inner-intro">
          A standard AC system failure means you lose cooling in summer — that's serious. But a heat pump failure can affect your home year-round, because heat pumps provide both heating and cooling from a single system. In Simpsonville's mild winters, heat pumps handle the bulk of residential heating. That means a reversing valve failure or refrigerant leak in January leaves you without heat, not just without cooling. In our experience servicing Simpsonville homes, heat pump emergencies are often more disruptive than standard AC failures because there's no backup heating system. We treat heat pump emergencies with the same urgency as mid-summer AC failures — same-day response, stocked vans, no after-hours upcharge.
        </p>
      ),
    },
    {
      heading: "Our Emergency Heat Pump Repair Process",
      content: (
        <div className="emergency-steps">
          {[
            { n: "1", title: "You call — we dispatch same-day", body: "Call (810) 998-6747 and we'll get a technician to your Simpsonville home today. Heat pump emergencies are dispatched with the same priority as AC failures." },
            { n: "2", title: "Mode testing and fault code retrieval", body: "Heat pump diagnostics are more involved than standard AC — we test both heating and cooling modes, check refrigerant pressures, and retrieve any stored fault codes from the control board." },
            { n: "3", title: "Root cause identified and explained", body: "We don't guess. We identify the exact component that failed, explain it in plain language, and give you a written quote before any repair begins." },
            { n: "4", title: "Same-visit repair in most cases", body: "We carry reversing valves, capacitors, contactors, refrigerant, and control boards for the most common heat pump brands on every service van." },
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
      heading: "Common Emergency Heat Pump Problems We Fix Same-Day",
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
      heading: "Emergency Heat Pump Repair Cost in Simpsonville",
      content: (
        <p className="inner-intro">
          Emergency heat pump repairs in Simpsonville typically run <strong>$150–$800</strong> depending on the component. Capacitor replacement runs $150–$300. Reversing valve replacement runs $400–$700. Refrigerant service runs $200–$500. Control board replacement runs $300–$700. We quote before we touch anything — no after-hours upcharge regardless of when you call.
        </p>
      ),
    },
    {
      heading: "Why Choose Us for Emergency Heat Pump Repair",
      content: (
        <ul className="inner-issues-list">
          <li><span className="issue-check">✅</span> <strong>Heat pump specialists</strong> — not just AC technicians who've seen a heat pump</li>
          <li><span className="issue-check">✅</span> <strong>All major brands</strong> — Carrier, Trane, Lennox, Rheem, Bosch, Mitsubishi, and more</li>
          <li><span className="issue-check">✅</span> <strong>Stocked vans</strong> — reversing valves, capacitors, and refrigerant on every truck</li>
          <li><span className="issue-check">✅</span> <strong>No after-hours upcharge</strong> on emergency calls</li>
          <li><span className="issue-check">✅</span> Also see: <Link href="/heat-pump-repair/" style={{ color: "#1A7AC4" }}>standard heat pump repair</Link> · <Link href="/emergency-ac-repair/" style={{ color: "#1A7AC4" }}>emergency AC repair</Link></li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      q: "Why is my heat pump blowing cold air in heat mode?",
      a: "This usually means the reversing valve is stuck, the refrigerant is low, or the system is in defrost mode (normal, brief). If cold air continues for more than 15 minutes in heat mode, turn the system off and call us.",
    },
    {
      q: "Can a heat pump freeze up in summer?",
      a: "Yes. Summer icing on a heat pump typically indicates low refrigerant or restricted airflow from a dirty filter or blocked coil. Unlike winter defrost cycling, summer icing is always a malfunction that needs repair.",
    },
    {
      q: "Is emergency heat pump repair more expensive than AC repair?",
      a: "Heat pump repairs are generally in the same price range as AC repairs. Some heat pump-specific components like reversing valves cost more than equivalent AC parts, but routine components like capacitors and refrigerant are priced the same.",
    },
    {
      q: "Do you carry heat pump parts on your service vans?",
      a: "Yes. Our vans carry reversing valves, capacitors, contactors, refrigerant, and control boards for the most common heat pump brands and models we see in Simpsonville homes.",
    },
    {
      q: "My heat pump works in one season but not the other — is that an emergency?",
      a: "It depends on the season. If your heat pump won't heat in winter or won't cool in July, treat it as urgent — call us the same day. If the off-season is months away, you can schedule a standard service call, but we recommend addressing it before you need the system.",
    },
  ],
  internalLinks: [
    { label: "Standard Heat Pump Repair Service", href: "/heat-pump-repair/" },
    { label: "Emergency AC Repair", href: "/emergency-ac-repair/" },
    { label: "Emergency Furnace Repair", href: "/emergency-furnace-repair/" },
    { label: "Schedule a Free Diagnostic", href: "/free-estimate/" },
  ],
  bottomCta: "Don't lose heating and cooling at the same time. Call now for emergency heat pump repair in Simpsonville, SC — same-day service, no after-hours upcharge.",
};

export default function EmergencyHeatPumpPage() {
  return <EmergencyPageTemplate config={config} />;
}
