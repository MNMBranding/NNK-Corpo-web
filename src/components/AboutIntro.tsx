export default function AboutIntro() {
  return (
    <section className="bg-surface text-ink pt-[120px] md:pt-[180px] pb-[72px] md:pb-[120px] px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-8">
        <div className="md:col-start-1 md:col-end-3 pt-2">
          <span className="uppercase text-sm tracking-wide opacity-80">About NNK</span>
        </div>

        <div className="md:col-start-4 md:col-end-13">
          <h1 className="text-[14vw] md:text-[length:min(8vw,120px)] leading-[0.95] tracking-[-2px] font-medium mb-10 md:mb-16">
            Building in Hyderabad <span className="text-muted">since 1995.</span>
          </h1>

          {/* Client's own wording, from the nnk.co.in footer */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-lg md:text-xl leading-relaxed text-body max-w-5xl">
            <p>
              With the passion to build iconic landmarks, NNK, a group of passionate professionals with years of expertise in building innumerable stand-out spaces is redefining the real estate market with innovative dwelling spaces that give you the right return value.
            </p>
            <p>
              Every project constructed by NNK, is a reflection of trust, reliability, and excellence. With a passion driven by hard work, commitment, and cooperation, NNK are redefining the future of real estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
