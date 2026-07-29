import { Link } from 'react-router-dom';

// ─── Data ─────────────────────────────────────────────────────────────────────

const philosophy = [
  {
    num: '01',
    title: 'Comprehensive',
    body: 'We examine every dimension of your financial life — not just your investments, but your taxes, your estate, your insurance, your cash flow, and your legacy.',
  },
  {
    num: '02',
    title: 'Collaborative',
    body: 'Your plan is built with you, not handed to you. We listen first, then advise — and we revisit the plan together regularly to ensure it remains aligned with your life.',
  },
  {
    num: '03',
    title: 'Continuous',
    body: 'A plan written once and filed away is not a plan — it is a document. Ours is a living strategy, updated as your family grows, your goals shift, and the world changes around you.',
  },
];

const services = [
  {
    name: 'Multi-Generational Wealth Preservation',
    description:
      'Strategies for transferring wealth across generations with tax efficiency, family harmony, and lasting impact. Built to serve not just your financial goals, but your family\'s.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <circle cx="11" cy="16" r="8" stroke="#C9A84C" />
        <circle cx="21" cy="16" r="8" stroke="#C9A84C" />
      </svg>
    ),
  },
  {
    name: 'Trusts & Estate Planning',
    description:
      'Trust structures, will coordination, beneficiary strategy, and estate administration planning — developed in close collaboration with your legal counsel for a seamless, unified approach.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <rect x="5" y="4" width="18" height="24" rx="1" stroke="#C9A84C" />
        <line x1="9" y1="10" x2="19" y2="10" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="9" y1="15" x2="19" y2="15" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="9" y1="20" x2="14" y2="20" stroke="#C9A84C" strokeLinecap="round" />
        <path d="M19 19 L23 23" stroke="#C9A84C" strokeLinecap="round" />
        <circle cx="21" cy="21" r="0.5" fill="#C9A84C" />
      </svg>
    ),
  },
  {
    name: 'Cash Flow & Retirement Planning',
    description:
      'Detailed projections of income, expenses, and retirement readiness — with scenario analysis across different life paths, retirement dates, and spending levels.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <line x1="4" y1="16" x2="28" y2="16" stroke="#C9A84C" strokeLinecap="round" />
        <circle cx="10" cy="16" r="2.5" stroke="#C9A84C" />
        <circle cx="19" cy="16" r="2.5" stroke="#C9A84C" />
        <circle cx="28" cy="16" r="2.5" stroke="#C9A84C" />
        <line x1="10" y1="11" x2="10" y2="13.5" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="19" y1="11" x2="19" y2="13.5" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="28" y1="11" x2="28" y2="13.5" stroke="#C9A84C" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Succession Planning & Family Governance',
    description:
      'Structured frameworks for business succession, family office governance, and the orderly transfer of leadership, ownership, and values across generations.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <circle cx="16" cy="7" r="3" stroke="#C9A84C" />
        <circle cx="7" cy="23" r="3" stroke="#C9A84C" />
        <circle cx="25" cy="23" r="3" stroke="#C9A84C" />
        <line x1="16" y1="10" x2="16" y2="16" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="16" y1="16" x2="7" y2="20" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="16" y1="16" x2="25" y2="20" stroke="#C9A84C" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Philanthropic & Impact Advisory',
    description:
      'Donor-advised funds, private foundations, charitable remainder trusts, and values-aligned giving strategies — designed to maximize your impact alongside your tax efficiency.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <path
          d="M16 27 C16 27, 4 20, 4 12 C4 8.7 6.7 6 10 6 C12.4 6 14.5 7.4 16 9.4 C17.5 7.4 19.6 6 22 6 C25.3 6 28 8.7 28 12 C28 20 16 27 16 27Z"
          stroke="#C9A84C"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Insurance Planning',
    description:
      'Life, disability, long-term care, and liability coverage analysis — ensuring your financial plan is protected against the unexpected events that no projection can anticipate.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <path
          d="M16 4 L6 8 L6 18 C6 23 10.5 27.5 16 29 C21.5 27.5 26 23 26 18 L26 8 Z"
          stroke="#C9A84C"
          strokeLinejoin="round"
        />
        <polyline points="11,16 14,19 21,13" stroke="#C9A84C" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Concierge Financial Services',
    description:
      'Bill pay, household cash management, vendor coordination, and the full range of financial administration — for clients who prefer to delegate the details and focus on their lives.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <path d="M6 27 L6 22 C6 19.8 7.8 18 10 18 L22 18 C24.2 18 26 19.8 26 22 L26 27" stroke="#C9A84C" strokeLinecap="round" />
        <rect x="8" y="5" width="16" height="13" rx="2" stroke="#C9A84C" />
        <line x1="12" y1="10" x2="20" y2="10" stroke="#C9A84C" strokeLinecap="round" />
        <line x1="12" y1="14" x2="16" y2="14" stroke="#C9A84C" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Elder Care Planning',
    description:
      'Proactive financial planning for the costs and complexities of aging — for you or for the family members in your care. Thoughtfully integrated into your broader financial strategy.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <circle cx="16" cy="10" r="5" stroke="#C9A84C" />
        <path d="M8 28 C8 22.5 11.6 19 16 19 C20.4 19 24 22.5 24 28" stroke="#C9A84C" strokeLinecap="round" />
        <circle cx="16" cy="10" r="9" stroke="#C9A84C" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    name: 'Special Needs Planning',
    description:
      'Specialized trust structures, government benefit coordination, and long-term care strategies for family members with disabilities or special circumstances — handled with expertise and sensitivity.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" strokeWidth={1.5}>
        <polygon
          points="16,4 19.5,12 28,12 21.5,18 24,26 16,21 8,26 10.5,18 4,12 12.5,12"
          stroke="#C9A84C"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery',
    description:
      'We begin by listening. A deep, unhurried conversation to understand your goals, your family, your concerns, and what financial success truly means to you.',
  },
  {
    num: '02',
    title: 'Analysis',
    description:
      'We examine your complete financial picture — assets, liabilities, income, tax position, insurance, estate documents, and existing plans — before making a single recommendation.',
  },
  {
    num: '03',
    title: 'Strategy',
    description:
      'We build a comprehensive, integrated plan that coordinates across investment, tax, and planning disciplines — tailored precisely to your circumstances and goals.',
  },
  {
    num: '04',
    title: 'Partnership',
    description:
      'We implement, monitor, and adapt the plan alongside you — through market cycles, life events, and generational transitions. This is an ongoing relationship, not a one-time deliverable.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FinancialPlanningPage() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    setTimeout(() => (window.location.href = '/#contact'), 50);
  };

  return (
    <main>
      {/* ── Section 1: Page Hero ─────────────────────────────────────── */}
      <section className="relative min-h-[40vh] bg-navy flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, #1C1C1E 0%, #0D1B2A 70%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(201,168,76,0.03) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(201,168,76,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Our Services</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-heading font-light text-5xl md:text-6xl text-cream tracking-tight">
            Financial Planning
          </h1>
          <p className="font-body font-light text-cream/60 text-lg max-w-2xl mt-6 leading-relaxed">
            Your entire financial life, mapped, coordinated, and built to evolve with you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </section>

      {/* ── Section 2: Intro Block ───────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-light text-3xl text-navy text-center leading-snug">
            A Plan That Reflects Who You Are —
            <br />
            Not Just What You Own.
          </h2>
          <p className="font-body text-text-muted text-base leading-relaxed mt-8">
            A financial plan is not a document. It is a living framework — built around your values, your
            goals, and the people who depend on you — that guides every significant financial decision you
            make. At Montreux, we treat financial planning as the connective tissue of your entire
            financial life.
          </p>
          <p className="font-body text-text-muted text-base leading-relaxed mt-6">
            Our advisors work closely with you and your family to develop a strategy that addresses every
            dimension of your financial picture — from retirement and estate planning to philanthropic
            giving, insurance, and multi-generational wealth transfer. This is a collaborative, ongoing
            process, not a one-time engagement. As your circumstances evolve, your plan evolves with them.
          </p>
          <p className="font-body text-text-muted text-base leading-relaxed mt-6">
            Because our financial planning advisors work in direct coordination with our investment and tax
            teams, every recommendation accounts for the complete picture. No strategy is built in
            isolation. No opportunity is missed in the gap between disciplines.
          </p>
        </div>
      </section>

      {/* ── Section 3: Planning Philosophy Strip ────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {philosophy.map((col, i) => (
              <div
                key={col.num}
                className={`px-12 py-8 text-center ${
                  i < philosophy.length - 1 ? 'md:border-r md:border-gold/20' : ''
                }`}
              >
                <p className="font-heading font-light text-6xl text-gold" style={{ opacity: 0.6 }}>
                  {col.num}
                </p>
                <h3 className="font-heading text-cream text-xl mt-4">{col.title}</h3>
                <p className="font-body text-cream/50 text-sm leading-relaxed mt-3">{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Services Grid ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">
              Planning Disciplines
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug mt-4">
            The Full Scope of Your
            <br />
            Financial Life, Covered.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {services.map((svc) => (
              <div
                key={svc.name}
                className="bg-cream p-8 border border-transparent hover:border-gold hover:shadow-lg active:shadow-lg transition-all duration-400"
              >
                <div>{svc.icon}</div>
                <h3 className="font-heading font-semibold text-xl text-navy mt-4">{svc.name}</h3>
                <p className="font-body text-text-muted text-sm leading-relaxed mt-3">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Process Section ───────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">How We Work</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-light text-3xl text-navy text-center mt-4">
            A Process Designed Around You.
          </h2>

          <div className="relative mt-16">
            {/* Dashed connector — desktop only */}
            <div
              className="hidden md:block absolute top-6 left-0 right-0 h-px"
              style={{
                background:
                  'repeating-linear-gradient(to right, rgba(201,168,76,0.3) 0px, rgba(201,168,76,0.3) 8px, transparent 8px, transparent 16px)',
                zIndex: 0,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="relative z-10">
                  <p
                    className="font-heading font-light text-5xl text-gold bg-cream pr-4 inline-block"
                    style={{ opacity: 0.5 }}
                  >
                    {step.num}
                  </p>
                  <div className="w-8 h-px bg-gold my-4" />
                  <h3 className="font-heading font-semibold text-xl text-navy">{step.title}</h3>
                  <p className="font-body text-text-muted text-sm leading-relaxed mt-3">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA Strip ─────────────────────────────────────── */}
      <section className="bg-navy py-24">
        <div className="flex flex-col items-center text-center px-6">
          <h2 className="font-heading font-light text-3xl md:text-4xl text-cream leading-snug">
            Your Financial Life Deserves
            <br />
            a Complete Strategy.
          </h2>
          <p className="font-body font-light text-cream/60 text-base mt-6 max-w-lg leading-relaxed">
            Our planning advisors will take the time to understand your full picture before building
            anything.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/#contact"
              onClick={scrollToContact}
              className="bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 font-body"
            >
              Begin the Conversation →
            </a>
            <Link
              to="/accounting-tax"
              className="border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-navy transition-all duration-300 font-body"
            >
              View Accounting & Tax →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
