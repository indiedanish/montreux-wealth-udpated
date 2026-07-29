import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    to: '/investment-management',
    title: 'Investment Management',
    tagline: 'Strategic portfolios. Disciplined across every market.',
    body: 'We build and actively steward investment portfolios across equities, fixed income, and alternatives including private equity, real estate, hedge funds, and venture capital. Every portfolio is structured around your specific goals, risk parameters, and time horizon.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" strokeWidth={1.5}>
        <polyline points="2,32 12,20 20,26 30,10 38,14" stroke="#C9A84C" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="2" y1="38" x2="38" y2="38" stroke="#C9A84C" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/financial-planning',
    title: 'Financial Planning',
    tagline: 'Your entire financial life, mapped and coordinated.',
    body: 'From retirement and estate planning to philanthropic strategy, insurance, and multi-generational wealth transfer, our advisors build a comprehensive plan that reflects who you are and what matters to you — and evolves as your life does.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" strokeWidth={1.5}>
        <circle cx="20" cy="20" r="16" stroke="#C9A84C" />
        <line x1="20" y1="4" x2="20" y2="10" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="20" y1="30" x2="20" y2="36" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="4" y1="20" x2="10" y2="20" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="30" y1="20" x2="36" y2="20" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="20" y1="20" x2="28" y2="12" stroke="#C9A84C" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" stroke="#C9A84C" fill="#C9A84C" />
      </svg>
    ),
  },
  {
    to: '/accounting-tax',
    title: 'Accounting & Tax',
    tagline: 'Fewer taxes paid. No surprises. Complete compliance.',
    body: 'Tax efficiency is woven into every investment decision and planning strategy we make. Our accounting and tax professionals handle preparation, K-1 administration, proactive planning, partnership accounting, and business advisory services.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" strokeWidth={1.5}>
        <line x1="20" y1="4" x2="20" y2="20" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="4" y1="20" x2="36" y2="20" stroke="#C9A84C" strokeLinecap="round" />
        <path d="M8 20 C8 20, 6 30, 4 32 L16 32 C14 30, 12 20, 12 20" stroke="#C9A84C" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 20 C28 20, 26 30, 24 32 L36 32 C34 30, 32 20, 32 20" stroke="#C9A84C" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="32" x2="16" y2="32" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="24" y1="32" x2="36" y2="32" stroke="#C9A84C" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const targets: Element[] = [];
    if (headerRef.current) targets.push(headerRef.current);
    cardRefs.current.forEach((el) => { if (el) targets.push(el); });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header block — animates in as one unit */}
        <div ref={headerRef} className="scroll-reveal text-center">
          <div className="flex items-center gap-4 justify-center mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Our Disciplines</span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h2 className="font-heading font-light text-3xl md:text-4xl tracking-wide uppercase text-navy leading-snug">
            A Complete Architecture
            <br />
            for Your Financial Life
          </h2>

          <p className="font-body font-light text-text-muted text-base leading-relaxed max-w-2xl mx-auto mt-6">
            Most firms manage a piece of your finances. Montreux manages the whole. Our three disciplines —
            investment management, financial planning, and accounting & tax — operate as a single, coordinated
            strategy. The result is a financial life with no blind spots, no gaps, and no inefficiencies hiding
            in the space between advisors.
          </p>
        </div>

        {/* Cards — each animates in with a staggered delay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <div
              key={card.to}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="scroll-reveal bg-white border border-gray-100 p-10 hover:shadow-xl hover:border-gold transition-shadow transition-colors duration-500 group flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Gold top accent */}
              <div className="w-12 h-1 bg-gold mb-8" />

              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:-translate-y-1">{card.icon}</div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-navy">{card.title}</h3>

              {/* Tagline */}
              <p className="font-body italic text-gold text-sm mt-2">{card.tagline}</p>

              {/* Body */}
              <p className="font-body text-text-muted text-sm leading-relaxed mt-4 flex-1">{card.body}</p>

              {/* Learn More */}
              <Link
                to={card.to}
                className="font-body text-xs tracking-widest uppercase text-gold hover:text-navy transition-colors duration-200 mt-8 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
