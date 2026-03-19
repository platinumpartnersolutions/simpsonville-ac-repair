import { useState } from "react";
import { useLocation, Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { SEO, serviceSchema, FAQ_SCHEMA } from "@/components/SEO";
import { getHvacIcon } from "@/components/Icons";
import "./landing.css";

const EMOJI_ICON: Record<string, string> = {
  "⚡": "lightning", "🔧": "wrench", "💰": "dollar", "🛡️": "shield",
  "🏆": "certificate", "⏱": "clock", "🌡️": "hvac", "🔄": "replace",
  "📦": "install", "❄️": "ac", "🎯": "minisplit", "🛠️": "maintenance",
  "♻️": "heatpump", "🔥": "furnace", "⭐": "star", "✅": "shield",
  "💡": "lightning", "📜": "certificate", "🌿": "snowflake", "🔋": "financing",
  "📐": "replace", "💳": "financing", "📋": "maintenance", "📅": "clock",
  "🏥": "shield", "🔩": "wrench", "🎵": "star",
};

interface CostRow { label: string; cost: string; time: string }
interface ProcessStep { title: string; body: string }
interface FaqItem { q: string; a: string }
interface RelatedService { href: string; icon: string; title: string; desc: string }

interface ServiceData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  quickAnswer: string;
  benefits: { icon: string; title: string; body: string }[];
  commonIssues: string[];
  costHeading: string;
  costRows: CostRow[];
  costNote: string;
  processSteps: ProcessStep[];
  localSection: string;
  faqItems: FaqItem[];
  relatedServices: RelatedService[];
  relatedSymptom?: string;
  defaultService: string;
  emergencyHref?: string;
  emergencyLabel?: string;
}

