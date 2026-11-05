// Live domain. Used for metadataBase (canonical / Open Graph URLs) and for absolute URLs in the schema.org JSON-LD.
export const siteUrl = "https://nnk.co.in";

// Organization schema, shown on every page (rendered in src/app/layout.tsx).
// Details match the footer: address, phone, emails and social links.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "NNK Constructions",
      alternateName: "NNK",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/nnk-logo-square.png`,
        width: 512,
        height: 512,
      },
      image: `${siteUrl}/opengraph-image.png`,
      slogan: "Experience Bliss Everyday",
      foundingDate: "1995",
      email: "sales@nnk.co.in",
      telephone: "+91-90922-90933",
      address: {
        "@type": "PostalAddress",
        streetAddress: "H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500008",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+91-90922-90933",
          email: "sales@nnk.co.in",
          areaServed: "IN",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "hello@nnk.co.in",
        },
      ],
      sameAs: [
        "https://www.facebook.com/share/1ENNwFmYnM/",
        "https://www.instagram.com/nnk.constructions",
        "https://www.youtube.com/@nnk.constructions",
        "https://www.linkedin.com/company/nnk-constructions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "NNK Constructions",
      url: siteUrl,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

// BreadcrumbList for inner pages. Pass the trail after Home, e.g. [{ name: "Projects", path: "/projects" }].
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

// Simple page schema (About, Contact, Privacy...) with its breadcrumb.
export function pageSchema(type: string, name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${siteUrl}${path}#webpage`,
        url: `${siteUrl}${path}`,
        name,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
      },
      breadcrumbSchema([{ name, path }]),
    ],
  };
}
