import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsHero from "../../components/NewsHero";
import NewsGrid from "../../components/NewsGrid";
import { blogsEnabled } from "../../data/news";

export default function Blogs() {
  if (!blogsEnabled) notFound();

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
