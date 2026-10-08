import Image from 'next/image';
import { ProjectStatus } from '../data/projects';

export default function ConstructionUpdates({
  image,
  name,
  status,
}: {
  image: string;
  name: string;
  status: ProjectStatus;
}) {
  const isOngoing = status === 'ongoing';

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      <Image
        src={image}
        alt={`${name} construction status`}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

      <div className="absolute inset-0 flex flex-col justify-end p-[6%] md:p-[3%]">
        <span className="uppercase text-sm tracking-wide opacity-80 text-white block mb-4">
          Project Status
        </span>
        <div className="mb-5">
          <span
            className={`inline-flex items-center gap-2 uppercase text-xs font-semibold tracking-widest px-4 py-2 rounded-full border ${
              isOngoing ? 'border-white/40 text-white' : 'border-[#a1a1aa]/40 text-[#a1a1aa]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isOngoing ? 'bg-white animate-pulse' : 'bg-[#a1a1aa]'}`} />
            {isOngoing ? 'Under Construction' : 'Completed & Delivered'}
          </span>
        </div>
        <h2 className="text-white text-[9vw] md:text-[length:min(3.6vw,60px)] font-medium tracking-tight max-w-2xl leading-[1.2]">
          {isOngoing
            ? 'Actively under construction — reach out for the latest on-site progress.'
            : 'Construction complete. Residents have moved in.'}
        </h2>
      </div>
    </section>
  );
}
