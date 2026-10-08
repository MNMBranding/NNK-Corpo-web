export default function NewsHero() {
  return (
    <div className="py-[10vh] flex items-center justify-center">
      <div className="max-w-[1760px] mx-auto w-full px-5 md:px-[3%] text-center">
        <h1 className="text-[14vw] md:text-[length:min(8vw,120px)] leading-[0.9] tracking-[-2px] font-medium">
          Latest <span className="text-muted">Blogs</span>
        </h1>
      </div>
    </div>
  );
}
