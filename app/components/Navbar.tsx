'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../components/AuthProvider';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ============================================================
          ROW 1: Logo + Helpline + Auth + Track application
          ============================================================ */}
      <div className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo */}
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

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Helpline — visible on md+ */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-9 h-9 bg-[#E5EDF7] rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-[#0B3D74]"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M4 3h3l2 5-2 1.5a10 10 0 005 5L13.5 12l5 2v3a2 2 0 01-2 2A15 15 0 012 5a2 2 0 012-2z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[11px] text-[#475472]">
                  Helpline · Mon–Sat, 9 AM–7 PM
                </div>
                <a
                  href="tel:+91956001459"
                  className="block font-mono font-medium text-[15px] text-[#14213D] hover:text-[#0B3D74] transition"
                >
                  +91 95600 1459
                </a>
                <a
                  href="mailto:info@suvidha.services"
                  className="block text-[11.5px] text-[#0B3D74] hover:underline"
                >
                  info@suvidha.services
                </a>
              </div>
            </div>

            {/* Compact phone button — phones only */}
            <a
              href="tel:+91956001459"
              aria-label="Call helpline"
              className="md:hidden w-10 h-10 rounded-full bg-[#E5EDF7] flex items-center justify-center text-[#0B3D74] active:bg-[#D3DAE4]"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M4 3h3l2 5-2 1.5a10 10 0 005 5L13.5 12l5 2v3a2 2 0 01-2 2A15 15 0 012 5a2 2 0 012-2z" />
              </svg>
            </a>

            {/* Auth: Sign in OR Hi, Name + Sign out */}
            {user ? (
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-[14px] text-[#14213D]">
                  Hi, <span className="font-medium">{user.name.split(' ')[0]}</span>
                </span>
                <button
                  onClick={logout}
                  className="text-[14px] text-[#0B3D74] font-medium hover:underline"
                >
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

            {/* Track application — visible on md+ only (in mobile drawer otherwise) */}
            <Link
              href="/track"
              className="hidden md:flex items-center gap-2 min-h-[40px] px-3.5 lg:px-4 py-2 bg-white rounded border border-[#8793A8] hover:bg-[#F3F5F8] transition"
            >
              <svg
                className="w-4 h-4 text-[#0B3D74]"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="9.17" cy="9.17" r="5.42" />
                <line x1="13.33" y1="13.33" x2="17" y2="17" />
              </svg>
              <span className="font-medium text-[14px] text-[#0B3D74]">
                Track application
              </span>
            </Link>

            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6 text-[#0B3D74]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
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
          ROW 2: Dark blue menu bar
          ============================================================ */}
      <div className="bg-[#0B3D74]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 flex items-stretch justify-between">
          <nav className="flex items-stretch overflow-x-auto scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
            <Link
              href="/"
              className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap"
            >
              Home
            </Link>

            {/* Services with dropdown */}
            <div
              className="relative flex items-stretch shrink-0"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center gap-1.5 relative whitespace-nowrap">
                Services
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 5l3 3 3-3" />
                </svg>
                <span className="absolute left-3.5 right-3.5 lg:left-4 lg:right-4 bottom-0 h-[3px] bg-white" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-md border border-[#D3DAE4] min-w-[240px] sm:min-w-[260px] py-2 z-50">
                  <Link
                    href="/services/marriage-registration"
                    className="block px-4 py-2.5 text-[14px] text-[#14213D] hover:bg-[#F3F5F8]"
                  >
                    Marriage registration
                  </Link>
                  <div className="px-4 py-2.5 text-[14px] text-[#8793A8] flex items-center justify-between">
                    PAN card
                    <span className="text-[10px] uppercase tracking-wide">
                      soon
                    </span>
                  </div>
                  <div className="px-4 py-2.5 text-[14px] text-[#8793A8] flex items-center justify-between">
                    Passport
                    <span className="text-[10px] uppercase tracking-wide">
                      soon
                    </span>
                  </div>
                  <div className="px-4 py-2.5 text-[14px] text-[#8793A8] flex items-center justify-between">
                    Certificates
                    <span className="text-[10px] uppercase tracking-wide">
                      soon
                    </span>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/track"
              className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap"
            >
              Track status
            </Link>
            <Link
              href="/guides"
              className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap"
            >
              Guides & blog
            </Link>
            <Link
              href="/about"
              className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3.5 lg:px-4 py-3 text-white text-[13.5px] lg:text-[14px] font-medium hover:bg-white/10 transition flex items-center whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Search — hidden on small screens to save space */}
          <button className="hidden md:flex px-4 lg:px-5 py-3 bg-white/10 text-white text-[14px] font-medium hover:bg-white/20 transition items-center gap-2 shrink-0">
            <svg
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="9.17" cy="9.17" r="5.42" />
              <line x1="13.33" y1="13.33" x2="17" y2="17" />
            </svg>
            Search
          </button>
        </div>
      </div>

      {/* ============================================================
          ROW 3: Updates ticker
          ============================================================ */}
      <div className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[40px] overflow-hidden">
            <div className="flex items-center gap-1.5 h-full px-3 sm:px-3.5 py-2 bg-[#E5EDF7] shrink-0">
              <svg
                className="w-4 h-4 text-[#0B3D74]"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.17"
              >
                <rect x="2.67" y="4" width="6.67" height="8" />
                <line x1="11.67" y1="6" x2="11.67" y2="10" />
              </svg>
              <span className="font-semibold text-[11px] sm:text-[12px] uppercase tracking-[0.52px] text-[#0B3D74]">
                Updates
              </span>
            </div>

            <div className="flex items-center gap-5 sm:gap-8 ml-3 sm:ml-5 overflow-x-auto scrollbar-hide text-[12.5px] sm:text-[13.5px] flex-1">
              <span className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-[5px] h-[5px] rounded-full bg-[#0B3D74] shrink-0" />
                New: Exotic pet registration on PARIVESH
                <span className="px-1.5 py-px bg-[#E2F2E8] rounded-[3px] font-semibold text-[10.5px] text-[#1C6E3F]">
                  NEW
                </span>
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-[5px] h-[5px] rounded-full bg-[#0B3D74] shrink-0" />
                Marriage registration is now available
                <span className="px-1.5 py-px bg-[#E2F2E8] rounded-[3px] font-semibold text-[10.5px] text-[#1C6E3F]">
                  NEW
                </span>
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-[5px] h-[5px] rounded-full bg-[#0B3D74] shrink-0" />
                New guide: Hindu Marriage Act or Special Marriage Act?
              </span>
            </div>

            <button
              className="ml-2 p-2 text-[#475472] shrink-0"
              aria-label="Pause"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="6" y1="3" x2="6" y2="13" />
                <line x1="10" y1="3" x2="10" y2="13" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          Mobile menu
          ============================================================ */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B3D74] max-h-[calc(100vh-140px)] overflow-y-auto">
          {/* Primary nav */}
          <div className="px-5 py-3 space-y-0.5">
            {['Home', 'Services', 'Track status', 'Guides & blog', 'About', 'Contact'].map(
              (item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : '#'}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-2 text-white text-[15px] rounded hover:bg-white/10 active:bg-white/15"
                >
                  {item}
                </Link>
              )
            )}

            {/* Sign in / out */}
            {user ? (
              <button
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
                className="block w-full text-left py-3 px-2 text-white text-[15px] rounded hover:bg-white/10 active:bg-white/15"
              >
                Sign out ({user.name.split(' ')[0]})
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-2 text-white text-[15px] font-medium rounded hover:bg-white/10 active:bg-white/15"
              >
                Sign in
              </Link>
            )}
          </div>

          {/* Contact block */}
          <div className="px-5 py-3 border-t border-white/20">
            <div className="text-[11px] uppercase tracking-[0.5px] text-[#8FA8C7] mb-2">
              Helpline · Mon–Sat, 9 AM–7 PM
            </div>
            <a
              href="tel:+91956001459"
              className="block font-mono font-medium text-[15px] text-white hover:underline mb-1"
            >
              +91 95600 1459
            </a>
            <a
              href="mailto:info@suvidha.services"
              className="block text-[13.5px] text-[#C3D0E2] hover:text-white"
            >
              info@suvidha.services
            </a>
          </div>

          {/* Rights line */}
          <div className="px-5 py-3 border-t border-white/20 text-[11.5px] text-[#C3D0E2]">
            All Suvidha rights reserved by Truzo Infotech Pvt. Ltd. © 2026
          </div>
        </div>
      )}
    </header>
  );
}