import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutIntro from "../../components/AboutIntro";
import AboutStory from "../../components/AboutStory";
import AboutMilestones from "../../components/AboutMilestones";
import AboutPortfolio from "../../components/AboutPortfolio";

export const metadata: Metadata = {
  title: "About Us | Crafting Architectural Excellence",
  description: "Learn about NNK Constructions' 25+ year journey of shaping Hyderabad's skyline. Discover our values, delivered milestones, and commitment to superior craftsmanship.",
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
    title: "About Us | NNK Constructions - Crafting Architectural Excellence",
    description: "Learn about NNK Constructions' 25+ year journey of shaping Hyderabad's skyline. Discover our values, delivered milestones, and commitment to superior craftsmanship.",
    url: "/about",
  },
};

export default function About() {
  return (
    <>
      <main className="relative z-10 bg-surface">
        <Navbar />
        <AboutIntro />
        <AboutStory />
        <AboutMilestones />
        <AboutPortfolio />
      </main>
      <Footer />
    </>
  );
}
