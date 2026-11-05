import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { pageSchema } from "../../data/site";
import ContactHero from "../../components/ContactHero";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Enquire About Premium Homes in Hyderabad",
  description: "Get in touch with NNK Constructions. Schedule a site visit, enquire about our residential communities, or request a custom quote.",
  keywords: [
    "Contact NNK Constructions",
    "Real Estate Enquiry Hyderabad",
    "Schedule Site Visit Hyderabad",
    "NNK Office Address Shaikpet",
    "Property Enquiry Kokapet"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Enquire About Premium Homes | NNK Constructions",
    description: "Get in touch with NNK Constructions. Schedule a site visit, enquire about our residential communities, or request a custom quote.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-surface text-ink relative z-10">
        <Navbar />
        <JsonLd data={pageSchema("ContactPage", "Contact Us", "/contact", String(metadata.description))} />
        <ContactHero />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
