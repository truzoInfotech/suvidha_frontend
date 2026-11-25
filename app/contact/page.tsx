// app/contact/page.tsx
import Link from 'next/link';
import {
  IconPhone,
  IconMail,
  IconWhatsApp,
  IconClock,
  IconMapPin,
  IconShield,
} from '../components/icons';
import ContactForm from './ContactForm';

const CHANNELS = [
  {
    Icon: IconPhone,
    title: 'Call the helpline',
    value: '+91 956000 1486',
    href: 'tel:+919560001486',
    note: 'Mon–Sat, 9 AM–7 PM',
  },
  {
    Icon: IconMail,
    title: 'Email us',
    value: 'info@suvidha.services',
    href: 'mailto:info@suvidha.services',
    note: 'Reply within 1 working day',
  },
  {
    Icon: IconWhatsApp,
    title: 'WhatsApp',
    value: '+91 956000 1486',
    href: 'https://wa.me/919560001486',
    note: 'Fastest for document questions',
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#F3F5F8]">
      {/* Hero */}
      <section className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8 py-14">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-[9px] border-t-2 border-b border-[#0B3D74]" />
            <span className="font-semibold text-[13px] uppercase tracking-[1.04px] leading-[21.13px] text-[#475472]">
              Contact us
            </span>
          </div>
          <h1 className="font-serif font-semibold text-[44px] leading-[52px] text-[#14213D] mb-4">
            Talk to a real person.
          </h1>
          <p className="text-[18px] leading-7 text-[#475472] max-w-[704px]">
            Call, email or message us on WhatsApp. For most questions, the helpline is the fastest way — Mon–Sat, 9 AM–7 PM.
          </p>
        </div>
      </section>

      {/* Channels + form */}
      <section className="mx-auto max-w-[1200px] px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 items-start">
          {/* Left column: channels */}
          <div className="space-y-3">
            {CHANNELS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="block bg-white rounded-md border border-[#D3DAE4] p-5 hover:border-[#0B3D74] hover:shadow-md transition"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 bg-[#E5EDF7] rounded flex items-center justify-center shrink-0 text-[#0B3D74]">
                    <c.Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] uppercase tracking-[0.66px] font-semibold text-[#475472] mb-0.5">
                      {c.title}
                    </div>
                    <div className="font-medium text-[15.5px] leading-[22px] text-[#14213D] break-words">
                      {c.value}
                    </div>
                    <div className="text-[12.5px] leading-[18px] text-[#5F6B85] mt-0.5">
                      {c.note}
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Hours + address */}
            <div className="bg-white rounded-md border border-[#D3DAE4] p-5">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-11 h-11 bg-[#E5EDF7] rounded flex items-center justify-center shrink-0 text-[#0B3D74]">
                  <IconClock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.66px] font-semibold text-[#475472] mb-0.5">
                    Office hours
                  </div>
                  <div className="font-medium text-[15px] leading-[22px] text-[#14213D]">
                    Mon–Sat, 9 AM–7 PM
                  </div>
                  <div className="text-[12.5px] leading-[18px] text-[#5F6B85] mt-0.5">
                    Closed on Sundays and public holidays
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 bg-[#E5EDF7] rounded flex items-center justify-center shrink-0 text-[#0B3D74]">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.66px] font-semibold text-[#475472] mb-0.5">
                    Registered office
                  </div>
                  <div className="font-medium text-[15px] leading-[22px] text-[#14213D]">
                    Truzo Infotech Pvt. Ltd.
                  </div>
                  <div className="text-[12.5px] leading-[18px] text-[#5F6B85] mt-0.5">
                    Delhi NCR, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div>
            <h2 className="font-serif font-semibold text-[26px] leading-[34px] text-[#14213D] mb-1.5">
              Send us a message
            </h2>
            <p className="text-[14.5px] leading-[23px] text-[#475472] mb-5">
              Use this form for anything that is not urgent. If you have a reference number, include it — it helps us reply faster.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Grievance officer */}
      <section id="grievance" className="mx-auto max-w-[1200px] px-8 pb-12">
        <div className="bg-white rounded-md border border-[#0B3D74] border-t-4 p-6">
          <div className="flex items-start gap-3.5 mb-3">
            <div className="w-11 h-11 bg-[#E5EDF7] rounded flex items-center justify-center shrink-0 text-[#0B3D74]">
              <IconShield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-semibold text-[22px] leading-[28px] text-[#14213D]">
                Grievance officer
              </h2>
              <p className="text-[13.5px] leading-[21px] text-[#475472] mt-0.5">
                If you are not satisfied with our response, write to the grievance officer. We reply to grievances within 15 working days.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {[
              { k: 'Name', v: 'Grievance Officer, Truzo Infotech' },
              { k: 'Email', v: 'grievance@suvidha.services' },
              { k: 'Response time', v: 'Within 15 working days' },
            ].map((row) => (
              <div key={row.k} className="bg-[#F3F5F8] rounded border border-[#D3DAE4] p-3.5">
                <div className="text-[11px] uppercase tracking-[0.66px] font-semibold text-[#475472] mb-0.5">
                  {row.k}
                </div>
                <div className="font-medium text-[14px] leading-[21px] text-[#14213D] break-words">
                  {row.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small FAQ strip */}
      <section className="mx-auto max-w-[1200px] px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              title: "Can't find your reference number?",
              desc: 'Check the confirmation SMS or email we sent when you applied.',
              href: '/track',
              cta: 'Try track status',
            },
            {
              title: 'Need the document checklist?',
              desc: 'The full list of documents, affidavits and witness requirements.',
              href: '/guides/documents-needed-for-marriage-registration',
              cta: 'Read the guide',
            },
            {
              title: 'Want to know fees first?',
              desc: 'Government fee, service fee and GST explained in plain language.',
              href: '/guides/marriage-registration-fees-explained',
              cta: 'See fees explained',
            },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-md border border-[#D3DAE4] p-5 flex flex-col">
              <div className="font-semibold text-[15px] leading-[22px] text-[#14213D] mb-1">
                {c.title}
              </div>
              <div className="text-[13.5px] leading-[21px] text-[#475472] mb-3">
                {c.desc}
              </div>
              <Link
                href={c.href}
                className="mt-auto inline-flex items-center gap-1.5 font-medium text-[14px] text-[#0B3D74] hover:underline self-start"
              >
                {c.cta}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}