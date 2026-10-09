'use client';

import Link from 'next/link';
import { useState } from 'react';

/* ============================================================
   INLINE ICONS
   ============================================================ */
const IconCheck = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="10" cy="10" r="8" />
    <path d="M6 10l2.5 2.5L14 7" />
  </svg>
);

const IconInfo = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="10" cy="10" r="8" />
    <line x1="10" y1="9" x2="10" y2="14" />
    <circle cx="10" cy="6.5" r="0.7" fill="currentColor" />
  </svg>
);

const IconClock = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="10" cy="10" r="8" />
    <path d="M10 5v5l3 2" />
  </svg>
);

const IconUsers = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="7" cy="7" r="3" />
    <path d="M2 17c0-2.5 2-4.5 5-4.5s5 2 5 4.5" />
    <path d="M14 8a3 3 0 100-6" />
    <path d="M15 17c0-2-.5-3.5-1.5-4.5" />
  </svg>
);

const IconRupee = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 4h6M7 8h6M12 4c0 3-2 4-5 4l4 8" />
  </svg>
);

const IconArrowRight = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const IconChevronDown = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 8l5 5 5-5" />
  </svg>
);

const IconChevronRight = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const IconGlobe = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="10" cy="10" r="8" />
    <path d="M2 10h16M10 2c2.5 2.7 2.5 13.3 0 16M10 2c-2.5 2.7-2.5 13.3 0 16" />
  </svg>
);

const IconCamera = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="6" width="16" height="11" rx="1.5" />
    <circle cx="10" cy="11.5" r="3" />
    <path d="M7 6l1-2h4l1 2" />
  </svg>
);

const IconPassport = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="2" width="12" height="16" rx="1" />
    <circle cx="10" cy="9" r="2.5" />
    <path d="M7 15h6" />
  </svg>
);

const IconBank = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 8l8-5 8 5" />
    <path d="M4 8v8M8 8v8M12 8v8M16 8v8M2 16h16" />
  </svg>
);

/* ============================================================
   TYPES
   ============================================================ */
type Tab = 'overview' | 'eligibility' | 'documents' | 'process' | 'fees' | 'faqs';

/* ============================================================
   PAGE
   ============================================================ */
