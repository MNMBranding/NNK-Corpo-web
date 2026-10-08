import Image from "next/image";
import Link from "next/link";
import { newsPosts } from "../data/news";

function Meta({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div className="flex items-center gap-6 mb-3 uppercase text-xs tracking-wide opacity-80">
      <div className="flex items-center gap-2">
        <Image src="/assets/675c1d31c59bdbc0d9795e87_data-light.svg" alt="Date" width={16} height={16} className="opacity-80 invert" />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2">
        <Image src="/assets/675c1d31c59bdbc0d9795e8b_time-light.svg" alt="Time" width={16} height={16} className="opacity-80 invert" />
        <span>{readTime} min read</span>
      </div>
    </div>
  );
}

function ArrowBadge() {
  return (
    <div className="absolute top-4 right-4 w-11 h-11 bg-surface flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-coarse:opacity-100 max-md:opacity-100 pointer-coarse:translate-y-0 max-md:translate-y-0 transition-all duration-300 z-10">
      <Image src="/assets/675c46b4c27c49c12277a1e5_arrow-small-left.svg" alt="Arrow" width={18} height={18} className="-rotate-45 invert" />
    </div>
  );
}

export default function NewsGrid() {
  const [featured, ...rest] = newsPosts;

  return (
    <section className="bg-surface-2 pt-[40px] md:pt-[150px] pb-[60px] md:pb-[200px] px-5 md:px-[3%] relative overflow-hidden rounded-[40px] md:mx-[3%] mt-[50px] md:mt-[100px] mx-[15px] mb-[60px] md:mb-[200px]">
      <div className="max-w-[1760px] mx-auto w-full text-ink relative z-10">

        <Link href={`/blogs/${featured.slug}`} className="group block mb-16 md:mb-24">
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden mb-6">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
            <ArrowBadge />
          </div>

          <Meta date={featured.date} readTime={featured.readTime} />
          <h3 className="text-2xl md:text-[length:clamp(24px,2.5vw,44px)] font-medium leading-snug line-clamp-2 group-hover:opacity-80 transition-opacity">
            {featured.title}
          </h3>
          <p className="mt-2 text-body text-sm md:text-base opacity-80 line-clamp-2 max-w-2xl">
            {featured.excerpt}
          </p>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[50px]">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block min-w-0">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <ArrowBadge />
              </div>

              <Meta date={post.date} readTime={post.readTime} />
              <h3 className="text-xl font-medium leading-snug line-clamp-2 group-hover:opacity-80 transition-opacity">
                {post.title}
              </h3>
              <p className="mt-1 text-body text-sm opacity-70 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
