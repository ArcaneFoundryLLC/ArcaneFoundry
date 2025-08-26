export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arcane Foundry LLC",
    "description": "Senior full-stack developer specializing in Power Platform development, performance optimization, and custom software solutions.",
    "url": "https://arcane-foundry.com",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone number
    "email": "josh-wassum@arcane-foundry.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Floyd",
      "addressRegion": "VA",
      "addressCountry": "US",
      "postalCode": "24091"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.9115", // Approximate coordinates for Floyd, VA
      "longitude": "-80.3203"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Floyd"
      },
      {
        "@type": "City", 
        "name": "Roanoke"
      },
      {
        "@type": "City",
        "name": "Blacksburg"
      },
      {
        "@type": "City",
        "name": "Christiansburg"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.9115",
        "longitude": "-80.3203"
      },
      "geoRadius": "50000" // 50km radius
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Development",
            "description": "Custom web applications and software solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Platform Development",
            "description": "Microsoft Power Apps, Power BI, and Power Automate solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Optimization",
            "description": "Database and application performance improvements"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Josh Wassum",
      "jobTitle": "Senior Full-Stack Developer",
      "url": "https://www.linkedin.com/in/joshwassum/"
    },
    "sameAs": [
      "https://www.linkedin.com/in/joshwassum/"
    ],
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "USD"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
