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
              About NNK
            </span>
          </div>
          
          <div className="md:col-start-5 md:col-end-12">
            <h2 className="text-[10vw] md:text-[4vw] leading-[1.1] font-medium tracking-tight">
              <span className="text-[#a1a1aa]">NNK</span>
              {" "}NNK creates iconic spaces through expertise, innovation, and excellence, delivering trusted, thoughtfully designed landmarks that inspire modern living and lasting value.            </h2>
          </div>
          
          <div className="md:col-start-8 md:col-end-12 flex flex-col md:pt-10 justify-start">
            <div className="mb-5">
              <h2 className="text-[20vw] md:text-[5vw] leading-[0.9] font-medium tracking-tighter">
                20 Lakh Sft.
              </h2>
              <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                Developed
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-[20vw] md:text-[5vw] leading-[0.9] font-medium tracking-tighter">
                30 Projects
              </h2>
              <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                Delivered
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-[20vw] md:text-[5vw] leading-[0.9] font-medium tracking-tighter">
                400
              </h2>
              <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                Acres in the Pipeline
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-[20vw] md:text-[5vw] leading-[0.9] font-medium tracking-tighter">
                2000+
              </h2>
              <p className="uppercase text-sm tracking-wide mt-2 opacity-80">
                Happy Families
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
