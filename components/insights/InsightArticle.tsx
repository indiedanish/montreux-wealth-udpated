'use client';

import Link from 'next/link';
import TrackedLink from '@/components/analytics/TrackedLink';
import FaqSection from '@/components/FaqSection';
import { useAnalytics } from '@/hooks/useAnalytics';
import ArticleSchema from '@/components/insights/ArticleSchema';
import {
  ALL_INSIGHT_POSTS,
  INSIGHT_CATEGORY_LABELS,
  type InsightPost,
} from '@/lib/insights';
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site';

type InsightArticleProps = {
  post: InsightPost;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function InsightArticle({ post }: InsightArticleProps) {
  const { trackCta } = useAnalytics();
  const relatedPosts = ALL_INSIGHT_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3);

  return (
    <main>
      <ArticleSchema post={post} />

      <section className="relative bg-navy pt-28 pb-12 overflow-hidden min-h-[420px] flex flex-col justify-end">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, #1C1C1E 0%, #0D1B2A 75%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pb-4">
          <Link
            href="/insights"
            className="font-body text-xs tracking-widest uppercase text-gold/70 hover:text-gold transition-colors"
          >
            ← Insights
          </Link>
          <p className="font-body text-xs tracking-widest uppercase text-gold mt-6">
            {INSIGHT_CATEGORY_LABELS[post.category]}
          </p>
          <h1 className="font-heading font-light text-3xl md:text-5xl text-cream leading-snug mt-4">
            {post.title}
          </h1>
          <p className="font-body text-cream/50 text-sm mt-6">
            Updated {formatDate(post.updatedAt)} · {post.readTimeMinutes} min read · {SITE_NAME}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20 z-10" />
      </section>

      <article className="bg-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border-l-4 border-gold p-6 md:p-8 shadow-sm">
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">In brief</p>
            <p className="font-body text-navy text-base md:text-lg leading-relaxed">{post.directAnswer}</p>
          </div>

          <div className="mt-12 space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading font-light text-2xl md:text-3xl text-navy leading-snug">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-4">
                  {section.paragraphs.map((para) => (
                    <p key={para.slice(0, 40)} className="font-body text-text-muted text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {post.relatedLinks.length > 0 && (
            <aside className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="font-heading font-semibold text-lg text-navy">Related resources</h3>
              <ul className="mt-4 space-y-2">
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <TrackedLink
                      href={link.href}
                      tracking={{
                        type: 'cta',
                        text: link.label,
                        location: `insight_${post.slug}_related`,
                      }}
                      className="font-body text-sm text-gold hover:text-navy transition-colors"
                    >
                      {link.label} →
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="mt-16 bg-navy p-8 md:p-10 text-center">
            <h3 className="font-heading font-light text-2xl text-cream">Ready to explore your options?</h3>
            <p className="font-body text-cream/60 text-sm mt-4 max-w-lg mx-auto">
              Schedule a complimentary review or run illustrative numbers with our free calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <TrackedLink
                href="/cash-balance-calculator"
                tracking={{
                  type: 'cta',
                  text: 'Tax Savings Calculator',
                  location: `insight_${post.slug}_cta`,
                }}
                className="bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors font-body"
              >
                Tax Savings Calculator
              </TrackedLink>
              <Link
                href="/#contact"
                onClick={() => trackCta('Schedule a Meeting', `insight_${post.slug}_cta`, '/#contact')}
                className="border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-navy transition-colors font-body"
              >
                Schedule a Meeting
              </Link>
            </div>
          </div>

          <p className="font-body text-text-muted text-xs leading-relaxed mt-12 italic text-center">
            This article is for educational purposes only and does not constitute tax, legal, or investment
            advice. Individual circumstances vary. Montreux Wealth Management is a registered investment
            adviser. Contact {CONTACT_EMAIL} with questions.
          </p>
        </div>
      </article>

      {post.faq && post.faq.length > 0 && <FaqSection items={post.faq} title="Related questions" />}

      {relatedPosts.length > 0 && (
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-heading font-light text-2xl text-navy text-center">More on this topic</h2>
            <ul className="mt-10 space-y-6">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <TrackedLink
                    href={`/insights/${related.slug}`}
                    tracking={{
                      type: 'nav',
                      item: related.title,
                      location: `insight_${post.slug}_more`,
                    }}
                    className="group block"
                  >
                    <p className="font-body text-xs tracking-widest uppercase text-gold">
                      {INSIGHT_CATEGORY_LABELS[related.category]}
                    </p>
                    <p className="font-heading font-semibold text-lg text-navy group-hover:text-gold transition-colors mt-1">
                      {related.title}
                    </p>
                    <p className="font-body text-text-muted text-sm mt-2 line-clamp-2">{related.description}</p>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
