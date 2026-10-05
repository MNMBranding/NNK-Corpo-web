import Carousel from './Carousel';
import { FloorPlanItem } from '../data/projects';

export default function FloorPlan({
  floorPlans,
  masterPlan,
  name,
}: {
  floorPlans: FloorPlanItem[];
  masterPlan?: string;
  name: string;
}) {
  const images = masterPlan ? [masterPlan, ...floorPlans.map((fp) => fp.image)] : floorPlans.map((fp) => fp.image);
  const labels = masterPlan
    ? ['Master Plan', ...floorPlans.map(() => 'Floor Plan')]
    : floorPlans.map(() => 'Floor Plan');
  const captions = masterPlan
    ? [undefined, ...floorPlans.map((fp) => fp.caption)]
    : floorPlans.map((fp) => fp.caption);

  if (images.length === 0) return null;

  return (
    <section className="bg-third text-white py-[56px] md:py-[140px] px-5 md:px-[3%] rounded-[40px] md:mx-[3%] mx-[15px] mb-[50px] md:mb-[100px] overflow-hidden">
      <div className="max-w-[1760px] mx-auto w-full">
        <Carousel
          label="Floor Plan"
          heading={<>Every corner, <span className="text-[#a1a1aa]">planned</span>.</>}
          images={images}
          alt={`${name} plan`}
          fit="contain"
          labels={labels}
          captions={captions}
          slideClassName={images.length === 1 ? 'w-full h-[300px] sm:h-[420px] md:h-[640px] 2xl:h-[820px]' : 'w-[85vw] md:w-[700px] h-[320px] sm:h-[420px] md:h-[560px]'}
          lightbox
        />
      </div>
    </section>
  );
}
