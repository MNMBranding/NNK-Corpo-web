import { NearbyCategory } from '../data/projects';

export default function NearbyLocations({ locations }: { locations: NearbyCategory[] }) {
  return (
    <section className="bg-main text-white py-[80px] md:py-[140px] px-[3%]">
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px] mb-[60px] md:mb-[80px]">
          <div className="md:col-start-1 md:col-end-4 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Location
            </span>
          </div>
          <div className="md:col-start-4 md:col-end-13">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              What&apos;s <span className="text-[#a1a1aa]">nearby</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((cat) => (
            <div key={cat.category} className="bg-third rounded-2xl p-7 md:p-8">
              <h3 className="uppercase text-xs tracking-widest text-[#a1a1aa] mb-6 font-semibold pb-4 border-b border-white/10">
                {cat.category}
              </h3>
              <ul className="flex flex-col gap-4">
                {cat.places.map((place) => (
                  <li key={place} className="text-base md:text-lg font-medium leading-snug">
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
