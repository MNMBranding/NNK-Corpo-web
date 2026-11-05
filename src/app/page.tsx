import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MissionVision from "../components/MissionVision";
import ProjectVideos from "../components/ProjectVideos";
import LogoGrid from "../components/LogoGrid";
import QuoteCTA from "../components/QuoteCTA";
import HeroSecond from "../components/HeroSecond";
import LatestNews from "../components/LatestNews";
import { blogsEnabled } from "../data/news";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "NNK Constructions | Real Estate Developers in Hyderabad",
  description: "NNK Constructions builds premium 2 & 3 BHK apartments in Shaikpet, Hyderabad. Building since 1995, with 36 projects delivered. Explore ongoing projects.",
  keywords: [
    "NNK Constructions",
    "Luxury Apartments Hyderabad",
    "Flats in Kokapet",
    "Gated Communities Khajaguda",
    "Shaikpet Real Estate",
    "Residential Developers Hyderabad"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NNK Constructions | Real Estate Developers in Hyderabad",
    description: "Experience architectural excellence with NNK Constructions. Delivering luxury residences, premium gated communities, and iconic homes across Kokapet, Khajaguda, and Shaikpet.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <main className="relative z-10 bg-surface">
        <Navbar />
        <Hero />
        <MissionVision />
        <ProjectVideos />
        <LogoGrid />
        <QuoteCTA />
        <HeroSecond />
        {blogsEnabled && <LatestNews />}
      </main>
      <Footer />
    </>
  );
}
