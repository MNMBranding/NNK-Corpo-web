import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-main flex items-center justify-center px-[6%]">
      <Image
        src="/assets/675c3668bf2d6dd9c7580b04_hero.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <span className="text-white text-[15vw] md:text-[length:min(7vw,123px)] leading-none font-semibold tracking-tight">
          404
        </span>
        <h1 className="text-white text-[9vw] md:text-[length:min(4vw,70px)] leading-tight font-medium tracking-tight mt-2 mb-6">
          Page Not Found
        </h1>
        <p className="uppercase text-sm md:text-[15px] tracking-wide text-[#a1a1aa] mb-10">
          The page you&apos;re looking for doesn&apos;t exist, or return to the home page
        </p>

        <Link
          href="/"
          className="group relative overflow-hidden inline-flex items-center justify-center bg-white text-main rounded-[100px] py-[16px] px-[32px] uppercase font-medium text-[13px] hover:text-white pointer-coarse:text-white max-md:text-white transition-colors duration-300 w-fit"
        >
          <span className="relative z-10">Go to Home Page</span>
          <div className="absolute inset-0 bg-[#111111] rounded-full translate-y-[103%] group-hover:translate-y-0 pointer-coarse:translate-y-0 max-md:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        </Link>
      </div>
    </section>
  );
}
