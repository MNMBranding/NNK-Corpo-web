import CircularGallery from './CircularGallery';

export default function Gallery({ images, name }: { images: string[]; name: string }) {
  if (images.length === 0) return null;

  return (
    <section className="bg-main text-white py-[40px] md:py-[70px] px-[3%] overflow-hidden">
      <div className="max-w-[1760px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-10 md:mb-16">
          <div className="md:col-start-1 md:col-end-4 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">Gallery</span>
          </div>
          <div className="md:col-start-4 md:col-end-11">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              A closer <span className="text-[#a1a1aa]">look</span>.
            </h2>
          </div>
        </div>

        <div className="w-full h-[75vh] md:h-[92vh]">
          <CircularGallery
            items={images.map((image) => ({ image, text: '' }))}
            textColor="#ffffff"
            borderRadius={0.05}
            bend={images.length > 1 ? 3 : 0}
            itemScale={1.2}
          />
        </div>
      </div>
    </section>
  );
}
