import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="bg-main text-white py-[100px] md:py-[200px] px-[3%] overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full relative">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-[10vw] md:gap-y-[6vw]">
          
          {/* Row 1 */}
          <div className="md:col-start-1 md:col-end-3">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Mission and Vision
            </span>
          </div>
          
          <div className="md:col-start-5 md:col-end-12">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              <span className="text-[#a1a1aa]">Luna Arc</span>
              <span className="align-super text-[0.4em] ml-1 opacity-50">®</span> 
              {" "}is dedicated to designing innovative, enduring, and tailored architectural solutions that foster growth and inspire the communities we serve.
            </h2>
          </div>

          {/* Row 2 */}
          <div className="md:col-start-2 md:col-end-6">
            {/* Image/Video Wrap */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover scale-105"
                poster="/assets/675c1d31c59bdbc0d9795e5c_675c2893b17f28fb7331ba95_7646443-uhd_3840_2160_25fps-poster-00001.jpg"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/webm" />
              </video>
            </div>
          </div>

          <div className="md:col-start-7 md:col-end-8 hidden md:block pt-10">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Fun facts
            </span>
          </div>

          <div className="md:col-start-8 md:col-end-12 flex flex-col md:pt-10 justify-start">
            <div className="flex md:hidden mb-6">
              <span className="uppercase text-sm tracking-wide opacity-80">
                Fun facts
              </span>
            </div>
            <div className="mb-16">
              <h2 className="text-[20vw] md:text-[10vw] leading-[0.9] font-medium tracking-tighter">
                471<span className="text-second">+</span>
              </h2>
              <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                Clients Worldwide
              </p>
            </div>
            <div>
              <h2 className="text-[20vw] md:text-[10vw] leading-[0.9] font-medium tracking-tighter">
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
