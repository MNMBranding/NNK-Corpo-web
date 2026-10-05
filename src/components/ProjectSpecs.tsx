import Image from 'next/image';
import { Project } from '../data/projects';

export default function ProjectSpecs({ project }: { project: Project }) {
  const specs = [
    { label: 'Floors', value: project.specs.floors },
    { label: 'BHK', value: project.specs.bhk },
    { label: 'Built-up Area', value: project.specs.builtUp },
    { label: 'Plot Area', value: project.specs.plotArea },
  ];

  const { rera, approvalAuthority, approvalNumber } = project.specs;

  type Card = { key: string; content: React.ReactNode; wide?: boolean };

  const cards: Card[] = [
    ...specs.map((spec) => ({
      key: spec.label,
      content: (
        <>
          <p className="uppercase text-xs tracking-widest opacity-60 mb-4">{spec.label}</p>
          <h3 className="text-2xl md:text-[length:clamp(22px,1.8vw,32px)] font-medium tracking-tight leading-tight">{spec.value}</h3>
        </>
      ),
    })),
    ...(rera
      ? [
          {
            key: 'rera',
            wide: true,
            content: (
              <>
                <p className="uppercase text-xs tracking-widest opacity-60 mb-4">TS RERA</p>
                <div className="flex items-center justify-center gap-3">
                  <Image src="/assets/badges/ts-rera.png" alt="TS RERA" width={34} height={34} className="shrink-0 rounded-sm" />
                  <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-tight leading-tight [overflow-wrap:anywhere]">{rera}</h3>
                </div>
              </>
            ),
          },
        ]
      : []),
    ...(approvalNumber
      ? [
          {
            key: 'approval',
            wide: true,
            content: (
              <>
                <p className="uppercase text-xs tracking-widest opacity-60 mb-4">{approvalAuthority || 'Approval'} No.</p>
                <div className="flex items-center justify-center gap-3">
                  <Image src="/assets/badges/ghmc.png" alt={approvalAuthority || 'Approval'} width={34} height={34} className="shrink-0 rounded-sm" />
                  <h3 className="text-base sm:text-lg md:text-xl font-medium tracking-tight leading-tight [overflow-wrap:anywhere]">{approvalNumber}</h3>
                </div>
              </>
            ),
          },
        ]
      : []),
  ];

  const lastIsSpanning = cards.length % 2 === 1;

  return (
    <section className="bg-main text-white py-[80px] md:py-[120px] px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full">
        <div className="mb-12 md:mb-16">
          <span className="uppercase text-sm tracking-wide opacity-80 block mb-4">
            Project Overview
          </span>
          <h2 className="text-[9vw] md:text-[length:min(3.5vw,62px)] leading-[1.05] font-medium tracking-tight max-w-3xl">
            Everything you need to know, <span className="text-[#a1a1aa]">at a glance</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {cards.map((card, idx) => (
            <div
              key={card.key}
              className={`bg-third rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center ${
                lastIsSpanning && idx === cards.length - 1 ? 'col-span-2' : card.wide ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
