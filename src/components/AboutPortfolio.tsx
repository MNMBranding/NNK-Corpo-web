import Image from "next/image";

export default function AboutPortfolio() {
  return (
    <section className="bg-surface text-ink pb-[72px] md:pb-[140px] px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full">

        <Image
          src="/nnk-project-portfolio-map.webp"
          alt="Map of Hyderabad marking Sakkubai Nagar, Shaikpet, with a close-up showing the exact locations of all 18 NNK projects"
          width={3072}
          height={2048}
          sizes="(min-width: 1760px) 1760px, 100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
