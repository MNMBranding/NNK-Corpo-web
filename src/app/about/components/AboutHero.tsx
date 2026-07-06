import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="bg-main text-white py-[100px] md:py-[200px] px-[3%]">
      <div className="max-w-[1240px] mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px]">
          
          <div className="md:col-span-1">
      <div className="flex gap-2 items-center text-[13px] uppercase tracking-wide font-medium opacity-80 mb-6 md:mb-10">
        <Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group">
          <img src="/assets/675c46b4c27c49c12277a1e5_arrow-small-left.svg" alt="arrow" className="w-[14px] h-[14px] group-hover:translate-x-1 transition-transform" />
          HOME
        </Link>
        <span className="opacity-50">/</span>
        <span>STUDIO</span>
      </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-[12vw] md:text-[6vw] leading-[1.1] font-medium tracking-tight mb-10 md:mb-20">
              <span className="text-[#a1a1aa]">Luna Arc</span>
              <span className="align-super text-[0.4em] ml-1 opacity-50">®</span> 
              {" "}is dedicated to designing innovative, enduring, and tailored architectural solutions that foster growth and inspire the communities we serve.
            </h2>
          </div>

          <div className="md:col-start-1 md:col-end-2 md:pr-10">
            <p className="text-xl md:text-[27px] font-medium leading-snug mb-10">
              <span className="text-[#a1a1aa]">Our mission</span> is to create innovative architectural solutions that seamlessly merge functionality and sustainability.
            </p>
          </div>

          <div className="md:col-start-2 md:col-end-3 md:pl-10">
            <p className="text-xl md:text-[27px] font-medium leading-snug mb-10">
              <span className="text-[#a1a1aa]">Our vision</span> is to be a global leader in thinking architecture, shaping the future through cutting design and responsible building practices.
            </p>
          </div>

          <div className="md:col-span-2 mt-10 md:mt-20">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
                poster="/assets/675c1d31c59bdbc0d9795e5c_675c2893b17f28fb7331ba95_7646443-uhd_3840_2160_25fps-poster-00001.jpg"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/webm" />
              </video>
            </div>
          </div>

          <div className="md:col-span-1 mt-10 md:mt-20">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Fun facts
            </span>
          </div>

          <div className="md:col-span-1 flex flex-col md:flex-row justify-between gap-10 mt-10 md:mt-20">
            <div>
              <h2 className="text-[15vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter">
                471<span className="text-second">+</span>
              </h2>
              <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                Clients Worldwide
              </p>
            </div>
            <div>
              <h2 className="text-[15vw] md:text-[8vw] leading-[0.9] font-medium tracking-tighter">
                7<span className="text-second">+</span>
              </h2>
              <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                Years of Experience
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
