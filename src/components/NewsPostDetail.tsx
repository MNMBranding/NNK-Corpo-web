import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import BorderButton from './BorderButton';
import { NewsPost } from '../data/news';

export default function NewsPostDetail({ post }: { post: NewsPost }) {
  return (
    <>
      <div className="min-h-screen bg-surface text-ink relative z-10">
        <Navbar />

        <div className="relative w-full h-[50dvh] md:h-[80dvh]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <section className="py-[80px] md:py-[120px] px-5 md:px-[3%]">
          <div className="max-w-[1760px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 mb-12 md:mb-16">
              <div className="md:col-start-1 md:col-end-3 pt-2">
                <span className="uppercase text-sm tracking-wide opacity-80">{post.date}</span>
              </div>
              <div className="md:col-start-5 md:col-end-12">
                <h1 className="text-[9vw] md:text-[length:min(3.6vw,60px)] leading-[1.05] font-medium tracking-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-start-5 md:col-end-12">
                <div className="flex flex-col gap-6">
                  {post.content.map((block, idx) =>
                    block.type === 'h2' ? (
                      <h2 key={idx} className="text-2xl md:text-[length:clamp(24px,2vw,35px)] font-medium tracking-tight mt-6">
                        {block.text}
                      </h2>
                    ) : (
                      <p key={idx} className="text-body text-base md:text-lg leading-relaxed">
                        {block.text}
                      </p>
                    )
                  )}
                </div>

                <div className="mt-12">
                  <BorderButton href="/blogs" text="Back to blogs" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