const DATA: Record<string, ServiceData> = {
  "/ac-repair/": {
    h1: "AC Repair in Simpsonville, SC",
    metaTitle: "AC Repair Simpsonville SC | Same-Day Service | Free Estimate",
    metaDesc: "AC repair in Simpsonville costs $150–$600 same-day. Licensed technicians fix capacitors, refrigerant leaks & more. Call 864-754-7291.",
    intro: "AC repair in Simpsonville typically costs $150–$600 and can be completed same-day — the most common failures are capacitors ($150–$300), refrigerant leaks ($200–$500), and contactor issues ($150–$250), and local licensed technicians in our network carry parts for these on every service run. If your air conditioner stopped cooling, is making unusual noises, or won't turn on at all, call 864-754-7291 and we'll dispatch a technician to your Simpsonville home today.",
    quickAnswer: "AC repair in Simpsonville costs $150–$600 for most common failures. Same-day service is available 7 days a week. The most frequent repairs are capacitor replacement ($150–$300), refrigerant recharge ($200–$500), and contactor replacement ($150–$250) — all completed in 1–2 hours in most cases.",
    benefits: [
      { icon: "⚡", title: "Same-Day Service", body: "Local licensed contractors are dispatched quickly so you're not stuck in the heat. Most repairs are completed on the first visit." },
      { icon: "🔧", title: "All Makes & Models", body: "We repair Carrier, Trane, Lennox, Goodman, Rheem, and every other major brand of central AC and heat pump systems." },
      { icon: "💰", title: "Upfront Pricing", body: "You'll know the cost before we start. No hidden fees, no surprises — just honest quotes from certified technicians." },
      { icon: "🛡️", title: "Licensed & Insured", body: "All work is performed by SC-licensed HVAC technicians. Every repair is backed by a workmanship warranty." },
    ],
    commonIssues: [
      "AC blowing warm or hot air — refrigerant leak or failed compressor",
      "Unit not turning on or cycling off quickly (short-cycling)",
      "Ice or frost forming on the indoor coil — airflow or refrigerant issue",
      "Strange noises: banging, squealing, or grinding from the unit",
      "Water leaking from the indoor air handler",
      "Refrigerant leak — low cooling performance with system running",
      "Thermostat not communicating with the unit",
    ],
    costHeading: "How Much Does AC Repair Cost in Simpsonville, SC?",
    costRows: [
      { label: "Capacitor replacement", cost: "$150–$300", time: "1 hour" },
      { label: "Refrigerant recharge (R-410A)", cost: "$200–$400", time: "1–2 hours" },
      { label: "Contactor replacement", cost: "$150–$250", time: "1 hour" },
      { label: "Blower motor replacement", cost: "$300–$600", time: "2–3 hours" },
      { label: "Evaporator coil cleaning", cost: "$100–$250", time: "1–2 hours" },
      { label: "Control board replacement", cost: "$300–$700", time: "2–3 hours" },
      { label: "Compressor replacement", cost: "$800–$2,500", time: "4–6 hours" },
    ],
    costNote: "All quotes are provided upfront before work begins. No after-hours upcharge — same price 7 days a week. Diagnostic fee is waived when you proceed with the repair.",
    processSteps: [
      { title: "Call 864-754-7291 and confirm same-day availability", body: "We'll confirm we can dispatch a technician to your Simpsonville home today. During peak summer months, calling early secures the fastest arrival window." },
      { title: "Technician dispatched with a fully stocked service vehicle", body: "A local licensed contractor heads your way immediately. Service vehicles carry the most common replacement parts for all major AC brands so most repairs are completed same-visit." },
      { title: "Full system diagnostic on arrival", body: "The technician inspects every relevant component — compressor, capacitors, contactors, refrigerant level, coils, drain line, electrical connections — to identify the exact cause of the problem." },
      { title: "Diagnosis explained in plain language", body: "Before touching anything, the technician walks you through exactly what failed, why it failed, and what it will take to fix it. No repair-speak, no upselling." },
      { title: "Upfront written quote — approved before any work begins", body: "The price you approve is the price you pay. No after-hours premium, no surprise charges added after the fact." },
      { title: "Repair completed — tested before leaving", body: "After completing the repair, the technician runs the system through a full operating cycle, measures supply air temperature, and confirms everything is operating correctly." },
    ],
    localSection: "Simpsonville's climate creates predictable AC failure patterns. July and August average highs exceed 90°F, and the humidity causes systems to run longer cycles — putting extra load on capacitors and contactors. Homes built in Simpsonville's major subdivision buildout (2000s–2020s) typically have slab foundations with attic air handlers, which are more vulnerable to heat stress than basement installations. The most common brands in the area — Carrier, Trane, Lennox, and Goodman — all have specific failure tendencies that local licensed technicians know well. Refrigerant leaks are particularly common in systems over 8 years old due to vibration fatigue at brazed connections.",
    faqItems: [
      { q: "How much does AC repair cost in Simpsonville, SC?", a: "Most AC repairs in Simpsonville run $150–$600. Capacitor replacement is the most common repair at $150–$300. Refrigerant recharge runs $200–$500 depending on the refrigerant type. More involved repairs like blower motors ($300–$600) or control boards ($300–$700) cost more. Compressor replacement is the most expensive at $800–$2,500, at which point a full system replacement is often the better investment." },
      { q: "How long does AC repair take in Simpsonville?", a: "Most AC repairs take 1–3 hours from arrival to completion. Simple repairs like capacitor or contactor replacement take under an hour. More involved repairs like blower motor replacement take 2–3 hours. Same-day completion is the standard for most common failures — if a specialty part needs to be ordered, you'll get a firm timeline." },
      { q: "What's the most common AC repair in Simpsonville?", a: "Capacitor failure is the most common AC repair in Simpsonville and throughout SC. Capacitors start the compressor and fan motors — the heat stress of running in 90°F+ temperatures all summer shortens their lifespan significantly. Most fail between 5–10 years of age. Replacement costs $150–$300 and takes under an hour." },
      { q: "Should I repair or replace my AC in Simpsonville?", a: "A common rule of thumb is the 50% rule: if the repair cost exceeds 50% of a new system's price and your unit is over 10 years old, replacement is usually the smarter investment. For newer systems or lower-cost repairs, repair makes sense. Local licensed technicians can assess your specific system and give you an honest recommendation before any work begins." },
      { q: "Do you charge extra for same-day or emergency service?", a: "No after-hours upcharge is applied on emergency calls. The quoted repair price is the same whether the call is at 9am or 9pm. Same-day service is standard during normal business hours, and emergency dispatch is available for urgent situations." },
      { q: "What brands of AC do you repair in Simpsonville?", a: "Local licensed technicians in our network service all major residential AC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Ruud, American Standard, Daikin, Bosch, and Mitsubishi. If it's a residential split system, package unit, or heat pump, it can be serviced." },
      { q: "Can I run my AC if it's blowing warm air?", a: "Running an AC that's blowing warm air is generally safe for the home, but not ideal for the system. If the cause is low refrigerant, running the system for extended periods can damage the compressor. If you notice warm air, reduced airflow, or ice forming on the unit, it's best to call for a diagnosis before running it further." },
      { q: "How do I know if my AC compressor is bad?", a: "Signs of compressor failure include: the outdoor unit running but no cold air coming out, the outdoor unit making a loud clanking or grinding noise, the breaker tripping repeatedly, or the system starting briefly then shutting off. A technician can confirm compressor status with an amp draw test and pressure check." },
    ],
    relatedServices: [
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Same-day emergency response when your AC fails completely in the Simpsonville heat." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "Full system replacement when repair is no longer cost-effective for your home." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Tune-Up & Maintenance", desc: "Seasonal tune-ups that prevent breakdowns and extend your system's life." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Not Cooling?", desc: "Troubleshoot why your AC is running but not cooling your home." },
      { href: "/hvac-repair/", icon: "🌡️", title: "HVAC Repair", desc: "Full heating and cooling system repairs for all residential HVAC types." },
    ],
    relatedSymptom: "/ac-not-cooling/",
    defaultService: "AC Repair",
    emergencyHref: "/emergency-ac-repair/",
    emergencyLabel: "Emergency AC Repair",
  },

  "/hvac-repair/": {
    h1: "HVAC Repair in Simpsonville, SC",
    metaTitle: "HVAC Repair Simpsonville SC | Licensed Technicians | Call Today",
    metaDesc: "HVAC repair in Simpsonville, SC — heating and cooling systems, all brands, same-day service. Call 864-754-7291 for licensed technicians.",
    intro: "HVAC repair in Simpsonville covers both heating and cooling systems — most residential repairs run $150–$700 depending on the component, and local licensed technicians in our network are dispatched same-day to diagnose and restore system performance. Whether your system is short-cycling, blowing the wrong temperature, or not responding to the thermostat at all, a complete diagnostic identifies the root cause so the right repair is made the first time.",
    quickAnswer: "HVAC repair in Simpsonville, SC costs $150–$700 for most common failures. Local licensed technicians are available same-day for cooling system failures in summer and heating system failures in winter. All major residential HVAC systems are serviced — split systems, heat pumps, gas furnaces, and packaged units.",
    benefits: [
      { icon: "🌡️", title: "Full System Diagnostics", body: "We test every component — compressor, blower motor, heat exchanger, refrigerant levels — to find the exact cause of the issue." },
      { icon: "🔧", title: "Heating & Cooling", body: "Whether the problem is with your air conditioner in July or your furnace in January, both sides of your HVAC system are covered." },
      { icon: "📋", title: "Detailed Written Report", body: "After every service call you receive a written report of what was found and what was fixed, with maintenance recommendations." },
      { icon: "📅", title: "Flexible Scheduling", body: "Morning, afternoon, and emergency appointment windows available 7 days a week to work around your schedule." },
    ],
    commonIssues: [
      "System short-cycling (turning on and off rapidly) — pressure switch or refrigerant issue",
      "Uneven temperatures between rooms — ductwork or zoning problem",
      "HVAC running constantly without reaching setpoint temperature",
      "Dirty or clogged air filters causing reduced airflow and efficiency",
      "Blower motor failure — system runs but no air comes through vents",
      "Control board or thermostat faults — communication errors",
      "Ductwork leaks causing efficiency loss and hot/cold spots",
    ],
    costHeading: "How Much Does HVAC Repair Cost in Simpsonville, SC?",
    costRows: [
      { label: "Thermostat replacement", cost: "$150–$400", time: "1 hour" },
      { label: "Capacitor replacement", cost: "$150–$300", time: "1 hour" },
      { label: "Blower motor replacement", cost: "$300–$600", time: "2–3 hours" },
      { label: "Refrigerant recharge", cost: "$200–$500", time: "1–2 hours" },
      { label: "Control board replacement", cost: "$300–$700", time: "2–3 hours" },
      { label: "Ductwork repair/sealing", cost: "$300–$1,200", time: "2–4 hours" },
      { label: "Compressor replacement", cost: "$800–$2,500", time: "4–6 hours" },
    ],
    costNote: "Pricing varies based on the specific system and part required. Upfront quotes are provided before any work begins — no surprises after the fact.",
    processSteps: [
      { title: "Full system intake — describe what you're experiencing", body: "When you call, a dispatcher collects information about your symptoms — when it started, what the system is doing, and what type of system you have. This helps the technician arrive prepared." },
      { title: "Complete HVAC diagnostic", body: "The technician tests both the heating and cooling sides of your system — compressor operation, blower performance, refrigerant pressure, heat exchanger integrity, thermostat communication, and electrical connections." },
      { title: "Root cause identified — not just symptoms", body: "Rather than treating the surface symptom, the diagnostic process identifies the underlying failure. A short-cycling system, for example, has a root cause — low refrigerant, a dirty filter, or a failed pressure switch — that needs to be addressed." },
      { title: "Written quote presented before work begins", body: "You receive a clear, itemized quote for the recommended repair. No work proceeds until you approve the scope and price." },
      { title: "Repair completed and system test-run", body: "After the repair, the technician runs the system through a full heating and cooling cycle to confirm everything is operating correctly and efficiently." },
    ],
    localSection: "Simpsonville's HVAC systems face dual demands — long, humid summers that stress cooling components and occasional Upstate cold snaps that test heating systems. The most common HVAC brands in area homes — Carrier, Trane, Lennox, and Goodman — all have different maintenance schedules and common failure points. Homes built in newer Simpsonville subdivisions with slab foundations tend to have attic air handlers, which experience significant temperature swings that stress electrical components. Ductwork in attic spaces is also more prone to leaks due to thermal expansion and contraction. Local licensed technicians familiar with this housing stock bring the right parts for the most common repairs in the area.",
    faqItems: [
      { q: "How much does HVAC repair cost in Simpsonville?", a: "HVAC repair in Simpsonville runs $150–$700 for most common residential failures. Simple repairs like thermostat replacement or capacitor swaps run $150–$400. More involved repairs like blower motors or control boards run $300–$700. Major repairs like compressor replacement ($800–$2,500) are often better addressed with a full system replacement if the unit is over 10 years old." },
      { q: "How long does HVAC repair take?", a: "Most HVAC repairs take 1–4 hours from arrival to completion. Simple electrical component replacements take under an hour. Blower motor and control board replacements typically take 2–3 hours. More involved repairs involving ductwork or refrigerant systems may take 3–5 hours. In most cases the repair is completed same-day." },
      { q: "What is the difference between HVAC repair and AC repair?", a: "AC repair specifically covers the cooling side of your system — the compressor, refrigerant circuit, evaporator coil, and condenser. HVAC repair covers both cooling and heating — including the furnace or heat pump heating function, ductwork, air handlers, thermostats, and the full refrigerant circuit. If your heating and cooling are both handled by one system (as in a heat pump), HVAC repair is the right term." },
      { q: "Why is my HVAC running but not heating or cooling?", a: "The most common causes are: low refrigerant (for cooling failure), a failed capacitor preventing the compressor or fan from starting, a thermostat not communicating properly with the system, or a safety switch shutting the system down. A diagnostic will identify the exact cause quickly." },
      { q: "How often should HVAC systems be serviced in Simpsonville?", a: "Once per year minimum — ideally twice: once in spring before cooling season starts (AC tune-up) and once in fall before heating season (furnace or heat pump check). Simpsonville's long cooling season and occasional heating demand make spring tune-ups the higher priority." },
      { q: "Can you repair HVAC systems under manufacturer warranty?", a: "Yes. Manufacturer warranties cover parts but not labor for most residential systems. The warranty typically requires that service be performed by a licensed HVAC contractor — which all technicians in our network are. Warranty work is handled the same as any other repair call." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "❄️", title: "AC Repair", desc: "Focused air conditioning repair for cooling system failures in Simpsonville homes." },
      { href: "/furnace-repair/", icon: "🔥", title: "Furnace Repair", desc: "Same-day furnace repair to restore heat during Simpsonville cold snaps." },
      { href: "/heat-pump-repair/", icon: "♻️", title: "Heat Pump Repair", desc: "Expert repair for heat pump systems in both heating and cooling modes." },
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Rapid-response same-day service when your AC fails completely." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Seasonal tune-ups that prevent most common HVAC failures." },
    ],
    defaultService: "HVAC Repair",
  },

  "/ac-installation/": {
    h1: "AC Installation in Simpsonville, SC",
    metaTitle: "AC Installation Simpsonville SC | New Units | Free Estimate",
    metaDesc: "AC installation in Simpsonville, SC costs $3,500–$7,500. Licensed contractors, all brands, free estimates. Call 864-754-7291.",
    intro: "A new central AC installation in Simpsonville costs $3,500–$7,500 for most homes depending on system size and efficiency rating — local licensed contractors in our network handle the full installation from load calculation and equipment selection through refrigerant charging and commissioning. Getting the right size unit installed correctly is the most important factor in efficiency and longevity; an oversized or undersized system will cost more to operate and fail sooner than a properly matched one.",
    quickAnswer: "New AC installation in Simpsonville, SC costs $3,500–$7,500 fully installed depending on home size and system efficiency (SEER2 rating). Most installations are completed in one day. Local licensed contractors perform a Manual J load calculation to properly size the system — the single most important step for efficiency and comfort.",
    benefits: [
      { icon: "📐", title: "Proper Load Calculation", body: "New systems are sized using Manual J load calculations — not rule-of-thumb guesswork. Correct sizing means lower bills, better humidity control, and fewer breakdowns." },
      { icon: "🏆", title: "Top Brand Equipment", body: "Carrier, Trane, Lennox, Goodman, Daikin, and other leading brands installed — we'll help you choose the right unit for your home and budget." },
      { icon: "💳", title: "Flexible Financing", body: "New system installations may qualify for flexible financing options. Ask about available plans when you request your free estimate." },
      { icon: "📦", title: "Full Turnkey Install", body: "Equipment delivery, old unit removal, refrigerant recovery, electrical hookups, and full system commissioning — everything handled in one visit." },
    ],
    commonIssues: [
      "Old system over 12–15 years old — replacement is more cost-effective than ongoing repair",
      "Frequent repairs adding up — new system saves money over 3–5 years",
      "High utility bills from an inefficient aging unit (SEER rating below 13)",
      "R-22 refrigerant (Freon) system — no longer manufactured, replacement parts scarce",
      "Building a new home addition requiring fresh HVAC installation",
      "Upgrading to a higher-efficiency SEER2-rated system to reduce energy costs",
    ],
    costHeading: "How Much Does AC Installation Cost in Simpsonville, SC?",
    costRows: [
      { label: "1.5 ton system (up to ~800 sq ft)", cost: "$3,500–$4,500", time: "4–6 hours" },
      { label: "2 ton system (800–1,100 sq ft)", cost: "$4,000–$5,500", time: "4–6 hours" },
      { label: "2.5 ton system (1,100–1,500 sq ft)", cost: "$4,500–$6,000", time: "5–7 hours" },
      { label: "3 ton system (1,500–2,000 sq ft)", cost: "$5,000–$6,500", time: "5–8 hours" },
      { label: "4 ton system (2,000–2,500+ sq ft)", cost: "$5,500–$7,500", time: "6–8 hours" },
    ],
    costNote: "Prices above include equipment and labor. Ductwork modifications, electrical panel upgrades, or permit fees are quoted separately if required. Free estimates provided before any commitment.",
    processSteps: [
      { title: "Free in-home estimate and load calculation", body: "A licensed contractor visits your home, measures the square footage, inspects insulation levels, window count, and sun exposure, then performs a Manual J load calculation to determine the correct system size." },
      { title: "Equipment selection and proposal", body: "You receive a written proposal with 2–3 equipment options at different efficiency levels and price points. Each option includes the installed cost, estimated annual energy cost, and any available rebates." },
      { title: "Installation scheduled — usually within 1–3 business days", body: "Once you approve the proposal, the installation is scheduled promptly. Equipment is ordered and confirmed before the date is set." },
      { title: "Old system removed — new system installed", body: "On installation day, the old unit is decommissioned (refrigerant recovered per EPA regulations), removed, and the new system fully installed including all electrical connections and refrigerant lines." },
      { title: "System commissioned, charged, and tested", body: "The new system is charged to the correct refrigerant level, all controls are tested, airflow is measured at each register, and the system is run through a full cooling cycle to confirm performance." },
      { title: "Walkthrough and warranty documentation", body: "You receive a walkthrough of system operation, filter maintenance schedule, and all warranty registration paperwork. Manufacturer warranty registration is completed on your behalf." },
    ],
    localSection: "Simpsonville's rapid residential growth means many homes installed AC systems in the 2000s–2015 era are now entering the replacement cycle. The area's climate — with cooling seasons running April through October — means systems accumulate more annual runtime than in northern states, accelerating wear. Slab-foundation homes with attic air handlers are the most common configuration in newer Simpsonville subdivisions, and proper refrigerant line insulation and attic sealing are critical for efficiency. Most new installs in the area are matched systems (same-brand indoor and outdoor units) to preserve warranty coverage and maximize SEER2 efficiency ratings.",
    faqItems: [
      { q: "How much does AC installation cost in Simpsonville, SC?", a: "AC installation in Simpsonville runs $3,500–$7,500 for most homes, fully installed. The price depends on the system size (measured in tons), efficiency rating (SEER2), and any ductwork modifications needed. A 3-ton system installed in a 1,500–2,000 sq ft home typically costs $5,000–$6,500 with a mid-range efficiency unit." },
      { q: "How long does AC installation take?", a: "Most residential AC installations are completed in one day — typically 4–8 hours depending on system size and whether any ductwork modifications are needed. You'll have a working, tested system by the end of the installation day in almost all cases." },
      { q: "What size AC do I need for my Simpsonville home?", a: "System sizing is based on a Manual J load calculation — not just square footage. A properly sized system for a 2,000 sq ft Simpsonville home is typically 3–3.5 tons, but factors like ceiling height, insulation quality, window area, and sun exposure can push that up or down. Oversizing is a common mistake that causes humidity problems and short-cycling." },
      { q: "What SEER2 rating should I choose for Simpsonville?", a: "For Simpsonville's climate, a 16–18 SEER2 system hits the best value balance. Systems below 15 SEER2 are becoming harder to find (federal minimum is now 15 SEER2 in the South). Systems above 20 SEER2 offer better savings but take longer to recoup the premium in a moderate-cost electricity market." },
      { q: "What brands do you install in Simpsonville?", a: "Local licensed contractors in our network install all major residential brands including Carrier, Trane, Lennox, Goodman, Daikin, Bosch, Rheem, Ruud, York, and American Standard. Carrier and Trane are the most popular in the Simpsonville market due to parts availability and dealer support." },
      { q: "Is a permit required for AC installation in Simpsonville?", a: "Yes. All new AC installations in Simpsonville require a mechanical permit from the City of Simpsonville or Greenville County depending on your address. Licensed contractors handle the permit application as part of the installation process — you don't need to manage this separately." },
      { q: "How long will a new AC system last in Simpsonville?", a: "A properly installed and maintained system in Simpsonville typically lasts 12–18 years. The long cooling season (April–October) means systems accumulate runtime faster than in cooler climates. Annual maintenance extends life significantly — neglected systems often fail at 10–12 years." },
    ],
    relatedServices: [
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "Replace an aging or failing system with a modern high-efficiency unit." },
      { href: "/ductless-mini-split/", icon: "🎯", title: "Ductless Mini Split", desc: "Zone-by-zone cooling for additions, garages, and homes without ductwork." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Keep your new system running efficiently with annual tune-ups." },
      { href: "/heat-pump-repair/", icon: "♻️", title: "Heat Pump Installation", desc: "Energy-efficient heat pump systems for year-round heating and cooling." },
      { href: "/free-estimate/", icon: "📋", title: "Free Estimate", desc: "Get a no-obligation written estimate for your AC installation project." },
    ],
    defaultService: "AC Installation",
  },

  "/ac-replacement/": {
    h1: "AC Replacement in Simpsonville, SC",
    metaTitle: "AC Replacement Simpsonville SC | Same-Day Quotes | All Brands",
    metaDesc: "AC replacement in Simpsonville, SC — same-day quotes, all brands, licensed installation. Call 864-754-7291 for a free estimate.",
    intro: "AC replacement in Simpsonville typically runs $3,500–$7,500 and in most cases can be completed within 24–48 hours of approval — local licensed contractors assess your existing system, recommend the best replacement unit for your home's size and budget, and handle full removal and installation in a single day. If your AC is over 12 years old, has needed multiple repairs in the past two years, or uses R-22 refrigerant (no longer manufactured), replacement is almost always the more cost-effective path.",
    quickAnswer: "AC replacement in Simpsonville, SC costs $3,500–$7,500 fully installed. Most replacements are completed within 24–48 hours. If your system is over 12 years old and repair costs exceed 50% of replacement cost, replacing is the smarter financial decision. Local licensed contractors provide free estimates and handle all equipment removal and installation.",
    benefits: [
      { icon: "💡", title: "Energy Savings", body: "Modern SEER2-rated systems use significantly less electricity than units from 10+ years ago. Most homeowners see measurable monthly savings immediately after replacement." },
      { icon: "🔄", title: "Old Unit Removal", body: "Old system decommissioned, refrigerant recovered per EPA regulations, and removed — all included in your quote. Nothing for you to handle." },
      { icon: "⏱️", title: "Fast Turnaround", body: "In most cases replacement is completed within 24–48 hours of approval. Common equipment is kept in stock for quick turnaround." },
      { icon: "📜", title: "Warranty Coverage", body: "New systems come with manufacturer parts warranties (typically 10 years) plus installation workmanship coverage." },
    ],
    commonIssues: [
      "System over 15 years old with declining cooling performance",
      "Repair costs exceeding 50% of a new system's price",
      "R-22 (Freon) refrigerant — no longer manufactured, replacement parts scarce and expensive",
      "Visible rust, corrosion, or physical damage to the compressor or coil",
      "Consistent refrigerant leaks requiring recharging every 1–2 seasons",
      "SEER rating below 13 — inefficient by current standards, high monthly bills",
    ],
    costHeading: "How Much Does AC Replacement Cost in Simpsonville, SC?",
    costRows: [
      { label: "2 ton system (small home/condo)", cost: "$3,500–$5,000", time: "1 day" },
      { label: "2.5 ton system (medium home)", cost: "$4,000–$5,500", time: "1 day" },
      { label: "3 ton system (standard home)", cost: "$4,500–$6,500", time: "1 day" },
      { label: "3.5 ton system (larger home)", cost: "$5,000–$7,000", time: "1 day" },
      { label: "4 ton system (large home)", cost: "$5,500–$7,500", time: "1 day" },
    ],
    costNote: "Prices include equipment, labor, old system removal, and refrigerant. Electrical upgrades or ductwork modifications are quoted separately if needed. Free estimates with no obligation.",
    processSteps: [
      { title: "Free replacement consultation — same-day in most cases", body: "A licensed contractor assesses your existing system, measures your home, and provides a written replacement proposal with multiple equipment options at different price and efficiency points." },
      { title: "Equipment selected and ordered", body: "Once you select the system, equipment is ordered (or pulled from stock for common sizes) and an installation date is confirmed, typically within 1–3 business days." },
      { title: "Old system decommissioned and removed", body: "On installation day, the old system is shut down, refrigerant recovered per EPA regulations, disconnected, and removed from your property. Disposal is handled by the contractor." },
      { title: "New system installed — refrigerant lines connected", body: "The new indoor and outdoor units are installed, refrigerant lines connected and pressure-tested, electrical connections made, and the drain line inspected and routed correctly." },
      { title: "System commissioned and performance verified", body: "The new system is charged to the correct refrigerant level, airflow measured at each register, and cooling performance confirmed with supply air temperature readings before the technician leaves." },
    ],
    localSection: "Simpsonville homeowners are replacing a large number of systems installed during the 2000s–2015 buildout. These systems — often Carrier, Trane, or Goodman — are reaching 12–18 years of age and hitting their natural end of life after years of operating in the Upstate's demanding climate. A new 16+ SEER2 system will typically reduce annual cooling costs by 20–40% compared to a 10-year-old 13 SEER unit. For R-22 systems, replacement is urgent — that refrigerant is effectively no longer available at reasonable prices, meaning a refrigerant leak on an R-22 system often makes the whole unit uneconomical to repair.",
    faqItems: [
      { q: "How do I know if I should repair or replace my AC?", a: "Use the 50% rule: if the repair cost exceeds 50% of a new system's price and the unit is over 10 years old, replacement is usually the better investment. Also consider replacement if your system uses R-22 refrigerant, has had multiple repairs in the past two years, or has a SEER rating below 13." },
      { q: "How long does AC replacement take in Simpsonville?", a: "Most AC replacements are completed in one day — the installation crew typically works 4–8 hours depending on the system size and any ductwork modifications. Equipment is ordered and confirmed before the installation date is set, so there's no day-of-surprise delays." },
      { q: "What happens to my old AC unit?", a: "The old system is fully decommissioned — refrigerant is recovered per EPA Section 608 regulations, the electrical disconnect is removed, and the equipment is hauled away. You don't need to arrange disposal separately — removal and disposal are included in the replacement quote." },
      { q: "Will a new AC lower my electric bill?", a: "Yes, in most cases significantly. A 16 SEER2 system is roughly 23% more efficient than a 13 SEER system, and 60%+ more efficient than a pre-2006 8–10 SEER unit. For Simpsonville homes running AC 6–8 months per year, the monthly savings on a typical 2,000 sq ft home can be $30–$80." },
      { q: "Do I need to replace the air handler when I replace the outdoor unit?", a: "Usually yes, and strongly recommended. Mismatched indoor and outdoor components reduce efficiency and can void manufacturer warranty. If the air handler is also aging, replacing both at the same time avoids a second installation cost within a few years." },
      { q: "How long will my new AC system last in Simpsonville?", a: "A well-installed system with annual maintenance typically lasts 15–18 years in Simpsonville's climate. The long cooling season (April–October) means systems accumulate runtime faster than in cooler climates, making annual maintenance more important here than most areas." },
    ],
    relatedServices: [
      { href: "/ac-installation/", icon: "📦", title: "New AC Installation", desc: "Install a new AC system from scratch in your Simpsonville home." },
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "Not sure if you need repair or replacement? Start with a diagnostic." },
      { href: "/heat-pump-repair/", icon: "♻️", title: "Heat Pump Upgrade", desc: "Replace your AC-only system with an energy-efficient heat pump." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Keep your new system running efficiently with annual tune-ups." },
      { href: "/free-estimate/", icon: "📋", title: "Free Replacement Estimate", desc: "Get a no-obligation written quote for AC replacement in Simpsonville." },
    ],
    defaultService: "AC Replacement",
  },

  "/heat-pump-repair/": {
    h1: "Heat Pump Repair in Simpsonville, SC",
    metaTitle: "Heat Pump Repair Simpsonville SC | Install & Replace | Call Now",
    metaDesc: "Heat pump repair in Simpsonville, SC costs $150–$700. All brands serviced, same-day available. Call 864-754-7291.",
    intro: "Heat pump repair in Simpsonville costs $150–$700 for most common failures — reversing valve, capacitor, or refrigerant issues — and local licensed technicians in our network are available same-day for both heating and cooling mode failures. Heat pumps are the most efficient comfort system for Simpsonville's climate, but they have unique failure modes that require specific expertise — particularly reversing valve issues, defrost cycle problems, and auxiliary heat faults that standard AC technicians may misdiagnose.",
    quickAnswer: "Heat pump repair in Simpsonville, SC costs $150–$700 for most common failures. Same-day service is available. The most frequent heat pump repairs are capacitor replacement ($150–$300), reversing valve replacement ($400–$700), and refrigerant recharge ($200–$500). Licensed technicians experienced with heat pump-specific diagnostics are dispatched same-day.",
    benefits: [
      { icon: "♻️", title: "Dual-Mode Expertise", body: "Technicians service heat pumps in both cooling and heating modes — understanding the full refrigerant cycle and reversing valve operation specific to heat pumps." },
      { icon: "🌿", title: "Energy Efficiency", body: "Modern heat pumps achieve COPs of 3.0+, making them 2–3x more efficient than electric resistance heating. Proper repair maintains that efficiency." },
      { icon: "❄️", title: "Cold-Weather Performance", body: "Defrost cycles and refrigerant charge are optimized for Upstate SC winters — ensuring reliable heating performance down to low ambient temperatures." },
      { icon: "🔋", title: "Inverter/Variable Speed Systems", body: "Variable-speed heat pumps from Bosch, Mitsubishi, Daikin, and other leading brands are fully supported — including refrigerant and controls." },
    ],
    commonIssues: [
      "Heat pump blowing cold air in heating mode — reversing valve or defrost issue",
      "Outdoor unit icing up and not defrosting properly in winter",
      "System stuck in one mode (cooling only or heating only)",
      "Reversing valve failure — the most unique heat pump repair",
      "Poor heating efficiency in colder weather — low refrigerant or auxiliary heat issue",
      "Short-cycling or tripping the breaker — electrical or refrigerant fault",
    ],
    costHeading: "How Much Does Heat Pump Repair Cost in Simpsonville, SC?",
    costRows: [
      { label: "Capacitor replacement", cost: "$150–$300", time: "1 hour" },
      { label: "Refrigerant recharge", cost: "$200–$500", time: "1–2 hours" },
      { label: "Reversing valve replacement", cost: "$400–$700", time: "3–5 hours" },
      { label: "Defrost board replacement", cost: "$200–$450", time: "1–2 hours" },
      { label: "Blower motor replacement", cost: "$300–$600", time: "2–3 hours" },
      { label: "Compressor replacement", cost: "$800–$2,500", time: "4–6 hours" },
    ],
    costNote: "Reversing valve replacement is labor-intensive and involves evacuating the refrigerant circuit. Quotes are provided upfront before any work begins.",
    processSteps: [
      { title: "Report both heating and cooling symptoms", body: "Heat pump issues often manifest differently in heating vs cooling mode. Describing both helps the technician narrow the diagnostic to reversing valve, refrigerant circuit, or electrical issues faster." },
      { title: "Dual-mode diagnostic performed", body: "The technician tests the system in both cooling and heating mode, checks refrigerant pressures in both modes, inspects the reversing valve solenoid, tests defrost board operation, and verifies auxiliary heat function." },
      { title: "Root cause identified — mode-specific failure pinpointed", body: "Heat pumps have unique components that standard AC techs may not test thoroughly. The reversing valve, defrost board, and emergency heat relay are all checked as part of the diagnostic." },
      { title: "Upfront repair quote presented", body: "Before any parts are ordered or work begins, you receive a written quote with the specific repair, parts cost, and labor cost itemized." },
      { title: "Repair completed and system tested in both modes", body: "After the repair, the system is run in both heating and cooling mode to confirm correct operation before the technician leaves your Simpsonville home." },
    ],
    localSection: "Heat pumps are increasingly common in Simpsonville's newer homes — they're highly efficient in the Upstate's mild winters and long cooling seasons. The area rarely sees extended periods below 25°F, which is within the optimal operating range for most heat pumps. However, the occasional cold snap can expose borderline refrigerant charge issues or defrost cycle problems that aren't apparent in summer operation. Local licensed technicians in our network understand the specific failure patterns of the Carrier, Trane, Lennox, and Goodman heat pump units common in Simpsonville subdivision homes.",
    faqItems: [
      { q: "Why is my heat pump blowing cold air in heating mode?", a: "The most common causes are: a stuck or failed reversing valve (preventing the system from switching to heating mode), low refrigerant (reducing heating capacity), the system being in defrost mode (normal — lasts 5–10 minutes), or a failed defrost board causing continuous defrost cycling. A technician can diagnose the specific cause quickly by testing the reversing valve solenoid and refrigerant pressures in heating mode." },
      { q: "How much does heat pump repair cost in Simpsonville?", a: "Common heat pump repairs run $150–$700. Capacitor replacement costs $150–$300. Refrigerant recharge runs $200–$500. Reversing valve replacement is the most expensive heat pump-specific repair at $400–$700 due to the labor required to evacuate and recharge the refrigerant circuit. All prices are quoted upfront before work begins." },
      { q: "Why is my heat pump icing up?", a: "Some icing in heating mode is normal — heat pumps defrost periodically. Continuous or heavy icing indicates a problem: low refrigerant, a failed defrost board, a stuck reversing valve, or a defrost sensor failure. If the outdoor unit is encased in ice and not defrosting, turn the system to emergency heat mode and call for service." },
      { q: "Is it better to repair or replace a heat pump?", a: "The same 50% rule applies to heat pumps: if repair cost exceeds 50% of replacement cost and the unit is over 10 years old, replacement is usually the better investment. Heat pumps also have a compressor replacement threshold — if the compressor fails and the unit is over 8 years old, full replacement is almost always more economical." },
      { q: "Can you repair inverter-drive heat pumps?", a: "Yes. Variable-speed and inverter-drive heat pumps from Mitsubishi, Bosch, Daikin, and other manufacturers require specific diagnostic tools and training. Licensed technicians in our network are experienced with variable-speed systems and carry the diagnostic equipment needed to properly service them." },
      { q: "How long do heat pumps last in Simpsonville?", a: "Well-maintained heat pumps typically last 12–18 years in Simpsonville's climate. The long cooling season adds runtime, but the mild winters reduce the heating-season stress that shortens heat pump life in colder climates. Annual maintenance is important — particularly refrigerant charge verification and coil cleaning." },
    ],
    relatedServices: [
      { href: "/emergency-heat-pump-repair/", icon: "🚨", title: "Emergency Heat Pump Repair", desc: "Same-day emergency response for heat pump failures in Simpsonville." },
      { href: "/furnace-repair/", icon: "🔥", title: "Furnace Repair", desc: "Gas and electric furnace repair when your heating system fails." },
      { href: "/ac-repair/", icon: "❄️", title: "AC Repair", desc: "Air conditioning repair for cooling-mode failures in Simpsonville homes." },
      { href: "/ac-replacement/", icon: "🔄", title: "Heat Pump Replacement", desc: "Replace an aging heat pump with a modern high-efficiency system." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "Heat Pump Maintenance", desc: "Annual tune-ups for heat pump systems covering both modes." },
    ],
    defaultService: "Heat Pump Repair",
    emergencyHref: "/emergency-heat-pump-repair/",
    emergencyLabel: "Emergency Heat Pump Repair",
  },

  "/furnace-repair/": {
    h1: "Furnace Repair in Simpsonville, SC",
    metaTitle: "Furnace Repair Simpsonville SC | Same-Day Heat Restored",
    metaDesc: "Furnace repair in Simpsonville, SC costs $150–$600. Same-day service, gas and electric furnaces. Call 864-754-7291.",
    intro: "Furnace repair in Simpsonville runs $150–$600 for most common failures including ignitor ($150–$300), flame sensor ($100–$200), and blower motor ($300–$600) issues — local licensed technicians in our network restore heat same-day in most cases and carry common repair parts on every service run. If your furnace won't ignite, keeps cycling off, or is producing no heat at all, call 864-754-7291 and a technician can be at your Simpsonville home today.",
    quickAnswer: "Furnace repair in Simpsonville, SC costs $150–$600 for most common failures. Same-day service is available. The most frequent repairs are ignitor replacement ($150–$300), flame sensor cleaning/replacement ($100–$200), and blower motor replacement ($300–$600). Local licensed technicians are dispatched same-day with common parts on the service vehicle.",
    benefits: [
      { icon: "🔥", title: "Same-Day Heat Restoration", body: "Furnace calls are prioritized during cold weather — technicians are dispatched quickly to restore heat as fast as possible." },
      { icon: "🛡️", title: "Safety Inspections Included", body: "Every furnace service includes a heat exchanger inspection and carbon monoxide check — critical safety steps that are never skipped." },
      { icon: "🔧", title: "Gas & Electric Systems", body: "Natural gas and electric furnaces are both serviced, along with oil furnaces and dual-fuel heat pump/furnace combinations." },
      { icon: "💰", title: "Honest Repair vs Replace Guidance", body: "You'll be told whether repair or replacement is the better investment for your specific system before any work begins." },
    ],
    commonIssues: [
      "Furnace won't ignite — no heat at all (most common: failed ignitor)",
      "Igniter or pilot light failure — system attempts to start but produces no flame",
      "Blower fan not working — heat produced but not distributed through vents",
      "Furnace cycling on and off (short-cycling) — limit switch or heat exchanger issue",
      "Yellow or orange burner flame — should always be blue (combustion problem)",
      "Unusual smell from vents when heating — combustion or heat exchanger issue",
      "Carbon monoxide alarm triggered — shut down immediately and evacuate",
    ],
    costHeading: "How Much Does Furnace Repair Cost in Simpsonville, SC?",
    costRows: [
      { label: "Ignitor replacement", cost: "$150–$300", time: "1 hour" },
      { label: "Flame sensor cleaning/replacement", cost: "$100–$200", time: "1 hour" },
      { label: "High-limit switch replacement", cost: "$150–$300", time: "1 hour" },
      { label: "Blower motor replacement", cost: "$300–$600", time: "2–3 hours" },
      { label: "Gas valve replacement", cost: "$300–$600", time: "2–3 hours" },
      { label: "Control board replacement", cost: "$300–$700", time: "2–3 hours" },
      { label: "Heat exchanger replacement", cost: "$800–$2,000", time: "4–6 hours" },
    ],
    costNote: "Heat exchanger cracks are a safety issue — if a cracked heat exchanger is found, replacement or full furnace replacement is strongly recommended. Quotes are provided upfront before any work begins.",
    processSteps: [
      { title: "Describe the symptoms when you call", body: "Tell the dispatcher what the furnace is doing — no ignition, short-cycling, blowing cold air, making noise. This helps dispatch the right technician with the right parts." },
      { title: "Safety check performed first on arrival", body: "The technician checks for gas leaks and carbon monoxide before beginning diagnosis — a non-negotiable safety step on every furnace call." },
      { title: "Ignition and combustion system inspected", body: "The ignitor, flame sensor, burner assembly, and gas valve are all tested in sequence to identify where the ignition sequence is failing." },
      { title: "Heat exchanger inspected for cracks", body: "A cracked heat exchanger allows combustion gases including carbon monoxide to enter living spaces — this inspection is performed on every furnace call as a safety standard." },
      { title: "Repair quoted and approved before work begins", body: "You receive a written quote with the specific repair, parts cost, and labor. Repair only proceeds with your explicit approval." },
      { title: "System run through full heating cycle and verified", body: "After the repair, the furnace is run through a complete heating cycle, supply air temperature is verified, and CO levels are checked at the registers before the technician leaves." },
    ],
    localSection: "Furnace failures in Simpsonville tend to cluster in early November when homeowners switch from cooling to heating for the first time. Systems that sat idle through the spring and summer often reveal issues — dirty flame sensors, stuck gas valves, and failed ignitors — on first startup. Gas furnaces are common in Simpsonville homes, with heat pumps also prevalent in newer construction. Dual-fuel systems (heat pump with gas backup) are particularly common and require technicians familiar with both technologies. Most furnace service calls in the area involve systems 10–20 years old that have received minimal maintenance.",
    faqItems: [
      { q: "How much does furnace repair cost in Simpsonville, SC?", a: "Furnace repair in Simpsonville runs $150–$600 for most common failures. Ignitor replacement averages $150–$300. Flame sensor service costs $100–$200. Blower motor replacement runs $300–$600. More serious repairs like heat exchanger or gas valve replacement cost $300–$600+. Quotes are provided upfront before any work begins." },
      { q: "What's the most common furnace repair in Simpsonville?", a: "Ignitor failure is the most common furnace repair — the ignitor is a silicon carbide or silicon nitride element that heats to ignite the gas burner. It degrades over time and typically fails after 8–12 years. Replacement is straightforward, takes about an hour, and costs $150–$300." },
      { q: "Is it safe to run a furnace that's short-cycling?", a: "No. A furnace that's cycling on and off every few minutes (short-cycling) is either overheating due to restricted airflow, has a faulty limit switch, or has a heat exchanger problem. Running it repeatedly in this state can cause damage or expose the heat exchanger to stress. Turn the system off at the thermostat and call for service." },
      { q: "What does a yellow flame in my furnace mean?", a: "A yellow or orange flame indicates incomplete combustion — usually caused by a dirty burner, improper gas-to-air ratio, or a partially blocked heat exchanger. It can also indicate carbon monoxide production. If you see a yellow flame, turn the furnace off and call for service — do not run it until the combustion issue is resolved." },
      { q: "Should I repair or replace my furnace in Simpsonville?", a: "Furnaces over 15 years old with repair costs above $500 are often better candidates for replacement — especially if the heat exchanger is cracked. For systems 8–12 years old with isolated component failures (ignitor, flame sensor, limit switch), repair is almost always the right choice. A licensed technician will give you an honest assessment." },
      { q: "How do I know if my furnace heat exchanger is cracked?", a: "A cracked heat exchanger typically causes: CO detector alerts, a persistent burning smell from the vents, the furnace shutting off on the high-limit switch, visible soot or cracks on the exchanger itself, or unusual burner flame behavior. A technician can visually inspect and pressure-test the heat exchanger. This is a critical safety check." },
    ],
    relatedServices: [
      { href: "/emergency-furnace-repair/", icon: "🚨", title: "Emergency Furnace Repair", desc: "Same-day emergency response when your furnace fails in cold weather." },
      { href: "/heat-pump-repair/", icon: "♻️", title: "Heat Pump Repair", desc: "Heat pump repair for electric heating and cooling systems." },
      { href: "/hvac-repair/", icon: "🌡️", title: "HVAC Repair", desc: "Full heating and cooling system repairs for all residential HVAC types." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "Furnace Maintenance", desc: "Annual furnace tune-up to prevent winter breakdowns." },
      { href: "/free-estimate/", icon: "📋", title: "Free Estimate", desc: "Get an upfront written estimate for furnace repair or replacement." },
    ],
    defaultService: "Furnace Repair",
    emergencyHref: "/emergency-furnace-repair/",
    emergencyLabel: "Emergency Furnace Repair",
  },

  "/ac-maintenance/": {
    h1: "AC Tune-Up & Maintenance in Simpsonville, SC",
    metaTitle: "AC Maintenance Simpsonville SC | Tune-Up & Service | Call Today",
    metaDesc: "AC tune-up in Simpsonville, SC costs $89–$149. 20-point inspection, prevent breakdowns, lower bills. Call 864-754-7291.",
    intro: "An AC tune-up in Simpsonville costs $89–$149 for a comprehensive 20-point inspection and service — catching worn capacitors, low refrigerant, and dirty coils before summer heat arrives saves the cost and discomfort of a mid-season breakdown. Simpsonville's April-through-October cooling season means your AC works longer and harder than in most US markets; annual maintenance isn't optional if you want a system that lasts 15+ years and doesn't fail on the hottest day of the year.",
    quickAnswer: "AC tune-up cost in Simpsonville is $89–$149 for a comprehensive 20-point maintenance visit. Annual maintenance prevents the most common failures — capacitor failure, refrigerant shortages, and dirty coil issues — that cause emergency breakdowns during summer heat. Spring (March–May) is the best time to schedule before the system is needed daily.",
    benefits: [
      { icon: "📋", title: "20-Point Inspection", body: "Refrigerant levels, coil condition, capacitor health, drain line, airflow, electrical connections, and more — all checked and documented." },
      { icon: "💰", title: "Lower Energy Bills", body: "A well-maintained AC runs 10–20% more efficiently. Dirty coils and low refrigerant are invisible efficiency killers that add up over a full cooling season." },
      { icon: "🏥", title: "Prevent Breakdowns", body: "Catching worn capacitors, low refrigerant, and dirty coils before they fail prevents emergency repair costs and the discomfort of a system failure in July." },
      { icon: "📅", title: "Annual Service Plans", body: "Priority scheduling, proactive system checks, and peace of mind through every season with an annual maintenance agreement." },
    ],
    commonIssues: [
      "Dirty evaporator and condenser coils reducing cooling efficiency by 15–30%",
      "Clogged condensate drain causing water leaks and potential mold growth",
      "Low refrigerant from a slow leak — caught early before a breakdown occurs",
      "Worn capacitors near the end of their lifespan — replaced proactively",
      "Restricted airflow from dirty filters or blocked return air registers",
      "Electrical connections loose or corroded — a fire risk if not addressed",
    ],
    costHeading: "What Does AC Maintenance Cost in Simpsonville, SC?",
    costRows: [
      { label: "Standard AC tune-up", cost: "$89–$149", time: "1–1.5 hours" },
      { label: "Tune-up + coil cleaning", cost: "$150–$250", time: "1.5–2.5 hours" },
      { label: "Tune-up + refrigerant top-off (if needed)", cost: "$250–$450", time: "1.5–2 hours" },
      { label: "Annual maintenance plan (2 visits)", cost: "$150–$250/yr", time: "Per visit" },
      { label: "Condensate drain flush", cost: "$75–$150", time: "30–60 min" },
    ],
    costNote: "If repairs are needed during the tune-up visit (worn capacitor, low refrigerant, etc.), those are quoted separately and require your approval before any additional work is done.",
    processSteps: [
      { title: "Filter inspection and replacement guidance", body: "The technician checks the current filter condition and advises on the right replacement schedule for your system and usage. A dirty filter is the most common preventable cause of AC problems." },
      { title: "Coil inspection and cleaning", body: "Both the evaporator coil (indoor) and condenser coil (outdoor) are inspected for dirt buildup. Heavily fouled coils are cleaned — this is the single highest-impact maintenance task for cooling efficiency." },
      { title: "Refrigerant level verified", body: "Refrigerant pressure is checked in both high and low side. Low refrigerant doesn't mean it was 'used up' — it means there's a leak somewhere that needs to be found and repaired." },
      { title: "Capacitors and contactors tested", body: "Capacitors are tested with a capacitance meter to determine remaining life. Contactors are inspected for pitting and wear. Both components fail more often in high-heat climates like Simpsonville." },
      { title: "Drain line inspected and flushed", body: "The condensate drain is checked for blockages and flushed with a biocide treatment to prevent algae regrowth. A clogged drain can cause water damage to your home in a single day during peak humidity season." },
      { title: "Electrical connections inspected and tightened", body: "All electrical connections are checked for corrosion and torqued to spec. Loose connections cause voltage drops, reduced efficiency, and can be a fire hazard." },
      { title: "Written maintenance report provided", body: "You receive a written summary of everything checked, any issues found, and maintenance recommendations — along with documentation for your system records." },
    ],
    localSection: "Simpsonville's climate makes AC maintenance more critical than in most US markets. The cooling season runs April through October — seven months of daily operation. Systems that skip annual maintenance in this climate typically fail at 10–12 years instead of 15–18. The area's high summer humidity also means condensate drain maintenance is particularly important — clogged drains cause water damage quickly when the system is removing large amounts of moisture from the air. Coil cleaning is the other high-priority task: pollen from Upstate SC's spring season and cottonwood seeds from neighborhood trees clog condenser coils faster than homeowners expect.",
    faqItems: [
      { q: "How often should I get my AC serviced in Simpsonville?", a: "Once per year at minimum, ideally in spring (March–May) before the cooling season starts. Simpsonville's 7-month cooling season means your system accumulates more annual runtime than in cooler climates — annual maintenance isn't optional if you want the system to reach its full lifespan." },
      { q: "What does an AC tune-up include in Simpsonville?", a: "A standard tune-up includes: filter check, evaporator and condenser coil inspection, refrigerant pressure check, capacitor testing, contactor inspection, drain line flush, electrical connection inspection, thermostat calibration check, and an operational performance test. Some contractors include coil cleaning; others charge separately for heavily fouled coils." },
      { q: "How much does AC maintenance cost in Simpsonville?", a: "A standard AC tune-up costs $89–$149. If coil cleaning is needed, add $50–$100. If refrigerant needs to be topped off, that's an additional $100–$300 depending on the amount and refrigerant type. Annual maintenance plans that include two visits per year typically run $150–$250 per year." },
      { q: "What happens if I skip annual AC maintenance?", a: "Capacitor failure is the most predictable outcome — capacitors degrade gradually, and a tune-up catches them before they fail completely. Skipped maintenance also allows coils to become fouled (reducing efficiency 15–30%), refrigerant to gradually leak without detection, and drain lines to clog. In Simpsonville's climate, most skipped-maintenance systems fail within 10–12 years instead of 15–18." },
      { q: "When is the best time to schedule AC maintenance in Simpsonville?", a: "March through April is the ideal window — after the coldest weather has passed but before the system is running daily. Scheduling in this window ensures the system is ready for the heat and avoids the scheduling crunch of May–June when everyone calls at once." },
      { q: "Can a tune-up improve AC efficiency?", a: "Yes — sometimes significantly. A dirty condenser coil alone can reduce efficiency by 15–30%. Low refrigerant, clogged filters, and loose electrical connections all add to efficiency losses. Most homeowners notice lower electric bills after a thorough maintenance visit that includes coil cleaning and refrigerant verification." },
    ],
    relatedServices: [
      { href: "/ac-repair/", icon: "🔧", title: "AC Repair", desc: "If the tune-up reveals a problem, same-day repair is available." },
      { href: "/high-electric-bill/", icon: "💰", title: "High Electric Bill?", desc: "Diagnose why your AC is costing more than it should to run." },
      { href: "/ac-not-cooling/", icon: "❄️", title: "AC Not Cooling?", desc: "Troubleshoot why your AC is running but not cooling the home." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "When maintenance reveals a system that's beyond cost-effective repair." },
      { href: "/free-estimate/", icon: "📋", title: "Schedule Maintenance", desc: "Book your seasonal AC tune-up — free estimate for any repairs needed." },
    ],
    defaultService: "AC Maintenance / Tune-Up",
  },

  "/ductless-mini-split/": {
    h1: "Ductless Mini Split Installation in Simpsonville, SC",
    metaTitle: "Mini Split Installation Simpsonville SC | Ductless HVAC Experts",
    metaDesc: "Mini split installation in Simpsonville, SC costs $2,500–$5,500 per zone. All brands, free estimates. Call 864-754-7291.",
    intro: "Ductless mini split installation in Simpsonville costs $2,500–$5,500 per zone including equipment and labor — the ideal solution for home additions, garages, sunrooms, converted spaces, and any area where extending existing ductwork isn't practical or cost-effective. Mini split systems provide precise zone-by-zone temperature control with exceptional efficiency (20+ SEER2 on modern units), and licensed contractors in our network handle design, installation, and commissioning for both single-zone and multi-zone configurations.",
    quickAnswer: "Mini split installation in Simpsonville costs $2,500–$5,500 per zone installed. Single-zone systems for one room take 4–6 hours. Multi-zone systems take 1–2 days. Mini splits are ideal for additions, garages, home offices, and spaces without existing ductwork. Free estimates are available — licensed contractors size and install the system correctly for your specific application.",
    benefits: [
      { icon: "🎯", title: "Zone-by-Zone Control", body: "Each indoor unit controls a specific space independently. No more heating or cooling rooms that don't need it — significant energy savings over whole-home systems." },
      { icon: "🔇", title: "Whisper-Quiet Operation", body: "Mini split systems operate at 20–30dB for indoor units — quieter than a library. Ideal for bedrooms, home offices, and living spaces where noise matters." },
      { icon: "⚡", title: "High Efficiency", body: "Modern mini splits achieve 20+ SEER2 ratings, often qualifying for federal tax credits and utility rebates in SC." },
      { icon: "🏗️", title: "No Ductwork Required", body: "Installation requires only a 3-inch hole for the refrigerant line set — no major construction, no ductwork. Perfect for additions and older homes." },
    ],
    commonIssues: [
      "Home addition or sunroom needing independent temperature control",
      "Garage or workshop too hot in Simpsonville's summer months",
      "Older home with boiler or window ACs needing efficient modern HVAC",
      "Home office or bedroom with persistent comfort complaints",
      "Converting a bonus room, basement, or attic space to conditioned living area",
      "Replacing inefficient window or portable AC units with a permanent solution",
    ],
    costHeading: "How Much Does Mini Split Installation Cost in Simpsonville, SC?",
    costRows: [
      { label: "Single-zone (9,000 BTU / ~350 sq ft)", cost: "$2,500–$3,500", time: "4–6 hours" },
      { label: "Single-zone (12,000 BTU / ~500 sq ft)", cost: "$2,800–$4,000", time: "4–6 hours" },
      { label: "Single-zone (18,000 BTU / ~750 sq ft)", cost: "$3,200–$4,500", time: "5–7 hours" },
      { label: "Single-zone (24,000 BTU / ~1,000 sq ft)", cost: "$3,500–$5,000", time: "5–7 hours" },
      { label: "Dual-zone system (2 indoor units)", cost: "$5,500–$8,500", time: "1–1.5 days" },
      { label: "Tri-zone system (3 indoor units)", cost: "$7,500–$11,000", time: "1.5–2 days" },
    ],
    costNote: "Prices include equipment, labor, line set, electrical connection, and startup. Line set extension, electrical panel work, or wall penetration through masonry may affect cost.",
    processSteps: [
      { title: "Free site assessment — space measured and load calculated", body: "A licensed contractor visits the space, measures square footage, inspects insulation and window area, and calculates the correct BTU capacity. Oversizing a mini split causes short-cycling and humidity problems just like oversizing a central system." },
      { title: "Equipment selected and proposal presented", body: "You receive a proposal with the recommended system, equipment brand and model, and total installed cost. Carrier, Mitsubishi, Daikin, Bosch, and LG are the most common choices in the Simpsonville market." },
      { title: "Location of indoor and outdoor units determined", body: "The indoor unit placement, outdoor unit location, and refrigerant line route are all planned before installation — this affects both performance and aesthetics." },
      { title: "Installation completed — typically in one day for single-zone", body: "The indoor unit is mounted, the outdoor unit is placed on a pad or wall bracket, refrigerant lines are run through the wall, and electrical connections are made to a dedicated circuit." },
      { title: "System commissioned — refrigerant verified, settings programmed", body: "The system is leak-tested, evacuated, and charged (or verified if pre-charged). Remote controls and any smart home integration are programmed. Operation is demonstrated before the technician leaves." },
    ],
    localSection: "Mini split installations have grown rapidly in Simpsonville as the area's housing stock continues to expand. New construction bonus rooms and in-law suites frequently specify mini splits for independent control. Garages and workshops in the area's newer subdivisions are common mini split applications — the South Carolina summer makes uninsulated garages uninhabitable without cooling. Federal tax credits (up to $600 for qualifying mini splits under the Inflation Reduction Act) apply to systems with a SEER2 of 16+ and EER2 of 12+, making high-efficiency systems more financially attractive in Simpsonville than in states without these incentive programs.",
    faqItems: [
      { q: "How much does mini split installation cost in Simpsonville, SC?", a: "Mini split installation costs $2,500–$5,500 per zone including equipment and labor in Simpsonville. Single-zone systems for a typical room or garage run $2,500–$4,000. Multi-zone systems for 2–4 spaces cost more per zone but share one outdoor unit. Free estimates are available — pricing varies based on the BTU capacity needed and any electrical or structural work required." },
      { q: "How long does mini split installation take?", a: "A single-zone mini split installation takes 4–6 hours in most cases. Multi-zone systems with 2–3 indoor units typically take 1–2 days. The process includes mounting the indoor unit, placing the outdoor unit, running refrigerant lines, making electrical connections, and commissioning the system." },
      { q: "What brands do you install in Simpsonville?", a: "Local licensed contractors in our network install all major mini split brands including Mitsubishi, Daikin, Carrier, LG, Bosch, Fujitsu, and Gree. Mitsubishi and Daikin are the most popular high-efficiency options. Carrier mini splits are a common choice for homeowners who want brand consistency with an existing Carrier central system." },
      { q: "Do mini splits work for heating in Simpsonville winters?", a: "Yes — most modern mini splits are heat pumps that provide both cooling and heating. In Simpsonville's climate, where winters rarely drop below 25°F, a mini split can handle heating effectively as a primary heat source. Cold-climate mini splits (designed for -13°F operation) are overkill for the Upstate but are available if needed." },
      { q: "Are there tax credits for mini split installation in SC?", a: "Yes. Under the federal Inflation Reduction Act, qualifying mini splits (SEER2 ≥ 16, EER2 ≥ 12) are eligible for a 30% tax credit up to $600. Some Upstate SC utility companies also offer rebates for high-efficiency equipment — check with Duke Energy Carolinas or your local provider. A licensed contractor can confirm which systems qualify at time of purchase." },
      { q: "Can a mini split replace central air conditioning?", a: "A multi-zone mini split can fully replace central AC in most Simpsonville homes. A 3–4 zone system with strategically placed indoor units provides whole-home cooling without ductwork. The trade-off is higher upfront cost compared to ducted systems, but efficiency gains and zone control often offset this over time. Single-zone systems are supplemental — they condition one area, not the whole home." },
    ],
    relatedServices: [
      { href: "/ac-installation/", icon: "📦", title: "Central AC Installation", desc: "Full central air conditioning installation for whole-home cooling." },
      { href: "/heat-pump-repair/", icon: "♻️", title: "Heat Pump Repair", desc: "Service and repair for mini split and central heat pump systems." },
      { href: "/ac-replacement/", icon: "🔄", title: "AC Replacement", desc: "Replace an aging central AC with a modern mini split or central system." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "Mini Split Maintenance", desc: "Annual tune-up and filter cleaning for ductless mini split systems." },
      { href: "/free-estimate/", icon: "📋", title: "Free Estimate", desc: "Get a no-obligation quote for mini split installation in Simpsonville." },
    ],
    defaultService: "Ductless Mini Split",
  },
};

