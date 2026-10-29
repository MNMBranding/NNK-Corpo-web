// Small line icons drawn in currentColor, so they take the text colour of whatever they sit in.
// (Replaces the Webflow-template / Icons8 SVG files the site used to load.)

type IconProps = { size?: number; className?: string };

export function ArrowLeftIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true" className={className}>
      <path d="M20 12H5M10.5 5.5 4 12l6.5 6.5" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true" className={className}>
      <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  );
}

// Bold rounded arrow used in nav links and blog cards (rotate it with className for ↗)
export function ArrowSmallIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 12h17M14 5l7 7-7 7" />
    </svg>
  );
}

export function CalendarIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M21 10H3M16 2v4M8 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="4" />
    </svg>
  );
}

export function ClockIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
