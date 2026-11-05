import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nnk-corp.netlify.app";
const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "DUMMY_GSC_VERIFICATION_CODE_REPLACE_LATER";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NNK Constructions | Real Estate Developers in Hyderabad",
    template: "%s | NNK Constructions",
  },
  description: "NNK Constructions builds premium residential projects across Kokapet, Khajaguda & Shaikpet, Hyderabad. 30+ projects delivered, 2000+ happy families.",
  keywords: [
    "NNK Constructions",
    "Real Estate Developers Hyderabad",
    "Luxury Apartments Kokapet",
    "Gated Communities Hyderabad",
    "Flats for sale in Khajaguda",
    "Shaikpet Apartments",
    "Premium Residential Projects Hyderabad"
  ],
  authors: [{ name: "NNK Constructions" }],
  creator: "NNK Constructions",
  publisher: "NNK Constructions",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  verification: {
    google: gscVerification,
  },
  openGraph: {
    title: "NNK Constructions | Real Estate Developers in Hyderabad",
    description: "NNK Constructions builds premium residential projects across Kokapet, Khajaguda & Shaikpet, Hyderabad. 30+ projects delivered, 2000+ happy families.",
    siteName: "NNK Constructions",
    locale: "en_IN",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "NNK Constructions | Real Estate Developers in Hyderabad",
    description: "NNK Constructions builds premium residential projects across Kokapet, Khajaguda & Shaikpet, Hyderabad. 30+ projects delivered, 2000+ happy families.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <head>
        {/* Google Analytics 4 (GA4) */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col font-sans relative">
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
