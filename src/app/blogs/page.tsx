import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsHero from "../../components/NewsHero";
import NewsGrid from "../../components/NewsGrid";

export default function Blogs() {
  return (
    <>
      <div className="min-h-screen bg-surface text-ink relative z-10">
        <Navbar />
        <NewsHero />
        <NewsGrid />
      </div>
      <Footer />
    </>
  );
}
