import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object | object[];
  ogImage?: string;
}

function setMeta(selector: string, attr: string, value: string, attrName = "content") {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value.split("]")[0].replace("[", ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attrName, value);
}

export function SEO({ title, description, canonical, schema, ogImage }: SEOProps) {
  const image = ogImage || "https://simpsonvilleacrepair.com/og-default.jpg";
  const canonicalUrl = canonical
    ? `https://simpsonvilleacrepair.com${canonical}`
    : "https://simpsonvilleacrepair.com/";

  useEffect(() => {
    document.title = title;

    // Basic meta
    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!desc) { desc = document.createElement("meta"); desc.name = "description"; document.head.appendChild(desc); }
    desc.content = description;

    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "index, follow";

    // Canonical
    let canonEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonEl) { canonEl = document.createElement("link"); canonEl.rel = "canonical"; document.head.appendChild(canonEl); }
    canonEl.href = canonicalUrl;

    // Open Graph
    const ogTags: [string, string][] = [
      ["og:title", title],
      ["og:description", description],
      ["og:url", canonicalUrl],
      ["og:type", "website"],
      ["og:image", image],
      ["og:image:width", "1200"],
      ["og:image:height", "630"],
      ["og:site_name", "Simpsonville AC Repair"],
    ];
    ogTags.forEach(([prop, content]) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", content);
    });

    // Twitter Card
    const twitterTags: [string, string][] = [
      ["twitter:card", "summary_large_image"],
      ["twitter:title", title],
      ["twitter:description", description],
      ["twitter:image", image],
    ];
    twitterTags.forEach(([name, content]) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    });

    // JSON-LD Schema
    const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const existing = document.querySelectorAll('script[data-schema-ld]');
    existing.forEach(el => el.remove());
    schemas.forEach((s, i) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.setAttribute("data-schema-ld", String(i));
      el.textContent = JSON.stringify(s);
      document.head.appendChild(el);
    });

    return () => {
      document.title = "Simpsonville AC Repair | HVAC, Plumbing & Electrical";
    };
  }, [title, description, canonical, schema, image, canonicalUrl]);

  return null;
}

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Simpsonville AC Repair",
  "url": "https://simpsonvilleacrepair.com",
  "telephone": "+18647547291",
  "image": "https://simpsonvilleacrepair.com/van-hero.webp",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Simpsonville",
    "addressRegion": "SC",
    "postalCode": "29681",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.7376,
    "longitude": -82.2532
  },
  "areaServed": ["Simpsonville", "Mauldin", "Fountain Inn", "Greenville"],
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "7445"
  }
};

export const FAQ_SCHEMA = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
});

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "description": description,
    "url": `https://simpsonvilleacrepair.com${url}`,
    "provider": {
      "@type": "HVACBusiness",
      "name": "Simpsonville AC Repair",
      "telephone": "+18647547291",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Simpsonville",
        "addressRegion": "SC",
        "postalCode": "29681"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Simpsonville",
      "sameAs": "https://en.wikipedia.org/wiki/Simpsonville,_South_Carolina"
    }
  };
}
