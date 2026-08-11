import Image from 'next/image';
import Link from 'next/link';
import { newsPosts } from '../data/news';

const news = newsPosts.map((post) => ({
  image: post.image,
  date: post.date,
  readTime: post.readTime,
  title: post.title,
  link: `/blogs/${post.slug}`,
}));

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
              Stories That Inspire Every Project 
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
                <div className="absolute top-0 right-0 w-12 h-12 bg-main flex items-center justify-center transition-transform duration-300 z-10">
                  <Image src="/assets/675c46b4c27c49c12277a1e5_arrow-small-left.svg" alt="Arrow" width={20} height={20} className="-rotate-45" />
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
