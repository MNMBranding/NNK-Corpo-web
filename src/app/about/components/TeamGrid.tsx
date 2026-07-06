import Image from "next/image";

const team = [
  {
    image: "/assets/676036c59f4ed5cdb2be537b_team-1.avif",
    name: "Noah Bennett",
    title: "Founder"
  },
  {
    image: "/assets/676036c59f4ed5cdb2be537b_team-1.avif",
    name: "Emma Lawson",
    title: "Architect"
  },
  {
    image: "/assets/676036c59f4ed5cdb2be537b_team-1.avif",
    name: "Ethan Reyes",
    title: "Architect"
  },
  {
    image: "/assets/676036c59f4ed5cdb2be537b_team-1.avif",
    name: "Olivia Turner",
    title: "Interior Designer"
  }
];

export default function TeamGrid() {
  return (
    <section className="bg-third pt-[150px] pb-[100px] md:pb-[200px] px-[3%] relative overflow-hidden rounded-[40px] md:mx-[3%] mt-[50px] md:mt-[100px] mx-[15px] mb-[100px] md:mb-[200px]">
      <div className="max-w-[1240px] mx-auto w-full text-white relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px] mb-16 md:mb-32">
          <div className="md:col-start-1 md:col-end-3 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              The Team
            </span>
          </div>
          <div className="md:col-start-4 md:col-end-13">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              Meet the <span className="text-[#a1a1aa]">brilliant team</span> powering our architectural innovations.
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-6">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                />
              </div>
              
              <h3 className="text-[27px] font-medium leading-snug">
                {member.name}
              </h3>
              <p className="text-xl text-[#a1a1aa] mb-6">
                {member.title}
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-auto">
                <SocialIcon href="https://x.com" icon="/assets/676036c59f4ed5cdb2be537b_team-1.avif" alt="X" />
                <SocialIcon href="https://linkedin.com" icon="/assets/676036c59f4ed5cdb2be537b_team-1.avif" alt="LinkedIn" />
                <SocialIcon href="https://instagram.com" icon="/assets/676036c59f4ed5cdb2be537b_team-1.avif" alt="Instagram" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function SocialIcon({ href, icon, alt }: { href: string, icon: string, alt: string }) {
  return (
    <a href={href} target="_blank" className="relative block w-10 h-10 border border-[#262626] rounded-full overflow-hidden hover:border-white transition-colors duration-300 flex items-center justify-center group">
      <Image src={icon} alt={alt} width={16} height={16} className="invert group-hover:-translate-y-[150%] transition-transform duration-300 ease-out" />
      <Image src={icon} alt={alt} width={16} height={16} className="invert absolute translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    </a>
  );
}
