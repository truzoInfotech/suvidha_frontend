// app/about/page.tsx
import Link from 'next/link';
import {
  IconCheck,
  IconArrowRight,
  IconFile,
  IconAward,
  IconBriefcase,
  IconBaby,
  IconShield,
  IconLandmark,
  IconBell,
  IconUser,
} from '../components/icons';

const TEAM = [
  {
    name: 'Kaavya Chhabra',
    role: 'Founder',
    bio: 'Started Suvidha after seeing how confusing government paperwork was for ordinary families.',
  },
  {
    name: 'Operations',
    role: 'Filing & registrar coordination',
    bio: 'Handles document checks, affidavits and appointment booking with local registrars.',
  },
  {
    name: 'Customer support',
    role: 'Helpline & WhatsApp',
    bio: 'The team you reach when you call or message. Mon–Sat, 9 AM–7 PM.',
  },
  {
    name: 'Engineering',
    role: 'Platform & tracking',
    bio: 'Builds and maintains the application tracking, document vault and notifications.',
  },
];

const VALUES = [
  {
    title: 'Citizens first',
    desc: 'Every feature, every word, every decision is made from the perspective of someone trying to get official paperwork done. Complexity stays on our side.',
  },
  {
    title: 'Radical simplicity',
    desc: 'If a form takes more than a few minutes to understand, we have failed. We obsess over reducing friction — in our product, our communication and our process.',
  },
  {
    title: 'Trust through transparency',
    desc: 'No hidden fees, no confusing terms. We tell you exactly what we do, how much it costs, and what you will get — before you pay a single rupee.',
  },
  {
    title: 'You can always do it yourself',
    desc: 'Every service page links to the official government portal. Our service fee is optional, and we say so, every time.',
  },
  {
    title: 'Building for scale',
    desc: 'India has hundreds of millions of citizens navigating government services. We are not building for one city — we are building the infrastructure for the whole country.',
  },
  {
    title: 'No OTP or PIN, ever',
    desc: 'We never ask for your OTP or bank PIN on a call. Payments happen only on suvidha.services. If someone asks, it is not us.',
  },
];

const MILESTONES = [
  {
    when: 'Early 2025',
    title: 'The problem identified',
    desc: 'After watching families struggle with confusing portals, lost paperwork and missed deadlines, we decided to build a simpler way.',
  },
  {
    when: 'Mid 2025',
    title: 'Suvidha was built',
    desc: 'Suvidha was built under Truzo Infotech Pvt. Ltd., with one goal: make legal compliance invisible for ordinary citizens.',
  },
  {
    when: 'Early 2026',
    title: 'Launched across Delhi NCR',
    desc: 'Marriage registration went live in Delhi, Noida, Ghaziabad and Gurugram — filing directly with each registrar on behalf of applicants.',
  },
];

