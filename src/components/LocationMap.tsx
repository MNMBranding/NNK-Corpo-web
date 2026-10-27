export default function LocationMap({ address, coords, name }: { address: string; coords?: string; name: string }) {
  // Exact coordinates drop the pin on the building; the address is a fallback for projects without them
  const query = coords ? `${encodeURIComponent(coords)}&z=17` : encodeURIComponent(address);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coords ?? address)}`;

  return (
    <section className="mb-[50px] md:mb-[100px]">
      <h2 className="text-center px-5 md:px-[3%] mb-[40px] md:mb-[60px] text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.1] font-medium tracking-tight">
        Location
      </h2>
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
        <iframe
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="absolute inset-0 w-full h-full border-0 saturate-[0.35]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${name} location map`}
        />
      </div>
      <div className="flex justify-center mt-[40px] md:mt-[60px] px-5">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center justify-center bg-ink text-white rounded-[100px] py-[18px] px-[40px] uppercase font-medium text-[15px] hover:text-white pointer-coarse:text-white max-md:text-white transition-colors duration-300"
        >
          <span className="relative z-10">View on Google Maps</span>
          <div className="absolute inset-0 bg-[#3f3f46] rounded-full translate-y-[103%] group-hover:translate-y-0 pointer-coarse:translate-y-0 max-md:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        </a>
      </div>
    </section>
  );
}