function QuickAnswer({ text }: { text: string }) {
  return (
    <div className="quick-answer">
      <strong>Quick Answer:</strong> {text}
    </div>
  );
}

function CostTable({ heading, rows, note }: { heading: string; rows: CostRow[]; note: string }) {
  return (
    <div className="cost-table-section">
      <h2 className="inner-h2">{heading}</h2>
      <div className="cost-table-wrap">
        <table className="cost-table">
          <thead>
            <tr>
              <th>Repair / Service</th>
              <th>Typical Cost</th>
              <th>Avg. Time</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.label}</td>
                <td><strong>{r.cost}</strong></td>
                <td>{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="cost-table-note">{note}</p>}
    </div>
  );
}

function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="process-steps">
      <h2 className="inner-h2">What to Expect — Our Process</h2>
      <ol className="process-list">
        {steps.map((s, i) => (
          <li key={i} className="process-item">
            <div className="process-num">{i + 1}</div>
            <div className="process-content">
              <h3 className="process-title">{s.title}</h3>
              <p className="process-body">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FaqSection({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-section-inner">
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
    <div className="related-cluster">
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

function PageBottomCta({ service }: { service: string }) {
  const label = service.split(" / ")[0];
  return (
    <section className="page-bottom-cta">
      <div className="page-bottom-cta-inner">
        <h2 className="page-bottom-cta-h2">Ready to Get Your {label} Handled Today?</h2>
        <p className="page-bottom-cta-sub">Call <strong>864-754-7291</strong> for same-day service in Simpsonville — or fill out the form for a free estimate. Local licensed technicians, upfront pricing, no after-hours upcharge.</p>
        <div className="page-bottom-cta-btns">
          <a href="tel:8647547291" className="cta-primary">📞 Call Now — 864-754-7291</a>
          <Link href="/free-estimate/" className="cta-outline-light">Get Free Estimate →</Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
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
        { "@type": "ListItem", "position": 2, "name": data.h1.split(" in ")[0], "item": `https://simpsonvilleacrepair.com${location}` },
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

      <div className="inner-hero">
        <div className="inner-hero-inner">
          <div className="inner-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span> › </span>
            <span>{data.h1.split(" in ")[0]}</span>
          </div>
          <h1 className="inner-h1">{data.h1}</h1>
          <a href="tel:8647547291" className="inner-cta-phone">
            📞 <strong>864-754-7291</strong> — Call for Same-Day Service
          </a>
        </div>
      </div>

      <div className="inner-body">
        <div className="inner-content-grid">
          <main className="inner-main">
            <p className="inner-intro">{data.intro}</p>

            <QuickAnswer text={data.quickAnswer} />

            <h2 className="inner-h2">Why Simpsonville Homeowners Choose Us for {data.h1.split(" in ")[0]}</h2>
            <div className="inner-benefits-grid">
              {data.benefits.map((b, i) => (
                <div key={i} className="inner-benefit-card">
                  <div className="inner-benefit-icon">{getHvacIcon(EMOJI_ICON[b.icon] ?? b.icon, 36)}</div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>

            <CostTable heading={data.costHeading} rows={data.costRows} note={data.costNote} />

            <h2 className="inner-h2">Common {data.h1.split(" in ")[0]} Problems We See in Simpsonville Homes</h2>
            <ul className="inner-issues-list">
              {data.commonIssues.map((issue, i) => (
                <li key={i}><span className="issue-check">✓</span> {issue}</li>
              ))}
            </ul>

            <ProcessSteps steps={data.processSteps} />

            <div className="local-section">
              <h2 className="inner-h2">{data.h1.split(" in ")[0]} in Simpsonville, SC — What Makes Our Area Different</h2>
              <p>{data.localSection}</p>
            </div>

            <div className="inner-cta-strip">
              <div>
                <strong>Need service now?</strong> Licensed contractors are standing by.
              </div>
              <div className="inner-cta-strip-btns">
                <a href="tel:8647547291" className="cta-primary">📞 864-754-7291</a>
                <Link href="/free-estimate/" className="cta-outline-dark">Free Estimate →</Link>
              </div>
            </div>

            <FaqSection items={data.faqItems} />

            <RelatedCluster services={data.relatedServices} />
          </main>

          <aside className="inner-sidebar">
            <LeadForm
              title="Get a Free Estimate"
              subtitle="Fill out the form and we'll contact you within the hour."
              defaultService={data.defaultService}
            />
            <div className="sidebar-trust">
              {["✅ Licensed & Insured", "✅ Same-Day Service", "✅ Free Estimates", "✅ SC Contractor Licensed", "✅ 4.8★ Google Rating"].map((b, i) => (
                <div key={i} className="sidebar-trust-item">{b}</div>
              ))}
            </div>
            <div className="sidebar-emergency">
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 15, color: "#CC2229", marginBottom: 6 }}>🚨 Emergency Service</div>
              <p style={{ fontSize: 13, color: "#555", margin: "0 0 12px" }}>AC out in the heat? Same-day emergency repairs available.</p>
              <Link href={data.emergencyHref || "/emergency-ac-repair/"} className="cta-red" style={{ display: "block", textAlign: "center" }}>{data.emergencyLabel || "Emergency AC Repair"} →</Link>
            </div>
          </aside>
        </div>
      </div>

      <PageBottomCta service={data.defaultService} />

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
        <span>📞 Call 864-754-7291 for Same-Day Service</span>
      </div>
    </div>
  );
}
