'use client';

import { useEffect, useRef } from 'react';

// Elements that make the cursor grow on hover
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary, .cursor-grab, .cursor-zoom-in';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    // Only on devices with a real mouse / trackpad
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    // Mouse position (target) and drawn circle position
    let x = 0;
    let y = 0;
    let drawX = 0;
    let drawY = 0;
    let started = false;
    let lastTime = performance.now();
    let frame = 0;

    // State lives in data attributes (not React state) so moving never re-renders.
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!started) {
        drawX = x;
        drawY = y;
        started = true;
      }
      cursor.dataset.visible = 'true';
    };

    // Draw once per frame. Mouse events arrive unevenly between frames, so snapping
    // to them looks choppy; a very short time-based ease (~25ms) evens out the steps
    // without visible lag, and feels the same on 60Hz and 144Hz screens.
    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      const ease = 1 - Math.exp(-dt / 25);
      drawX += (x - drawX) * ease;
      drawY += (y - drawY) * ease;
      cursor.style.transform = `translate3d(${drawX}px, ${drawY}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      cursor.dataset.hover = String(!!(e.target as Element).closest?.(INTERACTIVE));
    };
    // Content moves under a still mouse while scrolling, so re-check what is under it
    const onScroll = () => {
      cursor.dataset.hover = String(!!document.elementFromPoint(x, y)?.closest(INTERACTIVE));
    };
    const onLeave = () => { cursor.dataset.visible = 'false'; };
    const onDown = () => { cursor.dataset.pressed = 'true'; };
    const onUp = () => { cursor.dataset.pressed = 'false'; };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      data-visible="false"
      className="group hidden [@media(hover:hover)_and_(pointer:fine)]:block fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference will-change-transform"
    >
      {/* Always 56px; scaled down to 18px at rest so size changes stay on the GPU */}
      <div
        className="w-14 h-14 -ml-7 -mt-7 rounded-full bg-white scale-[0.32] opacity-0 transition-[scale,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-data-[visible=true]:opacity-100
          group-data-[hover=true]:scale-100
          group-data-[pressed=true]:scale-[0.24]
          group-data-[hover=true]:group-data-[pressed=true]:scale-[0.8]"
      />
    </div>
  );
}
