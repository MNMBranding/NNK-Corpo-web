// Sourced from the client's profile PDF ("NNK - Profile - Non Bankers"), 2026-10-22
const milestones = [
  { year: '1995', title: 'Geethika Towers', text: 'The first project: 15 flats in Hyderabad.' },
  { year: '2006', title: 'Balaji West County', text: '72 villas, and a 75-plot layout in Nizampet the same year.' },
  { year: '2008', title: 'Gayatri Gardens', text: '75 villas on 24,200 sq yards, plus a 15-acre layout in Bowrampet.' },
  { year: '2017', title: 'Vasundhara Orchids', text: 'The first project outside Hyderabad: 75 flats in Vijayawada.' },
  { year: '2019', title: 'Gayatri Orchids', text: "The start of the group's work in Amaravathi, followed by Brookfield Villas (84 villas) in 2022." },
  { year: '2021', title: 'Gayatri Towers', text: '99 flats, 1,36,532 sq ft.' },
  { year: '2025', title: 'Lavista', text: "132 flats and 1,96,700 sq ft, the group's largest building so far." },
  { year: 'Coming next', title: 'NNK Aira', text: '53 flats, under construction.' },
];

export default function AboutMilestones() {
  return (
    <section className="bg-surface text-ink py-[72px] md:py-[140px] px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-8">
        <div className="md:col-start-1 md:col-end-3 pt-2">
          <span className="uppercase text-sm tracking-wide opacity-80">Milestones</span>
        </div>

        <div className="md:col-start-4 md:col-end-13">
          <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.15] font-medium tracking-tight mb-10 md:mb-16">
            From 15 <span className="text-muted">to 132 flats.</span>
          </h2>

          <ol className="border-t border-divider">
            {milestones.map((m) => (
              <li key={m.year} className="grid grid-cols-[88px_1fr] md:grid-cols-[200px_1fr_1.4fr] gap-x-6 gap-y-1 py-6 md:py-8 border-b border-divider">
                <span className="text-2xl md:text-[length:min(2.8vw,49px)] leading-none font-medium tracking-tighter text-muted">
                  {m.year}
                </span>
                <h3 className="text-xl md:text-[28px] leading-tight font-medium tracking-tight">{m.title}</h3>
                <p className="col-start-2 md:col-start-3 text-base md:text-lg leading-relaxed text-body">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
