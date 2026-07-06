import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsHero from "./components/NewsHero";
import NewsGrid from "./components/NewsGrid";

export default function News() {
  return (
    <>
      <div className="min-h-screen bg-main text-white relative z-10">
      <Navbar />
      <NewsHero />
      <NewsGrid />
      </div>
      <Footer />
    </>
  );
}
