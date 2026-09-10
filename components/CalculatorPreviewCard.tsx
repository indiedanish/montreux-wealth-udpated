'use client';

import Link from 'next/link';
import { useAnalytics } from '@/hooks/useAnalytics';

const highlights = [
  'Compare 401(k) only vs. 401(k) + Cash Balance Plan',
  'See your annual tax savings instantly',
  'Takes about 60 seconds · No sign-up required',
];

export default function CalculatorPreviewCard() {
  const { track, events } = useAnalytics();

  return (
    <section id="calculator" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 justify-center mb-4">
          <div className="w-12 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">Free Tax Savings Calculator</span>
          <div className="w-12 h-px bg-gold" />
        </div>
        <h2 className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug">
          How Much Could You Save?
        </h2>
        <p className="font-body text-text-muted text-base text-center max-w-2xl mx-auto mt-6 leading-relaxed">
          Model your numbers in under a minute. See an illustrative comparison of your current 401(k)
          versus what may be possible with a Cash Balance Plan.
        </p>

        <div className="mt-12 bg-navy shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gold/20">
              <p className="font-body text-xs tracking-widest uppercase text-gold">Example Result</p>
              <p className="font-heading font-light text-6xl md:text-7xl text-gold mt-4 leading-none">$835K+</p>
              <p className="font-body text-cream text-sm tracking-widest uppercase mt-3">
                Potential Lifetime Tax Savings
              </p>
              <p className="font-body text-cream/50 text-sm leading-relaxed mt-6">
                Based on a 45-year-old owner earning $500K — your numbers will be different. Use the
                calculator to see yours.
              </p>
            </div>

            <div className="p-10 md:p-14 flex flex-col justify-center bg-[#111d2e]">
              <ul className="space-y-5 mb-10">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-4 font-body text-cream/80 text-base leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                      <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                        <polyline
                          points="2,6 5,9 10,3"
                          stroke="#C9A84C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/cash-balance-calculator"
                onClick={() =>
                  track(events.CTA_CLICKED, {
                    cta_text: 'Calculate My Tax Savings',
                    cta_location: 'cash_balance_plans_preview',
                    destination: '/cash-balance-calculator',
                  })
                }
                className="group flex items-center justify-center gap-3 w-full bg-gold text-navy px-10 py-5 text-base md:text-lg tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300 font-body shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.02] active:scale-[0.99]"
              >
                Calculate My Tax Savings
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="font-body text-cream/40 text-xs text-center mt-4">
                Free · No obligation · Illustrative only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
