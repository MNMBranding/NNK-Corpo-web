import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackagesHero from "../../components/PackagesHero";
import PackagesList from "../../components/PackagesList";

export default function Packages() {
  return (
    <>
      <div className="page-content bg-main min-h-screen relative z-10">
      <Navbar />
      <div className="pt-[100px] bg-main" />
      <div className="top-content">
        <PackagesHero />
      </div>
      <PackagesList />
      </div>
      <Footer />
    </>
  );
}
