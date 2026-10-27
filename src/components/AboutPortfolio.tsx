import Image from "next/image";

export default function AboutPortfolio() {
  return (
    <section className="bg-surface text-ink pb-[72px] md:pb-[140px] px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full">

        <Image
          src="/nnk-project-portfolio-map.png"
          alt="Map of NNK project locations across Hyderabad, from Bachupally and Kukatpally to Kompally, Alwal and Secunderabad"
          width={1536}
          height={1024}
          sizes="(min-width: 1760px) 1760px, 100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
