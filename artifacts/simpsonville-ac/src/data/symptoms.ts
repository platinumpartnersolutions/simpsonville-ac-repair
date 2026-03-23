import type { FaqItem, RelatedService } from './services';

export interface SymptomData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  quickAnswer: string;
  causes: { icon: string; title: string; body: string }[];
  diySteps: { step: string; body: string }[];
  costRows: { label: string; cost: string; time: string }[];
  faqItems: FaqItem[];
  relatedServices: RelatedService[];
  defaultService: string;
  emergencyHref?: string;
}

export const SYMPTOM_DATA: Record<string, SymptomData> = {
  "/ac-not-cooling/": {
    h1: "AC Running But Not Cooling in Simpsonville, SC",
    metaTitle: "AC Not Cooling Simpsonville SC | Why & How to Fix | 864-754-7291",
    metaDesc: "AC running but not cooling in Simpsonville? Most common causes are low refrigerant, dirty coils, or failed capacitor. Free estimate. Call 864-754-7291.",
    intro: "An AC that's running but not cooling your Simpsonville home is most commonly caused by low refrigerant (a leak), a dirty condenser coil, or a failed capacitor — each has different symptoms and different costs to repair. This guide covers the most likely causes in order of frequency, what you can check yourself, and when it's time to call a licensed technician.",
    quickAnswer: "When your AC runs but doesn't cool your Simpsonville home, the three most likely causes are: low refrigerant from a leak ($200–$500 to repair), a dirty condenser coil ($100–$250 to clean), or a failed capacitor ($150–$300 to replace). If the system is running and the outdoor unit fan and compressor are both operating, refrigerant or coil issues are most likely. If the outdoor unit is quiet, a capacitor or compressor failure is more probable.",
    causes: [
      { icon: "💧", title: "Low Refrigerant (Most Common)", body: "Low refrigerant from a slow leak is the leading cause of reduced cooling in Simpsonville. The system runs but can't transfer heat effectively. Signs: ice on the indoor coil, warm air from vents, and a hissing or bubbling sound. This isn't a DIY fix — refrigerant handling requires an EPA 608 certification." },
      { icon: "🌿", title: "Dirty Condenser Coil", body: "The outdoor condenser coil rejects heat from your home into the outside air. When it's caked with pollen, cottonwood seeds, or dirt, heat rejection efficiency drops dramatically. Simpsonville's spring pollen season is particularly hard on condenser coils. You can gently rinse the coil with a garden hose — just spray from the inside out." },
      { icon: "⚡", title: "Failed Capacitor", body: "Capacitors start and run the compressor and fan motors. A failed capacitor causes one or both motors to not start — the most visible sign is the outdoor unit humming but not spinning. This is the most common single-component repair in the AC industry and costs $150–$300 to fix." },
      { icon: "🌡️", title: "Refrigerant Restriction or Metering Device Issue", body: "A blocked expansion valve or capillary tube can cause refrigerant flow problems that mimic low-refrigerant symptoms. The indoor coil may freeze or develop frost. Diagnosis requires pressure testing by a licensed technician." },
    ],
    diySteps: [
      { step: "Check the air filter", body: "A clogged air filter is the most overlooked cause of reduced cooling. A dirty filter restricts airflow over the evaporator coil, causing the coil to freeze and stopping cooling entirely. Check and replace the filter — if it's gray and matted, that's your issue." },
      { step: "Check the thermostat settings", body: "Confirm the thermostat is set to COOL (not HEAT or FAN ONLY) and the setpoint is lower than the current room temperature. Also check that the fan is set to AUTO — if it's set to ON, the fan runs even when the AC isn't cooling." },
      { step: "Inspect the outdoor unit", body: "Go outside and observe the outdoor condenser unit. Is the fan spinning? Is the compressor running (you'll feel vibration and hear it)? If neither is running, check the circuit breaker. If the fan isn't spinning but you can hear the compressor humming, the fan capacitor is likely failed." },
      { step: "Gently rinse the condenser coil", body: "With the system OFF, spray the condenser coil from the inside outward using a garden hose (not a pressure washer). Removing accumulated dirt and pollen can restore significant cooling capacity. Let it dry before restarting." },
      { step: "Check and reset the circuit breaker", body: "A tripped breaker will shut down the outdoor unit while the indoor air handler continues running — exactly mimicking a 'running but not cooling' symptom. Check the electrical panel and reset any tripped breakers for the AC circuit." },
    ],
    costRows: [
      { label: "Refrigerant recharge (R-410A)", cost: "$200–$500", time: "1–2 hours" },
      { label: "Refrigerant leak search and repair", cost: "$200–$600", time: "1–3 hours" },
      { label: "Condenser coil cleaning (service visit)", cost: "$100–$250", time: "1–1.5 hours" },
      { label: "Capacitor replacement", cost: "$150–$300", time: "1 hour" },
      { label: "Expansion valve replacement", cost: "$200–$500", time: "2–3 hours" },
    ],
    faqItems: [
      { q: "Why is my AC running but not cooling my house in Simpsonville?", a: "The most common causes in order of frequency: low refrigerant from a slow leak, a dirty condenser coil blocking heat rejection, a failed capacitor preventing the compressor or fan from running at full speed, or a clogged air filter reducing airflow over the evaporator coil. Each has different symptoms — a technician can identify the specific cause in about 30 minutes with a diagnostic visit." },
      { q: "Can low refrigerant cause no cooling?", a: "Yes — low refrigerant significantly reduces or eliminates cooling capacity. The compressor may still run, but without enough refrigerant in the system, heat transfer is severely impaired. Low refrigerant also causes the indoor coil to freeze and the compressor to overheat, causing secondary damage if the system runs for extended periods. Low refrigerant always means there's a leak — just 'topping off' without finding and fixing the leak is a temporary fix at best." },
      { q: "How do I know if my AC needs refrigerant?", a: "Signs of low refrigerant include: the AC running but producing only slightly cooler-than-room-temperature air, ice or frost forming on the copper refrigerant lines or the indoor coil, a hissing or bubbling sound from the refrigerant lines, and significantly longer run times to reach the thermostat setpoint. A technician can confirm with pressure gauges in about 10 minutes." },
      { q: "Can a dirty air filter cause AC not to cool?", a: "Yes — a severely clogged filter restricts airflow over the evaporator coil so severely that the coil freezes. Once frozen, no air can pass through the coil at all and the system produces no cooling. Check your filter first — if it's gray and matted, replace it and give the system an hour to thaw before restarting." },
      { q: "Why is my outdoor AC unit running but no cold air coming out?", a: "If the outdoor compressor and fan are both running but no cold air is coming from the vents, the most likely causes are a refrigerant leak or a blocked expansion valve. If the outdoor fan is running but the compressor isn't, the capacitor or compressor has failed. A technician can distinguish these causes with pressure gauges and electrical testing." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Professional diagnosis and repair of all AC cooling failures." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Same-day emergency response when your home is uncomfortably hot." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual tune-up to prevent refrigerant and coil issues before they cause failures." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "If the cost to repair exceeds the value, replacement may be the better option." },
      { href: "/high-electric-bill/", icon: "💰", title: "High Electric Bill?", desc: "An AC that's working hard but not cooling well drives up your utility bill." },
    ],
    defaultService: "AC Repair",
    emergencyHref: "/emergency-ac-repair/",
  },

  "/ac-not-turning-on/": {
    h1: "AC Won't Turn On in Simpsonville, SC",
    metaTitle: "AC Not Turning On Simpsonville SC | Diagnose & Fix | Call Today",
    metaDesc: "AC won't turn on in Simpsonville? Could be a tripped breaker, bad capacitor, or thermostat issue. Free diagnosis. Call 864-754-7291.",
    intro: "An AC that won't turn on at all in Simpsonville is most often caused by a tripped circuit breaker, a thermostat issue, a failed capacitor, or a blown fuse in the disconnect box — most of these are inexpensive repairs. Before calling for service, work through the quick checks below. If the breaker keeps tripping or you've already checked everything and the system still won't start, a capacitor or electrical fault is the most likely cause and requires a technician.",
    quickAnswer: "When your AC won't turn on in Simpsonville, check these first: circuit breaker (tripped = reset it), thermostat settings and batteries, disconnect box at the outdoor unit (visible fuse or breaker), and the 24-volt safety switch in the furnace/air handler. If all check out and the system still won't start, the most likely causes are a failed capacitor ($150–$300), a failed contactor ($150–$250), or a control board issue ($300–$700).",
    causes: [
      { icon: "⚡", title: "Tripped Circuit Breaker (Most Common)", body: "A single tripped breaker can shut down the outdoor unit while the indoor air handler stays powered. Go to your electrical panel and look for a breaker labeled AC, HVAC, or Condenser that's in the middle position — reset it. If it trips again immediately, there's an electrical fault that needs diagnosis." },
      { icon: "🔌", title: "Thermostat Issue", body: "Dead batteries in a battery-powered thermostat, wrong mode setting, or a thermostat that's lost its connection to the air handler can all prevent the AC from starting. Replace the batteries and confirm the mode is set to COOL with a setpoint below the current room temperature." },
      { icon: "🔧", title: "Failed Capacitor", body: "The start capacitor gives the compressor its initial burst of energy to start. When it fails, the compressor attempts to start, makes a loud clicking or humming sound, then shuts off — repeated attempts will trip the breaker. Capacitor replacement costs $150–$300 and is the most common reason ACs won't start." },
      { icon: "💧", title: "Clogged Drain Safety Switch", body: "Most modern systems have a float switch in the condensate drain pan. When the drain clogs and water backs up, the float switch cuts power to the system to prevent overflow. Clear the drain clog and the system will restart. Check the drain pan under the indoor unit for standing water." },
    ],
    diySteps: [
      { step: "Check the circuit breaker panel", body: "Find the breaker labeled AC, HVAC, AIR HANDLER, or CONDENSER. If it's tripped (middle position, not fully on or off), push it fully to OFF and then back to ON. A single trip is often a momentary power surge — if it trips again, stop resetting and call for service." },
      { step: "Check the thermostat", body: "Replace the batteries (if battery-powered). Set to COOL mode. Set the temperature at least 5°F below the current room temperature. Wait 5 minutes — most thermostats have a built-in delay (time guard) that prevents the compressor from restarting immediately." },
      { step: "Check the disconnect box at the outdoor unit", body: "There's a metal disconnect box on the wall near the outdoor unit. Pull it open — it contains either a fuse block or a breaker. Check for blown fuses (a blown fuse will look black inside) or a tripped internal breaker." },
      { step: "Check the drain pan for standing water", body: "If the condensate drain is clogged, a float switch will cut power to prevent overflow. Look at the drain pan under the indoor air handler — if there's standing water, the drain is clogged. Flush the drain line with a cup of diluted bleach or use a wet-vac on the drain outlet." },
      { step: "Check the safety switch inside the air handler", body: "Some systems have a secondary safety switch inside the air handler panel (a door switch that cuts power when the panel is open). Confirm the access panel is fully closed and latched." },
    ],
    costRows: [
      { label: "Capacitor replacement", cost: "$150–$300", time: "1 hour" },
      { label: "Contactor replacement", cost: "$150–$250", time: "1 hour" },
      { label: "Control board replacement", cost: "$300–$700", time: "2–3 hours" },
      { label: "Thermostat replacement", cost: "$150–$400", time: "1 hour" },
      { label: "Drain line clearing", cost: "$75–$150", time: "30–60 min" },
    ],
    faqItems: [
      { q: "Why won't my AC turn on in Simpsonville?", a: "The most common causes are: a tripped circuit breaker (check the panel), dead thermostat batteries, a blown fuse in the outdoor disconnect box, a clogged condensate drain triggering the safety switch, or a failed capacitor. Start with the free checks — thermostat, breaker, disconnect — before calling for service." },
      { q: "My AC breaker keeps tripping — what does that mean?", a: "A breaker that trips repeatedly indicates an actual electrical fault — not just a momentary surge. The most common causes are a failing compressor drawing excess current, a short in the wiring, or a failed capacitor. Do not keep resetting a repeatedly-tripping breaker — it's protecting the compressor from damage. Call for service." },
      { q: "Why does my AC click but not start?", a: "Clicking on startup followed by shutdown is the classic capacitor failure symptom. The contactor (the switch that applies power to the compressor) clicks, the compressor attempts to start, but without the capacitor's boost it can't overcome the starting torque and the motor shuts down on its thermal overload. A capacitor test will confirm this in minutes." },
      { q: "How long should I wait after resetting the thermostat?", a: "Most thermostats and HVAC controls have a built-in time guard (usually 3–5 minutes) that prevents the compressor from restarting immediately after shutdown. This protects the compressor from high-pressure differential damage. Wait at least 5 minutes after any thermostat change before concluding the system isn't responding." },
      { q: "Can a clogged drain cause my AC to not turn on?", a: "Yes. Most modern air handlers have a float switch in the drain pan — when the drain clogs and water backs up into the pan, the switch cuts power to the system to prevent water from overflowing into the ceiling or walls. This is a common cause of AC 'shutdown' in Simpsonville's high-humidity summer months. Clearing the drain restores operation immediately." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Professional diagnosis and repair for AC startup failures." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Same-day emergency response when your AC won't start in the Simpsonville heat." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Running But Not Cooling", desc: "Different problem — AC starts but produces no cold air." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual tune-up prevents capacitor and drain failures before they leave you without AC." },
      { href: "/hvac-repair/", icon: "🌡️", title: "HVAC Repair", desc: "Full system diagnosis for complex startup issues involving controls or wiring." },
    ],
    defaultService: "AC Repair",
    emergencyHref: "/emergency-ac-repair/",
  },

  "/ac-leaking-water/": {
    h1: "AC Leaking Water in Simpsonville, SC",
    metaTitle: "AC Leaking Water Simpsonville SC | Fast Fix | 864-754-7291",
    metaDesc: "AC leaking water in Simpsonville? Usually a clogged drain or frozen coil. Learn causes and costs. Call 864-754-7291.",
    intro: "An AC leaking water inside your Simpsonville home is almost always caused by a clogged condensate drain line — water that the AC removes from the air during the dehumidification process backs up and overflows the drain pan instead of draining outside. Less commonly, a frozen evaporator coil that thaws produces a large volume of water that overwhelms the drain system. Both are fixable, but water leaking inside the home needs attention quickly to prevent ceiling and drywall damage.",
    quickAnswer: "AC water leaks in Simpsonville are 90% caused by a clogged condensate drain line. The fix is to clear the clog — usually done in under an hour for $75–$150. If you're comfortable doing it yourself, pour a cup of diluted bleach into the drain access port near the indoor unit. If the system has been running for hours and the leak is a sudden large volume of water, a frozen coil that thawed is the likely cause — check the air filter and refrigerant level.",
    causes: [
      { icon: "🌿", title: "Clogged Condensate Drain (90% of Cases)", body: "During cooling, your AC removes humidity from the air — this moisture collects in the drain pan and drains through a PVC line to the outside or a utility drain. Algae, mold, and debris can clog this line over time, causing water to back up and overflow. Regular bleach treatment prevents this." },
      { icon: "❄️", title: "Frozen Evaporator Coil", body: "A clogged air filter, low refrigerant, or restricted airflow can cause the evaporator coil to freeze solid. When the system is shut off, the ice melts — producing more water than the drain pan can handle. If you see ice on the copper pipes or indoor unit, this is the cause." },
      { icon: "💧", title: "Cracked or Disconnected Drain Pan", body: "The drain pan under the evaporator coil can crack or rust over time in older systems. If the pan itself is damaged, water leaks through the pan rather than through the drain line. This is common in older Simpsonville homes with aging air handlers." },
      { icon: "🔧", title: "Improper Installation or Slope", body: "The drain line needs to slope downward to drain by gravity. If the air handler isn't level or the drain line doesn't have the right slope, water pools rather than draining. Common after system moves or incorrect installation." },
    ],
    diySteps: [
      { step: "Turn off the AC at the thermostat immediately", body: "Stop the system from adding more water to the overflowing situation. This prevents additional water damage while you assess the cause." },
      { step: "Check the air filter first", body: "A clogged filter is the most common cause of frozen coils. If the filter is severely dirty, replace it. Allow any frozen coil to thaw (1–4 hours) before restarting the system." },
      { step: "Locate the condensate drain line", body: "Find the PVC drain line — usually a 3/4\" white PVC pipe coming from the air handler and exiting the home near the foundation or into a utility drain. The outdoor end of this line should have water dripping from it when the system is running." },
      { step: "Flush the drain line", body: "Find the drain access port — a capped PVC T or Y fitting near the air handler. Pour 1 cup of diluted bleach (1:16 ratio with water) into the drain. Wait 30 minutes, then pour a cup of plain water. This clears most simple clogs. A wet-vac on the outdoor drain end can clear stubborn clogs." },
      { step: "Check the drain pan", body: "Use a flashlight to inspect the drain pan under the indoor unit for cracks, rust, or sludge buildup. If the pan is compromised, it needs professional attention — a cracked pan will leak regardless of drain line condition." },
    ],
    costRows: [
      { label: "Drain line clearing and treatment", cost: "$75–$150", time: "30–60 min" },
      { label: "Evaporator coil thaw and diagnosis", cost: "$100–$250", time: "1–2 hours" },
      { label: "Drain pan replacement", cost: "$200–$450", time: "1–2 hours" },
      { label: "Refrigerant recharge (if frozen coil cause)", cost: "$200–$500", time: "1–2 hours" },
    ],
    faqItems: [
      { q: "Why is my AC leaking water inside my house?", a: "In 90% of cases, it's a clogged condensate drain line. The AC removes humidity from the air during cooling — that water needs to drain out. When the drain clogs with algae or debris, the water backs up and overflows the drain pan. The DIY fix is to flush the drain with diluted bleach. If that doesn't work, call for a professional drain clearing." },
      { q: "Is an AC water leak dangerous?", a: "Not immediately dangerous to people, but very damaging to your home. A leaking AC pan can soak ceiling drywall, cause mold growth in wall cavities, and damage flooring below the air handler. Attic-mounted air handlers (common in Simpsonville slab-foundation homes) can drip through the ceiling into living spaces if the secondary drain pan isn't caught in time. Shut the system off and address it within 24 hours." },
      { q: "How do I stop my AC from leaking water?", a: "Prevent drain clogs with a monthly bleach flush during cooling season — pour a cup of diluted bleach (1 tbsp bleach in 1 cup water) down the drain access port. Replace your air filter every 1–2 months to prevent frozen coils. Annual professional maintenance that includes a drain inspection and flush catches problems before they cause leaks." },
      { q: "My AC was making ice and now there's a huge water leak — what happened?", a: "A frozen evaporator coil thawed. When the coil freezes solid (due to low refrigerant or restricted airflow from a dirty filter), the ice accumulates over hours. When you shut the system off or the coil defrosts naturally, all that ice melts at once — producing far more water than the drain pan and line can handle. Replace the filter, clear any drain clogs, and have the refrigerant level checked before restarting the system." },
      { q: "How often should I flush my AC drain in Simpsonville?", a: "Once per month during the cooling season (April–October) as a preventive measure. Simpsonville's humidity means your AC removes large volumes of moisture from the air daily during summer — that's a lot of water flowing through the drain. Monthly bleach treatment kills the algae that causes most drain clogs." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Professional repair for all AC drainage and refrigerant issues." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Not Cooling", desc: "If the coil froze causing the leak, this covers the underlying cooling issue." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual drain cleaning and coil inspection prevents water leaks." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency Service", desc: "Water actively leaking into your home? Get same-day service." },
      { href: "/ac-not-turning-on/", icon: "⚡", title: "AC Won't Turn On", desc: "The safety float switch may have shut your system off due to a full drain pan." },
    ],
    defaultService: "AC Repair",
  },

  "/ac-making-noise/": {
    h1: "AC Making Noise in Simpsonville, SC",
    metaTitle: "AC Making Noise Simpsonville SC | Diagnose by Sound | 864-754-7291",
    metaDesc: "AC making noise in Simpsonville? Banging, squealing, or rattling each means something different. Diagnose and fix. Call 864-754-7291.",
    intro: "The sound your AC is making tells you a lot about what's wrong — banging or clunking usually means a mechanical failure in the compressor or a loose component, squealing or screeching points to a motor bearing or belt issue, and clicking or chattering often indicates an electrical fault. This guide maps each common AC noise in Simpsonville homes to its most likely cause and urgency level.",
    quickAnswer: "AC noise diagnosis by sound: Banging/clunking = loose or broken component inside the compressor or a loose fan blade (shut off immediately — serious mechanical damage risk). Squealing/screeching = motor bearing failure on blower or condenser fan (service soon). Clicking on startup = normal or capacitor failure. Continuous clicking = electrical issue. Rattling = loose panels, debris in fan. Hissing = refrigerant leak. Each noise indicates a different repair need and urgency level.",
    causes: [
      { icon: "💥", title: "Banging or Clunking — Immediate Attention", body: "A loud banging or clunking sound means a mechanical component has come loose or broken. The compressor has internal pistons and rods — when they break, the result is a loud metallic banging. A loose fan blade hitting the housing makes a different but equally alarming sound. Turn the system off immediately — continued operation causes additional damage." },
      { icon: "😬", title: "Squealing or Screeching — Service Soon", body: "A high-pitched squeal from the indoor or outdoor unit typically indicates a failing motor bearing. Condenser fan motors and blower motors have sealed bearings that wear over years of operation. As the bearing fails, it makes an increasingly loud squeal before the motor seizes. Catching this early saves the motor — a failed bearing that goes unaddressed causes the motor to fail completely." },
      { icon: "🔘", title: "Clicking — Could Be Normal or Electrical", body: "A click on startup and shutdown is normal — that's the contactor opening and closing. Continuous clicking during operation, or clicking without startup, indicates an electrical fault (bad capacitor or relay, failed contactor, or control board issue) or the system trying and failing to start." },
      { icon: "🐍", title: "Hissing — Refrigerant Leak", body: "A hissing or bubbling sound from the refrigerant lines or indoor unit usually indicates refrigerant leaking through a small hole or loose fitting. This isn't immediately dangerous but should be addressed promptly — low refrigerant damages the compressor and R-410A is expensive to recharge." },
    ],
    diySteps: [
      { step: "Identify whether the noise is from the indoor or outdoor unit", body: "Stand near each unit and listen. Outdoor unit noises are often related to the fan motor or compressor. Indoor unit noises involve the blower motor, coil, or ductwork. This narrows the diagnosis significantly before calling for service." },
      { step: "Check for visible debris in the outdoor unit", body: "Leaves, twigs, and cottonwood seeds can get pulled into the condenser fan and cause rattling or clunking sounds. Turn the power off at the disconnect box and look through the top of the unit — remove any visible debris carefully." },
      { step: "Check for loose panels on the indoor air handler", body: "Access panels on the air handler can loosen over time and rattle during operation. Check that all panels are secured and that any screws are tight." },
      { step: "Note when the noise occurs", body: "Startup only, during operation, or shutdown only? Constant or intermittent? Only when cooling vs heating? This information helps the technician identify the source much faster when you call for service." },
    ],
    costRows: [
      { label: "Condenser fan motor replacement", cost: "$250–$450", time: "1–2 hours" },
      { label: "Blower motor replacement", cost: "$300–$600", time: "2–3 hours" },
      { label: "Capacitor replacement (clicking)", cost: "$150–$300", time: "1 hour" },
      { label: "Compressor replacement (banging)", cost: "$800–$2,500", time: "4–6 hours" },
      { label: "Refrigerant leak repair (hissing)", cost: "$200–$600", time: "1–3 hours" },
    ],
    faqItems: [
      { q: "What does a banging noise from my AC mean?", a: "A banging or clunking from the outdoor unit almost always means a mechanical failure — either a broken internal compressor component or a loose fan blade hitting the housing. Turn the system off immediately. Continued operation with a broken compressor component causes catastrophic damage. A loose fan blade is less serious but still requires prompt attention to prevent the blade from breaking off." },
      { q: "Why is my AC making a squealing noise?", a: "Squealing is almost always a failing motor bearing — either the condenser fan motor (outdoor unit) or the blower motor (indoor air handler). The bearing is wearing out and will eventually seize, causing the motor to fail completely. Catching it at the squealing stage means a motor replacement ($250–$600) rather than a motor failure that may also damage the control board." },
      { q: "Is it normal for my AC to make clicking sounds?", a: "A single click when the system starts and stops is completely normal — that's the contactor closing and opening. Rapid clicking on startup without the system running, or continuous clicking during operation, is not normal. This indicates a failed capacitor (most likely), a failing contactor, or an electrical control issue." },
      { q: "What does a hissing AC sound mean?", a: "Hissing near the indoor unit or refrigerant lines usually indicates a refrigerant leak — refrigerant under pressure escaping through a small hole. A bubble or gurgle sound indicates refrigerant in liquid form moving through an air pocket from a leak. Neither sound is normal, and both require a technician to locate and repair the leak before recharging refrigerant." },
      { q: "My AC is making a rattling noise — is that serious?", a: "Rattling is the least urgent common AC noise. The most frequent causes are loose panels or screws on the air handler, debris in the condenser fan, or loose sheet metal in the ductwork. Check the obvious causes (panels, debris) before calling for service. If the rattle is loud and rhythmic with the fan speed, a bent or loose fan blade is more likely and warrants a service call." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Professional diagnosis and repair for all AC noise-related failures." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Banging or grinding? Shut it off and call for same-day emergency service." },
      { href: "/ac-not-turning-on/", icon: "⚡", title: "AC Won't Turn On", desc: "If clicking doesn't lead to startup, the system may have stopped working entirely." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual tune-up catches failing bearings and loose components before they cause damage." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "If the compressor has failed, replacement is often more cost-effective than repair." },
    ],
    defaultService: "AC Repair",
    emergencyHref: "/emergency-ac-repair/",
  },

  "/high-electric-bill/": {
    h1: "High Electric Bill from AC in Simpsonville, SC",
    metaTitle: "High Electric Bill AC Simpsonville SC | Find the Cause | 864-754-7291",
    metaDesc: "High electric bill in Simpsonville? Your HVAC may be the cause. Diagnose and fix AC efficiency issues. Call 864-754-7291.",
    intro: "An unusually high electric bill in Simpsonville during cooling season almost always points to an HVAC efficiency problem — dirty coils, low refrigerant, a failing capacitor, or an aging inefficient system can add $50–$200 per month to your utility bill compared to a properly functioning AC. This guide covers the most common causes and what each one costs to address.",
    quickAnswer: "The most common causes of high electric bills from AC in Simpsonville: dirty condenser coil (reduces efficiency 15–30%), low refrigerant (system runs longer to reach setpoint), clogged air filter (restricts airflow, causes long run times), failing capacitor (motor runs less efficiently), or simply an aging system with a low SEER rating. Most of these are inexpensive fixes — a maintenance visit that includes coil cleaning, refrigerant verification, and capacitor testing often resolves efficiency problems.",
    causes: [
      { icon: "🌿", title: "Dirty Condenser Coil (Highest Impact)", body: "A condenser coil caked with pollen, cottonwood seeds, and dirt cannot reject heat effectively. This forces the compressor to work harder and longer, increasing electricity use by 15–30%. Simpsonville's spring pollen season and cottonwood season are particularly hard on outdoor coils. Cleaning the coil is the highest-impact efficiency fix." },
      { icon: "🌡️", title: "Low Refrigerant", body: "Low refrigerant reduces cooling capacity, causing the system to run much longer to reach the thermostat setpoint. If your AC is running constantly but the house never reaches the target temperature, low refrigerant is a likely cause — along with higher electricity use for the prolonged runtime." },
      { icon: "📉", title: "Aging System with Low SEER Rating", body: "A 10-year-old system with a 10 SEER rating uses nearly twice the electricity of a modern 18+ SEER2 unit for the same cooling output. If your system is over 12 years old and your bills have increased, the aging efficiency curve may be the main driver — not a repairable issue but a replacement consideration." },
      { icon: "⚡", title: "Failing Capacitor or Contactor", body: "A capacitor near the end of its life causes motors to draw more current than they should while starting and running. A pitted contactor creates resistance in the circuit. Both waste electricity and can be caught during a tune-up." },
    ],
    diySteps: [
      { step: "Check and replace the air filter", body: "A dirty filter forces the blower to work harder and restricts airflow over the evaporator coil, causing the system to run longer. A fresh filter is the free fix — check it monthly and replace it every 1–2 months during peak cooling season." },
      { step: "Gently rinse the outdoor condenser coil", body: "With the system off, spray the condenser coil from inside out with a garden hose. Removing visible dirt and pollen from the fins can measurably improve efficiency without a service call." },
      { step: "Check for air leaks in ducts or around windows", body: "Leaky ductwork in an unconditioned attic wastes 20–30% of conditioned air before it reaches the living space. Visible holes or disconnected duct sections are a major efficiency issue. Also check that window seals and weatherstripping are intact." },
      { step: "Check the thermostat setpoint and usage patterns", body: "Setting the thermostat to 68°F in a Simpsonville summer significantly increases runtime compared to 74–76°F. Confirm the setpoint is reasonable and consider a programmable thermostat that raises the setpoint when you're away." },
    ],
    costRows: [
      { label: "Condenser coil cleaning", cost: "$100–$250", time: "1–1.5 hours" },
      { label: "Refrigerant recharge and leak check", cost: "$200–$600", time: "1–3 hours" },
      { label: "Full AC tune-up (addresses all common issues)", cost: "$89–$149", time: "1–1.5 hours" },
      { label: "Ductwork inspection and sealing", cost: "$300–$1,200", time: "2–4 hours" },
    ],
    faqItems: [
      { q: "Why is my electric bill so high in the summer in Simpsonville?", a: "Simpsonville's long cooling season (April–October) and high humidity means AC accounts for 50–60% of summer electricity use in most homes. A system that's even moderately inefficient — dirty coils, low refrigerant, aging compressor — can add $50–$150/month to your bill compared to a well-maintained system. Start with a tune-up that includes coil cleaning and refrigerant verification." },
      { q: "How much can a dirty coil increase my electric bill?", a: "A dirty condenser coil can increase electricity consumption by 15–30%. For a home spending $200/month on cooling, that's $30–$60/month wasted — and it compounds over the full 7-month cooling season. A $100–$250 coil cleaning pays for itself in 2–3 months of avoided electricity cost in a typical Simpsonville home." },
      { q: "Can low refrigerant cause a high electric bill?", a: "Yes. Low refrigerant reduces cooling capacity, causing the system to run longer to reach the thermostat setpoint. The compressor runs more hours with less cooling output — a direct increase in electricity consumption. The solution is to find and fix the leak, then recharge to the correct level." },
      { q: "My AC is 12 years old — should I replace it to lower my bills?", a: "If your current system has a SEER rating below 13 and you're cooling a typical Simpsonville home (1,500–2,500 sq ft), a modern 16–18 SEER2 replacement will measurably reduce your electricity bills. The annual savings on a typical home run $200–$500 per year — meaning a $5,000–$6,500 replacement pays back in 10–15 years in energy savings alone, plus the avoided repair costs of an aging system." },
      { q: "What is a normal AC electric bill for Simpsonville in summer?", a: "For a 1,500–2,000 sq ft Simpsonville home with a modern 16+ SEER system, expect $120–$180/month for AC in peak summer months (July–August). Older systems or larger homes can run $200–$350. If your bill is significantly above these ranges and your home size and setpoint are similar, an efficiency issue is likely." },
    ],
    relatedServices: [
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "A tune-up with coil cleaning directly addresses the most common efficiency killers." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Not Cooling Well", desc: "An AC that runs constantly but never quite cools the home drives up the bill." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "Replace an aging low-SEER system with a modern high-efficiency unit." },
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Fix the underlying issues — refrigerant leaks, failing capacitors — that increase energy use." },
      { href: "/ductless-mini-split/", icon: "🎯", title: "Mini Split Upgrade", desc: "Zone-specific high-efficiency cooling for problem areas that drive up your bill." },
    ],
    defaultService: "AC Maintenance / Tune-Up",
  },
};
