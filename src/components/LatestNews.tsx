import { ArrowSmallIcon, CalendarIcon, ClockIcon } from './Icons';
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
    <section className="bg-surface-2 text-ink py-[72px] md:py-[140px] lg:py-[200px] overflow-hidden px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full relative">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-32">
          <div className="md:col-start-1 md:col-end-3 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Latest News
            </span>
          </div>
          <div className="md:col-start-5 md:col-end-12">
            <h2 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.1] font-medium tracking-tight">
              Stories That Inspire Every Project 
            </h2>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {news.map((item, idx) => (
            <Link key={idx} href={item.link} className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-6">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover" 
                />
                
                {/* Arrow Icon */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-surface flex items-center justify-center transition-transform duration-300 z-10">
                  <ArrowSmallIcon size={20} className="-rotate-45 text-ink" />
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 uppercase text-xs tracking-wide opacity-80">
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon />
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
