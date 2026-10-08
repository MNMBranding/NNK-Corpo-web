"use client";

import { useEffect, useRef, useState } from 'react';

const options = ['Site Visit', 'Brochure Download', 'General Enquiry'];

/**
 * Dropdown built from page elements instead of a native <select>: the browser draws a
 * native select's option list itself, outside the page, so the custom cursor can't cover it.
 * A visually hidden input carries the value and the "required" check for the form.
 */
export default function InterestSelect({ id, className }: { id: string; className: string }) {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hiddenRef = useRef<HTMLInputElement>(null);

  // Close when clicking anywhere outside
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const choose = (option: string) => {
    setValue(option);
    hiddenRef.current?.setCustomValidity('');
    setOpen(false);
    buttonRef.current?.focus();
  };

  const openList = () => {
    setHighlighted(Math.max(0, options.indexOf(value)));
    setOpen(true);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) return openList();
      const step = e.key === 'ArrowDown' ? 1 : -1;
      setHighlighted((i) => (i + step + options.length) % options.length);
    } else if ((e.key === 'Enter' || e.key === ' ') && open) {
      e.preventDefault();
      choose(options[highlighted]);
    }
  };

  return (
    <div ref={rootRef} className="relative" onKeyDown={onKeyDown}>
      <button
        ref={buttonRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openList())}
        className={`${value ? className : className.replace('text-ink', 'text-black/35')} flex items-center justify-between text-left`}
      >
        {value || 'Select'}
        <svg aria-hidden="true" className={`w-4 h-4 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Carries the value for the form and blocks submitting while it's still "Select" */}
      <input
        ref={hiddenRef}
        tabIndex={-1}
        aria-hidden="true"
        name="interest"
        value={value}
        required
        onChange={() => {}}
        onInvalid={(e) => e.currentTarget.setCustomValidity(value ? '' : 'Please choose an option.')}
        className="sr-only bottom-0 left-0"
      />

      {open && (
        <ul role="listbox" aria-labelledby={id} className="absolute left-0 right-0 top-full z-20 mt-2 bg-surface border border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.08)] py-2">
          {options.map((option, i) => (
            <li
              key={option}
              role="option"
              aria-selected={value === option}
              onMouseEnter={() => setHighlighted(i)}
              onClick={() => choose(option)}
              className={`px-4 py-3 text-base text-ink transition-colors ${i === highlighted ? 'bg-surface-2' : ''} ${value === option ? 'font-medium' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
