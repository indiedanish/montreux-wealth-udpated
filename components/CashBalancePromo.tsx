'use client';

import Link from 'next/link';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function CashBalancePromo() {
  const { track, events } = useAnalytics();

  return (
    <section className="bg-navy py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="font-body text-xs tracking-widest uppercase text-gold">
                For Business Owners
              </span>
            </div>
            <h2 className="font-heading font-light text-3xl md:text-4xl text-cream leading-snug">
              Potentially Reduce Taxes While
              <br />
              <span className="text-gold">Accelerating Retirement Savings</span>
            </h2>
            <p className="font-body text-cream/60 text-base leading-relaxed mt-6 max-w-lg">
              High-income business owners may deduct significantly more than a 401(k) alone through a Cash
              Balance Plan. Use our free calculator to see an illustrative estimate for your situation.
            </p>
            <Link
              href="/cash-balance-plans"
              onClick={() =>
                track(events.CASH_BALANCE_PROMO_CLICKED, {
                  link_type: 'learn_more',
                  destination: '/cash-balance-plans',
                  source: 'homepage_promo',
                })
              }
              className="inline-block mt-6 font-body text-sm text-gold/80 hover:text-gold transition-colors tracking-wide"
            >
              Learn about Cash Balance Plans →
            </Link>
          </div>

          <div className="bg-[#111d2e] border border-gold/20 p-10 md:p-12 text-center lg:text-left">
            <p className="font-body text-xs tracking-widest uppercase text-gold/70">Free · 60 Seconds</p>
            <p className="font-heading font-light text-4xl text-gold mt-3">Tax Savings Calculator</p>
            <p className="font-body text-cream/50 text-sm leading-relaxed mt-4">
              Compare your current 401(k) contributions against what may be possible with an integrated Cash
              Balance Plan.
            </p>
            <Link
              href="/cash-balance-calculator"
              onClick={() =>
                track(events.CASH_BALANCE_PROMO_CLICKED, {
                  link_type: 'calculator',
                  destination: '/cash-balance-calculator',
                  source: 'homepage_promo',
                })
              }
              className="group flex items-center justify-center gap-3 w-full mt-8 bg-gold text-navy px-10 py-5 text-base tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300 font-body shadow-lg shadow-gold/20"
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
            <p className="font-body text-cream/30 text-xs mt-4 text-center lg:text-left">
              Illustrative only · Not tax, legal, or investment advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
