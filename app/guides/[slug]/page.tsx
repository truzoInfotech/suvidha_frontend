// app/guides/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GUIDES } from '../data';
import { IconArrowLeft, IconArrowRight } from '../../components/icons';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();

  const others = GUIDES.filter((g) => g.slug !== slug).slice(0, 2);

  return (
    <main className="bg-[#F3F5F8]">
      {/* Header */}
      <section className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[880px] px-8 py-12">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0B3D74] hover:underline mb-6"
          >
            <IconArrowLeft className="w-4 h-4" />
            All guides
          </Link>

          <div className="font-semibold text-[12px] uppercase tracking-[0.72px] leading-[19.5px] text-[#0B3D74] mb-2">
            {guide.tag}
          </div>
          <h1 className="font-serif font-semibold text-[40px] leading-[48px] text-[#14213D] mb-4">
            {guide.title}
          </h1>
          <div className="flex items-center gap-2.5 text-[13px] leading-[21.13px] text-[#5F6B85]">
            <span>{guide.date}</span>
            <span>·</span>
            <span>{guide.readTime}</span>
            <span>·</span>
            <span>Suvidha editorial</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-[880px] px-8 py-12">
        <article className="bg-white rounded-md border border-[#D3DAE4] p-8">
          <div className="space-y-5 text-[16.5px] leading-[28px] text-[#14213D]">
            {guide.body.map((para, i) => (
              <p key={i} className={i === 0 ? 'text-[18px] leading-[30px] font-medium text-[#14213D]' : ''}>
                {para}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#D3DAE4]">
            <div className="font-semibold text-[13px] uppercase tracking-[0.72px] leading-[19.5px] text-[#475472] mb-2">
              Disclaimer
            </div>
            <p className="text-[14px] leading-[22px] text-[#475472]">
              This guide is general information, not legal advice. Rules vary by state and change over time. For your specific situation, speak to us or consult the official portal of your state&apos;s registrar.
            </p>
          </div>
        </article>

        {/* Related */}
        <div className="mt-12">
          <h2 className="font-serif font-semibold text-[24px] leading-[32px] text-[#14213D] mb-4">
            Related guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="bg-white rounded-md border border-[#D3DAE4] p-5 hover:shadow-md transition"
              >
                <div className="font-semibold text-[12px] uppercase tracking-[0.72px] leading-[19.5px] text-[#0B3D74] mb-1.5">
                  {g.tag}
                </div>
                <div className="font-serif font-semibold text-[18px] leading-[24px] text-[#14213D] mb-2">
                  {g.title}
                </div>
                <div className="text-[13.5px] leading-[21px] text-[#475472]">
                  {g.excerpt}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#0B3D74] rounded-md px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-serif font-semibold text-[22px] leading-[28px] text-white mb-1">
              Ready to start your application?
            </h2>
            <p className="text-[15px] leading-[24px] text-white/85">
              Answer four quick questions and get your personalised checklist.
            </p>
          </div>
          <Link
            href="/services/marriage-registration"
            className="inline-flex items-center gap-2 min-h-[48px] px-5 py-2 bg-white text-[#0B3D74] rounded font-medium text-[15px] hover:bg-[#F3F5F8] transition"
          >
            Get started
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}