export default function MarriageRegistrationPage() {
  const [tab, setTab] = useState<Tab>('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'documents', label: 'Documents' },
    { id: 'process', label: 'Process' },
    { id: 'fees', label: 'Fees' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <main className="bg-[#F3F5F8] min-h-screen">
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8 pt-6 pb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[13px] text-[#475472] mb-4">
            <Link href="/" className="hover:text-[#0B3D74]">Home</Link>
            <span className="text-[#8793A8]">›</span>
            <Link href="/services" className="hover:text-[#0B3D74]">Services</Link>
            <span className="text-[#8793A8]">›</span>
            <span className="text-[#14213D]">Marriage registration</span>
          </nav>

          {/* Available pill */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E2F2E8] rounded mb-4">
            <IconCheck className="w-3.5 h-3.5 text-[#1C6E3F]" />
            <span className="text-[12.5px] font-semibold text-[#1C6E3F]">Available now</span>
          </span>

          {/* Title */}
          <h1 className="font-serif font-semibold text-[44px] leading-[1.1] text-[#14213D] mb-3">
            Marriage registration
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] leading-[26px] text-[#475472] max-w-[820px] mb-6">
            Get your marriage registered under the Hindu Marriage Act, 1955 or the Special Marriage Act, 1954.
            We prepare the forms and affidavits, check your documents and book your appointment with the
            marriage registrar.
          </p>

          {/* Stat strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 border-t border-[#D3DAE4]">
            <div className="flex items-center gap-2.5">
              <IconClock className="w-5 h-5 text-[#0B3D74]" />
              <div>
                <div className="text-[12px] text-[#475472]">Typical time</div>
                <div className="text-[14px] font-semibold text-[#14213D]">
                  1–4 weeks · 30+ days under SMA
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <IconUsers className="w-5 h-5 text-[#0B3D74]" />
              <div>
                <div className="text-[12px] text-[#475472]">In-person visit</div>
                <div className="text-[14px] font-semibold text-[#14213D]">
                  Both partners + witnesses
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <IconRupee className="w-5 h-5 text-[#0B3D74]" />
              <div>
                <div className="text-[12px] text-[#475472]">Service fee</div>
                <div className="text-[14px] font-semibold text-[#14213D]">
                  ₹ 1,499 + GST + govt fee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STICKY TABS
          ============================================================ */}
      <div className="sticky top-[148px] z-40 bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8">
          <nav className="flex overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-5 py-3.5 text-[14px] font-medium whitespace-nowrap border-b-2 transition ${
                  tab === t.id
                    ? 'text-[#0B3D74] border-[#0B3D74]'
                    : 'text-[#475472] border-transparent hover:text-[#0B3D74]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ============================================================
          BODY: MAIN + SIDEBAR
          ============================================================ */}
      <div className="mx-auto max-w-[1200px] px-8 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
        {/* ---------- MAIN CONTENT ---------- */}
        <div className="min-w-0">
          {tab === 'overview' && <OverviewTab onNext={() => setTab('eligibility')} />}
          {tab === 'eligibility' && <EligibilityTab />}
          {tab === 'documents' && <DocumentsTab />}
          {tab === 'process' && <ProcessTab />}
          {tab === 'fees' && <FeesTab />}
          {tab === 'faqs' && (
            <FaqsTab openIndex={openFaq} setOpenIndex={setOpenFaq} />
          )}
        </div>

        {/* ---------- SIDEBAR ---------- */}
        <aside className="lg:sticky lg:top-[220px] self-start space-y-4">
          <FeeSummaryCard />
          <NeedHelpCard />
        </aside>
      </div>
    </main>
  );
}

/* ============================================================
   TAB: OVERVIEW
   ============================================================ */
function OverviewTab({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-10">
      {/* Banner */}
      <div className="flex gap-3 p-4 rounded-md bg-[#E5EDF7] border border-[#D3DAE4]">
        <IconInfo className="w-5 h-5 text-[#0B3D74] shrink-0 mt-0.5" />
        <p className="text-[14px] leading-[22px] text-[#14213D]">
          <strong>You're applying through Suvidha, a private service.</strong> We
          prepare your application and book your appointment. Your marriage is
          registered only by the competent marriage registrar of your state. You can
          also apply directly on your state's official portal.
        </p>
      </div>

      {/* Why register */}
      <section>
        <h2 className="font-serif font-semibold text-[28px] leading-tight text-[#14213D] mb-2">
          Why register your marriage
        </h2>
        <p className="text-[15px] leading-[24px] text-[#475472] mb-5">
          A marriage certificate issued by the registrar is the standard proof of
          marriage. You'll usually need it for:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { Icon: IconGlobe, label: "Spouse's passport or name change" },
            { Icon: IconCamera, label: 'Spouse and family visas' },
            { Icon: IconRupee, label: 'Bank, insurance and PF nominations' },
            { Icon: IconBank, label: 'Joint property and inheritance' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-4 py-3 bg-white rounded-md border border-[#D3DAE4]"
            >
              <item.Icon className="w-5 h-5 text-[#0B3D74] shrink-0" />
              <span className="text-[14px] text-[#14213D]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section>
        <div className="bg-white rounded-md border border-[#D3DAE4] overflow-hidden">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="bg-[#F3F5F8] border-b border-[#D3DAE4]">
                <th className="px-5 py-3 font-semibold text-[#14213D] w-[180px]"></th>
                <th className="px-5 py-3 font-semibold text-[#14213D]">
                  Hindu Marriage Act, 1955
                </th>
                <th className="px-5 py-3 font-semibold text-[#14213D]">
                  Special Marriage Act, 1954
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: 'Who',
                  hma: 'Both partners Hindu, Sikh, Jain or Buddhist',
                  sma: 'Any couple, including inter-faith and civil marriages',
                },
                {
                  label: 'Ceremony',
                  hma: 'Already held by customary rites',
                  sma: 'Before the marriage officer, or registration of an earlier marriage',
                },
                {
                  label: 'Notice period',
                  hma: 'None in most states',
                  sma: "30 days' public notice",
                },
                {
                  label: 'Witnesses',
                  hma: 'Usually 2 (varies by state)',
                  sma: '3',
                },
                {
                  label: 'Minimum age',
                  hma: '21 for the groom, 18 for the bride',
                  sma: '21 for the groom, 18 for the bride',
                },
              ].map((row, i) => (
                <tr key={row.label} className={i ? 'border-t border-[#D3DAE4]' : ''}>
                  <td className="px-5 py-4 font-semibold text-[#14213D] align-top">
                    {row.label}
                  </td>
                  <td className="px-5 py-4 text-[#475472] align-top">{row.hma}</td>
                  <td className="px-5 py-4 text-[#475472] align-top">{row.sma}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA to next tab */}
      <div className="pt-2">
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#0B3D74] text-white rounded font-medium text-[14px] hover:bg-[#092f5a] transition"
        >
          Check which law applies to you
          <IconArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   TAB: ELIGIBILITY
   ============================================================ */
function EligibilityTab() {
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif font-semibold text-[28px] leading-tight text-[#14213D] mb-2">
          Check which law applies to you
        </h2>
        <p className="text-[15px] leading-[24px] text-[#475472]">
          Four quick questions. You'll get the right Act, the number of witnesses and
          a document checklist.
        </p>
      </div>

      {/* Eligibility check card */}
      <div className="bg-white rounded-md border border-[#D3DAE4] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#D3DAE4]">
          <span className="font-semibold text-[15px] text-[#14213D]">Eligibility check</span>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-1.5 w-8 rounded-full ${i === 0 ? 'bg-[#0B3D74]' : 'bg-[#D3DAE4]'}`}
              />
            ))}
          </div>
        </div>

        <div className="p-5">
          <div className="text-[12px] font-semibold text-[#475472] mb-2">Question 1</div>
          <h3 className="font-semibold text-[20px] leading-[28px] text-[#14213D] mb-2">
            Has your wedding ceremony already taken place?
          </h3>
          <p className="text-[14px] text-[#475472] mb-5">
            A ceremony by custom or religious rites, e.g. saptapadi, anand karaj.
          </p>

          <div className="space-y-3">
            {[
              {
                id: 'yes',
                title: 'Yes, we are already married',
                subtitle: 'Registration of an existing marriage',
              },
              {
                id: 'no',
                title: 'Not yet, we want a court marriage',
                subtitle: 'Marriage before the marriage officer',
              },
            ].map((opt) => (
              <label
                key={opt.id}
                className={`flex items-start gap-3 p-4 rounded-md border cursor-pointer transition ${
                  answer === opt.id
                    ? 'border-[#0B3D74] bg-[#E5EDF7]'
                    : 'border-[#D3DAE4] bg-white hover:border-[#8793A8]'
                }`}
              >
                <input
                  type="radio"
                  name="q1"
                  checked={answer === opt.id}
                  onChange={() => setAnswer(opt.id)}
                  className="sr-only"
                />
                <span
                  className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                    answer === opt.id ? 'border-[#0B3D74]' : 'border-[#8793A8]'
                  }`}
                >
                  {answer === opt.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B3D74]" />
                  )}
                </span>
                <span>
                  <span className="block font-semibold text-[15px] text-[#14213D]">
                    {opt.title}
                  </span>
                  <span className="block text-[13.5px] text-[#475472]">
                    {opt.subtitle}
                  </span>
                </span>
              </label>
            ))}
          </div>

          <button
            disabled={!answer}
            className={`mt-5 inline-flex items-center gap-2 px-5 py-3 rounded font-medium text-[14px] transition ${
              answer
                ? 'bg-[#0B3D74] text-white hover:bg-[#092f5a]'
                : 'bg-[#D3DAE4] text-[#8793A8] cursor-not-allowed'
            }`}
          >
            Next question
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   TAB: DOCUMENTS
   ============================================================ */
