// app/track/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  IconSearch,
  IconCheck,
  IconChevronRight,
  IconArrowRight,
  IconClipboard,
  IconPhone,
} from '../components/icons';

type StatusStep = {
  label: string;
  description: string;
  timestamp: string;
  done: boolean;
};

const MOCK_STEPS: StatusStep[] = [
  {
    label: 'Application received',
    description: 'We received your application and reference number was generated.',
    timestamp: '26 Sep 2026 · 10:42 AM',
    done: true,
  },
  {
    label: 'Documents verified',
    description: 'All 8 documents were checked. No issues found.',
    timestamp: '27 Sep 2026 · 02:15 PM',
    done: true,
  },
  {
    label: 'Forms and affidavits prepared',
    description: 'Marriage registration forms and two witness affidavits drafted.',
    timestamp: '29 Sep 2026 · 11:05 AM',
    done: true,
  },
  {
    label: 'Registrar appointment booked',
    description: 'Slot confirmed at the local marriage registrar: Tue, 11:30 AM.',
    timestamp: '01 Oct 2026 · 04:30 PM',
    done: true,
  },
  {
    label: 'Certificate issued',
    description: 'Your marriage certificate has been issued. You can download the PDF from your dashboard.',
    timestamp: '06 Oct 2026 · 12:20 PM',
    done: true,
  },
];

export default function TrackPage() {
  const [reference, setReference] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    const clean = reference.trim();
    if (clean.length < 6) {
      setError('Enter a valid reference number (e.g. SVD-MRG-2609-10482).');
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  }

  return (
    <main className="bg-[#F3F5F8] min-h-[calc(100vh-140px)]">
      {/* Hero / search */}
      <section className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[880px] px-8 py-14">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-[9px] border-t-2 border-b border-[#0B3D74]" />
            <span className="font-semibold text-[13px] uppercase tracking-[1.04px] leading-[21.13px] text-[#475472]">
              Track application
            </span>
          </div>

          <h1 className="font-serif font-semibold text-[44px] leading-[52px] text-[#14213D] mb-4">
            Where is my application?
          </h1>
          <p className="text-[18px] leading-7 text-[#475472] mb-8 max-w-[640px]">
            Enter the reference number from your confirmation SMS or email. We&apos;ll show you exactly where your application is in the process.
          </p>

          <form onSubmit={handleTrack} className="w-full max-w-[720px]">
            <div
              className={`flex items-stretch bg-white rounded-md border ${
                error ? 'border-[#B42318]' : 'border-[#8793A8]'
              } overflow-hidden`}
            >
              <div className="flex items-center justify-center pl-3.5 text-[#475472]">
                <IconSearch className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="e.g. SVD-MRG-2609-10482"
                className="flex-1 min-w-0 px-3 py-4 font-mono text-[16px] text-[#14213D] placeholder:font-sans placeholder:text-[#5F6B85] focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-[54px] px-6 bg-[#0B3D74] text-white font-medium text-[15px] leading-5 hover:bg-[#092f5a] transition"
              >
                Track
              </button>
            </div>
            {error && (
              <p className="mt-2 text-[13px] text-[#B42318]">{error}</p>
            )}
            <p className="mt-3 text-[13px] text-[#5F6B85]">
              Try a demo reference: <span className="font-mono text-[#0B3D74]">SVD-MRG-2609-10482</span>
            </p>
          </form>
        </div>
      </section>

      {/* Results */}
      {submitted && (
        <section className="mx-auto max-w-[880px] px-8 py-12">
          <div className="bg-white rounded-md border border-[#0B3D74] border-t-4 p-6 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="font-semibold text-[12px] uppercase tracking-[0.72px] leading-[19.5px] text-[#475472] mb-1">
                  Application
                </div>
                <div className="font-serif font-semibold text-[24px] leading-[30px] text-[#14213D]">
                  Marriage registration
                </div>
                <div className="mt-2 text-[13px] leading-[21.13px] text-[#475472]">
                  Ref.{' '}
                  <span className="font-mono font-medium tracking-[0.39px] text-[#14213D]">
                    {reference.trim().toUpperCase()}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E2F2E8] rounded">
                <IconCheck className="w-4 h-4 text-[#1C6E3F]" />
                <span className="font-medium text-[13px] leading-5 text-[#1C6E3F]">
                  Certificate issued
                </span>
              </span>
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[13px] leading-[21.13px] text-[#475472]">Progress</span>
                <span className="font-bold text-[13px] leading-[21.13px] text-[#14213D]">5 / 5</span>
              </div>
              <div className="h-2 bg-[#E6EBF2] rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#0B3D74] rounded-full" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md border border-[#D3DAE4] p-6">
            <h2 className="font-serif font-semibold text-[22px] leading-[28px] text-[#14213D] mb-6">
              Application timeline
            </h2>
            <ol className="space-y-5">
              {MOCK_STEPS.map((step, i) => (
                <li key={step.label} className="flex gap-4">
                  <div className="relative shrink-0">
                    <div className="w-9 h-9 bg-[#0B3D74] rounded-full flex items-center justify-center">
                      <IconCheck className="w-4 h-4 text-white" />
                    </div>
                    {i < MOCK_STEPS.length - 1 && (
                      <div className="absolute left-1/2 top-9 w-[2px] h-[calc(100%+20px)] -translate-x-1/2 bg-[#D3DAE4]" />
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="font-semibold text-[15px] leading-[22px] text-[#14213D]">
                      {step.label}
                    </div>
                    <div className="text-[14px] leading-[22px] text-[#475472] mt-0.5">
                      {step.description}
                    </div>
                    <div className="text-[12.5px] leading-[18px] text-[#5F6B85] mt-1 font-mono">
                      {step.timestamp}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 pt-5 border-t border-[#D3DAE4] flex flex-wrap gap-3">
              <Link
                href="/services/marriage-registration"
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2 bg-[#0B3D74] text-white rounded font-medium text-[14px] hover:bg-[#092f5a] transition"
              >
                View service
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2 bg-white border border-[#8793A8] rounded font-medium text-[14px] text-[#0B3D74] hover:bg-[#F3F5F8] transition"
              >
                Need help? Contact us
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quick help */}
      {!submitted && (
        <section className="mx-auto max-w-[880px] px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: IconSearch,
                title: "Can't find your reference?",
                desc: 'Check the confirmation SMS or email we sent when you applied.',
              },
              {
                icon: IconClipboard,
                title: 'Documents under review?',
                desc: 'Most applications are checked within 1 working day.',
              },
              {
                icon: IconPhone,
                title: 'Need to talk to someone?',
                desc: 'Helpline Mon–Sat, 9 AM–7 PM.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-md border border-[#D3DAE4] p-5"
              >
                <div className="w-10 h-10 bg-[#E5EDF7] rounded flex items-center justify-center text-[#475472] mb-3">
                  <card.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-[15px] leading-[22px] text-[#14213D] mb-1">
                  {card.title}
                </div>
                <div className="text-[13.5px] leading-[21px] text-[#475472]">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-medium text-[15px] text-[#0B3D74] hover:underline"
            >
              Still stuck? Contact support
              <IconChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}