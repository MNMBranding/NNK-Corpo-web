import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHero from "../../components/ContactHero";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-surface text-ink relative z-10">
      <Navbar />
      <ContactHero />
      <ContactForm />
      </div>
      <Footer />
    </>
  );
}
