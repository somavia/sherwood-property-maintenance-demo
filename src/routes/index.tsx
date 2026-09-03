import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { Services } from "@/components/marketing/Services";
import { WhyChooseUs } from "@/components/marketing/WhyChooseUs";
import { Contact } from "@/components/marketing/Contact";
import { Footer } from "@/components/marketing/Footer";
import { MobileCallBar } from "@/components/marketing/MobileCallBar";
import { business } from "@/business";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "/",
 name: business.name,
  telephone: business.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
  streetAddress: business.address.street,
   addressLocality: business.address.city,
 addressRegion: business.address.province,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  url: "/",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
     {
  title: business.seo.title,
},
      
        {
  name: "description",
  content: business.seo.description,
},
      {
        property: "og:title",
        content: business.seo.title,
      },
      {
        property: "og:description",
        content: business.seo.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(businessSchema),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <div className="pb-20 md:pb-0">
        <Header />
        <main>
          <Hero />
<Services />
<WhyChooseUs />
<Contact />
        </main>
        <Footer />
      </div>
      <MobileCallBar />
    </>
  );
}
