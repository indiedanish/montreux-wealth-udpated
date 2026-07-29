import { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Types ────────────────────────────────────────────────────────────────────

interface StrategyCard {
  name: string;
  description: string;
}

interface Tab {
  label: string;
  intro: string;
  cards: StrategyCard[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const tabs: Tab[] = [
  {
    label: 'Income Strategies',
    intro:
      'Income generation with capital preservation as the governing discipline.',
    cards: [
      {
        name: 'Fixed Income',
        description:
          'Customized bond ladders across Treasury, municipal, and corporate bonds — structured around your specific risk tolerance, liquidity requirements, and maturity profile. Precision-built for stability and predictable cash flow.',
      },
      {
        name: 'Strategic Income',
        description:
          'Designed for investors seeking reliable cash flow without sacrificing disciplined portfolio management. This strategy combines high-quality dividend-paying equities, carefully selected fixed income investments, and other income-producing assets to generate sustainable income while preserving long-term purchasing power. The portfolio is actively managed to adapt to changing interest rates, market conditions, and economic cycles.',
      },
      {
        name: 'Real Estate Income',
        description:
          'Direct property investments, REITs, and private real estate funds targeting income generation and inflation-resistant capital growth — with low correlation to traditional equity and fixed income markets.',
      },
      {
        name: 'Alternative Income',
        description:
          'Private credit, royalties, structured products, and other yield-generating strategies not accessible through conventional markets. Designed to complement and diversify traditional income sources.',
      },
    ],
  },
  {
    label: 'Active Strategies',
    intro:
      'Proprietary, actively managed approaches designed to pursue superior risk-adjusted returns across full market cycles.',
    cards: [
      {
        name: 'Montreux Innovation Leaders',
        description:
          'Invests in high-quality companies driving long-term innovation across technology, healthcare, industrials, financial services, and other sectors undergoing meaningful transformation. The strategy focuses on businesses with durable competitive advantages, strong balance sheets, and the potential to benefit from enduring secular trends while maintaining a disciplined approach to valuation and risk management.',
      },
      {
        name: 'Custom & Bespoke Portfolios',
        description:
          'Market-neutral strategies, structured options programs, direct indexing, 351 and 1035 exchanges, and fully bespoke solutions engineered around specific client goals, tax situations, and liquidity constraints.',
      },
    ],
  },
  {
    label: 'Semi-Active',
    intro:
      'The discipline of passive investing, enhanced with strategic active tilts where they generate the most meaningful advantage.',
    cards: [
      {
        name: 'Montreux Core Satellite',
        description:
          'Broad passive exposure to global stock and bond market indices serves as the portfolio core, supplemented by active selection of specific sectors, individual securities, and alternative assets — including Bitcoin and gold — where conviction is high and opportunity is clear.',
      },
      {
        name: 'Montreux ETF Portfolios',
        description:
          'A rigorously curated selection of low-cost, globally diversified ETFs providing efficient market exposure across geographies and asset classes, with disciplined rebalancing and ongoing cost optimization.',
      },
    ],
  },
  {
    label: 'Alternative Investments',
    intro:
      'Institutional-quality alternative strategies, made accessible to qualified individual investors and family offices.',
    cards: [
      {
        name: 'Private Real Estate',
        description:
          'Private funds, direct property investments, 1031 exchange programs, and other real estate opportunities offering compelling tax efficiency alongside strong investment returns — with returns structurally resistant to inflation.',
      },
      {
        name: 'Private Equity',
        description:
          'Access to institutional PE funds, pre-IPO growth companies, leveraged buyout strategies, and emerging managers across domestic and international markets. Curated for quality over volume.',
      },
      {
        name: 'Hedge Funds',
        description:
          'Curated access to long/short equity, global macro, convertible bond arbitrage, managed futures, and other strategies with demonstrated, sustainable outperformance — selected through rigorous due diligence.',
      },
      {
        name: 'Venture Capital',
        description:
          'VC fund investments and select direct co-investment opportunities in early-stage companies across technology, life sciences, and other high-growth sectors. Access typically reserved for institutional allocators.',
      },
    ],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StrategyCardItem({ name, description }: StrategyCard) {
  return (
    <div className="bg-cream p-8 border-l-2 border-gold hover:shadow-md active:shadow-md transition-shadow duration-300">
      <h3 className="font-heading font-semibold text-xl text-navy">{name}</h3>
      <p className="font-body text-text-muted text-sm leading-relaxed mt-3">{description}</p>
    </div>
  );
}

function DesktopTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (i: number) => void;
}) {
  return (
    <div className="hidden md:block border-b border-gray-200">
      <div className="flex">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`font-body text-xs tracking-widest uppercase font-medium px-8 py-5 cursor-pointer transition-colors duration-200 -mb-px ${
              activeTab === i
                ? 'text-navy border-b-2 border-gold'
                : 'text-text-muted hover:text-navy'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="md:hidden divide-y divide-gray-200 border-t border-gray-200">
      {tabs.map((tab, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={tab.label}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-0 py-5 text-left"
            >
              <span className="font-body text-xs tracking-widest uppercase font-medium text-navy">
                {tab.label}
              </span>
              <span
                className="font-body text-gold text-xl leading-none transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? 'max-h-[2000px] opacity-100 pb-8' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="font-body text-text-muted text-sm italic mb-8">{tab.intro}</p>
              <div className="grid grid-cols-1 gap-6">
                {tab.cards.map((card) => (
                  <StrategyCardItem key={card.name} {...card} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TabPanel({ tab, visible }: { tab: Tab; visible: boolean }) {
  return (
    <div
      className={`mt-16 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none absolute'
      }`}
    >
      <p className="font-body text-text-muted text-sm italic mb-12 max-w-2xl">{tab.intro}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tab.cards.map((card) => (
          <StrategyCardItem key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InvestmentManagementPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      {/* ── Section 1: Page Hero ─────────────────────────────────────── */}
      <section className="relative min-h-[40vh] bg-navy flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, #1C1C1E 0%, #0D1B2A 70%)',
          }}
        />
        {/* Diagonal grid */}
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
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Our Services</span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h1 className="font-heading font-light text-5xl md:text-6xl text-cream tracking-tight">
            Investment Management
          </h1>

          <p className="font-body font-light text-cream/60 text-lg max-w-2xl mt-6 leading-relaxed">
            Strategic portfolios. Disciplined across every market environment.
          </p>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </section>

      {/* ── Section 2: Intro Block ───────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-light text-3xl text-navy text-center leading-snug">
            Portfolios Built Around Your Life.
            <br />
            Managed With Ongoing Rigor.
          </h2>

          <p className="font-body text-text-muted text-base leading-relaxed mt-8">
            Effective investment management is not about chasing returns. It is about constructing a
            portfolio that serves your specific purpose — generating income, growing capital, preserving
            wealth, or all three — and maintaining that portfolio with discipline and adaptability through
            every market environment.
          </p>

          <p className="font-body text-text-muted text-base leading-relaxed mt-6">
            At Montreux, our investment team provides access to the full spectrum of institutional and
            individual investment opportunities. We design portfolios that reflect your unique
            circumstances, goals, and risk tolerance, then manage them actively as both your life and the
            markets evolve. Every recommendation is customized — we do not use model portfolios applied
            uniformly across clients.
          </p>
        </div>
      </section>

      {/* ── Section 3: Strategy Tabs ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Desktop tabs */}
          <DesktopTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Desktop panels */}
          <div className="hidden md:block relative">
            {tabs.map((tab, i) => (
              <TabPanel key={tab.label} tab={tab} visible={activeTab === i} />
            ))}
          </div>

          {/* Mobile accordion */}
          <MobileAccordion />
        </div>
      </section>

      {/* ── Section 4: Regulatory Disclaimer ────────────────────────── */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-xs text-text-muted leading-relaxed italic">
            Investing involves risk, including the possible loss of principal. The strategies described
            above are for informational purposes only and do not constitute personalized investment advice.
            Montreux Wealth Management provides individualized recommendations only after a thorough
            understanding of each client's specific circumstances, goals, and risk tolerance. Past
            performance is not indicative of future results. Please consult with a Montreux advisor to
            determine which strategies are appropriate for your individual situation.
          </p>
        </div>
      </section>

      {/* ── Section 5: CTA Strip ─────────────────────────────────────── */}
      <section className="bg-navy py-24">
        <div className="flex flex-col items-center text-center px-6">
          <h2 className="font-heading font-light text-3xl md:text-4xl text-cream leading-snug">
            Ready to Discuss Your
            <br />
            Investment Strategy?
          </h2>

          <p className="font-body font-light text-cream/60 text-base mt-6 max-w-lg leading-relaxed">
            Our investment team will take the time to understand your goals before making a single
            recommendation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 font-body"
            >
              Begin the Conversation →
            </Link>
            <Link
              to="/financial-planning"
              className="border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold hover:text-navy transition-all duration-300 font-body"
            >
              View Financial Planning →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
