/* ============================================================
   INLINE ICONS
   ============================================================ */
const IconSearch = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.46">
    <circle cx="9.17" cy="9.17" r="5.42" />
    <line x1="13.33" y1="13.33" x2="17" y2="17" />
  </svg>
);

const IconCheck = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="10" cy="10" r="8" />
    <path d="M6 10l2.5 2.5L14 7" />
  </svg>
);

const IconChevronRight = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const IconArrowRight = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const IconFile = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M5 2.5h7l3 3v12H5z" />
    <path d="M12 2.5v3h3" />
  </svg>
);

const IconClipboard = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <rect x="4" y="3" width="12" height="15" rx="1" />
    <path d="M8 3v2h4V3" />
  </svg>
);

const IconPhone = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M4 3h3l2 5-2 1.5a10 10 0 005 5L13.5 12l5 2v3a2 2 0 01-2 2A15 15 0 012 5a2 2 0 012-2z" />
  </svg>
);

const IconBell = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.17">
    <path d="M8 2a4 4 0 00-4 4v3l-1 2h10l-1-2V6a4 4 0 00-4-4z" />
    <path d="M6.5 12a1.5 1.5 0 003 0" />
  </svg>
);

const IconAward = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <circle cx="10" cy="8" r="5" />
    <path d="M6 12l-1 6 5-3 5 3-1-6" />
  </svg>
);

const IconBriefcase = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <rect x="2" y="6" width="16" height="11" rx="1" />
    <path d="M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);

const IconBaby = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <circle cx="10" cy="10" r="7" />
    <circle cx="7.5" cy="9" r="0.8" fill="currentColor" />
    <circle cx="12.5" cy="9" r="0.8" fill="currentColor" />
    <path d="M7.5 12.5a3 3 0 005 0" />
  </svg>
);

const IconShield = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5z" />
    <path d="M7 10l2 2 4-4" />
  </svg>
);

const IconLandmark = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M2 8l8-5 8 5v1H2z" />
    <path d="M4 9v7M8 9v7M12 9v7M16 9v7M2 17h16" />
  </svg>
);

const IconChevronDown = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.46">
    <path d="M5 8l5 5 5-5" />
  </svg>
);

/* ============================================================
   HOME PAGE
   ============================================================ */
