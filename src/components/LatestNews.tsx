import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    image: '/assets/6760288503b490ff72c0222f_Modern Minimalist Living Room.avif',
    date: 'October 1, 2023',
    readTime: '5',
    title: 'Innovations in Sustainable Urban Architecture',
    link: '/post/innovations-in-sustainable-urban-architecture'
  },
  {
    image: '/assets/6760285ad4a1aacd19d70a02_Man in Modern Architectural Setting.avif',
    date: 'October 3, 2023',
    readTime: '3',
    title: 'Designing for the Future: Smart Homes and Spaces',
    link: '/post/designing-for-the-future-smart-homes-and-spaces'
  },
  {
    image: '/assets/676028778cb8c5a68be99b3f_Tranquil Modern Structure by the Lake.avif',
    date: 'October 6, 2023',
    readTime: '3',
    title: 'Heritage Revival: Merging Classic and Modern Styles',
    link: '/post/heritage-revival-merging-classic-and-modern-styles'
  },
  {
    image: '/assets/6760295ca27ca0469b8142e9_Modern Minimalist Interior with Warm Hues.avif',
    date: 'October 4, 2023',
    readTime: '5',
    title: 'The Power of Minimalism in Contemporary Architecture',
    link: '/post/the-power-of-minimalism-in-contemporary-architecture'
  }
];

export default function LatestNews() {
  return (
    <section className="bg-third text-white py-[100px] md:py-[200px] overflow-hidden px-[3%]">
      <div className="max-w-[1240px] mx-auto w-full relative">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-32">
          <div className="md:col-start-1 md:col-end-3 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Latest News
            </span>
          </div>
          <div className="md:col-start-5 md:col-end-12">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              Recent developments in modern architecture.
            </h2>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item, idx) => (
            <Link key={idx} href={item.link} className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-6">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                
                {/* Arrow Icon */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-white flex items-center justify-center transition-transform duration-300 z-10">
                  <Image src="/assets/675c46b4c27c49c12277a1e5_arrow-small-left.svg" alt="Arrow" width={20} height={20} className="rotate-[135deg]" />
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 uppercase text-xs tracking-wide opacity-80">
                <div className="flex items-center gap-2">
                  <Image src="/assets/675c1d31c59bdbc0d9795e87_data-light.svg" alt="Date" width={16} height={16} className="" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/675c1d31c59bdbc0d9795e8b_time-light.svg" alt="Time" width={16} height={16} className="" />
                  <span>{item.readTime} min read</span>
                </div>
              </div>

              <h3 className="text-xl font-medium leading-tight group-hover:opacity-80 transition-opacity">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
