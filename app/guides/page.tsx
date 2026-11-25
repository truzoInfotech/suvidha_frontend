// app/guides/page.tsx
import Link from 'next/link';
import { IconArrowRight } from '../components/icons';
import { GUIDES } from './data';

export default function GuidesPage() {
  return (
    <main className="bg-[#F3F5F8]">
      {/* Hero */}
      <section className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8 py-14">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-[9px] border-t-2 border-b border-[#0B3D74]" />
            <span className="font-semibold text-[13px] uppercase tracking-[1.04px] leading-[21.13px] text-[#475472]">
              Guides &amp; updates
            </span>
          </div>
          <h1 className="font-serif font-semibold text-[44px] leading-[52px] text-[#14213D] mb-4">
            Guides &amp; updates
          </h1>
          <p className="text-[18px] leading-7 text-[#475472] max-w-[704px]">
            Plain-language explainers on documents, processes and your rights. Written so you can read the whole thing on your phone.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1200px] px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group bg-white rounded-md border border-[#D3DAE4] overflow-hidden hover:shadow-md transition flex flex-col"
            >
              <div className="h-[183px] bg-[#E5EDF7] flex items-center justify-center">
                <div className="flex gap-3">
                  <div className="w-[84px] h-[84px] border-[6px] border-[#0B3D74]" />
                  <div className="w-[84px] h-[84px] border-[6px] border-[#F2A900]" />
                </div>
              </div>
              <div className="p-[18px] flex flex-col flex-1">
                <div className="font-semibold text-[12px] uppercase tracking-[0.72px] leading-[19.5px] text-[#0B3D74] mb-1.5">
                  {g.tag}
                </div>
                <h2 className="font-serif font-semibold text-[18.4px] leading-[25.76px] text-[#14213D] mb-3 group-hover:text-[#0B3D74] transition">
                  {g.title}
                </h2>
                <p className="text-[14px] leading-[22.75px] text-[#475472] mb-4">
                  {g.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2.5 text-[13px] leading-[21.13px] text-[#5F6B85]">
                  <span>{g.date}</span>
                  <span>·</span>
                  <span>{g.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-[#0B3D74] rounded-md px-8 py-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-serif font-semibold text-[24px] leading-[32px] text-white mb-1">
              Need something specific?
            </h2>
            <p className="text-[15px] leading-[24px] text-white/85">
              Tell us which service you&apos;re applying for and we&apos;ll send the exact document checklist.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 min-h-[48px] px-5 py-2 bg-white text-[#0B3D74] rounded font-medium text-[15px] hover:bg-[#F3F5F8] transition"
          >
            Contact us
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}