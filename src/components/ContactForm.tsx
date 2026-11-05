"use client";

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import InterestSelect from './InterestSelect';
import { projects } from '../data/projects';

// Underlined fields: a small label above, a thin line below that darkens on focus
const inputClass =
  'w-full bg-transparent border-0 border-b border-black/20 rounded-none px-0 pt-2 pb-3 text-lg text-ink placeholder:text-black/35 focus:outline-none focus:border-ink transition-colors';

// A project page's "Enquire Now" links to /contact?project=<slug>, which pre-selects that project
function PreselectedInterest({ id, className }: { id: string; className: string }) {
  const initialProject = useSearchParams().get('project');
  return <InterestSelect id={id} className={className} initialProject={initialProject} />;
}

function Field({ label, htmlFor, className = '', children }: { label: string; htmlFor: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block uppercase text-xs tracking-widest text-muted font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const router = useRouter();
  // idle -> sending (spinner) -> sent (check mark) -> leaving (curtain covers the screen) -> /thank-you
  const [phase, setPhase] = useState<'idle' | 'sending' | 'sent' | 'leaving'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    router.prefetch('/thank-you');
  }, [router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (phase !== 'idle') return;

    setErrorMessage(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const interest = (formData.get('interest') as string) || '';
    const message = (formData.get('message') as string) || '';

    // The thank-you page offers the brochure of the project picked in "Interested In"
    const slug = projects.find((p) => p.name === interest)?.slug;

    setPhase('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, interest, message }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.error || 'Failed to submit form. Please try again.');
      }

      setPhase('sent');
      await new Promise((r) => setTimeout(r, 650));
      setPhase('leaving');
      await new Promise((r) => setTimeout(r, 750));
      router.push(slug ? `/thank-you?project=${slug}` : '/thank-you');
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      const msg = err instanceof Error ? err.message : 'Unable to send enquiry. Please try again.';
      setErrorMessage(msg);
      setPhase('idle');
    }
  }

  return (
    <section className="bg-surface-2 text-ink py-[72px] md:py-[140px] lg:py-[200px] px-5 md:px-[3%] relative">
      <div className="max-w-[1760px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px]">
          
          <div className="md:col-start-1 md:col-end-4 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Contact us
            </span>
          </div>

          <div className="md:col-start-4 md:col-end-13">
            <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.1] font-medium tracking-tight mb-[50px] md:mb-[5vw]">
              Get your <span className="text-muted">custom quote</span> for innovative architectural solutions.
            </h2>
            
            <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-12">
              <Field label="Full Name" htmlFor="contact-name">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor="contact-email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </Field>
              <Field label="Phone" htmlFor="contact-phone">
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className={inputClass}
                />
              </Field>
              <Field label="Interested In" htmlFor="contact-interest">
                {/* Suspense keeps the page static: the empty dropdown shows until the URL is read */}
                <Suspense fallback={<InterestSelect id="contact-interest" className={inputClass} />}>
                  <PreselectedInterest id="contact-interest" className={inputClass} />
                </Suspense>
              </Field>
              <Field label="Message (Optional)" htmlFor="contact-message" className="md:col-span-2">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your project (optional)"
                  className={`${inputClass} resize-y`}
                />
              </Field>

              {errorMessage && (
                <div className="md:col-span-2 text-red-600 text-sm font-medium bg-red-50 p-4 rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
                {/* Consent: must be ticked before the form can be sent */}
                <label htmlFor="contact-consent" className="flex items-start gap-3 text-base md:text-[17px] leading-relaxed text-muted max-w-[640px] cursor-pointer">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-[4px] size-5 shrink-0 cursor-pointer accent-ink"
                  />
                  <span>
                    I agree to NNK Constructions contacting me by phone, email, SMS or WhatsApp about my enquiry, and to the{' '}
                    <Link href="/privacy-policy" className="text-ink underline underline-offset-4 hover:text-muted transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={phase !== 'idle'}
                  aria-live="polite"
                  className="group relative shrink-0 self-end md:self-auto inline-flex items-center gap-3 rounded-full bg-ink text-white h-[56px] px-8 font-medium text-base hover:bg-[#3f3f46] disabled:hover:bg-ink transition-colors duration-300 disabled:opacity-80"
                >
                  <span className={`transition-opacity duration-300 ${phase === 'idle' ? 'opacity-100' : 'opacity-0'}`}>
                    Get in Touch
                  </span>
                  <span aria-hidden="true" className={`transition-[transform,opacity] duration-300 group-hover:translate-x-1 ${phase === 'idle' ? 'opacity-100' : 'opacity-0'}`}>&rarr;</span>

                  {/* Spinner while sending */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 m-auto size-6 rounded-full border-2 border-white/25 border-t-white animate-spin transition-opacity duration-300 ${phase === 'sending' ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {/* Check mark draws in once sent */}
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="absolute inset-0 m-auto size-7" fill="none">
                    <path
                      d="M5 12.5l4.5 4.5L19 7.5"
                      pathLength={1}
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray={1}
                      className={`transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${phase === 'sent' || phase === 'leaving' ? '[stroke-dashoffset:0]' : '[stroke-dashoffset:1]'}`}
                    />
                  </svg>
                  <span className="sr-only">{phase === 'sending' ? 'Sending' : phase === 'idle' ? '' : 'Sent'}</span>
                </button>
              </div>
            </form>
            
          </div>
        </div>

      </div>

      {/* Curtain that rises over the page before handing off to /thank-you (which lifts it away) */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[200] bg-ink pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none ${phase === 'leaving' ? 'translate-y-0' : 'translate-y-full'}`}
      />
    </section>
  );
}
