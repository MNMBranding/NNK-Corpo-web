export default function AboutPortfolio() {
  return (
    <section className="bg-surface text-ink pb-[72px] md:pb-[140px] px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full">
        <h2 className="border-l-4 border-ink pl-4 md:pl-6 uppercase leading-[1] tracking-tight text-[12vw] md:text-[length:min(5vw,88px)] mb-10 md:mb-16">
          <span className="block font-light">Project</span>
          <span className="block font-semibold">Portfolio</span>
        </h2>

        {/* Project portfolio map goes here (being designed by the agency's creative team) */}
        <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-surface-2" />
      </div>
    </section>
  );
}
