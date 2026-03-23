import type { FaqItem, RelatedService } from './services';

export interface LocationData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  quickAnswer: string;
  services: { icon: string; title: string; href: string; desc: string }[];
  localFacts: { icon: string; title: string; body: string }[];
  faqItems: FaqItem[];
  relatedServices: RelatedService[];
  defaultService: string;
  cityName: string;
  zip: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  "/simpsonville-sc/": {
    h1: "AC Repair in Simpsonville, SC",
    metaTitle: "AC Repair Simpsonville SC 29681 | Same-Day | 864-754-7291",
    metaDesc: "AC repair in Simpsonville, SC 29681 — same-day service, licensed technicians, all brands. Call 864-754-7291.",
    intro: "Simpsonville, SC is our primary service area — licensed HVAC contractors in our network are dispatched from within Greenville County, typically arriving within 1–2 hours of your call for most Simpsonville addresses. We serve all Simpsonville ZIP codes including 29680 and 29681, and all neighborhoods from Five Forks to Neely Farm to Durbin Creek.",
    quickAnswer: "Simpsonville AC repair and HVAC service is available same-day for most addresses. Call 864-754-7291 for dispatch — service is available 7 days a week for all HVAC needs including air conditioning repair, installation, replacement, furnace repair, heat pump service, and ductless mini split installation.",
    services: [
      { icon: "❄️", title: "AC Repair", href: "/ac-repair/", desc: "Same-day AC repair for all Simpsonville neighborhoods. Capacitors, refrigerant, compressors, and all component repairs." },
      { icon: "🌡️", title: "HVAC Repair", href: "/hvac-repair/", desc: "Full heating and cooling system repair for all residential HVAC types in Simpsonville." },
      { icon: "📦", title: "AC Installation", href: "/ac-installation/", desc: "New central AC installation for Simpsonville homes. Free estimates, all brands." },
      { icon: "🔄", title: "AC Replacement", href: "/ac-replacement/", desc: "Replace your old system with a modern high-efficiency unit. Same-week installation available." },
      { icon: "♻️", title: "Heat Pump Repair", href: "/heat-pump-repair/", desc: "Heat pump repair for both heating and cooling mode failures in Simpsonville." },
      { icon: "🔥", title: "Furnace Repair", href: "/furnace-repair/", desc: "Gas and electric furnace repair in Simpsonville — same-day service during cold weather." },
      { icon: "🛠️", title: "AC Maintenance", href: "/ac-maintenance/", desc: "Annual AC tune-up for Simpsonville homeowners — prevent breakdowns before summer." },
      { icon: "🎯", title: "Mini Split", href: "/ductless-mini-split/", desc: "Ductless mini split installation for Simpsonville additions, garages, and offices." },
    ],
    localFacts: [
      { icon: "🏘️", title: "Major Subdivisions Served", body: "Five Forks, Neely Farm, Durbin Creek, Bramblewood, White Oaks, Heritage Hills, Simpsonville Place, Woodruff Estates, and all other Simpsonville neighborhoods." },
      { icon: "🏗️", title: "Most Common Home Type", body: "Slab-foundation construction from 2000s–2020s with attic air handlers. These configurations have specific HVAC failure patterns — local technicians know them well." },
      { icon: "🌡️", title: "Climate & Seasonal Demand", body: "Simpsonville's Upstate climate drives a 7-month cooling season (April–October) and moderate winter heating demand. Systems run more hours annually here than in most US cities." },
      { icon: "🏆", title: "Most Common Brands", body: "Carrier, Trane, Lennox, and Goodman dominate Simpsonville's residential HVAC market. Rheem and York are also common. All brands are fully supported." },
    ],
    faqItems: [
      { q: "What areas of Simpsonville, SC do you serve?", a: "All of Simpsonville, including both ZIP codes (29680 and 29681). This includes Five Forks, Neely Farm, Durbin Creek, Bramblewood, White Oaks, Heritage Hills, Woodruff Estates, and all other neighborhoods. Service is also available to adjacent communities including Mauldin, Fountain Inn, and parts of Greenville." },
      { q: "How quickly can you respond to an AC emergency in Simpsonville?", a: "For most Simpsonville addresses, licensed technicians can arrive within 1–2 hours of your call during normal business hours. Emergency calls are prioritized — call 864-754-7291 to confirm current availability and dispatch time for your specific address." },
      { q: "What HVAC brands do you service in Simpsonville?", a: "All major residential brands including Carrier, Trane, Lennox, Goodman, Rheem, York, Ruud, American Standard, Daikin, Bosch, Mitsubishi, and LG. Carrier and Trane are the most common brands in Simpsonville's newer subdivisions — parts are typically in stock for these systems." },
      { q: "Is a permit required for HVAC work in Simpsonville?", a: "Permit requirements depend on the type of work. New installations and major replacements require a mechanical permit from the City of Simpsonville (within city limits) or Greenville County (outside city limits). All contractors in our network are licensed to pull permits — you don't need to handle this separately." },
      { q: "What are the most common HVAC problems in Simpsonville?", a: "Capacitor failure is the most frequent repair — Simpsonville's hot summers put particular stress on these components. Refrigerant leaks are also common in systems over 8 years old due to vibration fatigue. Clogged condensate drains are a summer maintenance issue. Furnace ignitor failures are the top winter call. All are addressed same-day." },
    ],
    relatedServices: [
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Same-day emergency AC response anywhere in Simpsonville, SC." },
      { href: "/ac-repair/", icon: "❄️", title: "AC Repair", desc: "Standard AC repair service for Simpsonville homeowners." },
      { href: "/mauldin-sc/", icon: "📍", title: "Mauldin, SC", desc: "HVAC service in neighboring Mauldin — same licensed contractor network." },
      { href: "/fountain-inn-sc/", icon: "📍", title: "Fountain Inn, SC", desc: "HVAC service in Fountain Inn — serving all of southern Greenville County." },
      { href: "/greenville-sc/", icon: "📍", title: "Greenville, SC", desc: "HVAC service in Greenville, SC and surrounding Greenville County areas." },
    ],
    defaultService: "AC Repair",
    cityName: "Simpsonville",
    zip: "29681",
  },

  "/mauldin-sc/": {
    h1: "AC Repair in Mauldin, SC",
    metaTitle: "AC Repair Mauldin SC | Same-Day HVAC Service | 864-754-7291",
    metaDesc: "AC repair in Mauldin, SC — same-day service, licensed technicians. Serving all of Mauldin 29662. Call 864-754-7291.",
    intro: "Mauldin, SC HVAC service is provided by licensed contractors dispatched from within Greenville County — most Mauldin addresses receive service within 1–2 hours of calling. We serve all of Mauldin including addresses in ZIP code 29662, from neighborhoods along Butler Road and Woodruff Road to the Mauldin Recreation District and surrounding communities.",
    quickAnswer: "Mauldin AC repair and HVAC service available same-day. Call 864-754-7291 for all heating and cooling needs in Mauldin, SC 29662. Same licensed contractor network serving Simpsonville, Mauldin, and all of Greenville County.",
    services: [
      { icon: "❄️", title: "AC Repair", href: "/ac-repair/", desc: "Same-day AC repair in Mauldin, SC. All brands, all failures — capacitors, refrigerant, compressors." },
      { icon: "🌡️", title: "HVAC Repair", href: "/hvac-repair/", desc: "Full heating and cooling system repair for Mauldin residential properties." },
      { icon: "📦", title: "AC Installation", href: "/ac-installation/", desc: "New AC installation in Mauldin homes. Free estimates, all major brands." },
      { icon: "🔄", title: "AC Replacement", href: "/ac-replacement/", desc: "Replace your aging Mauldin system with a modern efficient unit." },
      { icon: "♻️", title: "Heat Pump Repair", href: "/heat-pump-repair/", desc: "Heat pump service in Mauldin — both heating and cooling mode repairs." },
      { icon: "🔥", title: "Furnace Repair", href: "/furnace-repair/", desc: "Furnace repair in Mauldin, SC — same-day service when you need heat." },
      { icon: "🛠️", title: "AC Maintenance", href: "/ac-maintenance/", desc: "Annual AC tune-up for Mauldin homeowners." },
      { icon: "🎯", title: "Mini Split", href: "/ductless-mini-split/", desc: "Ductless mini split installation in Mauldin." },
    ],
    localFacts: [
      { icon: "🏘️", title: "Mauldin Neighborhoods Served", body: "All of Mauldin including Butler Road corridor, Woodruff Road area, Mauldin Recreation District, and all surrounding residential neighborhoods in ZIP code 29662." },
      { icon: "🏗️", title: "Mauldin Housing Stock", body: "Mix of 1980s–2000s ranch homes and newer subdivision construction. Older homes may have ductwork in crawl spaces rather than attics — relevant for AC repair and replacement." },
      { icon: "📍", title: "Location & Response Time", body: "Mauldin is located immediately east of Simpsonville — the same contractor network services both cities. Response times are typically 1–2 hours for most Mauldin addresses." },
      { icon: "🏆", title: "Common HVAC Issues in Mauldin", body: "Similar to the broader Simpsonville/Greenville area: capacitor failures, refrigerant leaks in aging systems, and condensate drain clogs during peak summer humidity." },
    ],
    faqItems: [
      { q: "Do you service Mauldin, SC for AC repair?", a: "Yes — Mauldin is part of our core service area. Licensed contractors are dispatched from within Greenville County and can typically reach Mauldin addresses within 1–2 hours of your call." },
      { q: "What ZIP codes in Mauldin do you serve?", a: "We serve all of Mauldin including ZIP code 29662 and surrounding addresses. If you're not sure whether your address is in our service area, call 864-754-7291 and we'll confirm availability." },
      { q: "Is the service in Mauldin the same as in Simpsonville?", a: "Yes — the same licensed contractor network serves both Mauldin and Simpsonville. Same pricing, same service standards, same response time commitments. There is no difference in service based on city." },
    ],
    relatedServices: [
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Same-day emergency response in Mauldin, SC." },
      { href: "/simpsonville-sc/", icon: "📍", title: "Simpsonville, SC", desc: "HVAC service in neighboring Simpsonville — same contractor network." },
      { href: "/greenville-sc/", icon: "📍", title: "Greenville, SC", desc: "HVAC service in Greenville, SC and Greenville County." },
      { href: "/ac-repair/", icon: "❄️", title: "AC Repair", desc: "All AC repair services available in Mauldin." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual HVAC maintenance for Mauldin homeowners." },
    ],
    defaultService: "AC Repair",
    cityName: "Mauldin",
    zip: "29662",
  },

  "/fountain-inn-sc/": {
    h1: "AC Repair in Fountain Inn, SC",
    metaTitle: "AC Repair Fountain Inn SC | Same-Day Service | 864-754-7291",
    metaDesc: "AC repair in Fountain Inn, SC 29644 — licensed technicians, all brands, same-day service. Call 864-754-7291.",
    intro: "Fountain Inn, SC HVAC service is provided by licensed contractors from our Greenville County network — Fountain Inn addresses typically receive service within 1.5–2.5 hours depending on technician availability and traffic. We serve all of Fountain Inn including ZIP code 29644, from downtown neighborhoods to the growing residential areas along Fairview Road and SC-418.",
    quickAnswer: "Fountain Inn AC repair and HVAC service available same-day. Call 864-754-7291 for all heating and cooling service in Fountain Inn, SC 29644. Same licensed contractors serving all of southern Greenville County.",
    services: [
      { icon: "❄️", title: "AC Repair", href: "/ac-repair/", desc: "AC repair in Fountain Inn — all brands and all failures serviced." },
      { icon: "🌡️", title: "HVAC Repair", href: "/hvac-repair/", desc: "Heating and cooling system repair for Fountain Inn homes." },
      { icon: "📦", title: "AC Installation", href: "/ac-installation/", desc: "New AC installation in Fountain Inn with free estimates." },
      { icon: "🔄", title: "AC Replacement", href: "/ac-replacement/", desc: "AC replacement in Fountain Inn — same-week installation." },
      { icon: "♻️", title: "Heat Pump Repair", href: "/heat-pump-repair/", desc: "Heat pump repair for Fountain Inn homeowners." },
      { icon: "🔥", title: "Furnace Repair", href: "/furnace-repair/", desc: "Furnace repair in Fountain Inn — same-day winter response." },
      { icon: "🛠️", title: "AC Maintenance", href: "/ac-maintenance/", desc: "Annual AC tune-up for Fountain Inn homeowners." },
      { icon: "🎯", title: "Mini Split", href: "/ductless-mini-split/", desc: "Ductless mini split installation in Fountain Inn." },
    ],
    localFacts: [
      { icon: "🏘️", title: "Fountain Inn Areas Served", body: "All of Fountain Inn including the downtown area, Fairview Road corridor, SC-418 residential areas, and the growing new construction communities near the Simpsonville/Fountain Inn border." },
      { icon: "🏗️", title: "Mix of Older and New Construction", body: "Fountain Inn has a range of housing ages — from older in-town homes that may have package units or older split systems, to new subdivision construction with modern systems." },
      { icon: "📍", title: "Response Times", body: "Most Fountain Inn addresses receive service within 1.5–2.5 hours. The growing Fountain Inn/Simpsonville corridor is well-covered by our contractor network." },
      { icon: "🌱", title: "Growing Market", body: "Fountain Inn is one of the fastest-growing cities in Greenville County — new construction HVAC installation is a significant part of service in this area." },
    ],
    faqItems: [
      { q: "Do you service Fountain Inn, SC for AC repair?", a: "Yes — Fountain Inn is within our service area. Licensed contractors typically arrive within 1.5–2.5 hours of your call for most Fountain Inn addresses. Call 864-754-7291 to confirm availability." },
      { q: "What ZIP codes in Fountain Inn do you serve?", a: "We serve all of Fountain Inn including ZIP code 29644 and surrounding addresses." },
      { q: "Is there a different price for service in Fountain Inn vs Simpsonville?", a: "No — pricing is the same throughout our service area. There are no location-based surcharges for Fountain Inn, Mauldin, or other surrounding communities." },
    ],
    relatedServices: [
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Same-day emergency response in Fountain Inn, SC." },
      { href: "/simpsonville-sc/", icon: "📍", title: "Simpsonville, SC", desc: "HVAC service in neighboring Simpsonville — same contractor network." },
      { href: "/mauldin-sc/", icon: "📍", title: "Mauldin, SC", desc: "HVAC service in Mauldin, SC." },
      { href: "/ac-repair/", icon: "❄️", title: "AC Repair", desc: "All AC repair services available in Fountain Inn." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual HVAC maintenance for Fountain Inn homeowners." },
    ],
    defaultService: "AC Repair",
    cityName: "Fountain Inn",
    zip: "29644",
  },

  "/greenville-sc/": {
    h1: "AC Repair in Greenville, SC",
    metaTitle: "AC Repair Greenville SC | Same-Day HVAC | 864-754-7291",
    metaDesc: "AC repair in Greenville, SC — licensed technicians, all brands, same-day available. Call 864-754-7291 for fast service.",
    intro: "Greenville, SC HVAC service is provided by licensed contractors from our Greenville County network — we serve residential addresses throughout Greenville including the Augusta Road, Woodruff Road, and Verdae areas, as well as all of greater Greenville County. Response times for Greenville addresses typically run 1–3 hours depending on traffic and technician availability.",
    quickAnswer: "Greenville, SC AC repair and HVAC service available same-day for most residential addresses. Call 864-754-7291. Same licensed contractor network serving Greenville, Simpsonville, Mauldin, and all of Greenville County.",
    services: [
      { icon: "❄️", title: "AC Repair", href: "/ac-repair/", desc: "AC repair throughout Greenville, SC — all brands, same-day available." },
      { icon: "🌡️", title: "HVAC Repair", href: "/hvac-repair/", desc: "Heating and cooling system repair for Greenville residential properties." },
      { icon: "📦", title: "AC Installation", href: "/ac-installation/", desc: "New AC installation in Greenville with free estimates and all major brands." },
      { icon: "🔄", title: "AC Replacement", href: "/ac-replacement/", desc: "AC replacement in Greenville — same-week installation available." },
      { icon: "♻️", title: "Heat Pump Repair", href: "/heat-pump-repair/", desc: "Heat pump service throughout Greenville, SC." },
      { icon: "🔥", title: "Furnace Repair", href: "/furnace-repair/", desc: "Furnace repair in Greenville — priority response in cold weather." },
      { icon: "🛠️", title: "AC Maintenance", href: "/ac-maintenance/", desc: "Annual AC tune-up for Greenville homeowners." },
      { icon: "🎯", title: "Mini Split", href: "/ductless-mini-split/", desc: "Ductless mini split installation in Greenville area homes." },
    ],
    localFacts: [
      { icon: "🏘️", title: "Greenville Areas Served", body: "Greater Greenville including Augusta Road, Woodruff Road, Verdae, Hollingsworth Park, Pelham Road, Wade Hampton, and surrounding residential areas throughout Greenville County." },
      { icon: "🏗️", title: "Greenville Housing Diversity", body: "Greenville's housing stock includes everything from historic in-town homes (pre-1980, may have older ductwork) to modern Verdae and Woodruff Road area construction with current-generation HVAC systems." },
      { icon: "📍", title: "Response Times", body: "Greenville addresses are a bit further from our core Simpsonville base — typical response times are 1–3 hours. Priority dispatch is available for emergency situations." },
      { icon: "🏆", title: "Greenville Market", body: "Greenville County is one of the fastest-growing markets in the Southeast — HVAC demand is high and local licensed contractors in our network are familiar with all residential housing types in the area." },
    ],
    faqItems: [
      { q: "Do you service Greenville, SC for AC repair?", a: "Yes — Greenville is within our service area. We serve residential addresses throughout Greenville and Greenville County. Response times are typically 1–3 hours for Greenville addresses. Call 864-754-7291 for same-day service availability." },
      { q: "Do you serve all of Greenville County?", a: "We primarily serve southern Greenville County including Simpsonville, Mauldin, Fountain Inn, and Greenville city. For addresses in northern or far-east Greenville County (Greer, Taylors, etc.), call to confirm service availability for your specific address." },
      { q: "Is the pricing the same in Greenville as in Simpsonville?", a: "Yes — pricing is consistent throughout our service area. There are no location-based surcharges for Greenville addresses compared to our core Simpsonville service area." },
    ],
    relatedServices: [
      { href: "/emergency-ac-repair/", icon: "🚨", title: "Emergency AC Repair", desc: "Same-day emergency response in Greenville, SC." },
      { href: "/simpsonville-sc/", icon: "📍", title: "Simpsonville, SC", desc: "Our core service area — Simpsonville HVAC service." },
      { href: "/mauldin-sc/", icon: "📍", title: "Mauldin, SC", desc: "HVAC service in Mauldin, between Greenville and Simpsonville." },
      { href: "/ac-repair/", icon: "❄️", title: "AC Repair", desc: "All AC repair services available in Greenville." },
      { href: "/ac-maintenance/", icon: "🛠️", title: "AC Maintenance", desc: "Annual HVAC tune-up for Greenville homeowners." },
    ],
    defaultService: "AC Repair",
    cityName: "Greenville",
    zip: "29601",
  },
};
