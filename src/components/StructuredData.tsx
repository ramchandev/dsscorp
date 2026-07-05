import React from "react";
import { SITE_URL } from "@/lib/seo";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "DSS Corp Advisory",
    "alternateName": "Dynamic Strategic Solutions",
    "description": "Financial clarity for founders, businesses, and families who can't afford to get it wrong. Led by ICAI-registered Chartered Accountants in Chennai.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/og-default.jpg`,
    "image": `${SITE_URL}/og-default.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Flat 5, SRI Apartments, 2nd Floor, New No.19, Moosa Street, T.Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600017",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9840-053-053",
      "contactType": "Advisory Desk",
      "email": "info@dsscorp.in",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    },
    "sameAs": [
      "https://www.linkedin.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DSS Corp Advisory",
    "url": SITE_URL,
    "description": "Chartered Accountancy, taxation, audit, and FEMA wealth advisory in Chennai, India.",
    "publisher": {
      "@type": "Organization",
      "name": "DSS Corp Advisory",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/og-default.jpg`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
