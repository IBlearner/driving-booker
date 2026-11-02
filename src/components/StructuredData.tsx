import { siteConfig } from "@/config";

// schema.org LocalBusiness data so search engines can show phone, area and name.
// The values never change at runtime, so the JSON is built once.
const json = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  description: "Driving lessons with a friendly, fully-qualified instructor.",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: siteConfig.serviceArea,
  founder: { "@type": "Person", name: siteConfig.instructorName },
});

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
