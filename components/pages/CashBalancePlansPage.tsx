'use client';
import Link from 'next/link';
import CalculatorPreviewCard from '@/components/CalculatorPreviewCard';
import CampaignContact from '@/components/CampaignContact';
import FaqSection from '@/components/FaqSection';
import { CASH_BALANCE_FAQ } from '@/lib/site';

const benefits = [
  {
    title: 'Deduct 3–5× More Than a 401(k) Alone',
    description:
      'Cash Balance Plans allow contributions well beyond the $70,000 combined 401(k) limit — often $150,000 to $300,000+ annually for business owners in their peak earning years.',
  },
  {
    title: 'Immediate Tax Reduction',
    description:
      'Every dollar contributed is deductible to your business, reducing current-year federal and state tax liability while building retirement wealth on a tax-deferred basis.',
  },
  {
    title: 'ERISA Creditor Protection',
    description:
      'Assets inside a qualified Cash Balance Plan are federally protected from judgments, malpractice awards, and — in most cases — bankruptcy.',
  },
  {
    title: 'Flexible Contribution Design',
    description:
      'Contributions can be adjusted year to year based on business income. Plans can prioritize older, highly compensated owners while keeping employee costs manageable.',
  },
  {
    title: 'Integrated with Your Broader Strategy',
    description:
      'At Montreux, your Cash Balance Plan is designed in coordination with your investment portfolio, tax planning, and succession goals — not in isolation.',
  },
  {
    title: 'Works Alongside Your CPA',
    description:
      'We coordinate directly with your tax advisor. You get the plan design and administration expertise; your CPA stays the quarterback on tax strategy.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Complimentary Feasibility Review',
    body: 'We analyze your income, age, employee census, and goals to determine whether a Cash Balance Plan is appropriate — at no cost and with no obligation.',
  },
  {
    num: '02',
    title: 'Custom Plan Design',
    body: 'Working with enrolled actuaries, we design a plan tailored to your contribution objectives, cash flow, and retirement timeline.',
  },
  {
    num: '03',
    title: 'Ongoing Administration & Coordination',
    body: 'We handle setup, compliance, annual filings, and investment coordination — integrated with your broader Montreux wealth management relationship.',
  },
];

const goodFit = [
  'Business owners earning $300,000+ annually who want to contribute more than $70,000 per year to retirement',
  'Professionals with consistent income and a 5+ year time horizon before retirement',
  'Firms with few employees, or where employee benefit costs can be managed through plan design',
  'Owners seeking to reduce current tax liability while accelerating retirement savings',
];

const notFit = [
  'Businesses with unpredictable or insufficient cash flow to support consistent contributions',
  'Companies with many full-time employees where nondiscrimination testing significantly limits owner contributions',
  'Owners who cannot commit to contributing for at least 3–5 years on average',
  'Those with minimal current tax liability who would not benefit from additional deductions',
];

const taxDeadlines = [
  { date: 'April 15', message: 'Q1 estimated tax due — start modeling your plan design now' },
  { date: 'June 15', message: 'Review payroll and compensation strategy before Q2 payment' },
  { date: 'September 15', message: 'Highest planning leverage — contribution ranges should be set' },
  { date: 'January 15', message: 'Final estimated payment — last window to optimize for the current tax year' },
];

const caseStudies = [
  {
    profile: 'Corporate Law Partner, Age 52',
    contribution: '$245,000/year',
    detail: 'Combined 401(k) and Cash Balance Plan, reducing federal and state taxes by approximately $98,000 annually.',
  },
  {
    profile: 'Medical Practice Owner, Age 48',
    contribution: '$180,000/year',
    detail: 'Three-physician group with customized allocations. Employee costs remained minimal while partners prioritized retirement savings.',
  },
  {
    profile: 'Real Estate Broker, Age 59',
    contribution: '$270,000/year',
    detail: 'Contributing nearly 5× the SEP IRA limit, building $2.1M in additional retirement assets over 8 years.',
  },
];

