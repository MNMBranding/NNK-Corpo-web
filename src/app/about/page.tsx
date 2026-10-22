import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutIntro from "../../components/AboutIntro";
import AboutStory from "../../components/AboutStory";
import AboutMilestones from "../../components/AboutMilestones";
import AboutPortfolio from "../../components/AboutPortfolio";

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
