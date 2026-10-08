import InterestSelect from './InterestSelect';

// Underlined fields: a small label above, a thin line below that darkens on focus
const inputClass =
  'w-full bg-transparent border-0 border-b border-black/20 rounded-none px-0 pt-2 pb-3 text-lg text-ink placeholder:text-black/35 focus:outline-none focus:border-ink transition-colors';

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
            
            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-12">
              <Field label="Full Name" htmlFor="contact-name">
                <input id="contact-name" type="text" autoComplete="name" placeholder="John Doe" required className={inputClass} />
              </Field>
              <Field label="Email" htmlFor="contact-email">
                <input id="contact-email" type="email" autoComplete="email" placeholder="you@email.com" required className={inputClass} />
              </Field>
              <Field label="Phone" htmlFor="contact-phone">
                <input id="contact-phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required className={inputClass} />
              </Field>
              <Field label="Interested In" htmlFor="contact-interest">
                <InterestSelect id="contact-interest" className={inputClass} />
              </Field>
              <Field label="Message" htmlFor="contact-message" className="md:col-span-2">
                <textarea id="contact-message" rows={3} placeholder="Tell us about your project" required className={`${inputClass} resize-y`} />
              </Field>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink text-white h-[56px] px-8 font-medium text-base hover:bg-[#3f3f46] transition-colors duration-300"
                >
                  Get in Touch
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            </form>
            
          </div>
        </div>

      </div>
    </section>
  );
}
