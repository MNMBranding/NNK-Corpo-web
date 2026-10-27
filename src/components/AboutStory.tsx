export default function AboutStory() {
  return (
    <section className="bg-surface-2 text-ink py-[72px] md:py-[140px] px-5 md:px-[3%] mx-[1%]">
      <div className="max-w-[1760px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-8">
        <div className="md:col-start-1 md:col-end-3 pt-2">
          <span className="uppercase text-sm tracking-wide opacity-80">Our Story</span>
        </div>

        <div className="md:col-start-4 md:col-end-13">
          <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.15] font-medium tracking-tight mb-8 md:mb-12">
            Thirty years of building, <span className="text-muted">under one family of firms.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-lg md:text-xl leading-relaxed text-body max-w-5xl">
            <p>
              NNK’s journey began in 1995 with Geethika Towers, its first building in Hyderabad, comprising 15 flats spread across 700 square yards. Since then, the group has delivered 36 residential and commercial projects and six open-plot layouts, building a presence through names familiar to Hyderabad’s property buyers, including Sri Venkateshwara Constructions, Balaji Constructions, Sri Gayatri, Veekay Infra and Vasundhara Developers.
            </p>
            <p>
              Most of the recent homes carry the NNK name, and nearly all of them stand within a few streets of each other in Sakkubai Nagar, Shaikpet. Beyond Hyderabad, the group has built in Amaravathi and Vijayawada and laid out plots near Vizag and Bangalore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
