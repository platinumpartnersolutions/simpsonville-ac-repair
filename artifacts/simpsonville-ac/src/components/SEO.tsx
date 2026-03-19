import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export function SEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = `https://simpsonvilleacrepair.com${canonical}`;
    }

    let schemaEl = document.getElementById("__schema_ld") as HTMLScriptElement | null;
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = "__schema_ld";
        schemaEl.type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema);
    }

    return () => {
      document.title = "Simpsonville AC Repair | HVAC, Plumbing & Electrical";
    };
  }, [title, description, canonical, schema]);

  return null;
}

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Simpsonville AC Repair",
  "description": "Trusted HVAC, AC repair, plumbing, and electrical services in Simpsonville, SC.",
  "url": "https://simpsonvilleacrepair.com",
  "telephone": "+18109986747",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Simpsonville",
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
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "7445"
  }
};

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `https://simpsonvilleacrepair.com${url}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Simpsonville AC Repair",
      "telephone": "+18109986747",
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