export default function CashBalancePlansPage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] bg-navy flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, #1C1C1E 0%, #0D1B2A 70%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(201,168,76,0.04) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(201,168,76,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Cash Balance Plans</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-heading font-light text-4xl md:text-6xl lg:text-7xl text-cream tracking-tight leading-tight">
            Reduce Today's Taxes.
            <br />
            <span className="text-gold">Accelerate Tomorrow's Wealth.</span>
          </h1>
          <p className="font-body font-light text-cream/70 text-lg md:text-xl max-w-3xl mt-8 leading-relaxed">
            For high-income business owners, a Cash Balance Plan may allow you to deduct significantly more
            than a 401(k) alone — potentially saving six figures in taxes while building retirement assets
            that compound for decades.
          </p>
          <p className="font-body font-light text-cream/50 text-base max-w-3xl mt-4 leading-relaxed">
            <strong className="text-cream/70 font-normal">A Cash Balance Plan</strong> is an IRS-approved
            defined benefit retirement plan that lets business owners contribute based on actuarial funding
            needs — not a percentage of salary — often well beyond standard 401(k) limits.
          </p>
          <div className="flex flex-col items-center gap-5 mt-12 w-full max-w-lg mx-auto">
            <Link
              href="/cash-balance-calculator"
              className="group flex items-center justify-center gap-3 w-full bg-gold text-navy px-10 py-5 text-base tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300 font-body shadow-lg shadow-gold/25 hover:shadow-gold/40"
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
            <button
              onClick={scrollToContact}
              className="w-full border border-gold/60 text-gold px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold/10 transition-all duration-300 font-body"
            >
              Request a Free Consultation
            </button>
          </div>
          <p className="font-body text-cream/40 text-xs mt-8 tracking-wide">
            Illustrative only · Not tax, legal, or investment advice
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
      </section>

      {/* Problem / Opportunity */}
      <section className="bg-cream py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-light text-3xl md:text-4xl text-navy leading-snug">
            Your 401(k) Was Never Designed
            <br />
            for Your Level of Income.
          </h2>
          <p className="font-body text-text-muted text-base leading-relaxed mt-8">
            Most advisors stop at the 401(k). For business owners earning $300,000, $500,000, or more, that
            cap shelters less than a third of what's available through advanced plan design. The difference
            isn't incremental — it's structural.
          </p>
          <p className="font-body text-text-muted text-base leading-relaxed mt-6">
            A Cash Balance Plan is an IRS-approved defined benefit plan that lets you contribute based on
            what an enrolled actuary determines is needed to fund your retirement — not a percentage of
            salary. Combined with a 401(k), it creates one of the most powerful tax and retirement tools
            available to business owners.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { figure: '$150K–$300K+', label: 'Typical Annual Contributions', sub: 'For owners age 45–60 with consistent high income' },
            { figure: '3–5×', label: 'More Than a 401(k) Alone', sub: 'Additional sheltering beyond the $70,000 combined limit' },
            { figure: '35–45%', label: 'Combined Tax Savings', sub: 'Federal + state marginal rates on deductible contributions' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading font-light text-4xl md:text-5xl text-gold">{stat.figure}</p>
              <p className="font-body text-cream text-sm tracking-widest uppercase mt-3">{stat.label}</p>
              <p className="font-body text-cream/50 text-xs mt-2 leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estimated Tax Urgency */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading font-light text-2xl md:text-3xl text-navy leading-snug">
              Estimated Tax Deadlines Are Cash Balance Planning Deadlines
            </h2>
            <p className="font-body text-text-muted text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
              Plan design decisions made before each estimated tax payment can meaningfully reduce what you
              owe — and accelerate what you keep.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {taxDeadlines.map((item) => (
              <div key={item.date} className="bg-cream p-6 text-center">
                <p className="font-heading font-light text-2xl text-gold">{item.date}</p>
                <p className="font-body text-text-muted text-xs leading-relaxed mt-3">{item.message}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/cash-balance-calculator"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300 font-body shadow-md"
            >
              Calculate My Tax Savings →
            </Link>
          </div>
        </div>
      </section>

      <CalculatorPreviewCard />

      {/* Benefits Grid */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Why Cash Balance Plans</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug mt-4">
            A Powerful Tool — When Designed Correctly
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h3 className="font-heading font-semibold text-lg text-navy">{item.title}</h3>
                <p className="font-body text-text-muted text-sm leading-relaxed mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-light text-3xl md:text-4xl text-navy leading-snug">
              Is a Cash Balance Plan Right for You?
            </h2>
            <p className="font-body text-text-muted text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Cash Balance Plans are not for everyone. But when the conditions align, they can transform
              your tax position and retirement trajectory.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                    <polyline points="3,8 6,11 13,5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-navy">Likely a Strong Fit If You</h3>
              </div>
              <ul className="space-y-4">
                {goodFit.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-text-muted text-sm leading-relaxed">
                    <span className="text-gold mt-1 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                    <line x1="4" y1="4" x2="12" y2="12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="12" y1="4" x2="4" y2="12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-cream">May Not Be Ideal If You</h3>
              </div>
              <ul className="space-y-4">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-cream/70 text-sm leading-relaxed">
                    <span className="text-gold/60 mt-1 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">How It Works</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-light text-3xl md:text-4xl text-navy text-center leading-snug mt-4">
            Three Steps to a Smarter Tax Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-10 relative">
                <span className="font-heading font-light text-6xl text-gold/20 absolute top-6 right-8">
                  {step.num}
                </span>
                <div className="w-8 h-0.5 bg-gold mb-6" />
                <h3 className="font-heading font-semibold text-xl text-navy pr-12">{step.title}</h3>
                <p className="font-body text-text-muted text-sm leading-relaxed mt-4">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Illustrative Examples</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-light text-3xl md:text-4xl text-cream text-center leading-snug mt-4">
            What Business Owners Are Achieving
          </h2>
          <p className="font-body text-cream/50 text-sm text-center mt-4 italic">
            Hypothetical illustrations for educational purposes only. Individual results vary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {caseStudies.map((study) => (
              <div key={study.profile} className="border border-gold/20 p-8 hover:border-gold/40 transition-colors">
                <p className="font-body text-xs tracking-widest uppercase text-gold">{study.contribution}</p>
                <h3 className="font-heading font-semibold text-lg text-cream mt-3">{study.profile}</h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed mt-4">{study.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Montreux Broader Positioning */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-gold" />
                <span className="font-body text-xs tracking-widest uppercase text-gold">Beyond the Plan</span>
              </div>
              <h2 className="font-heading font-light text-3xl md:text-4xl text-navy leading-snug mt-4">
                Cash Balance Plans Are the Entry Point.
                <br />
                Integrated Wealth Management Is the Goal.
              </h2>
              <p className="font-body text-text-muted text-base leading-relaxed mt-8">
                Montreux is not a plan administrator — we are a full-service wealth management firm. Your
                Cash Balance Plan is designed and coordinated within a broader relationship that encompasses
                investment management, financial planning, tax strategy, and estate planning.
              </p>
              <p className="font-body text-text-muted text-base leading-relaxed mt-6">
                When your retirement plan, portfolio, and tax strategy share the same advisors at the same
                table, the savings are not incidental — they are structural.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/investment-management"
                  className="font-body text-sm text-gold hover:text-gold-light transition-colors tracking-wide"
                >
                  Investment Management →
                </Link>
                <Link
                  href="/financial-planning"
                  className="font-body text-sm text-gold hover:text-gold-light transition-colors tracking-wide"
                >
                  Financial Planning →
                </Link>
                <Link
                  href="/accounting-tax"
                  className="font-body text-sm text-gold hover:text-gold-light transition-colors tracking-wide"
                >
                  Accounting & Tax →
                </Link>
              </div>
            </div>
            <div className="bg-cream p-12">
              <blockquote className="font-heading font-light text-2xl text-navy italic leading-relaxed">
                "We used to save maybe $50,000 with a SEP. With a properly designed Cash Balance Plan
                integrated into our broader strategy, we are now deducting over $200,000 a year — and our
                retirement trajectory has completely changed."
              </blockquote>
              <p className="font-body text-gold text-xs tracking-widest uppercase mt-6">
                — Managing Partner, Professional Services Firm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CPA Coordination */}
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-light text-3xl md:text-4xl text-navy leading-snug">
            Already Have a Tax Advisor? Perfect.
          </h2>
          <p className="font-body text-text-muted text-base leading-relaxed mt-8">
            We do not replace your CPA — we complement them. Montreux handles plan design, actuarial
            coordination, and investment management while your tax advisor maintains oversight of your
            overall tax strategy. No turf wars. No disruption. Just a smarter, aligned approach.
          </p>
          <button
            onClick={scrollToContact}
            className="mt-10 bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 font-body"
          >
            Start the Conversation →
          </button>
        </div>
      </section>

      {/* FAQ — structured for SEO & AEO */}
      <FaqSection items={CASH_BALANCE_FAQ} />

      {/* Lead Capture */}
      <CampaignContact />

      {/* Final Disclaimer */}
      <section className="bg-navy py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-body text-cream/40 text-xs leading-relaxed text-center">
            This page is for educational purposes only and does not constitute tax, legal, or investment
            advice. Cash Balance Plan contribution limits are determined by enrolled actuaries based on
            individual circumstances. Illustrations and calculator results are hypothetical and do not
            guarantee future results. Montreux Wealth Management is a registered investment adviser.
            Please review our{' '}
            <Link href="/disclosures" className="text-gold/60 hover:text-gold underline">
              disclosures
            </Link>{' '}
            for important information.
          </p>
        </div>
      </section>
    </main>
  );
}
