const packagesData = [
  {
    name: "Starter Package",
    desc: "Perfect for small architectural firms.",
    price: "$ 15,000.00 USD",
    features: [
      "Clean and minimalist design",
      "Portfolio gallery for projects",
      "Contact form integration",
      "Easy-to-edit template"
    ],
    href: "/contact"
  },
  {
    name: "Professional Package",
    desc: "Designed for growing firms that want to highlight their services.",
    price: "$ 25,000.00 USD",
    features: [
      "Service pages",
      "Blog section for updates",
      "Testimonials slider",
      "SEO-friendly structure"
    ],
    href: "/contact"
  },
  {
    name: "Business Package",
    desc: "Tailored for established firms with multiple projects.",
    price: "$ 10,000.00 USD",
    features: [
      "Case studies with project",
      "Team member profiles",
      "Integration with Google Analytics",
      "Social media links and sharing"
    ],
    href: "/contact"
  },
  {
    name: "Enterprise Package",
    desc: "Comprehensive solution for large architecture firm.",
    price: "$ 10,000.00 USD",
    features: [
      "Multi-page layout for complex",
      "End-to-end shipment tracking",
      "Advanced filtering for projects",
      "Blog with multimedia support"
    ],
    href: "/contact"
  }
];

export default function PackagesList() {
  return (
    <section className="bg-[#121212] py-[60px] md:py-[150px] px-[5%]">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[30px]">
          {packagesData.map((pkg, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-main p-[30px] lg:p-[40px]">
              <div className="flex flex-col items-start w-full">
                <div className="mb-[20px]">
                  <h4 className="font-instrument text-[24px] text-[#9199a0] font-normal leading-[1.2] uppercase tracking-tight mb-[10px]">
                    {pkg.name}
                  </h4>
                  <p className="font-spaceGrotesk text-[14px] text-[#bcbcbc] font-normal leading-[1.3] uppercase tracking-tight">
                    {pkg.desc}
                  </p>
                </div>
                
                <p className="font-spaceGrotesk text-[14px] text-white font-medium leading-[1.3] uppercase tracking-tight mb-[30px]">
                  {pkg.price}
                </p>
                
                <div className="w-full h-[1px] bg-[#333] mb-[30px]" />
                
                <div className="flex flex-col items-start w-full gap-[15px] mb-[40px]">
                  <div className="font-instrument text-[14px] text-white font-normal leading-[1.2] uppercase tracking-tight mb-[10px]">
                    What's Included:
                  </div>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-[10px]">
                      <img 
                        src="/assets/675c1d31c59bdbc0d9795edf_done_FILL0_wght400_GRAD0_opsz48.svg" 
                        alt="check" 
                        className="w-[20px] h-[20px]" 
                      />
                      <div className="font-spaceGrotesk text-[13px] text-[#bcbcbc] font-normal leading-[1.3] tracking-tight uppercase">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full">
                <div className="w-full h-[1px] bg-[#333] mb-[30px]" />
                <a 
                  href={pkg.href} 
                  className="flex items-center justify-center bg-[#121212] text-white px-[30px] py-[15px] border border-[#333] font-spaceGrotesk text-[12px] font-medium leading-[1] uppercase tracking-tight hover:bg-white hover:text-black transition-colors duration-300 w-full"
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
