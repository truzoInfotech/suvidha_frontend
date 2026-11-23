'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from './AuthProvider';

const COMING_SOON_SERVICES = [
  { name: 'Will Registration' },
  { name: 'Death Certificate' },
  { name: 'Business registration' },
  { name: 'Birth Certificate' },
  { name: 'Trademark registration' },
  { name: 'Property & land' },
];

/* One ticker "unit" — reused twice for the seamless loop */
function TickerItems() {
  return (
    <>
      <span className="flex items-center gap-2 whitespace-nowrap">
        <span className="w-[5px] h-[5px] rounded-full bg-[#0B3D74] shrink-0" />
        Marriage registration is now available
        <span className="px-1.5 py-px bg-[#E2F2E8] rounded-[3px] font-semibold text-[10.5px] text-[#1C6E3F]">
          NEW
        </span>
      </span>

      {COMING_SOON_SERVICES.map((s) => (
        <span key={s.name} className="flex items-center gap-2 whitespace-nowrap text-[#475472]">
          <span className="w-[5px] h-[5px] rounded-full bg-[#8793A8] shrink-0" />
          {s.name}
          <span className="px-1.5 py-px bg-[#E6EBF2] rounded-[3px] font-semibold text-[10.5px] text-[#475472]">
            SOON
          </span>
        </span>
      ))}
    </>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();

  // Close services dropdown when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Marquee keyframes — scoped to this component */}
      <style>{`
        @keyframes suvidha-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .suvidha-marquee-track {
          animation: suvidha-marquee 40s linear infinite;
        }
        .suvidha-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .suvidha-marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* ============================================================
          ROW 1
          ============================================================ */}
      <div className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0">
              <div className="absolute inset-0 bg-[#0B3D74] rounded" />
              <div className="absolute left-[5px] top-[8px] w-[18px] h-[21px] sm:left-[6px] sm:top-[10px] sm:w-[22px] sm:h-[26px] bg-white rounded-sm" />
              <div className="absolute left-[8px] top-[12px] w-[11px] h-[2px] sm:left-[10px] sm:top-[15px] sm:w-[14px] bg-[#0B3D74]" />
              <div className="absolute left-[8px] top-[15px] w-[8px] h-[2px] sm:left-[10px] sm:top-[19px] sm:w-[10px] bg-[#0B3D74]" />
              <div className="absolute left-[8px] top-[18px] w-[10px] h-[2px] sm:left-[10px] sm:top-[23px] sm:w-[12px] bg-[#0B3D74]" />
              <div className="absolute right-[5px] bottom-[5px] w-[11px] h-[11px] sm:right-[6px] sm:bottom-[6px] sm:w-[13px] sm:h-[13px] rounded-full bg-[#F2A900] border-2 border-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-semibold text-[19px] sm:text-[22px] text-[#0B3D74]">
                Suvidha
                <span className="font-sans font-medium text-[12px] sm:text-[14px] text-[#475472]">
                  .services
                </span>
              </span>
              <span className="hidden sm:block text-[11px] tracking-[0.4px] text-[#475472]">
                Government services, made simple
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="w-9 h-9 bg-[#E5EDF7] rounded-full flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0B3D74]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M4 3h3l2 5-2 1.5a10 10 0 005 5L13.5 12l5 2v3a2 2 0 01-2 2A15 15 0 012 5a2 2 0 012-2z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[11px] text-[#475472]">Helpline · Mon–Sat, 9 AM–7 PM</div>
                <a href="tel:+919560001486" className="block font-mono font-medium text-[15px] text-[#14213D] hover:text-[#0B3D74] transition">
                  +91 956000 1486
                </a>
                <a href="mailto:info@suvidha.services" className="block text-[11.5px] text-[#0B3D74] hover:underline">
                  info@suvidha.services
                </a>
              </div>
            </div>

            <a
              href="tel:+919560001486"
              aria-label="Call helpline"
              className="md:hidden w-10 h-10 rounded-full bg-[#E5EDF7] flex items-center justify-center text-[#0B3D74] active:bg-[#D3DAE4]"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M4 3h3l2 5-2 1.5a10 10 0 005 5L13.5 12l5 2v3a2 2 0 01-2 2A15 15 0 012 5a2 2 0 012-2z" />
              </svg>
            </a>

            {user ? (
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-[14px] text-[#14213D]">
                  Hi, <span className="font-medium">{user.name?.split(' ')[0] ?? 'there'}</span>
                </span>
                <button onClick={logout} className="text-[14px] text-[#0B3D74] font-medium hover:underline">
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden sm:inline-flex items-center gap-2 min-h-[40px] px-3.5 lg:px-4 py-2 bg-[#0B3D74] text-white rounded text-[13.5px] lg:text-[14px] font-medium hover:bg-[#092f5a] transition"
              >
                Sign in
              </Link>
            )}

            <Link
              href="/track"
              className="hidden md:flex items-center gap-2 min-h-[40px] px-3.5 lg:px-4 py-2 bg-white rounded border border-[#8793A8] hover:bg-[#F3F5F8] transition"
            >
              <svg className="w-4 h-4 text-[#0B3D74]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="9.17" cy="9.17" r="5.42" />
                <line x1="13.33" y1="13.33" x2="17" y2="17" />
              </svg>
              <span className="font-medium text-[14px] text-[#0B3D74]">Track application</span>
            </Link>

            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6 text-[#0B3D74]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <>
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          ROW 2
          ============================================================ */}
      <div className="bg-[#0B3D74] relative z-40">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <nav className="flex items-stretch">
            <Link
              href="/"
              className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative flex items-stretch">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                className="relative px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center gap-1.5 whitespace-nowrap"
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform pointer-events-none ${servicesOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 5l3 3 3-3" />
                </svg>
                <span
                  className={`pointer-events-none absolute left-3.5 right-3.5 lg:left-4 lg:right-4 bottom-0 h-[3px] transition-opacity ${
                    servicesOpen ? 'bg-white opacity-100' : 'bg-white opacity-100'
                  }`}
                />
              </button>

              {servicesOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 bg-white shadow-xl rounded-b-md border border-[#D3DAE4] min-w-[260px] py-2 z-50 max-h-[70vh] overflow-y-auto"
                >
                  <Link
                    href="/services/marriage-registration"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-[14px] text-[#14213D] hover:bg-[#F3F5F8]"
                  >
                    Marriage registration
                  </Link>

                  <div className="my-1 border-t border-[#D3DAE4]" />

                  {COMING_SOON_SERVICES.map((s) => (
                    <div
                      key={s.name}
                      className="px-4 py-2.5 text-[14px] text-[#8793A8] flex items-center justify-between gap-3"
                    >
                      <span>{s.name}</span>
                      <span className="shrink-0 px-1.5 py-px bg-[#E6EBF2] rounded-[3px] font-semibold text-[10px] uppercase tracking-wide text-[#475472]">
                        soon
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/track" className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap">
              Track status
            </Link>
            <Link href="/guides" className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap">
              Guides & blog
            </Link>
            <Link href="/about" className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap">
              About
            </Link>
            <Link href="/contact" className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* ============================================================
          ROW 3 — auto-scrolling ticker (no scrollbar)
          ============================================================ */}
      <div className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[40px] overflow-hidden">
            <div className="flex items-center gap-1.5 h-full px-3 sm:px-3.5 py-2 bg-[#E5EDF7] shrink-0 z-10">
              <svg className="w-4 h-4 text-[#0B3D74]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.17">
                <rect x="2.67" y="4" width="6.67" height="8" />
                <line x1="11.67" y1="6" x2="11.67" y2="10" />
              </svg>
              <span className="font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.52px] text-[#0B3D74]">
                Updates
              </span>
            </div>

            {/* Masked viewport */}
            <div className="relative flex-1 overflow-hidden ml-3 sm:ml-5">
              <div className="suvidha-marquee-track flex items-center gap-5 sm:gap-8 text-[12.5px] sm:text-[13.5px] w-max will-change-transform">
                <TickerItems />
                {/* Duplicate for seamless loop */}
                <TickerItems />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          Mobile menu
          ============================================================ */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B3D74] max-h-[calc(100vh-140px)] overflow-y-auto">
          <div className="px-5 py-3 space-y-0.5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-3 px-2 text-white text-[15px] rounded hover:bg-white/10">
              Home
            </Link>
            <Link href="/services/marriage-registration" onClick={() => setMobileOpen(false)} className="block py-3 px-2 text-white text-[15px] rounded hover:bg-white/10">
              Marriage registration
            </Link>
            <Link href="/track" onClick={() => setMobileOpen(false)} className="block py-3 px-2 text-white text-[15px] rounded hover:bg-white/10">
              Track status
            </Link>
            <Link href="/guides" onClick={() => setMobileOpen(false)} className="block py-3 px-2 text-white text-[15px] rounded hover:bg-white/10">
              Guides & blog
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-3 px-2 text-white text-[15px] rounded hover:bg-white/10">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-3 px-2 text-white text-[15px] rounded hover:bg-white/10">
              Contact
            </Link>

            {user ? (
              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="block w-full text-left py-3 px-2 text-white text-[15px] rounded hover:bg-white/10"
              >
                Sign out ({user.name?.split(' ')[0] ?? ''})
              </button>
            ) : (
              <Link href="/login" onClick={() => setMobileOpen(false)} className="block py-3 px-2 text-white text-[15px] font-medium rounded hover:bg-white/10">
                Sign in
              </Link>
            )}
          </div>

          {/* Coming soon services in mobile menu */}
          <div className="px-5 py-3 border-t border-white/20">
            <div className="text-[11px] uppercase tracking-[0.5px] text-[#8FA8C7] mb-2">
              Coming soon
            </div>
            <ul className="space-y-1">
              {COMING_SOON_SERVICES.map((s) => (
                <li key={s.name} className="text-[14px] text-[#C3D0E2] flex items-center justify-between gap-3 py-1">
                  <span>{s.name}</span>
                  <span className="shrink-0 px-1.5 py-px bg-white/10 rounded-[3px] font-semibold text-[10px] uppercase tracking-wide text-[#C3D0E2]">
                    soon
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-5 py-3 border-t border-white/20">
            <div className="text-[11px] uppercase tracking-[0.5px] text-[#8FA8C7] mb-2">
              Helpline · Mon–Sat, 9 AM–7 PM
            </div>
            <a href="tel:+919560001486" className="block font-mono font-medium text-[15px] text-white hover:underline mb-1">
              +91 956000 1486
            </a>
            <a href="mailto:info@suvidha.services" className="block text-[13.5px] text-[#C3D0E2] hover:text-white">
              info@suvidha.services
            </a>
          </div>

          <div className="px-5 py-3 border-t border-white/20 text-[11.5px] text-[#C3D0E2]">
            All Suvidha rights reserved by Truzo Infotech Pvt. Ltd. © 2026
          </div>
        </div>
      )}
    </header>
  );
}