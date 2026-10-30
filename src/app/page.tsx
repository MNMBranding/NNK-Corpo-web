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
