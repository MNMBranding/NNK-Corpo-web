import { standardSpecifications } from '../data/specifications';

export default function ProjectSpecifications() {
  return (
    <section className="bg-third text-white py-[80px] md:py-[140px] px-[3%] rounded-[40px] md:mx-[3%] mx-[15px] mb-[50px] md:mb-[100px]">
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px] mb-[80px]">
          <div className="md:col-start-1 md:col-end-4 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Specifications
            </span>
          </div>
          <div className="md:col-start-4 md:col-end-13">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              Built to <span className="text-[#a1a1aa]">last</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[50px]">
          {standardSpecifications.map((spec) => (
            <div key={spec.label} className="md:pr-[5vw]">
              <div className="text-xl font-medium leading-[1.2] text-white mb-3">
                {spec.label}
              </div>
              <div className="h-[1px] bg-white/10 mb-4" />
              <p className="text-[#a1a1aa] text-base leading-[1.5]">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
