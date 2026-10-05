export default function ContactForm() {
  return (
    <section className="bg-[#111111] text-white py-[72px] md:py-[140px] lg:py-[200px] px-5 md:px-[3%] relative">
      <div className="max-w-[1760px] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px]">
          
          <div className="md:col-start-1 md:col-end-4 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Contact us
            </span>
          </div>

          <div className="md:col-start-4 md:col-end-13">
            <h2 className="text-[10vw] md:text-[length:min(5vw,88px)] leading-[1.1] font-medium tracking-tight mb-[50px] md:mb-[5vw]">
              Get your <span className="text-[#a1a1aa]">custom quote</span> for innovative architectural solutions.
            </h2>
            
            <form className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    required 
                    className="w-full bg-transparent border border-[#262626] text-white p-6 h-[70px] text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="contact@email.com" 
                    required 
                    className="w-full bg-transparent border border-[#262626] text-white p-6 h-[70px] text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="+1 345-678" 
                    required 
                    className="w-full bg-transparent border border-[#262626] text-white p-6 h-[70px] text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Add Company" 
                    required 
                    className="w-full bg-transparent border border-[#262626] text-white p-6 h-[70px] text-base focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea 
                    placeholder="Please type your message here..." 
                    required 
                    className="w-full bg-transparent border border-[#262626] text-white p-6 min-h-[160px] text-base focus:outline-none focus:border-white transition-colors resize-y"
                  />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button 
                    type="submit" 
                    className="bg-white text-main h-[60px] px-10 font-semibold text-lg hover:bg-[#111111] hover:text-white pointer-coarse:bg-[#111111] max-md:bg-[#111111] pointer-coarse:text-white max-md:text-white pointer-coarse:border-[#262626] max-md:border-[#262626] transition-colors duration-300 inline-flex items-center justify-center border border-transparent hover:border-[#262626]"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>

      </div>
    </section>
  );
}
