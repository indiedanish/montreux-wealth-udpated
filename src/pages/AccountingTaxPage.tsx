import { Link } from 'react-router-dom';

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    name: 'Tax Preparation & Review',
    description:
      'Individual, trust, estate, and entity tax returns prepared with precision — and reviewed against your broader financial strategy to ensure no opportunity for efficiency is overlooked.',
  },
  {
    name: 'K-1 Preparation',
    description:
      'Timely, accurate K-1 preparation for partnerships, S-corporations, and other pass-through entities — coordinated across multiple holdings and tax years without disruption.',
  },
  {
    name: 'Tax Compliance Advisory',
    description:
      'Ongoing guidance on federal, state, and local compliance obligations — including estimated tax payments, extensions, amended returns, and multi-state filing requirements.',
  },
  {
    name: 'Proactive Tax Planning',
    description:
      'Year-round tax strategy that anticipates liability before it crystallizes — through harvesting, timing, entity structuring, and coordinated decision-making across your entire financial picture.',
  },
  {
    name: 'Bill Pay & Cash Management',
    description:
      'Complete bill payment administration and household cash flow management, coordinated seamlessly with your investment portfolio and broader financial plan.',
  },
  {
    name: 'Cash Projection & Liquidity Planning',
    description:
      'Forward-looking liquidity analysis to ensure the right capital is in the right place at the right time — across accounts, entities, and time horizons.',
  },
  {
    name: 'Partnership Accounting',
    description:
      'Full accounting services for investment partnerships, family LLCs, holding companies, and other entity structures — maintained with the rigor they require.',
  },
  {
    name: 'Business Advisory Services',
    description:
      'CFO-level guidance for privately held businesses — spanning financial reporting, capital structure analysis, strategic planning, and operational financial management.',
  },
  {
    name: 'Bookkeeping & Back-Office',
    description:
      'Complete bookkeeping, financial statement preparation, reconciliation, and administrative accounting support — managed so you never have to think about it.',
    wide: true,
  },
];

