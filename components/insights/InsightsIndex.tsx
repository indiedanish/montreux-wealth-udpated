'use client';

import TrackedLink from '@/components/analytics/TrackedLink';
import {
  ALL_INSIGHT_POSTS,
  INSIGHT_CATEGORY_LABELS,
  getInsightsByCategory,
  type InsightCategory,
} from '@/lib/insights';

const CATEGORIES: InsightCategory[] = ['cash-balance', 'integrated-wealth', 'tax-planning'];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function InsightsIndex() {
  return (
    <main>
      <section className="relative bg-navy pt-28 pb-16 overflow-hidden min-h-[360px] flex items-end">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, #1C1C1E 0%, #0D1B2A 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-4 w-full">
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Insights</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-heading font-light text-4xl md:text-5xl text-cream leading-snug">
            Wealth & Tax Insights
          </h1>
          <p className="font-body text-cream/60 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Educational guides on Cash Balance Plans, integrated wealth management, and tax strategy for
            business owners and families in New York.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {CATEGORIES.map((category) => {
            const posts = getInsightsByCategory(category);
            if (posts.length === 0) return null;
            return (
              <div key={category} className="mb-20 last:mb-0">
                <h2 className="font-heading font-light text-2xl md:text-3xl text-navy border-b border-gold/30 pb-4">
                  {INSIGHT_CATEGORY_LABELS[category]}
                </h2>
                <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <TrackedLink
                        href={`/insights/${post.slug}`}
                        tracking={{
                          type: 'nav',
                          item: post.title,
                          location: 'insights_index',
                        }}
                        className="group block h-full bg-white border border-gray-100 hover:border-gold hover:shadow-lg transition-all duration-300"
                      >
                        <div className="p-8">
                        <p className="font-body text-xs text-text-muted">{formatDate(post.updatedAt)}</p>
                        <h3 className="font-heading font-semibold text-xl text-navy group-hover:text-gold transition-colors mt-3 leading-snug">
                          {post.title}
                        </h3>
                        <p className="font-body text-text-muted text-sm leading-relaxed mt-4 line-clamp-3">
                          {post.description}
                        </p>
                        <span className="inline-block mt-6 font-body text-xs tracking-widest uppercase text-gold">
                          Read article →
                        </span>
                        </div>
                      </TrackedLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-cream/50 text-xs leading-relaxed italic">
            {ALL_INSIGHT_POSTS.length} articles · Updated regularly · Educational only, not personalized
            advice
          </p>
          <TrackedLink
            href="/cash-balance-calculator"
            tracking={{ type: 'cta', text: 'Tax Savings Calculator', location: 'insights_index_footer' }}
            className="inline-block mt-8 bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors font-body"
          >
            Try the Tax Savings Calculator
          </TrackedLink>
        </div>
      </section>
    </main>
  );
}