const COMING_SOON = [
  { Icon: IconFile, title: 'Will Registration', desc: 'Expert-assisted will drafting & validation ensuring accuracy' },
  { Icon: IconAward, title: 'Death Certificate', desc: 'Death certificate application' },
  { Icon: IconBriefcase, title: 'Business registration', desc: 'GST, Udyam/MSME, FSSAI' },
  { Icon: IconBaby, title: 'Birth Certificate', desc: 'Birth Certificate application' },
  { Icon: IconShield, title: 'Trademark registration', desc: 'Simplifying trademark search, application filing' },
  { Icon: IconLandmark, title: 'Property & land', desc: 'Land records, mutation, property tax' },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F3F5F8]">
      {/* Hero */}
      <section className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8 py-14 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-7 h-[9px] border-t-2 border-b border-[#0B3D74]" />
              <span className="font-semibold text-[13px] uppercase tracking-[1.04px] leading-[21.13px] text-[#475472]">
                About Suvidha
              </span>
            </div>
            <h1 className="font-serif font-semibold text-[44px] leading-[52px] text-[#14213D] mb-5">
              Government services,
              <br />
              made simple.
            </h1>
            <p className="text-[18px] leading-7 text-[#475472] max-w-[640px] mb-4">
              Suvidha is a private service that helps people in India apply for government services without the queues, confusing forms and missed deadlines that usually come with them.
            </p>
            <p className="text-[16px] leading-[26px] text-[#475472] max-w-[640px]">
              We are owned and operated by Truzo Infotech Pvt. Ltd. We are not a government website, and we never claim to be. What we do is prepare, check and file your application with the right office, and keep you updated at every step.
            </p>
          </div>

          <div className="bg-white rounded-md border border-[#0B3D74] border-t-4 p-6">
            <div className="font-semibold text-[12px] uppercase tracking-[0.72px] leading-[19.5px] text-[#475472] mb-2">
              At a glance
            </div>
            <ul className="space-y-3 text-[14px] leading-[22px] text-[#14213D]">
              {[
                ['Legal name', 'Truzo Infotech Pvt. Ltd.'],
                ['Founded', '2025'],
                ['Live services', 'Marriage registration'],
                ['Live in', 'Delhi, Noida, Ghaziabad, Gurugram'],
                ['Helpline', 'Mon–Sat, 9 AM–7 PM'],
                ['Contact', 'info@suvidha.services'],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between gap-4 border-b border-[#D3DAE4] pb-2 last:border-0 last:pb-0">
                  <span className="text-[#475472]">{k}</span>
                  <span className="font-medium text-right">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Story / mission */}
      <section className="py-[72px] bg-[#F3F5F8]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
                  Why we exist
                </h2>
                <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
              </div>
              <div className="space-y-4 text-[16px] leading-[26px] text-[#475472]">
                <p>
                  Getting a government certificate or registration should not feel harder than filing taxes. But for most people in India, it does — confusing portals, long queues, unclear documents and missed deadlines.
                </p>
                <p>
                  Suvidha was built to fix that. We prepare the forms, check every document, book the appointment and keep you updated until the certificate is in your hand. You do not have to visit the registrar&apos;s office unless you want to.
                </p>
                <p>
                  We are not a government website, and we never pretend to be. Every service page links to the official portal. Our service fee is optional and shown before you pay. Government fees are paid at actuals, and you get the receipt.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
                  Our journey
                </h2>
                <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
              </div>
              <ol className="space-y-5">
                {MILESTONES.map((m, i) => (
                  <li key={m.title} className="flex gap-4">
                    <div className="relative shrink-0">
                      <div className="w-9 h-9 bg-[#0B3D74] rounded-full flex items-center justify-center">
                        <span className="font-serif font-semibold text-[14px] text-white">
                          {i + 1}
                        </span>
                      </div>
                      {i < MILESTONES.length - 1 && (
                        <div className="absolute left-1/2 top-9 w-[2px] h-[calc(100%+12px)] -translate-x-1/2 bg-[#D3DAE4]" />
                      )}
                    </div>
                    <div className="pb-1">
                      <div className="text-[12px] uppercase tracking-[0.72px] font-semibold text-[#0B3D74] mb-1">
                        {m.when}
                      </div>
                      <div className="font-semibold text-[16px] leading-[24px] text-[#14213D] mb-1">
                        {m.title}
                      </div>
                      <div className="text-[14.5px] leading-[23px] text-[#475472]">
                        {m.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[72px] bg-white border-y border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-8">
            <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
              What we stand for
            </h2>
            <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
            <p className="text-[16px] leading-[26px] text-[#475472] max-w-[704px]">
              Every decision we make comes back to these fundamentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-md border border-[#D3DAE4] p-6"
              >
                <div className="w-10 h-10 bg-[#E5EDF7] rounded flex items-center justify-center text-[#475472] mb-3">
                  <IconCheck className="w-5 h-5" />
                </div>
                <div className="font-semibold text-[16px] leading-[24px] text-[#14213D] mb-1.5">
                  {v.title}
                </div>
                <div className="text-[14px] leading-[22px] text-[#475472]">
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-[72px] bg-[#F3F5F8]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-8">
            <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
              The team
            </h2>
            <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
            <p className="text-[16px] leading-[26px] text-[#475472] max-w-[704px]">
              A small team that handles everything from filing to the helpline. You can reach us Mon–Sat, 9 AM–7 PM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-md border border-[#D3DAE4] p-5 flex flex-col"
              >
                <div className="w-14 h-14 bg-[#E5EDF7] rounded-full flex items-center justify-center text-[#0B3D74] mb-3">
                  <IconUser className="w-7 h-7" />
                </div>
                <div className="font-bold text-[16px] leading-[22px] text-[#14213D]">
                  {member.name}
                </div>
                <div className="text-[12px] uppercase tracking-[0.72px] font-semibold text-[#0B3D74] mt-0.5 mb-2">
                  {member.role}
                </div>
                <div className="text-[13.5px] leading-[21px] text-[#475472]">
                  {member.bio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we're building */}
      <section className="py-[72px] bg-white border-y border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-8">
            <h2 className="font-serif font-semibold text-[30.4px] leading-[38px] text-[#14213D] mb-2.5">
              What we&apos;re building
            </h2>
            <div className="w-14 h-[6px] border-t-2 border-b border-[#0B3D74] mb-2.5" />
            <p className="text-[16px] leading-[26px] text-[#475472] max-w-[704px]">
              Marriage registration is live today. More services are in active development — built around what citizens actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Live card */}
            <div className="relative bg-[#0B3D74] rounded-md p-7 text-white overflow-hidden flex flex-col">
              <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 bg-[#E2F2E8] rounded-full mb-3">
                <span className="relative w-[7px] h-[7px] bg-[#1C6E3F] rounded-full">
                  <span className="absolute -inset-1 border-2 border-[#1C6E3F] rounded-full" />
                </span>
                <span className="font-semibold text-[13px] leading-[21.13px] text-[#1C6E3F]">
                  Available now
                </span>
              </span>
              <h3 className="font-serif font-semibold text-[24px] leading-[30px] mb-2">
                Marriage registration
              </h3>
              <p className="text-[14.5px] leading-[23px] opacity-90 mb-4">
                Under the Hindu Marriage Act and the Special Marriage Act. Filing across Delhi NCR, certificate in hand in days, not weeks.
              </p>
              <Link
                href="/services/marriage-registration"
                className="mt-auto inline-flex items-center gap-2 font-semibold text-[15px] hover:underline"
              >
                View service
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {COMING_SOON.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-md border border-[#D3DAE4] p-[18px] flex flex-col gap-2.5"
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

      {/* CTA */}
      <section className="bg-[#0B3D74] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12)_8%,transparent_8%)]" />
        <div className="relative mx-auto max-w-[1200px] px-8 py-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-serif font-semibold text-[32px] leading-10 text-white mb-1.5">
              Want to know more?
            </h2>
            <p className="text-[16px] leading-[26px] text-white opacity-90">
              Write to us at info@suvidha.services, or call the helpline Mon–Sat, 9 AM–7 PM.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 min-h-[52px] px-6 py-2.5 bg-white rounded text-[#0B3D74] font-medium text-[16px] leading-5 hover:bg-[#F3F5F8] transition"
            >
              Contact us
              <IconArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919560001486"
              className="inline-flex items-center min-h-[52px] px-6 py-2.5 border border-white/50 rounded text-white font-medium text-[16px] leading-5 hover:bg-white/10 transition"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}