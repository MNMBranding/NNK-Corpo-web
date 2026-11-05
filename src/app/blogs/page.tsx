import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsHero from "../../components/NewsHero";
import NewsGrid from "../../components/NewsGrid";
import { blogsEnabled } from "../../data/news";

export const metadata: Metadata = {
  title: "Insights & Articles | Architecture & Real Estate Trends",
  description: "Explore the latest insights, architecture perspectives, and sustainable living updates from NNK Constructions in Hyderabad.",
  keywords: [
    "NNK Blog",
    "Real Estate Insights Hyderabad",
    "Architecture Articles",
    "Sustainable Urban Living",
    "Hyderabad Real Estate Trends"
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Insights & Articles | NNK Constructions",
    description: "Explore the latest insights, architecture perspectives, and sustainable living updates from NNK Constructions in Hyderabad.",
    url: "/blogs",
  },
};

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
