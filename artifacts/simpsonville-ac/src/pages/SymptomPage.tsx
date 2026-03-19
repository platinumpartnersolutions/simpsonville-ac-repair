import { useState } from "react";
import { useLocation, Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { SEO, serviceSchema, FAQ_SCHEMA } from "@/components/SEO";
import "./landing.css";

interface FaqItem { q: string; a: string }
interface RelatedService { href: string; icon: string; title: string; desc: string }

interface SymptomData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  quickAnswer: string;
  causes: { icon: string; cause: string; detail: string }[];
  relatedService: string;
  relatedServicePath: string;
  defaultService: string;
  faqItems: FaqItem[];
  relatedServices: RelatedService[];
}

const DATA: Record<string, SymptomData> = {
  "/ac-not-cooling/": {
    h1: "AC Not Cooling in Simpsonville, SC? Here's Why.",
    metaTitle: "AC Not Cooling Simpsonville SC | Same-Day Diagnosis | Call Now",
    metaDesc: "AC running but not cooling in Simpsonville? The 3 most common causes are dirty filter, low refrigerant, or failed capacitor — all diagnosable in under 30 minutes. Call 864-754-7291.",
    intro: "If your AC is running but not cooling, the three most likely causes in Simpsonville homes are a dirty air filter restricting airflow, low refrigerant from a slow leak, or a failing capacitor causing the compressor to underperform — all diagnosable in under 30 minutes by a licensed technician. The longer you wait, the hotter your home gets and the more stress is placed on the system running at reduced capacity; call 864-754-7291 for same-day diagnosis.",
    quickAnswer: "An AC running but not cooling in Simpsonville is most often caused by low refrigerant (leak), a dirty or clogged air filter, a failed capacitor preventing the compressor from fully starting, or a dirty condenser coil blocking heat rejection outdoors. A licensed technician can diagnose the exact cause in under 30 minutes. Same-day service is available — call 864-754-7291.",
    causes: [
      { icon: "🧊", cause: "Low or No Refrigerant — Most Common Cause", detail: "Refrigerant doesn't get consumed — if levels are low, your system has a leak. Low refrigerant means the AC can run all day and never cool effectively. A technician locates the leak, repairs it, and recharges to the correct level. Running a system with low refrigerant long-term damages the compressor." },
      { icon: "🔌", cause: "Failed Compressor", detail: "The compressor is the heart of the AC — it pumps refrigerant through the system. If it fails, the unit runs (fans spin, thermostat signals) but no cooling happens. A technician confirms compressor failure with an amp draw test and pressure check." },
      { icon: "❄️", cause: "Frozen Evaporator Coil", detail: "A dirty filter, low refrigerant, or blocked airflow causes the evaporator coil to ice over. When coated in ice, the coil can't absorb heat from your home's air. You may notice reduced airflow from vents. The coil needs to thaw (system off for 2–4 hours) and the root cause addressed before it refreezes." },
      { icon: "🌫️", cause: "Dirty Condenser Coil Outdoors", detail: "The outdoor condenser coil releases the heat extracted from your home. When clogged with dirt, pollen, or debris — common in Simpsonville's spring and summer — heat can't escape and the system loses cooling capacity significantly. Professional coil cleaning restores performance." },
      { icon: "⚙️", cause: "Failed Capacitor", detail: "Capacitors start and run the compressor and fan motors. A weak capacitor causes the compressor to struggle — it may run but at reduced capacity, producing warm air instead of cold. Capacitors fail frequently in the SC summer heat. Replacement costs $150–$300 and takes under an hour." },
      { icon: "🌀", cause: "Oversized or Undersized System", detail: "A system that's too large short-cycles — it cools the air quickly but doesn't run long enough to dehumidify, leaving the home feeling clammy even at setpoint. An undersized unit simply can't keep up on 95°F+ days. Either issue requires a proper load calculation to solve correctly." },
    ],
    faqItems: [
      { q: "Why is my AC running but not cooling my Simpsonville home?", a: "The most common reasons an AC runs without cooling are: low refrigerant (a leak is preventing proper heat transfer), a failed or weak capacitor (the compressor isn't starting fully), a dirty condenser coil (heat can't be rejected outdoors), a frozen evaporator coil (usually caused by low refrigerant or restricted airflow), or a failed compressor. A diagnostic will identify the exact cause in under 30 minutes." },
      { q: "How long can I run an AC that's not cooling before it causes damage?", a: "Running an AC with low refrigerant for extended periods can damage the compressor — refrigerant also carries the oil that lubricates the compressor, so running with a significant leak accelerates wear. If you notice warm air, it's best to call for a same-day diagnosis rather than continuing to run the system hoping it resolves itself." },
      { q: "What's the first thing I should check if my AC isn't cooling?", a: "Check the air filter first. A severely clogged filter restricts airflow dramatically and can cause the evaporator coil to freeze — which prevents cooling. Pull the filter and inspect it; if it's gray and matted, replace it and run the system with the filter door open for 2 hours to thaw the coil. If cooling doesn't resume, call for a diagnostic." },
      { q: "Why does my AC cool fine at night but not during the day?", a: "This is a classic symptom of a system that's undersized for the heat load, or one that's functioning at reduced capacity due to low refrigerant or dirty coils. During peak afternoon heat (2–5pm), the demand exceeds what the struggling system can supply. The system catches up overnight when ambient temperatures drop. A diagnostic and proper sizing analysis will identify the cause." },
      { q: "Can I recharge my own AC refrigerant in Simpsonville?", a: "No — EPA Section 608 prohibits unlicensed persons from purchasing or handling refrigerants used in residential AC systems (R-410A and R-22). Additionally, adding refrigerant without fixing the underlying leak is a temporary fix that delays and worsens the damage. A licensed technician must locate, repair the leak, and then recharge to the correct level." },
      { q: "How much does it cost to fix an AC that's not cooling in Simpsonville?", a: "Diagnosis typically reveals one of a few common causes: capacitor replacement ($150–$300), refrigerant recharge after leak repair ($200–$500), condenser coil cleaning ($100–$250), or blower motor replacement if airflow is the issue ($300–$600). Compressor replacement ($800–$2,500) or full system replacement may be recommended if the compressor has failed on an older system." },
      { q: "Is it normal for AC to not cool on the hottest days in Simpsonville?", a: "Slightly reduced performance on extreme heat days (above 95°F) is normal — all AC systems are designed to maintain a certain temperature difference (typically 20°F below outdoor temperature). If the system keeps your home at 75°F when it's 95°F outside, that's correct operation. If the system can't get below 82°F on a 92°F day, there's an efficiency problem worth diagnosing." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Full repair service for all AC failures — same-day in Simpsonville." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Rapid-response same-day service when your home is getting dangerously hot." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Tune-Up", desc: "Prevent future not-cooling problems with annual maintenance." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "When the system is beyond cost-effective repair — get a free replacement quote." },
      { href: "/high-electric-bill/", icon: "💰", title: "High Electric Bill?", desc: "An AC not cooling efficiently drives up energy costs — find out why." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },

  "/ac-not-turning-on/": {
    h1: "AC Won't Turn On in Simpsonville, SC?",
    metaTitle: "AC Not Turning On Simpsonville SC | Same-Day Diagnosis | 864-754-7291",
    metaDesc: "AC won't start in Simpsonville? Most common causes are a tripped breaker, failed capacitor, or thermostat issue — diagnosable same-day. Call 864-754-7291.",
    intro: "If your AC won't turn on at all in Simpsonville, the most common causes are a tripped circuit breaker, a failed capacitor, or a dead thermostat — all diagnosable in under 30 minutes. Before calling, check your thermostat settings and circuit breaker panel; if the breaker is tripped or the thermostat is unresponsive, call 864-754-7291 for same-day diagnosis — most no-start failures are repaired the same day.",
    quickAnswer: "An AC that won't turn on in Simpsonville is most often caused by a tripped circuit breaker, a failed capacitor (the most common cause of sudden AC shutdown in SC summer heat), a dead thermostat, or a safety switch that has triggered. Check your breaker panel first — if the breaker is tripped, reset it once. If it trips again immediately, call for service before resetting again.",
    causes: [
      { icon: "⚡", cause: "Tripped Circuit Breaker — Check First", detail: "AC units draw high current on startup. A tripped breaker — caused by a power surge, overloaded circuit, or a failing component drawing excess current — is the first thing to check. Reset it once. If it trips immediately again, do not reset it again — call for service. Repeated tripping indicates an electrical fault that needs diagnosis." },
      { icon: "🔋", cause: "Failed Run or Start Capacitor", detail: "Capacitors give the compressor and fan motors the electrical boost to start. When they fail — very common in SC summer heat — the motors can't start and the unit won't run even though it has power. You may hear a humming sound from the outdoor unit. Capacitor replacement costs $150–$300 and takes under an hour." },
      { icon: "🌡️", cause: "Thermostat Not Sending Signal", detail: "Dead batteries, incorrect settings (system set to heat instead of cool, or fan set to 'on' instead of 'auto'), or a failed thermostat can prevent the signal that starts your AC from ever being sent. Check that the thermostat is set to cool, the setpoint is below room temperature, and batteries are fresh (for battery-powered units)." },
      { icon: "🔒", cause: "Safety Switch Has Triggered", detail: "High-pressure switches, low-pressure switches, and condensate float switches are all safety devices that shut the system off to prevent damage. A triggered float switch usually means the condensate drain is clogged. Other safety switches indicate refrigerant or pressure issues. The root cause must be diagnosed — not just the switch reset." },
      { icon: "🖥️", cause: "Control Board Failure", detail: "The control board coordinates all system operations. Power surges, moisture, and age can cause it to fail. A failed board can cause the system to not respond to any thermostat signal. Replacement restores full operation — cost typically $300–$700." },
      { icon: "🔌", cause: "Wiring, Fuse, or Disconnect Issue", detail: "Loose wiring, a blown fuse in the outdoor disconnect box, or a failed contactor (the switch that delivers power to the compressor) can prevent the outdoor unit from receiving power. The indoor air handler may appear to run while the outdoor unit does nothing — a common sign of this fault." },
    ],
    faqItems: [
      { q: "What should I check first if my AC won't turn on?", a: "Follow this sequence: 1) Check the thermostat — make sure it's set to 'cool', setpoint is below room temperature, and batteries are fresh. 2) Check the circuit breaker panel — reset any tripped breakers once. 3) Check the outdoor disconnect box for blown fuses. 4) Check the indoor air handler for a tripped float switch (a small safety device near the drain pan). If none of these resolve it, call for a diagnostic." },
      { q: "Why does my AC breaker keep tripping?", a: "A circuit breaker that trips repeatedly (not just once) indicates an electrical fault: the compressor may be drawing too much current due to a failing capacitor, the wiring may have a fault, or the compressor itself may be failing. Do not continue resetting a breaker that trips immediately — this can cause further damage or a fire hazard. Call for service." },
      { q: "How much does it cost to fix an AC that won't turn on?", a: "The cost depends on the cause. Capacitor replacement ($150–$300) is the most common fix for sudden no-start failures. Thermostat replacement ($150–$400) is another common repair. Control board replacement runs $300–$700. Contactor replacement costs $150–$250. A diagnostic fee is typically charged but waived when you proceed with the repair." },
      { q: "Can I reset my AC myself if it won't turn on?", a: "Yes, for simple resets. Try: resetting the circuit breaker once, replacing thermostat batteries, and checking for a reset button on the air handler (some units have one). If the unit starts then trips off again immediately, or if it still won't start after these steps, call for a licensed technician — further resets without diagnosis can cause additional damage." },
      { q: "My indoor unit is blowing air but the outdoor unit isn't running — what does that mean?", a: "This is a classic symptom of a failed capacitor or contactor on the outdoor unit. The indoor blower runs because it has power, but the compressor and outdoor fan can't start without a functioning capacitor or contactor. This is a same-day repair in most cases — call 864-754-7291." },
      { q: "How long does it take to diagnose an AC that won't turn on?", a: "Most no-start diagnostics take 20–45 minutes. Licensed technicians follow a systematic sequence — thermostat signal, power at the disconnect, contactor function, capacitor test, compressor amp draw — that quickly narrows the fault. In most cases, the repair is completed the same visit." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Full repair service for AC failures — same-day in Simpsonville." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Urgent same-day service when you need your AC working immediately." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Running But Not Cooling", desc: "Troubleshoot an AC that runs but doesn't cool the home." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Tune-Up", desc: "Prevent future no-start failures with annual maintenance." },
      { href: "/free-estimate/", icon: "📋", title: "Free Estimate", desc: "Get a no-obligation written estimate for AC repair in Simpsonville." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },

  "/ac-leaking-water/": {
    h1: "AC Leaking Water in Simpsonville, SC?",
    metaTitle: "AC Leaking Water Simpsonville SC | Same-Day Repair | 864-754-7291",
    metaDesc: "AC leaking water in Simpsonville? Usually a clogged drain line — diagnosable same-day. Call 864-754-7291 before it causes water damage.",
    intro: "An AC leaking water in Simpsonville is most often a clogged condensate drain line — Simpsonville's high summer humidity means your AC removes large amounts of moisture from the air, and that water needs to drain properly. Left unaddressed, a blocked drain can overflow and cause water damage to ceilings, walls, and flooring within hours. Call 864-754-7291 for same-day diagnosis — most drain issues are cleared in a single visit.",
    quickAnswer: "AC water leaks in Simpsonville are most commonly caused by a clogged condensate drain line (blocked by algae or debris), a frozen evaporator coil thawing, or an overflowing drain pan. The drain line is the culprit in roughly 70% of AC water leak calls. It can be cleared same-day and treated to prevent regrowth. Shut off the AC if water is actively dripping to prevent water damage while waiting for service.",
    causes: [
      { icon: "🚿", cause: "Clogged Condensate Drain Line — Most Common", detail: "The most common cause by far. Algae, debris, and dirt build up in the condensate drain line over time — especially in Simpsonville's humid conditions. When blocked, water backs up into the drain pan and overflows. A technician clears the blockage and treats the line with biocide to prevent regrowth. This is a same-day fix." },
      { icon: "❄️", cause: "Frozen Evaporator Coil Thawing", detail: "When a frozen coil melts, it produces excess water that overwhelms the drain pan. You'll notice the leak is intermittent and may accompany reduced airflow from vents. The freeze itself — caused by low refrigerant, a dirty filter, or restricted airflow — needs to be diagnosed and addressed to prevent recurrence." },
      { icon: "🪣", cause: "Cracked or Overflowing Drain Pan", detail: "The drain pan catches condensate from the evaporator coil. Older pans can crack or corrode, allowing water to bypass the drain outlet entirely. An overflowing pan usually means the drain line is blocked. Either issue is diagnosed visually during the service call." },
      { icon: "💧", cause: "Low Refrigerant Causing Excess Condensation", detail: "Low refrigerant causes the evaporator coil to run at an abnormally low temperature, creating excessive condensation that overwhelms the normal drain capacity. This usually accompanies reduced cooling performance. Fixing the refrigerant leak addresses both the leak and the cooling problem." },
      { icon: "🌬️", cause: "Dirty Filter Causing Freeze-Thaw Cycle", detail: "A severely clogged air filter restricts airflow across the evaporator coil, causing it to freeze. When the system shuts off or the temperature drops, the ice melts and floods the drain pan. The fix starts with replacing the filter — but if this has happened repeatedly, coil and drain inspection is needed." },
    ],
    faqItems: [
      { q: "Why is my AC leaking water inside my Simpsonville home?", a: "Water inside the home typically means the condensate drain line is clogged and the drain pan is overflowing. The other common causes are a frozen coil thawing (which causes intermittent leaks), a cracked drain pan, or in cases of attic air handlers, a secondary drain line that's draining where it shouldn't. A licensed technician can diagnose and fix this same-day in most cases." },
      { q: "Is an AC water leak an emergency in Simpsonville?", a: "Yes — treat it as urgent. Depending on where your air handler is located (attic, closet, or basement), a drain overflow can cause significant water damage within hours. Ceiling stains, drywall damage, and mold growth are the main risks. Shut off the AC at the thermostat as soon as you notice active leaking, then call for same-day service." },
      { q: "How do I stop my AC from leaking water while I wait for service?", a: "Turn the AC off at the thermostat — this stops more condensate from being produced. If you can safely access the drain pan, you can place a towel or small bucket under it to protect flooring or ceiling below. Do not try to blow out the drain line with a shop vac without knowing where it terminates — you can force debris further into the line." },
      { q: "How much does it cost to fix an AC drain leak in Simpsonville?", a: "A clogged condensate drain line clearing runs $75–$150. If the drain pan needs replacement, add $100–$250. If the leak is caused by a refrigerant issue (requiring leak repair and recharge), that's $200–$500. If a frozen coil caused the leak and the root cause is low refrigerant, the refrigerant repair is the primary fix." },
      { q: "How can I prevent my AC drain from clogging in Simpsonville?", a: "Pour a cup of distilled white vinegar or bleach solution (1 tablespoon bleach to 1 cup water) down the condensate drain access port monthly during the cooling season. This kills algae before it can form a blockage. Also, annual AC maintenance that includes drain line inspection and flushing prevents most drain clogs from developing." },
      { q: "Why does my AC only leak water in summer in Simpsonville?", a: "Condensate volume is directly related to humidity. Simpsonville's summer humidity is high — your AC removes significant moisture from the air daily during peak season. A partial clog that handles light condensate in spring can't handle the summer volume. This is why summer is peak season for drain line clogs and why they rarely occur in winter." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Full repair service including drain clearing, coil repair, and refrigerant service." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Not Cooling", desc: "Water leaks often accompany reduced cooling — find out what's wrong." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Active flooding from your air handler needs same-day urgent attention." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual tune-ups include drain line inspection and flush to prevent clogs." },
      { href: "/free-estimate/", icon: "📋", title: "Free Estimate", desc: "Get a no-obligation estimate for any AC repair in Simpsonville." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },

  "/ac-making-noise/": {
    h1: "AC Making Loud Noise in Simpsonville, SC?",
    metaTitle: "AC Making Noise Simpsonville SC | Diagnose & Repair | 864-754-7291",
    metaDesc: "Strange AC noises in Simpsonville? Banging, squealing, clicking, or hissing all have different causes — diagnosable same-day. Call 864-754-7291.",
    intro: "Your AC should operate with a steady, low hum — any new or unusual noise (banging, squealing, grinding, clicking, rattling, or hissing) signals that something is wrong. The specific noise type narrows the cause significantly: banging usually means a loose mechanical part, squealing means a failing motor bearing, and hissing often means a refrigerant leak. Catching these sounds early almost always prevents a more expensive failure — call 864-754-7291 for same-day diagnosis in Simpsonville.",
    quickAnswer: "AC noises in Simpsonville map to specific failures: banging/clanking = loose or broken mechanical part (shut off immediately); squealing/screeching = failing motor bearing; grinding = bearing failure imminent; repeated clicking = failed relay or capacitor; hissing = possible refrigerant leak. Each noise type requires a different repair. Same-day diagnosis available — call 864-754-7291.",
    causes: [
      { icon: "💥", cause: "Banging or Clanking — Shut Off Immediately", detail: "A loose or broken part — a connecting rod, piston pin, fan blade, or motor mount — hitting the housing or other components. This is the most urgent noise type. Continued operation with a banging sound causes rapid additional damage. Shut the system off at the thermostat immediately and call for service." },
      { icon: "🎵", cause: "Squealing or Screeching", detail: "Typically indicates a worn blower belt (in older systems) or failing blower or condenser fan motor bearings. The squeal gets worse over time and often ends with the motor seizing. Bearing failure is a progressive failure — catching it at the squeal stage costs far less than replacing a seized motor." },
      { icon: "🔊", cause: "Grinding", detail: "Bearing failure in the blower motor or compressor — the bearing surfaces are failing and metal is contacting metal. The motor needs to be replaced before complete failure damages other components or causes an electrical fault. This is an urgent repair." },
      { icon: "🖱️", cause: "Clicking at Startup or Shutdown", detail: "One or two clicks at startup and shutdown are completely normal. Repeated or continuous clicking indicates a failed relay, a failing capacitor (the compressor is trying and failing to start), or a thermostat control issue. A technician can identify whether the clicking is the thermostat, contactor, or capacitor within minutes." },
      { icon: "🔩", cause: "Rattling from the Cabinet or Outdoor Unit", detail: "Usually loose access panels, screws, debris (sticks, seed pods, or pebbles) inside the outdoor unit, or a loose fan blade. Sometimes just requires tightening hardware — sometimes a more involved repair. Rattling that starts suddenly after a storm often means debris has gotten into the outdoor unit." },
      { icon: "🐍", cause: "Hissing from the Lines or Indoor Unit", detail: "A hissing sound from refrigerant lines often indicates a refrigerant leak — the refrigerant escaping through a crack or pinhole in the line or coil. A hissing sound from inside the ductwork or at vents can indicate leaky ductwork. Refrigerant leaks need prompt attention — they cause cooling failure and can damage the compressor." },
    ],
    faqItems: [
      { q: "What does a banging noise in my AC mean?", a: "Banging or clanking from the AC unit (indoor or outdoor) usually indicates a loose or broken mechanical component — a fan blade, motor mount, connecting rod, or piston pin. This is the most urgent noise type. Turn the system off immediately at the thermostat and call for service. Continuing to run the system with a banging noise causes rapid additional damage and can turn a $300 repair into a $2,000 compressor replacement." },
      { q: "Why is my AC making a squealing noise in Simpsonville?", a: "Squealing usually indicates a failing motor bearing — either in the indoor blower motor or the outdoor condenser fan motor. In older systems, it can also be a deteriorating blower belt. The squeal is the bearing lubricant wearing away; left unaddressed, the bearing will seize and require full motor replacement. Catching it at the squealing stage costs significantly less." },
      { q: "Is clicking from my AC normal?", a: "One click when the system starts and one when it shuts off is normal — that's the contactor engaging and disengaging. Repeated clicking at startup (the system tries to start, clicks, and stops several times) is abnormal and usually indicates a failing capacitor preventing the compressor from starting. Continuous clicking is a thermostat or relay issue. Both require diagnosis." },
      { q: "What causes a hissing sound from my AC?", a: "A hissing sound from the refrigerant lines or indoor unit is most often a refrigerant leak — the high-pressure refrigerant escaping through a small crack or pinhole. This is a slow-developing issue that eventually leads to loss of cooling capacity and potential compressor damage. A hissing from the ductwork at vents indicates duct leaks, which reduce efficiency but are less urgent." },
      { q: "Can I diagnose AC noises myself?", a: "You can narrow down the location (indoor vs outdoor, which part of the cycle it occurs in) but diagnosis requires testing — capacitor meters, amp clamps, and pressure gauges. Identifying the noise type helps the technician arrive prepared, but actual diagnosis should be left to a licensed technician who can safely access the electrical components and refrigerant circuit." },
      { q: "How much does it cost to fix an AC making noise in Simpsonville?", a: "It depends on the cause. Fan motor replacement runs $250–$500. Blower motor replacement is $300–$600. Capacitor replacement (if clicking indicates failed capacitor) is $150–$300. Refrigerant leak repair plus recharge runs $200–$500. Debris removal from the outdoor unit is $75–$150. A diagnostic identifies the exact cause before any repair is quoted." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Full repair service for noisy AC units — same-day in Simpsonville." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Banging or burning smell? This needs urgent same-day attention." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Not Cooling", desc: "A noisy system often accompanies reduced cooling performance." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Tune-Up", desc: "Annual maintenance catches worn bearings and loose parts before they become expensive." },
      { href: "/hvac-repair/", icon: "🌡️", title: "HVAC Repair", desc: "If the noise is from the furnace or air handler, HVAC repair covers all systems." },
    ],
    relatedService: "AC Repair",
    relatedServicePath: "/ac-repair/",
    defaultService: "AC Repair",
  },

  "/high-electric-bill/": {
    h1: "High Electric Bill from Your HVAC in Simpsonville, SC?",
    metaTitle: "HVAC High Electric Bill Simpsonville SC | Diagnosis & Tune-Up | Call Now",
    metaDesc: "High electric bills from HVAC in Simpsonville? Dirty coils, low refrigerant, or an aging system could be costing you $50–$100/month extra. Call 864-754-7291.",
    intro: "If your electric bill jumped noticeably while usage habits haven't changed, your HVAC system is most likely the cause — cooling and heating account for over 50% of residential energy use in Simpsonville, and an inefficient or struggling system can add $50–$150 to your monthly bill. The most common culprits are dirty evaporator and condenser coils, low refrigerant, a aging low-efficiency system, or leaky ductwork in your attic. A licensed technician can diagnose and restore efficiency in a single visit.",
    quickAnswer: "A high HVAC electric bill in Simpsonville is most often caused by dirty evaporator or condenser coils (reducing efficiency 15–30%), low refrigerant (causing the system to run constantly without reaching setpoint), leaky attic ductwork (wasting 20–30% of conditioned air), or an aging low-efficiency system. An annual tune-up typically costs $89–$149 and can measurably reduce monthly energy costs.",
    causes: [
      { icon: "🌡️", cause: "Low Refrigerant — System Runs Constantly", detail: "An AC with low refrigerant runs continuously trying to reach the setpoint — consuming electricity without cooling effectively. This is one of the most energy-wasteful failure modes. The system may cool the home slightly but never reach setpoint, running around the clock on a 90°F day." },
      { icon: "🧹", cause: "Dirty Evaporator or Condenser Coils", detail: "Dirty coils are the most common efficiency killer in Simpsonville. A dirty evaporator coil can't absorb heat efficiently; a dirty condenser coil can't reject it. Either reduces efficiency by 15–30%. Coil cleaning during an annual tune-up is the highest-impact maintenance step for reducing energy bills." },
      { icon: "💨", cause: "Ductwork Leaks in Attic", detail: "Leaky duct joints in attic spaces can waste 20–30% of conditioned air before it reaches living spaces. Your system compensates by running longer. In Simpsonville's slab-foundation homes with attic ductwork, this is a common and often overlooked efficiency problem — duct sealing can dramatically reduce bills." },
      { icon: "📊", cause: "Incorrectly Sized System", detail: "An oversized system short-cycles — turning on and off frequently — which is inefficient. An undersized system never stops running. Both result in higher bills and reduced comfort. Correct sizing requires a Manual J load calculation, not a rule of thumb." },
      { icon: "🔋", cause: "Aging, Inefficient Equipment", detail: "A 15-year-old AC unit with a SEER rating of 8–10 uses 60–80% more electricity than a modern 16+ SEER2 system for the same cooling output. If your system is this old, even a fully functional unit is costing you significantly more than a new one would." },
      { icon: "⚙️", cause: "Failing Components Drawing Extra Current", detail: "A weak capacitor causes motors to draw more current than normal. A partially seized blower motor bearing increases amp draw. These issues increase electricity consumption without improving comfort — and often lead to complete failure if not caught." },
    ],
    faqItems: [
      { q: "Why did my electric bill suddenly get higher in Simpsonville?", a: "The most common causes of a sudden increase in summer electricity costs: your AC's refrigerant level has dropped (causing it to run constantly), the condenser coil is clogged with pollen or debris (common in late spring), the air filter is severely clogged, or a component is failing and drawing extra current. A tune-up visit can identify all of these issues in one visit." },
      { q: "How much can a dirty AC coil increase my electric bill?", a: "A dirty condenser coil can increase electricity consumption by 15–30%. On a 2,000 sq ft Simpsonville home spending $200/month on cooling, that's $30–$60 in wasted energy per month. Annual coil cleaning (included in a proper tune-up) pays for itself within one or two months of cooling season." },
      { q: "Can low refrigerant cause a high electric bill?", a: "Yes — significantly. An AC with low refrigerant runs continuously without reaching setpoint. Instead of cycling on and off normally, it runs for extended periods. This massively increases electricity consumption. Additionally, the compressor is working harder and longer, accelerating wear. Low refrigerant should be treated urgently — it damages the compressor if left running too long." },
      { q: "How much can I save by upgrading my old AC in Simpsonville?", a: "Replacing a 12-year-old 10 SEER unit with a modern 16 SEER2 system saves roughly 37% on cooling costs. For a Simpsonville home spending $180/month on cooling, that's about $67/month in savings — over $800 per year. The payback period on a replacement is typically 5–8 years on energy savings alone, before accounting for avoided repair costs on the aging system." },
      { q: "Can ductwork leaks cause a high electric bill in Simpsonville?", a: "Yes — this is one of the most common hidden efficiency problems in Simpsonville's slab-foundation homes with attic ductwork. Attic temperatures in summer can exceed 130°F; conditioned air leaking into that space is 100% wasted. Duct testing and sealing is typically done by a licensed HVAC contractor and can reduce energy bills by 15–25% in homes with significant leakage." },
      { q: "What's the most cost-effective first step to reduce my HVAC electric bill?", a: "An annual AC tune-up ($89–$149) is the highest-value first step. It covers coil cleaning, refrigerant verification, filter check, and an efficiency assessment. If that doesn't resolve the issue, a blower door test and duct leakage assessment identifies ductwork problems. If the system is over 12 years old and inefficient, a replacement quote is the next step." },
    ],
    relatedServices: [
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Tune-Up & Maintenance", desc: "The most cost-effective step to restore AC efficiency and lower bills." },
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Fix failing components that are driving up your electricity consumption." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "Upgrade an aging inefficient system to a modern high-efficiency unit." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Not Cooling Properly", desc: "A system struggling to cool is also running up your electric bill." },
      { href: "/free-estimate/", icon: "📋", title: "Free Efficiency Estimate", desc: "Get a no-obligation estimate for any AC repair or replacement." },
    ],
    relatedService: "AC Maintenance",
    relatedServicePath: "/ac-maintenance/",
    defaultService: "AC Maintenance / Tune-Up",
  },
};

function QuickAnswer({ text }: { text: string }) {
  return (
    <div className="quick-answer">
      <strong>Quick Answer:</strong> {text}
    </div>
  );
}

function FaqSection({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-section-inner" style={{ marginTop: 40 }}>
      <h2 className="inner-h2">Frequently Asked Questions</h2>
      <div className="faq-list">
        {items.map((item, i) => (
          <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
            <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.q}</span>
              <span className="faq-toggle">{open === i ? "−" : "+"}</span>
            </button>
            <div className="faq-body" style={{ maxHeight: open === i ? 400 : 0 }}>
              <p className="faq-ans">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RelatedCluster({ services }: { services: RelatedService[] }) {
  return (
    <div className="related-cluster" style={{ marginTop: 40 }}>
      <h2 className="inner-h2">Related Services</h2>
      <div className="related-cluster-grid">
        {services.map((s, i) => (
          <Link key={i} href={s.href} className="related-cluster-card">
            <span className="related-cluster-icon">{s.icon}</span>
            <div>
              <div className="related-cluster-title">{s.title}</div>
              <div className="related-cluster-desc">{s.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function PageBottomCta({ label }: { label: string }) {
  return (
    <section className="page-bottom-cta">
      <div className="page-bottom-cta-inner">
        <h2 className="page-bottom-cta-h2">Get Your {label} Diagnosed Today</h2>
        <p className="page-bottom-cta-sub">Call <strong>864-754-7291</strong> for same-day diagnosis in Simpsonville — or fill out the form for a free estimate. Local licensed technicians, upfront pricing, no after-hours upcharge.</p>
        <div className="page-bottom-cta-btns">
          <a href="tel:8647547291" className="cta-primary">📞 Call Now — 864-754-7291</a>
          <Link href="/free-estimate/" className="cta-outline-light">Get Free Estimate →</Link>
        </div>
      </div>
    </section>
  );
}

export default function SymptomPage() {
  const [location] = useLocation();
  const data = DATA[location];

  if (!data) return null;

  const schemas = [
    serviceSchema(data.h1, data.metaDesc, location),
    FAQ_SCHEMA(data.faqItems),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://simpsonvilleacrepair.com/" },
        { "@type": "ListItem", "position": 2, "name": data.relatedService, "item": `https://simpsonvilleacrepair.com${data.relatedServicePath}` },
        { "@type": "ListItem", "position": 3, "name": "Troubleshooting", "item": `https://simpsonvilleacrepair.com${location}` },
      ]
    }
  ];

  return (
    <div className="page-root">
      <SEO
        title={data.metaTitle}
        description={data.metaDesc}
        canonical={location}
        schema={schemas}
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

            <QuickAnswer text={data.quickAnswer} />

            <h2 className="inner-h2">Common Causes — What We Look For in Simpsonville Homes</h2>
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
                <p>Local licensed technicians identify the exact cause and provide a written repair quote before any work begins.</p>
              </div>
              <div className="inner-cta-strip-btns">
                <a href="tel:8647547291" className="cta-primary">📞 Call Now</a>
                <Link href={data.relatedServicePath} className="cta-outline-dark">{data.relatedService} →</Link>
              </div>
            </div>

            <FaqSection items={data.faqItems} />

            <RelatedCluster services={data.relatedServices} />
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title="Schedule Diagnosis"
              subtitle="We'll identify the issue and provide an upfront repair quote."
              defaultService={data.defaultService}
            />
            <div className="sidebar-trust">
              {["✅ Same-Day Diagnosis", "✅ Upfront Pricing", "✅ Licensed Techs", "✅ All Makes & Models", "✅ 4.8★ Google Rating"].map((b, i) => (
                <div key={i} className="sidebar-trust-item">{b}</div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <PageBottomCta label={data.h1.split("?")[0].replace("AC ", "AC ").trim()} />

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
