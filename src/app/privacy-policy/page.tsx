import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { pageSchema } from "../../data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NNK Constructions collects, uses and protects the personal information you share with us through this website.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | NNK Constructions",
    description: "How NNK Constructions collects, uses and protects the personal information you share with us through this website.",
    url: "/privacy-policy",
  },
};

// Sidebar links on large screens. Each id matches a <section id> below.
const contents = [
  { id: "information-we-collect", title: "Information we collect" },
  { id: "how-we-use-your-information", title: "How we use your information" },
  { id: "who-we-share-it-with", title: "Who we share it with" },
  { id: "third-party-content", title: "Third party content" },
  { id: "cookies", title: "Cookies" },
  { id: "how-long-we-keep-it", title: "How long we keep it" },
  { id: "your-choices", title: "Your choices" },
  { id: "security", title: "Security" },
  { id: "changes-to-this-policy", title: "Changes to this policy" },
  { id: "contact-us", title: "Contact us" },
];

const h2 = "text-[26px] md:text-3xl 2xl:text-4xl leading-tight font-medium text-ink tracking-tight";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="relative z-10 bg-surface">
        <Navbar />
        <JsonLd data={pageSchema("WebPage", "Privacy Policy", "/privacy-policy", String(metadata.description))} />

        <section className="bg-surface text-ink pt-[72px] md:pt-[140px] 2xl:pt-[180px] pb-[72px] md:pb-[120px] 2xl:pb-[160px] px-5 md:px-[3%]">
          <div className="max-w-[1760px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 md:gap-x-8">

            {/* Heading row */}
            <div className="md:col-start-1 md:col-end-4 pt-2 mb-6 md:mb-0">
              <span className="uppercase text-sm tracking-wide opacity-80">Legal</span>
            </div>
            <div className="md:col-start-4 md:col-end-13">
              <h1 className="text-[14vw] md:text-[length:min(8vw,120px)] 2xl:text-[length:min(7vw,140px)] leading-[0.95] tracking-[-2px] font-medium mb-5 md:mb-6">
                Privacy <span className="text-muted">Policy</span>
              </h1>
              <p className="text-muted text-sm md:text-base">Last updated: 5 November 2026</p>
            </div>

            {/* Divider */}
            <div className="md:col-span-12 border-t border-black/10 mt-12 md:mt-20 mb-10 md:mb-16" />

            {/* Sticky contents list, large screens only */}
            <aside className="hidden lg:block lg:col-start-1 lg:col-end-4">
              <nav aria-label="On this page" className="sticky top-10">
                <p className="uppercase text-[13px] tracking-widest font-semibold text-ink mb-5">On this page</p>
                <ul className="flex flex-col border-l border-black/10">
                  {contents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block -ml-px border-l border-transparent pl-4 py-1.5 text-[15px] 2xl:text-base text-muted hover:text-ink hover:border-ink transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Policy text */}
            <div className="md:col-start-4 md:col-end-13 lg:col-end-12">
              <div className="max-w-[820px] 2xl:max-w-[900px] flex flex-col gap-10 md:gap-14 text-base md:text-lg 2xl:text-xl leading-relaxed text-body">
                <p className="text-lg md:text-xl 2xl:text-2xl leading-relaxed text-ink">
                  NNK Constructions (&quot;NNK&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what information we collect when you use this website, why we collect it, and how we look after it. By using this website you agree to the practices described here.
                </p>

                <section id="information-we-collect" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>Information we collect</h2>
                  <p>
                    <strong className="font-medium text-ink">Information you give us.</strong> When you send an enquiry through our contact form, we collect your name, email address, phone number, the project you are interested in, and any message you write.
                  </p>
                  <p>
                    <strong className="font-medium text-ink">Information collected automatically.</strong> Like most websites, we use cookies and similar tools (through Google Tag Manager and the analytics services it loads) to understand how visitors use the site. This can include your device and browser type, the pages you visit, how you arrived at the site, and an approximate location based on your IP address.
                  </p>
                </section>

                <section id="how-we-use-your-information" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>How we use your information</h2>
                  <ul className="list-disc pl-5 md:pl-6 flex flex-col gap-2 marker:text-muted">
                    <li>To reply to your enquiry and share details, brochures, pricing or site visit information about our projects.</li>
                    <li>To contact you by phone, email, SMS or WhatsApp about the projects you asked about.</li>
                    <li>To improve this website and measure how well our advertising works.</li>
                    <li>To meet our legal and regulatory obligations.</li>
                  </ul>
                  <p>We do not sell your personal information.</p>
                </section>

                <section id="who-we-share-it-with" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>Who we share it with</h2>
                  <p>
                    We share your information only with service providers who help us run this website and handle enquiries, such as our hosting, email, lead management and analytics providers. They may use it only to provide those services to us. We may also disclose information where the law requires it.
                  </p>
                </section>

                <section id="third-party-content" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>Third party content</h2>
                  <p>
                    Project videos on this site are hosted on YouTube and load only when you press play. Once loaded, YouTube&apos;s own privacy policy applies. Links to our social media pages and to Google Maps take you to sites with their own privacy practices, which we do not control.
                  </p>
                </section>

                <section id="cookies" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>Cookies</h2>
                  <p>
                    You can block or delete cookies in your browser settings. The website will still work, though some analytics will not be recorded.
                  </p>
                </section>

                <section id="how-long-we-keep-it" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>How long we keep it</h2>
                  <p>
                    We keep enquiry details for as long as we need them to respond to you and follow up on your interest, or for as long as the law requires.
                  </p>
                </section>

                <section id="your-choices" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>Your choices</h2>
                  <p>
                    You can ask us to access, correct or delete the personal information we hold about you, or tell us to stop contacting you, at any time. Email us at the address below and we will act on your request.
                  </p>
                </section>

                <section id="security" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>Security</h2>
                  <p>
                    We take reasonable technical and organisational steps to protect your information. No method of sending data over the internet is completely secure, so we cannot guarantee absolute security.
                  </p>
                </section>

                <section id="changes-to-this-policy" className="scroll-mt-8 flex flex-col gap-4">
                  <h2 className={h2}>Changes to this policy</h2>
                  <p>
                    We may update this policy from time to time. The date at the top of this page shows when it was last changed.
                  </p>
                </section>

                <section id="contact-us" className="scroll-mt-8 flex flex-col gap-4 bg-surface-2 p-6 md:p-10">
                  <h2 className={h2}>Contact us</h2>
                  <p>
                    NNK Constructions<br />
                    H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad - 500008<br />
                    Phone: <a href="tel:+919092290933" className="underline underline-offset-4 hover:text-muted">+91 90922 90933</a><br />
                    Email: <a href="mailto:hello@nnk.co.in" className="underline underline-offset-4 break-all hover:text-muted">hello@nnk.co.in</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
