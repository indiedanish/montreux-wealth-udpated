'use client';

import Link from 'next/link';
import { useAnalytics } from '@/hooks/useAnalytics';

const highlights = [
  {
    stat: '$150K–$300K+',
    label: 'Typical annual contributions for owners in peak earning years',
  },
  {
    stat: '3–5×',
    label: 'More than a 401(k) alone for many business owners',
  },
  {
    stat: 'Tax-deductible',
    label: 'Employer contributions that may reduce current-year liability',
  },
];

export default function CashBalancePlansTeaser() {
  const { track, events } = useAnalytics();

  return (
    <section className="bg-white border-y border-gray-100 py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">Cash Balance Plans</span>
        </div>

        <h2 className="font-heading font-light text-3xl md:text-4xl text-navy leading-snug">
          A Defined Benefit Plan Built for
          <br />
          <span className="text-gold">High-Income Business Owners</span>
        </h2>

        <p className="font-body text-text-muted text-base leading-relaxed mt-6">
          If you earn well above the 401(k) limits, a Cash Balance Plan may let you deduct far more each year
          while building retirement wealth on a tax-deferred basis. Montreux designs plans in coordination
          with your investments, tax strategy, and long-term goals.
        </p>

        <ul className="mt-8 space-y-4">
          {highlights.map((item) => (
            <li key={item.stat} className="flex gap-4 items-start">
              <span className="font-heading text-lg text-gold shrink-0 w-28 md:w-32">{item.stat}</span>
              <span className="font-body text-sm text-text-muted leading-relaxed pt-0.5">{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10">
          <Link
            href="/cash-balance-plans"
            onClick={() =>
              track(events.CTA_CLICKED, {
                cta_text: 'Explore Cash Balance Plans',
                cta_location: 'homepage_plans_teaser',
                destination: '/cash-balance-plans',
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300 font-body shadow-lg shadow-gold/20"
          >
            Explore Cash Balance Plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/cash-balance-calculator"
            onClick={() =>
              track(events.CTA_CLICKED, {
                cta_text: 'Run the Calculator',
                cta_location: 'homepage_plans_teaser',
                destination: '/cash-balance-calculator',
              })
            }
            className="font-body text-sm text-gold hover:text-navy transition-colors tracking-wide text-center sm:text-left"
          >
            Or run the free tax calculator →
          </Link>
        </div>
      </div>
    </section>
  );
}
