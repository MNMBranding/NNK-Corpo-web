"use client";

import { useState } from 'react';
import Image from 'next/image';

// YouTube videos from the NNK channel (youtube.com/@nnk.constructions). Add more entries to show more videos.
const videos = [
  { id: 'kM-s3Biuu8o', title: 'AIRA Bespoke Living Luxury Architectural Walkthrough by NNK' },
];

export default function ProjectVideos() {
  return (
    <section className="bg-surface text-ink pb-[72px] md:pb-[140px] px-5 md:px-[3%]">
      <div className="max-w-[1760px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-[10vw] md:gap-y-[6vw]">

          <div className="md:col-start-1 md:col-end-3">
            <span className="uppercase text-sm tracking-wide opacity-80">
              Project Videos
            </span>
          </div>

          <div className="md:col-start-4 md:col-end-13 flex flex-col gap-10 md:gap-16">
            {videos.map((video) => <Video key={video.id} {...video} />)}
          </div>

        </div>
      </div>
    </section>
  );
}

// Shows the poster first and only loads the YouTube player once clicked, so the page doesn't pull in YouTube's scripts up front
function Video({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-surface-2">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 768px) 75vw, 100vw"
            // scaled slightly to crop the thin black border baked into YouTube's thumbnail
            className="object-cover scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/20" />
          {/* YouTube's own play button: dark grey, turns red on hover like the standard embed */}
          <svg aria-hidden="true" viewBox="0 0 68 48" className="absolute inset-0 m-auto w-[56px] md:w-[68px] h-auto">
            <path
              d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
              className="fill-[#212121] opacity-80 transition-[fill,opacity] duration-200 group-hover:fill-[#f00] group-hover:opacity-100"
            />
            <path d="M45 24 27 14v20z" fill="#fff" />
          </svg>
        </button>
      )}
    </div>
  );
}
