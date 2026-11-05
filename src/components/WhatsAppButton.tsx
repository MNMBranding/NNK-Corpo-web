import { WhatsAppIcon } from './Icons';

// Floating WhatsApp chat button, bottom-right on every page that has the Navbar.
// Rendered from Navbar.tsx so the open mobile menu covers it.
const whatsappNumber = '919092290933'; // +91 90922 90933, country code without + or spaces

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NNK Constructions on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-30 flex items-center justify-center size-14 md:size-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-200 ease-out hover:scale-105 active:scale-95 motion-reduce:transition-none"
    >
      <WhatsAppIcon size={30} className="md:size-[34px]" />
    </a>
  );
}
