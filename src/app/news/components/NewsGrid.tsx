import Image from "next/image";
import Link from "next/link";

const news = [
  {
    image: "/assets/6760288503b490ff72c0222f_Modern Minimalist Living Room.avif",
    date: "October 1, 2023",
    readTime: "5",
    title: "Innovations in Sustainable Urban Architecture",
    link: "/post/innovations-in-sustainable-urban-architecture"
  },
  {
    image: "/assets/6760285ad4a1aacd19d70a02_Man in Modern Architectural Setting.avif",
    date: "October 3, 2023",
    readTime: "3",
    title: "Designing for the Future: Smart Homes and Spaces",
    link: "/post/designing-for-the-future-smart-homes-and-spaces"
  },
  {
    image: "/assets/676028778cb8c5a68be99b3f_Tranquil Modern Structure by the Lake.avif",
    date: "October 6, 2023",
    readTime: "3",
    title: "Heritage Revival: Merging Classic and Modern Styles",
    link: "/post/heritage-revival-merging-classic-and-modern-styles"
  },
  {
    image: "/assets/6760295ca27ca0469b8142e9_Modern Minimalist Interior with Warm Hues.avif",
    date: "October 4, 2023",
    readTime: "5",
    title: "The Power of Minimalism in Contemporary Architecture",
    link: "/post/the-power-of-minimalism-in-contemporary-architecture"
  }
];

export default function NewsGrid() {
  return (
    <section className="bg-third pt-[150px] pb-[100px] md:pb-[200px] px-[3%] relative overflow-hidden rounded-[40px] md:mx-[3%] mt-[50px] md:mt-[100px] mx-[15px] mb-[100px] md:mb-[200px]">
      <div className="max-w-[1240px] mx-auto w-full text-white relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[80px]">
          {news.map((item, idx) => (
            <Link key={idx} href={item.link} className="group block">
              <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] w-full overflow-hidden mb-6">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                />
                
                {/* Arrow Icon on Hover */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <Image src="/assets/675c46b4c27c49c12277a1e5_arrow-small-left.svg" alt="Arrow" width={20} height={20} className="rotate-180" />
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6 uppercase text-sm tracking-wide opacity-80">
                <div className="flex items-center gap-2">
                  <Image src="/assets/675c1d31c59bdbc0d9795e87_data-light.svg" alt="Date" width={20} height={20} className="opacity-80" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/675c1d31c59bdbc0d9795e8b_time-light.svg" alt="Time" width={20} height={20} className="opacity-80" />
                  <span>{item.readTime} min read</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-[32px] font-medium leading-snug group-hover:opacity-80 transition-opacity">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
