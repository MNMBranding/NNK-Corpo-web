import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MissionVision from "../components/MissionVision";
import ProjectVideos from "../components/ProjectVideos";
import LogoGrid from "../components/LogoGrid";
// import Services from "../components/Services"; // hidden for now
import QuoteCTA from "../components/QuoteCTA";
// import Testimonials from "../components/Testimonials"; // hidden for now
import HeroSecond from "../components/HeroSecond";
import LatestNews from "../components/LatestNews";
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
        {/* <Services /> hidden for now */}
        <QuoteCTA />
        {/* <Testimonials /> hidden for now */}
        <HeroSecond />
        <LatestNews />
      </main>
      <Footer />
    </>
  );
}
