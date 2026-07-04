import React from "react";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "DSS Corp Advisory",
    "alternateName": "Dynamic Strategic Solutions",
    "description": "Financial clarity for founders, businesses, and families who can't afford to get it wrong. Led by ICAI-registered Chartered Accountants in Chennai.",
    "url": "https://dsscorp.in",
    "logo": "https://dsscorp.in/logo.png",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
