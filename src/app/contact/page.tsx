import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { pageSchema } from "../../data/site";
import ContactHero from "../../components/ContactHero";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact NNK Constructions | Shaikpet, Hyderabad",
  description: "Contact NNK Constructions in Sakkubai Nagar, Shaikpet, Hyderabad. Call +91 90922 90933 or email sales@nnk.co.in to enquire about flats for sale.",
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
    title: "Contact NNK Constructions | Shaikpet, Hyderabad",
    description: "Contact NNK Constructions in Sakkubai Nagar, Shaikpet, Hyderabad. Call +91 90922 90933 or email sales@nnk.co.in to enquire about flats for sale.",
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
