// app/components/icons.tsx
type IconProps = { className?: string };

export const IconSearch = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.46">
    <circle cx="9.17" cy="9.17" r="5.42" />
    <line x1="13.33" y1="13.33" x2="17" y2="17" />
  </svg>
);

export const IconCheck = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="10" cy="10" r="8" />
    <path d="M6 10l2.5 2.5L14 7" />
  </svg>
);

export const IconChevronRight = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 4l4 4-4 4" />
  </svg>
);

export const IconArrowRight = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

export const IconArrowLeft = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 10H4M9 5l-5 5 5 5" />
  </svg>
);

export const IconFile = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M5 2.5h7l3 3v12H5z" />
    <path d="M12 2.5v3h3" />
  </svg>
);

export const IconClipboard = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <rect x="4" y="3" width="12" height="15" rx="1" />
    <path d="M8 3v2h4V3" />
  </svg>
);

export const IconPhone = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M4 3h3l2 5-2 1.5a10 10 0 005 5L13.5 12l5 2v3a2 2 0 01-2 2A15 15 0 012 5a2 2 0 012-2z" />
  </svg>
);

export const IconBell = ({ className = 'w-4 h-4' }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.17">
    <path d="M8 2a4 4 0 00-4 4v3l-1 2h10l-1-2V6a4 4 0 00-4-4z" />
    <path d="M6.5 12a1.5 1.5 0 003 0" />
  </svg>
);

export const IconAward = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <circle cx="10" cy="8" r="5" />
    <path d="M6 12l-1 6 5-3 5 3-1-6" />
  </svg>
);

export const IconBriefcase = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <rect x="2" y="6" width="16" height="11" rx="1" />
    <path d="M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);

export const IconBaby = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <circle cx="10" cy="10" r="7" />
    <circle cx="7.5" cy="9" r="0.8" fill="currentColor" />
    <circle cx="12.5" cy="9" r="0.8" fill="currentColor" />
    <path d="M7.5 12.5a3 3 0 005 0" />
  </svg>
);

export const IconShield = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5z" />
    <path d="M7 10l2 2 4-4" />
  </svg>
);

export const IconLandmark = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M2 8l8-5 8 5v1H2z" />
    <path d="M4 9v7M8 9v7M12 9v7M16 9v7M2 17h16" />
  </svg>
);

export const IconChevronDown = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.46">
    <path d="M5 8l5 5 5-5" />
  </svg>
);

export const IconMail = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <rect x="2.5" y="4.5" width="15" height="11" rx="1" />
    <path d="M2.5 5.5l7.5 5 7.5-5" />
  </svg>
);

export const IconClock = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <circle cx="10" cy="10" r="7.5" />
    <path d="M10 5.5V10l3 2" />
  </svg>
);

export const IconMapPin = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M10 18s6-5.5 6-10a6 6 0 10-12 0c0 4.5 6 10 6 10z" />
    <circle cx="10" cy="8" r="2.2" />
  </svg>
);

export const IconWhatsApp = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M10 2.5a7.5 7.5 0 00-6.5 11.25L2.5 17.5l3.85-1a7.5 7.5 0 103.65-14z" />
    <path d="M7 7.5c0 3 2.5 5.5 5.5 5.5l1-1-1.75-1-1 1A4.2 4.2 0 018 9.25l1-1L8 6.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconUser = ({ className = 'w-5 h-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <circle cx="10" cy="7" r="3" />
    <path d="M4 17c0-3 2.7-5 6-5s6 2 6 5" />
  </svg>
);