function DocumentsTab() {
  const docs = [
    { name: 'Application form', examples: 'State format', who: 'Suvidha' },
    { name: 'Proof of age (both)', examples: 'Birth certificate, Class 10 certificate, passport', who: 'You' },
    { name: 'Address proof (both)', examples: 'Aadhaar, voter ID, passport, utility bill', who: 'You' },
    { name: 'Affidavits', examples: 'Date and place of marriage, marital status, nationality', who: 'Suvidha' },
    { name: 'Wedding proof (HMA)', examples: 'Invitation card, photo of the ceremony', who: 'You' },
    { name: 'Photographs', examples: 'Passport-size photos of both partners', who: 'You' },
    { name: "Witnesses' ID", examples: 'Any government photo ID', who: 'Your witnesses' },
    { name: 'If married before', examples: "Divorce decree or spouse's death certificate", who: 'You' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif font-semibold text-[28px] leading-tight text-[#14213D] mb-2">
          Documents you'll need
        </h2>
        <p className="text-[15px] leading-[24px] text-[#475472]">
          The exact list depends on your state. These are the documents most registrars ask for.
        </p>
      </div>

      <div className="bg-white rounded-md border border-[#D3DAE4] overflow-hidden">
        <table className="w-full text-left text-[14px]">
          <thead>
            <tr className="bg-[#F3F5F8] border-b border-[#D3DAE4]">
              <th className="px-5 py-3 font-semibold text-[#14213D]">Document</th>
              <th className="px-5 py-3 font-semibold text-[#14213D]">Accepted examples</th>
              <th className="px-5 py-3 font-semibold text-[#14213D] text-right">Who prepares it</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((d, i) => (
              <tr key={d.name} className={i ? 'border-t border-[#D3DAE4]' : ''}>
                <td className="px-5 py-4 font-medium text-[#14213D] align-top">{d.name}</td>
                <td className="px-5 py-4 text-[#475472] align-top">{d.examples}</td>
                <td className="px-5 py-4 align-top text-right">
                  {d.who === 'Suvidha' ? (
                    <span className="inline-block px-2 py-0.5 bg-[#E5EDF7] text-[#0B3D74] rounded text-[12.5px] font-medium">
                      Suvidha
                    </span>
                  ) : (
                    <span className="text-[13.5px] text-[#475472]">{d.who}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================
   TAB: PROCESS
   ============================================================ */
function ProcessTab() {
  const steps = [
    {
      num: '1',
      title: 'Eligibility and checklist',
      desc: "Answer a few questions. We confirm the Act, your registrar's office and the documents.",
      tag: 'ONLINE · 5 MIN',
    },
    {
      num: '2',
      title: 'Upload documents',
      desc: 'We check names, dates and photos match across every document.',
      tag: 'YOU',
    },
    {
      num: '3',
      title: 'Forms, affidavits and booking',
      desc: 'We fill the application, draft affidavits and book your registrar appointment. Under the Special Marriage Act, we file the notice and the 30-day period begins.',
      tag: 'SUVIDHA',
    },
    {
      num: '4',
      title: 'Visit the registrar together',
      desc: 'Both of you attend with your witnesses and original documents, and sign before the registrar.',
      tag: 'YOU + WITNESSES',
    },
    {
      num: '5',
      title: 'Certificate issued',
      desc: "The registrar issues the marriage certificate as per your state's process. We track it until it's in your hands.",
      tag: 'REGISTRAR',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-serif font-semibold text-[28px] leading-tight text-[#14213D]">
        How the process works
      </h2>

      <ol className="relative">
        {steps.map((s, i) => (
          <li key={s.num} className="relative pl-14 pb-8 last:pb-0">
            {/* connector line */}
            {i < steps.length - 1 && (
              <span className="absolute left-[21px] top-10 bottom-0 w-px bg-[#D3DAE4]" />
            )}
            {/* number bubble */}
            <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#0B3D74] text-white font-serif font-semibold text-[16px] flex items-center justify-center z-10">
              {s.num}
            </span>

            <h3 className="font-bold text-[16px] leading-[24px] text-[#14213D] mb-1.5">
              {s.title}
            </h3>
            <p className="text-[14.5px] leading-[24px] text-[#475472] mb-2.5">{s.desc}</p>
            <span className="inline-block px-2 py-0.5 bg-[#E5EDF7] text-[#0B3D74] rounded text-[11px] font-semibold tracking-[0.5px]">
              {s.tag}
            </span>
          </li>
        ))}
      </ol>

      {/* Yellow notice */}
      <div className="flex gap-3 p-4 rounded-md bg-[#FBF3D9] border border-[#E9D9A0]">
        <IconInfo className="w-5 h-5 text-[#9A7B18] shrink-0 mt-0.5" />
        <p className="text-[14px] leading-[22px] text-[#5C4A0B]">
          <strong>You both need to appear in person.</strong> The law requires the couple
          and witnesses to sign before the registrar. No one, including Suvidha, can do
          this part for you.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   TAB: FEES
   ============================================================ */
function FeesTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif font-semibold text-[28px] leading-tight text-[#14213D] mb-2">
          Fees
        </h2>
        <p className="text-[15px] leading-[24px] text-[#475472]">
          The government fee is set by your state and paid to the registrar. Our service fee is fixed.
        </p>
      </div>

      <div className="bg-white rounded-md border border-[#D3DAE4] overflow-hidden">
        <table className="w-full text-left text-[14px]">
          <thead>
            <tr className="bg-[#F3F5F8] border-b border-[#D3DAE4]">
              <th className="px-5 py-3 font-semibold text-[#14213D]">Item</th>
              <th className="px-5 py-3 font-semibold text-[#14213D]">Amount</th>
              <th className="px-5 py-3 font-semibold text-[#14213D]">Paid to</th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: 'Government / registration fee', amount: 'As per state', paid: 'Marriage registrar' },
              { item: 'Suvidha service fee', amount: '₹ 1,499.00', paid: 'Suvidha' },
              { item: 'GST on service fee (18%)', amount: '₹ 269.82', paid: 'Suvidha (remitted as tax)' },
              { item: 'Notary / stamp paper for affidavits', amount: 'As per actuals', paid: 'Notary / vendor' },
            ].map((r, i) => (
              <tr key={r.item} className={i ? 'border-t border-[#D3DAE4]' : ''}>
                <td className="px-5 py-4 font-medium text-[#14213D]">{r.item}</td>
                <td className="px-5 py-4 text-[#475472] font-mono">{r.amount}</td>
                <td className="px-5 py-4 text-[#475472]">{r.paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================
   TAB: FAQS
   ============================================================ */
function FaqsTab({
  openIndex,
  setOpenIndex,
}: {
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const faqs = [
    {
      q: 'We married years ago. Can we still register?',
      a: 'Yes. Under the Hindu Marriage Act you can register an existing marriage at any time. Under the Special Marriage Act, you can also register an earlier marriage, but the 30-day notice period still applies.',
    },
    {
      q: "We're from different religions. What changes?",
      a: 'You will register under the Special Marriage Act, 1954. That Act applies to any couple regardless of religion, and requires a 30-day public notice before the marriage officer.',
    },
    {
      q: 'Where do we register?',
      a: "At the office of the marriage registrar or marriage officer for the district where either of you has lived for at least 30 days before applying. We help identify the right office based on your addresses.",
    },
    {
      q: 'What if the registrar asks for something extra?',
      a: 'Registrars sometimes ask for additional documents depending on your state and situation. We flag the common extras before you apply, and help you respond quickly if something comes up during filing.',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-serif font-semibold text-[28px] leading-tight text-[#14213D]">
        Frequently asked questions
      </h2>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={f.q} className="bg-white rounded-md border border-[#D3DAE4]">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold text-[15px] text-[#14213D]">{f.q}</span>
                <IconChevronDown
                  className={`w-5 h-5 text-[#475472] shrink-0 transition-transform ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open && (
                <div className="px-5 pb-5 text-[14.5px] leading-[24px] text-[#475472]">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   SIDEBAR: FEE SUMMARY CARD
   ============================================================ */
function FeeSummaryCard() {
  return (
    <div className="bg-white rounded-md border border-[#D3DAE4] border-t-4 border-t-[#0B3D74] p-6">
      <h3 className="font-bold text-[20px] leading-[28px] text-[#14213D] mb-1">
        Fee summary
      </h3>
      <p className="text-[13px] text-[#475472] mb-5">Marriage registration</p>

      <div className="space-y-3 text-[14.5px]">
        <div className="flex justify-between items-center">
          <span className="text-[#475472]">Government fee</span>
          <span className="font-mono text-[#14213D]">As per state</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#475472]">Service fee</span>
          <span className="font-mono text-[#14213D]">₹ 1,499.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#475472]">GST (18%)</span>
          <span className="font-mono text-[#14213D]">₹ 269.82</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t-2 border-[#14213D] flex justify-between items-center">
        <span className="font-bold text-[16px] text-[#14213D]">Total</span>
        <span className="font-mono font-bold text-[16px] text-[#14213D]">₹ 1,768.82</span>
      </div>

      <button className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0B3D74] text-white rounded font-medium text-[14px] hover:bg-[#092f5a] transition">
        Start application
        <IconArrowRight className="w-4 h-4" />
      </button>

      <div className="mt-4 p-4 bg-[#F3F5F8] border border-[#D3DAE4] rounded text-[13px] leading-[20px] text-[#475472]">
        Prefer to do it yourself? Apply on your state's official portal and pay only
        the government fee.
      </div>
    </div>
  );
}

/* ============================================================
   SIDEBAR: NEED HELP CARD
   ============================================================ */
function NeedHelpCard() {
  return (
    <div className="bg-white rounded-md border border-[#D3DAE4] p-6">
      <h3 className="font-bold text-[17px] leading-[24px] text-[#14213D] mb-1.5">
        Need help deciding?
      </h3>
      <p className="text-[13.5px] leading-[20px] text-[#475472] mb-3">
        Talk to our team in English or Hindi.
      </p>
      <div className="space-y-1.5 mb-3">
        <a
          href="tel:+91956001459"
          className="block font-mono font-medium text-[17px] text-[#14213D] hover:text-[#0B3D74] transition"
        >
          +91 95600 1459
        </a>
        <a
          href="mailto:info@suvidha.services"
          className="block text-[14px] text-[#0B3D74] hover:underline"
        >
          info@suvidha.services
        </a>
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center gap-1 text-[14px] font-medium text-[#0B3D74] hover:underline"
      >
        Other ways to reach us
        <IconChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}