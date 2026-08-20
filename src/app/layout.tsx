import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NNK Constructions | Real Estate Developers in Hyderabad",
  description: "NNK Constructions builds premium residential projects across Kokapet, Khajaguda & Shaikpet, Hyderabad. 30+ projects delivered, 2000+ happy families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans relative">
        <div
          className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url('/assets/noise-dots.gif')`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}