export default function HomePage() {
  return (
    <main className="bg-[#F3F5F8]">
      {/* ============================================================
          1. HERO
          ============================================================ */}
      <section className="relative bg-white border-b border-[#D3DAE4] overflow-hidden">
        <div className="relative mx-auto max-w-[1200px] px-8 pt-[52px] pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="max-w-[578px]">
            <div className="flex items-center gap-2.5 mb-10">
              <div className="w-7 h-[9px] border-t-2 border-b border-[#0B3D74]" />
              <span className="font-semibold text-[13px] uppercase tracking-[1.04px] leading-[21.13px] text-[#475472]">
                Citizen services, handled end to end
              </span>
            </div>

            <h1 className="font-serif font-semibold text-[52px] leading-[58.24px] text-[#14213D] mb-10">
              Government services,
              <br />
              made{' '}
              <span className="relative text-[#0B3D74] inline-block">
                simple.
                <span className="absolute left-0 top-[49px] w-[181px] h-[9px] opacity-55 border-t-2 border-b border-[#0B3D74]" />
              </span>
            </h1>

            <p className="text-[18px] leading-7 text-[#475472] mb-8">
              Certificates, registrations and official paperwork without the queues
              <br />
              and confusion. We fill the forms, check your documents, book
              <br />
              appointments and keep you updated at every step.
            </p>

            <div className="flex items-stretch w-full max-w-[578px] bg-white rounded-md border border-[#8793A8] overflow-hidden mb-6">
              <div className="flex items-center justify-center pl-3.5 text-[#475472]">
                <IconSearch className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search a service, e.g. marriage registration"
                className="flex-1 min-w-0 px-3 py-4 text-[16px] text-[#14213D] placeholder:text-[#5F6B85] focus:outline-none"
              />
              <button className="min-h-[54px] px-5 bg-[#0B3D74] text-white font-medium text-[15px] leading-5 hover:bg-[#092f5a] transition">
                Search
              </button>
            </div>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-[#D3DAE4] rounded-full mb-10">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#E2F2E8] rounded-full">
                <span className="relative w-[7px] h-[7px] bg-[#1C6E3F] rounded-full">
                  <span className="absolute -inset-1 border-2 border-[#1C6E3F] rounded-full" />
                </span>
                <span className="font-semibold text-[12px] leading-[19.5px] text-[#1C6E3F]">Live</span>
              </span>
              <span className="text-[14px] leading-[22.75px] text-[#14213D]">
                Marriage registration is now available
              </span>
              <IconChevronRight className="w-4 h-4 text-[#0B3D74]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 max-w-[578px]">
              {[
                'Government fee and our fee shown separately',
                'Documents checked before filing',
                'Help in English and Hindi',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <IconCheck className="w-[17.59px] h-[17.59px] text-[#1C6E3F] shrink-0" />
                  <span className="text-[14px] leading-[22.75px] text-[#475472]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: example card */}
          <div className="relative hidden lg:block">
            <div className="absolute -left-3.5 -top-6 z-20 inline-flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-[0px_8px_24px_rgba(20,33,61,0.12)] border border-[#D3DAE4]">
              <IconCheck className="w-4 h-4 text-[#1C6E3F]" />
              <span className="text-[13px] leading-[21.13px] text-[#14213D]">Affidavits drafted</span>
            </div>

            <div className="relative bg-white rounded-md shadow-[0px_8px_24px_rgba(20,33,61,0.12)] border border-[#0B3D74] border-t-4 p-6">
              <div className="absolute -top-2.5 right-6 px-2 py-0.5 bg-white border border-[#D3DAE4] rounded font-semibold text-[11px] uppercase tracking-[0.88px] leading-[17.88px] text-[#475472]">
                Example application
              </div>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-[52px] h-[52px] bg-[#E5EDF7] rounded flex items-center justify-center">
                  <svg className="w-10 h-[30px]" viewBox="0 0 40 30" fill="none">
                    <rect x="4" y="5" width="20" height="20" stroke="#0B3D74" strokeWidth="2.4" />
                    <rect x="16" y="5" width="20" height="20" stroke="#F2A900" strokeWidth="2.4" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[19px] leading-6 text-[#14213D]">
                    Marriage registration
                  </div>
                  <div className="text-[13px] leading-[21.13px] text-[#475472]">
                    Hindu Marriage Act, 1955 · Local marriage registrar
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 mb-5">
                {[
                  { label: 'Bride', value: 'Priya Sharma' },
                  { label: 'Groom', value: 'Rahul Verma' },
                  { label: 'Date of marriage', value: '14 Feb 2026' },
                  { label: 'Witnesses', value: '2 added' },
                ].map((row) => (
                  <div key={row.label} className="px-2.5 py-2 bg-[#F3F5F8] rounded border border-[#D3DAE4]">
                    <div className="font-semibold text-[11px] uppercase tracking-[0.66px] leading-[17.88px] text-[#475472]">
                      {row.label}
                    </div>
                    <div className="font-medium text-[15px] leading-[24.38px] text-[#14213D]">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[13px] leading-[21.13px] text-[#475472]">Documents checked</span>
                  <span className="font-bold text-[13px] leading-[21.13px] text-[#14213D]">8 / 8</span>
                </div>
                <div className="h-2 bg-[#E6EBF2] rounded-full overflow-hidden">
                  <div className="h-full w-full bg-[#0B3D74] rounded-full" />
                </div>
              </div>

              <div className="pt-4 border-t border-[#D3DAE4] flex flex-wrap items-center justify-between gap-3">
                <div className="text-[13px] leading-[21.13px] text-[#475472]">
                  Ref.{' '}
                  <span className="font-mono font-medium tracking-[0.39px] text-[#14213D]">
                    SVD-MRG-2609-10482
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#E2F2E8] rounded">
                  <IconCheck className="w-3.5 h-3.5 text-[#1C6E3F]" />
                  <span className="font-medium text-[13px] leading-5 text-[#1C6E3F]">
                    Certificate issued
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute right-0 -bottom-8 z-20 inline-flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-[0px_8px_24px_rgba(20,33,61,0.12)] border border-[#D3DAE4]">
              <svg className="w-4 h-4 text-[#0B3D74]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.17">
                <rect x="2" y="2" width="12" height="12" />
                <line x1="8" y1="4.67" x2="8" y2="9.33" />
              </svg>
              <span className="text-[13px] leading-[21.13px] text-[#14213D]">
                Registrar slot: Tue, 11:30 AM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. QUICK ACTIONS
          ============================================================ */}
      <section className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap justify-center">
            {[
              { Icon: IconFile, title: 'Apply for a service', subtitle: 'Start in under 5 minutes' },
              { Icon: IconSearch, title: 'Track application', subtitle: 'With your reference number' },
              { Icon: IconClipboard, title: 'Check documents needed', subtitle: 'Personalised checklist' },
              { Icon: IconPhone, title: 'Talk to a person', subtitle: 'WhatsApp, phone or email' },
            ].map((action, i, arr) => (
              <a
                key={action.title}
                href="#"
                className={`group flex-1 min-w-[220px] flex items-center gap-3.5 px-[18px] py-5 border-l border-[#D3DAE4] hover:bg-[#F3F5F8] transition ${
                  i === arr.length - 1 ? 'border-r' : ''
                }`}
              >
                <div className="w-11 h-11 bg-[#E5EDF7] rounded flex items-center justify-center shrink-0 text-[#475472]">
                  <action.Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[15px] leading-[19.5px] text-[#475472] group-hover:text-[#0B3D74]">
                    {action.title}
                  </div>
                  <div className="text-[13px] leading-[16.9px] text-[#475472]">{action.subtitle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. SERVICES
          ============================================================ */}
      <section className="py-20 bg-[#F3F5F8]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-10">
            <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
              Services
            </h2>
            <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
            <p className="text-[16px] leading-[26px] text-[#475472] max-w-[704px]">
              We're launching one service at a time so each one works properly. Marriage registration is available now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured */}
            <div className="relative lg:row-span-2 bg-[#0B3D74] rounded-md p-7 text-white overflow-hidden flex flex-col">
              <div className="absolute right-0 bottom-20 w-[210px] h-[210px] opacity-20 pointer-events-none">
                <div className="absolute left-[21px] top-[52.5px] w-[126px] h-[126px] border-[6.3px] border-white" />
                <div className="absolute left-[73.5px] top-[52.5px] w-[126px] h-[126px] border-[6.3px] border-white" />
              </div>

              <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 bg-[#E2F2E8] rounded-full mb-3">
                <span className="relative w-[7px] h-[7px] bg-[#1C6E3F] rounded-full">
                  <span className="absolute -inset-1 border-2 border-[#1C6E3F] rounded-full" />
                </span>
                <span className="font-semibold text-[13px] leading-[21.13px] text-[#1C6E3F]">
                  Available now
                </span>
              </span>

              <h3 className="font-serif font-semibold text-[28px] leading-[33.6px] mb-3">
                Marriage registration
              </h3>
              <p className="text-[16px] leading-[26px] opacity-90 mb-4">
                Under the Hindu Marriage Act and the
                <br />
                Special Marriage Act.
              </p>

              <div className="space-y-1.5 opacity-95 mb-8">
                {['Forms and affidavits prepared', 'Every document checked', 'Registrar appointment booked'].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-1 shrink-0" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M3.33 8l3.34 3.33L12.67 5" />
                      </svg>
                      <span className="text-[15px] leading-[24.38px]">{item}</span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-auto flex items-center gap-2 font-semibold text-[16px] leading-[26px] cursor-pointer">
                View service
                <IconArrowRight />
              </div>
            </div>

            {/* Coming soon cards */}
            {[
              { Icon: IconFile, title: 'Will Registration', desc: 'Expert-assisted will drafting & validation ensuring accuracy' },
              { Icon: IconAward, title: 'Death Certificate', desc: 'Death certificate application' },
              { Icon: IconBriefcase, title: 'Business registration', desc: 'GST, Udyam/MSME, FSSAI' },
              { Icon: IconBaby, title: 'Birth Certificate', desc: 'Birth Certificate application' },
              { Icon: IconShield, title: 'Trademark registration', desc: 'Simplifying trademark search, application filing' },
              { Icon: IconLandmark, title: 'Property & land', desc: 'Land records, mutation, property tax' },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-md border border-[#D3DAE4] p-[18px] flex flex-col gap-2.5 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 bg-[#E6EBF2] rounded flex items-center justify-center text-[#475472]">
                    <s.Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 bg-[#E6EBF2] rounded font-medium text-[13px] leading-5 text-[#475472]">
                    Coming soon
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[16px] leading-[22.4px] text-[#14213D]">{s.title}</h4>
                  <p className="text-[13px] leading-5 text-[#475472]">{s.desc}</p>
                </div>
                <button className="self-start inline-flex items-center gap-1.5 px-3 py-2 border border-[#D3DAE4] rounded hover:bg-[#F3F5F8] transition mt-1 text-[#0B3D74]">
                  <IconBell />
                  <span className="font-medium text-[13px] leading-[13px]">Notify me</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. HOW IT WORKS
          ============================================================ */}
      <section className="py-[72px] bg-white border-y border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-7">
            <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
              How Suvidha works
            </h2>
            <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
            <p className="text-[16px] leading-[26px] text-[#475472]">
              The same four steps for every service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Choose a service', desc: 'See who can apply, the documents needed, time taken and the full fee, before you start.' },
              { num: '2', title: 'Upload documents', desc: 'Phone photos are fine. We check each one and tell you straight away if something needs fixing.' },
              { num: '3', title: 'We prepare and file', desc: 'We fill the forms, draft affidavits, and file or book your appointment with the right office.' },
              { num: '4', title: 'Track until done', desc: 'SMS and WhatsApp updates at every stage, and one place to see status and receipts.' },
            ].map((step, i, arr) => (
              <div key={step.num} className="relative">
                <div className="relative h-[42px] mb-1.5">
                  <div className="absolute -left-1 -top-1 w-11 h-11 bg-[#0B3D74] rounded-full flex items-center justify-center z-10">
                    <span className="font-serif font-semibold text-[16.8px] leading-[16.8px] text-white">
                      {step.num}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute left-[54px] top-5 w-[206px] h-0.5 bg-gradient-to-r from-[#0B3D74] from-50% to-[#D3DAE4] to-50%" />
                  )}
                </div>
                <h3 className="font-bold text-[17px] leading-6 text-[#14213D] mb-2 pt-2">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-6 text-[#475472]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. TRANSPARENT BY DESIGN
          ============================================================ */}
      <section className="py-20 bg-[#F3F5F8]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            <div>
              <div className="mb-7">
                <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
                  Transparent by design
                </h2>
                <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
                <p className="text-[16px] leading-[26px] text-[#475472] max-w-[704px]">
                  Most people don't know what a government service should cost or who they're paying. We show you both, every time.
                </p>
              </div>

              <div className="space-y-[18px]">
                {[
                  { title: 'Government fee at actuals', desc: 'Paid to the department or registrar. You get their receipt.' },
                  { title: 'One fixed service fee', desc: 'Our charge for the work, plus GST, shown before you pay.' },
                  { title: 'You can always do it yourself', desc: "Each service page links to the official portal. We're here if you'd rather not." },
                  { title: 'No OTP or PIN, ever', desc: 'We never ask for your OTP or bank PIN on a call. Payments happen only on suvidha.services.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 bg-[#E5EDF7] rounded flex items-center justify-center shrink-0 text-[#475472]">
                      <IconCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-[16px] leading-[26px] text-[#14213D]">
                        {item.title}
                      </div>
                      <div className="text-[15px] leading-[24.38px] text-[#475472]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white rounded-md border border-[#0B3D74] border-t-4 p-6 self-start">
              <h3 className="font-bold text-[19px] leading-7 text-[#14213D]">What you'll pay</h3>
              <p className="text-[13px] leading-[21.13px] text-[#475472] mb-3">
                Marriage registration · example amounts
              </p>

              <div className="space-y-4 py-3.5">
                <div>
                  <div className="text-[15px] leading-[24.38px] text-[#475472]">Government fee</div>
                  <div className="text-[12px] leading-[18px] text-[#5F6B85]">
                    As per your state, paid to the
                    <br />
                    registrar
                  </div>
                  <div className="text-right font-mono text-[15px] leading-[24.38px] text-[#14213D]">
                    As per state
                  </div>
                </div>
                <div>
                  <div className="text-[15px] leading-[24.38px] text-[#475472]">Suvidha service fee</div>
                  <div className="text-[12px] leading-[18px] text-[#5F6B85]">
                    Forms, affidavits, checks,
                    <br />
                    booking
                  </div>
                  <div className="text-right font-mono text-[15px] leading-[24.38px] text-[#14213D]">
                    ₹ 1,499.00
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-[15px] leading-[24.38px] text-[#475472]">
                    GST on service fee (18%)
                  </span>
                  <span className="font-mono text-[15px] leading-[24.38px] text-[#14213D]">
                    ₹ 269.82
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#8793A8]">
                  <span className="font-semibold text-[15px] leading-[24.38px] text-[#14213D]">Total</span>
                  <span className="font-mono font-medium text-[15px] leading-[24.38px] text-[#14213D]">
                    ₹ 1,768.82{' '}
                    <span className="font-normal text-[12.5px] text-[#475472]">+ govt fee</span>
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#F3F5F8] rounded border border-[#D3DAE4] text-[13px] leading-5 text-[#14213D]">
                You can apply yourself on your state's official portal and pay only the government fee. Our fee is for doing the preparation for you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. GUIDES & UPDATES
          ============================================================ */}
      <section className="py-[72px] bg-white border-y border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-7">
            <div>
              <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
                Guides & updates
              </h2>
              <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
              <p className="text-[16px] leading-[26px] text-[#475472] max-w-[704px]">
                Plain-language explainers on documents, processes and your rights.
              </p>
            </div>
            <a href="#" className="flex items-center gap-2 font-medium text-[15px] text-[#0B3D74]">
              All guides <IconArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                tag: 'Marriage',
                title: 'Hindu Marriage Act or Special Marriage Act: which one applies to you?',
                desc: 'Two laws, two very different processes. Here is how to tell which one you register under, and what each one means in practice.',
                date: '28 Sep 2026',
                read: '6 min read',
              },
              {
                tag: 'Documents',
                title: 'Documents you need for marriage registration: a complete checklist',
                desc: 'Age proof, address proof, affidavits, photos and witnesses. What registrars usually ask for, and the mistakes that cause rejections.',
                date: '30 Sep 2026',
                read: '4 min read',
              },
              {
                tag: 'Know your rights',
                title: 'The 30-day notice under the Special Marriage Act, explained',
                desc: 'What the notice period is, where it is displayed, who can object and on what grounds, and what happens after 30 days.',
                date: '2 Oct 2026',
                read: '5 min read',
              },
            ].map((g) => (
              <article
                key={g.title}
                className="bg-white rounded-md border border-[#D3DAE4] overflow-hidden hover:shadow-md transition"
              >
                <div className="h-[183px] bg-[#E5EDF7] flex items-center justify-center">
                  <div className="flex gap-3">
                    <div className="w-[84px] h-[84px] border-[6px] border-[#0B3D74]" />
                    <div className="w-[84px] h-[84px] border-[6px] border-[#F2A900]" />
                  </div>
                </div>
                <div className="p-[18px]">
                  <div className="font-semibold text-[12px] uppercase tracking-[0.72px] leading-[19.5px] text-[#0B3D74] mb-1.5">
                    {g.tag}
                  </div>
                  <h3 className="font-serif font-semibold text-[18.4px] leading-[25.76px] text-[#14213D] mb-3">
                    {g.title}
                  </h3>
                  <p className="text-[14px] leading-[22.75px] text-[#475472] mb-4">{g.desc}</p>
                  <div className="flex items-center gap-2.5 text-[13px] leading-[21.13px] text-[#5F6B85]">
                    <span>{g.date}</span>
                    <span>·</span>
                    <span>{g.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          7. FAQ
          ============================================================ */}
      <section className="py-20 bg-[#F3F5F8]">
        <div className="mx-auto max-w-[880px] px-8">
          <div className="mb-[18px]">
            <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-3">
              Common questions
            </h2>
            <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74]" />
          </div>

          <div className="space-y-2.5">
            <div className="bg-white rounded-md border border-[#D3DAE4]">
              <div className="flex justify-between items-center px-5 py-4">
                <span className="font-semibold text-[16px] leading-[26px] text-[#14213D]">
                  Is Suvidha a government website?
                </span>
                <IconChevronDown className="w-5 h-5 text-[#475472] rotate-180" />
              </div>
              <div className="px-5 pb-[18px] text-[15px] leading-[24.75px] text-[#475472]">
                No. Suvidha is a private company that helps you apply for government services. We are not part of, or endorsed by, any government department. Only the competent authority (for example, the marriage registrar) can approve your application or issue a certificate.
              </div>
            </div>

            {[
              'Can I apply without Suvidha?',
              'Can Suvidha speed up my application?',
              'Which services are available?',
            ].map((q) => (
              <div key={q} className="bg-white rounded-md border border-[#D3DAE4]">
                <div className="flex justify-between items-center px-5 py-4 cursor-pointer">
                  <span className="font-semibold text-[16px] leading-[26px] text-[#14213D]">
                    {q}
                  </span>
                  <IconChevronDown className="w-5 h-5 text-[#475472]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          8. CTA
          ============================================================ */}
      <section className="bg-[#0B3D74] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12)_8%,transparent_8%)]" />
        <div className="relative mx-auto max-w-[1200px] px-8 py-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-serif font-semibold text-[32px] leading-10 text-white mb-1.5">
              Ready to register your marriage?
            </h2>
            <p className="text-[16px] leading-[26px] text-white opacity-90">
              Answer four quick questions and get your personalised document checklist.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button className="flex items-center gap-2 min-h-[52px] px-6 py-2.5 bg-white rounded text-[#0B3D74] font-medium text-[16px] leading-5 hover:bg-[#F3F5F8] transition">
              Check what you need
              <IconArrowRight className="w-5 h-5" />
            </button>
            <button className="min-h-[52px] px-6 py-2.5 border border-white/50 rounded text-white font-medium text-[16px] leading-5 hover:bg-white/10 transition">
              Talk to us
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. FOOTER
          ============================================================ */}
      <footer className="bg-[#061F3D] text-white">
        <div className="mx-auto max-w-[1200px] px-8 pt-11 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-7">
            <div className="lg:col-span-1">
              <div className="flex items-baseline mb-2">
                <span className="font-serif font-semibold text-[22.4px] leading-[31.36px]">
                  Suvidha
                </span>
                <span className="font-medium text-[16px] leading-[22.4px] opacity-80">
                  .services
                </span>
              </div>
              <p className="text-[14px] leading-[19.6px] text-[#C3D0E2]">
                Government services, made simple. A private service provider.
              </p>
            </div>

            {[
              {
                heading: 'Services',
                links: ['Marriage registration', 'Certificates · soon', 'Passport · soon'],
              },
              {
                heading: 'Help',
                links: ['Track application', 'Guides & blog', 'Contact us', 'Grievance officer'],
              },
              {
                heading: 'Company',
                links: ['About us', 'Fees & refunds', 'Updates'],
              },
              {
                heading: 'Legal',
                links: ['Privacy policy', 'Terms of service', 'Accessibility'],
              },
            ].map((col) => (
              <div key={col.heading}>
                <div className="font-semibold text-[12px] uppercase tracking-[0.96px] leading-[16.8px] mb-2.5">
                  {col.heading}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link, idx) => (
                    <li key={`${col.heading}-${idx}`}>
                      <a
                        href="#"
                        className="text-[14px] leading-[19.6px] text-[#C3D0E2] hover:text-white transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="p-4 rounded border border-white/20 mb-4">
            <p className="text-[14px] leading-[19.6px]">
              <span className="font-bold text-white">Disclaimer:</span>{' '}
              <span className="text-[#E2E9F3]">
                Suvidha.services is owned and operated by Suvidha Services Pvt. Ltd., a private company. This is not a government website. We are not affiliated with, endorsed by, or acting on behalf of any Central or State Government department. Applications are decided only by the competent authority. Government fees are paid at actuals; our service fee is charged separately and shown before payment.
              </span>
            </p>
          </div>

          <div className="pt-[18px] border-t border-white/10 flex flex-wrap justify-between gap-3">
            <span className="text-[13px] leading-[18.2px] text-[#C3D0E2]">
              © 2026 Suvidha Services Pvt. Ltd. · CIN U00000XX2026PTC000000
            </span>
            <span className="text-[13px] leading-[18.2px] text-[#C3D0E2]">
              Last updated: 6 October 2026
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}