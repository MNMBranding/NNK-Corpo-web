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
  title: "Luna Arc - Webflow Ecommerce website template",
  description: "Count on Luna Arc for a refined Webflow template perfect for contemporary architectural firms.",
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
