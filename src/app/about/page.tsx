import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { pageSchema } from "../../data/site";
import AboutIntro from "../../components/AboutIntro";
import AboutStory from "../../components/AboutStory";
import AboutMilestones from "../../components/AboutMilestones";
import AboutPortfolio from "../../components/AboutPortfolio";

export const metadata: Metadata = {
  title: "About NNK Constructions | Building in Hyderabad Since 1995",
  description: "Building in Hyderabad since 1995, from Geethika Towers to Lavista's 132 flats. Meet the NNK group behind 36 residential and commercial projects.",
  keywords: [
    "About NNK Constructions",
    "Real Estate Developers Hyderabad",
    "Builders in Hyderabad",
    "NNK Milestones",
    "Residential Architecture Hyderabad"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About NNK Constructions | Building in Hyderabad Since 1995",
    description: "Building in Hyderabad since 1995, from Geethika Towers to Lavista's 132 flats. Meet the NNK group behind 36 residential and commercial projects.",
    url: "/about",
  },
};

export default function About() {
  return (
    <>
      <main className="relative z-10 bg-surface">
        <Navbar />
        <JsonLd data={pageSchema("AboutPage", "About Us", "/about", String(metadata.description))} />
        <AboutIntro />
        <AboutStory />
        <AboutMilestones />
        <AboutPortfolio />
      </main>
      <Footer />
    </>
  );
}
