const SITE = "https://bhagwandasyadav.vercel.app";

/**
 * Person entity so search engines can tell this Bhagwandas Yadav apart from
 * the others, and connect the site to the LinkedIn and GitHub profiles
 * rather than to scraped data-broker pages.
 */
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Bhagwandas Yadav",
  url: SITE,
  image: `${SITE}/photo.jpg`,
  jobTitle: "Product Manager",
  description:
    "Product manager working on B2B marketplaces and commerce across healthtech, quick commerce and logistics.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Savitribai Phule Pune University",
  },
  knowsAbout: [
    "Product management",
    "B2B marketplaces",
    "Supply chain and logistics",
    "Quick commerce",
    "Product discovery",
    "User research",
    "Data analysis",
  ],
  sameAs: [
    "https://www.linkedin.com/in/bhagwandas-yadav",
    "https://github.com/sbdyadav",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Bhagwandas Yadav",
  publisher: { "@id": `${SITE}/#person` },
  inLanguage: "en",
};

export default function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([person, website]) }}
    />
  );
}