const stats = [
  {
    figure: 'Year-Round',
    label: 'Tax Strategy',
    description:
      'We do not wait for tax season. Your tax position is monitored and managed continuously, in coordination with every investment and planning decision.',
  },
  {
    figure: 'Integrated',
    label: 'Across All Disciplines',
    description:
      'Every investment recommendation is filtered through its tax consequence. Every planning strategy accounts for your tax position. Nothing is designed in isolation.',
  },
  {
    figure: 'Precise',
    label: 'In Every Detail',
    description:
      'From K-1 preparation to multi-state compliance, our accounting team brings the same level of rigor to the details that your investment team brings to portfolio construction.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AccountingTaxPage() {
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
            Accounting & Tax
          </h1>
          <p className="font-body font-light text-cream/60 text-lg max-w-2xl mt-6 leading-relaxed">
            Fewer taxes paid. No surprises. Complete compliance.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </section>

      {/* ── Section 2: Intro Block ───────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-light text-3xl text-navy text-center leading-snug">
            Tax Efficiency Is Not a Year-End Exercise.
            <br />
            It Is a Continuous Discipline.
          </h2>
          <p className="font-body text-text-muted text-base leading-relaxed mt-8">
            At most firms, tax strategy happens in isolation — an accountant files your return in April,
            unaware of the investment decisions made in November. At Montreux, that disconnect does not
            exist. Our accounting and tax professionals work in direct coordination with your investment and
            planning advisors throughout the year, ensuring that every financial decision accounts for its
            tax consequence before it is made — not after.
          </p>
          <p className="font-body text-text-muted text-base leading-relaxed mt-6">
            The result is a tax position that is structurally optimized, not reactively managed. We
            identify opportunities others miss, prevent errors that others make, and bring a level of
            integration to your tax affairs that reflects the complexity of the financial life we manage
            alongside you.
          </p>
        </div>
      </section>

      {/* ── Section 3: Integration Callout Banner ───────────────────── */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: SVG + label */}
          <div className="flex flex-col items-center flex-shrink-0">
            <svg viewBox="0 0 128 128" fill="none" className="w-32 h-32">
              {/* Three interlocking circles */}
              <circle cx="48" cy="56" r="32" stroke="#C9A84C" strokeWidth="1" opacity="1" />
              <circle cx="80" cy="56" r="32" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
              <circle cx="64" cy="82" r="32" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
            </svg>
            <p className="font-body text-xs tracking-widest uppercase text-gold/60 mt-4 text-center">
              Investments · Planning · Tax
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px h-24 bg-gold/30 flex-shrink-0" />

          {/* Right: Pull quote */}
          <div>
            <blockquote className="font-heading font-light text-2xl md:text-3xl text-cream italic leading-relaxed">
              "When your tax advisor and your investment advisor share the same information in real time,
              the savings are not incidental — they are structural."
            </blockquote>
            <p className="font-body text-gold text-xs tracking-widest uppercase mt-6">
              — The Montreux Approach
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Services Grid ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">
              Tax & Accounting Services
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug mt-4">
            Everything Your Financial Life
            <br />
            Requires. Nothing Overlooked.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((svc) => (
              <div
                key={svc.name}
                className={`bg-cream p-8 hover:shadow-lg hover:-translate-y-1 active:shadow-lg active:-translate-y-1 transition-all duration-300 ${
                  svc.wide ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h3 className="font-heading font-semibold text-lg text-navy">{svc.name}</h3>
                <p className="font-body text-text-muted text-sm leading-relaxed mt-3">
                  {svc.description}
                </p>
                {svc.wide && (
                  <p className="font-body text-xs italic text-gold mt-4">
                    And whatever else your financial life requires.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Two-Column Detail Section ─────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left column */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-gold" />
                <span className="font-body text-xs tracking-widest uppercase text-gold">
                  Why It Matters
                </span>
              </div>
              <h2 className="font-heading font-light text-3xl text-navy leading-snug mt-4">
                The True Cost of
                <br />
                Disconnected Advisors.
              </h2>
              <p className="font-body text-text-muted text-sm leading-relaxed mt-8">
                Most high-net-worth individuals work with a patchwork of professionals — an investment firm
                here, a CPA there, perhaps a financial planner who checks in annually. Each professional is
                competent in isolation. But the gaps between them are where value quietly disappears.
              </p>
              <p className="font-body text-text-muted text-sm leading-relaxed mt-5">
                Investment gains realized without tax coordination. Charitable gifts structured
                inefficiently. Estate plans that contradict portfolio titling. Retirement distributions
                timed without regard to marginal tax brackets. These are not hypothetical errors — they are
                the predictable result of advisors who do not share information.
              </p>
              <p className="font-body text-text-muted text-sm leading-relaxed mt-5">
                At Montreux, your accounting and tax team sits at the same table as your investment and
                planning advisors. Decisions are made together. Opportunities are captured in real time.
                And the cost of disconnection is eliminated by design.
              </p>
            </div>

            {/* Right column: stats */}
            <div>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i < stats.length - 1 ? 'border-b border-gold/20 pb-8 mb-8' : ''}`}
                >
                  <p className="font-heading font-light text-5xl text-gold">{stat.figure}</p>
                  <p className="font-body text-navy text-sm tracking-widest uppercase mt-2">
                    {stat.label}
                  </p>
                  <p className="font-body text-text-muted text-sm leading-relaxed mt-2">
                    {stat.description}
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
            A Tax Strategy That Works
            <br />
            All Year Long.
          </h2>
          <p className="font-body font-light text-cream/60 text-base mt-6 max-w-lg leading-relaxed">
            Our accounting and tax team is ready to review your current position and identify where
            integration can make an immediate difference.
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
              to="/client-portal"
              className="border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-navy transition-all duration-300 font-body"
            >
              View Client Portal →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
