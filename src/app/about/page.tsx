import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutHero from "../../components/AboutHero";
import TeamGrid from "../../components/TeamGrid";

export default function About() {
  return (
    <>
      <div className="min-h-screen relative z-10 bg-main">
      <Navbar />
      <div className="pt-[100px] bg-main" />
      <AboutHero />
      <TeamGrid />
      </div>
      <Footer />
    </>
  );
}
