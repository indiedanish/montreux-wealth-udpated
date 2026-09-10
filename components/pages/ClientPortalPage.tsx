// ─── Icons ────────────────────────────────────────────────────────────────────

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" strokeWidth={1.5}>
      <rect x="4" y="9" width="12" height="9" rx="1" stroke="#C9A84C" />
      <path d="M7 9V6a3 3 0 0 1 6 0v3" stroke="#C9A84C" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" strokeWidth={1.5}>
      <path
        d="M10 2 L4 5 L4 11 C4 14.5 6.8 17.7 10 18.5 C13.2 17.7 16 14.5 16 11 L16 5 Z"
        stroke="#C9A84C"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" strokeWidth={1.5}>
      <circle cx="10" cy="10" r="8" stroke="#C9A84C" />
      <polyline points="6.5,10 8.5,12 13.5,7.5" stroke="#C9A84C" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

interface PortalButtonProps {
  label: string;
  sublabel: string;
  variant: 'primary' | 'secondary';
  href?: string;
  disabled?: boolean;
}

function PortalButton({ label, sublabel, variant, href, disabled }: PortalButtonProps) {
  const base =
    'w-full md:w-auto flex items-center gap-3 px-7 py-3.5 font-body text-xs tracking-widest uppercase font-medium transition-all duration-300';

  const activeStyles =
    variant === 'primary'
      ? 'bg-gold text-navy hover:bg-yellow-400'
      : 'border border-gold/40 text-gold/80 hover:border-gold hover:text-gold hover:bg-gold/5';

  const disabledStyles =
    variant === 'primary'
      ? 'bg-gold text-navy'
      : 'border border-gold/40 text-gold/80';

  if (disabled) {
    return (
      <div className={`${base} ${disabledStyles} opacity-40 cursor-not-allowed`}>
        <div className="flex flex-col items-start gap-0.5 flex-1">
          <span>{label}</span>
          <span
            className={`text-[10px] tracking-wide normal-case font-normal ${
              variant === 'primary' ? 'text-navy/60' : 'text-gold/50'
            }`}
          >
            {sublabel}
          </span>
        </div>
        <span className="text-base leading-none">→</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${activeStyles}`}
    >
      <div className="flex flex-col items-start gap-0.5 flex-1">
        <span>{label}</span>
        <span
          className={`text-[10px] tracking-wide normal-case font-normal ${
            variant === 'primary' ? 'text-navy/60' : 'text-gold/50'
          }`}
        >
          {sublabel}
        </span>
      </div>
      <span className="text-base leading-none">→</span>
    </a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClientPortalPage() {
  return (
    <main className="bg-[#1C1C1E]">
      {/* ── Section 1: Page Hero ─────────────────────────────────────── */}
      <section className="relative min-h-[35vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* "M" watermark */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          aria-hidden="true"
          style={{ overflow: 'visible' }}
        >
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="'Cormorant Garamond', serif"
            fontWeight="300"
            fontSize="320"
            fill="#F5F0E8"
            fillOpacity="0.03"
          >
            M
          </text>
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-xs tracking-widest uppercase text-gold">Secure Access</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h1 className="font-heading font-light text-4xl md:text-5xl text-cream tracking-tight">
            Your Montreux
            <br />
            Client Portal
          </h1>
          <p className="font-body font-light text-cream/50 text-base max-w-xl mt-6 leading-relaxed">
            Select your portal below to access your accounts, documents, and financial data. All
            connections are encrypted and secure.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/15" />
      </section>

      {/* ── Section 2: Security Reassurance Strip ───────────────────── */}
      <section className="bg-[#242426] py-6">
        <div className="flex justify-center gap-12 md:gap-24 flex-wrap px-6">
          <div className="flex items-center gap-3">
            <LockIcon />
            <span className="font-body text-xs tracking-widest uppercase text-cream/40">
              Bank-Level Encryption
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldIcon />
            <span className="font-body text-xs tracking-widest uppercase text-cream/40">
              Secure Authentication
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircleIcon />
            <span className="font-body text-xs tracking-widest uppercase text-cream/40">
              Private & Confidential
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 3: Three Portal Cards ───────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8">

          {/* Card 1: Investment & Portfolio */}
          <div className="bg-[#242426] border border-gold/20 hover:border-gold/60 transition-all duration-500 p-10 md:p-14 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">
                  Investment Management
                </p>
                <h2 className="font-heading font-light text-3xl text-cream">
                  Investment &amp;
                  <br />
                  Portfolio Access
                </h2>
                <p className="font-body text-cream/50 text-sm leading-relaxed mt-4 max-w-lg">
                  Monitor your investment accounts, review portfolio performance, access statements, and
                  track allocations across all custodied assets. Your complete investment picture,
                  available in real time.
                </p>
                <div className="w-12 h-px bg-gold opacity-30 my-8" />
                <div className="space-y-4">
                  <PortalButton
                    variant="primary"
                    label="Portfolio Management"
                    sublabel="Account performance & statements"
                    href="https://login.bdreporting.com/Auth/Montreux/SignIn"
                  />
                  <PortalButton
                    variant="secondary"
                    label="401(k) Manager"
                    sublabel="Retirement account access"
                    href="https://login.bdreporting.com/Auth/SignIn"
                  />
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-32 select-none pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 120 100" width="120" height="100" overflow="visible">
                  <text
                    x="60"
                    y="80"
                    textAnchor="middle"
                    fontFamily="'Cormorant Garamond', serif"
                    fontWeight="300"
                    fontSize="96"
                    fill="#F5F0E8"
                    fillOpacity="0.06"
                  >
                    01
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Financial Planning */}
          <div className="bg-[#242426] border border-gold/20 hover:border-gold/60 transition-all duration-500 p-10 md:p-14 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">
                  Financial Planning
                </p>
                <h2 className="font-heading font-light text-3xl text-cream">
                  Financial Planning
                  <br />
                  Hub
                </h2>
                <p className="font-body text-cream/50 text-sm leading-relaxed mt-4 max-w-lg">
                  Access your comprehensive financial plan, review long-term projections, and track
                  progress toward your goals across retirement, estate, and life planning milestones. Your
                  roadmap, always within reach.
                </p>
                <div className="w-12 h-px bg-gold opacity-30 my-8" />
                <div className="space-y-4">
                  <PortalButton
                    variant="primary"
                    label="Financial Planning"
                    sublabel="Plans, projections & milestones"
                    href="https://wealth.emaplan.com/ema/SignIn?ema%2Fria%2Fmontreuxwealth"
                  />
                </div>
                <p className="font-body text-xs text-cream/20 italic tracking-wide mt-8">
                  Your plan is a living document — updated continuously alongside your life.
                </p>
              </div>
              <div className="hidden md:flex items-center justify-center w-32 select-none pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 120 100" width="120" height="100" overflow="visible">
                  <text
                    x="60"
                    y="80"
                    textAnchor="middle"
                    fontFamily="'Cormorant Garamond', serif"
                    fontWeight="300"
                    fontSize="96"
                    fill="#F5F0E8"
                    fillOpacity="0.06"
                  >
                    02
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: Tax & Accounting */}
          <div className="bg-[#242426] border border-gold/20 hover:border-gold/60 transition-all duration-500 p-10 md:p-14 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">
                  Accounting & Tax
                </p>
                <h2 className="font-heading font-light text-3xl text-cream">
                  Tax &amp; Accounting
                  <br />
                  Center
                </h2>
                <p className="font-body text-cream/50 text-sm leading-relaxed mt-4 max-w-lg">
                  Securely upload tax documents, review filed returns, access your accounting records,
                  manage payroll, and communicate with your Montreux tax and accounting team — all in one
                  place.
                </p>
                <div className="w-12 h-px bg-gold opacity-30 my-8" />
                <div className="space-y-4">
                  <PortalButton
                    variant="primary"
                    label="Coming Soon"
                    sublabel="Available soon"
                    disabled
                  />
                  <PortalButton
                    variant="secondary"
                    label="Coming Soon"
                    sublabel="Available soon"
                    disabled
                  />
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-32 select-none pointer-events-none" aria-hidden="true">
                <svg viewBox="0 0 120 100" width="120" height="100" overflow="visible">
                  <text
                    x="60"
                    y="80"
                    textAnchor="middle"
                    fontFamily="'Cormorant Garamond', serif"
                    fontWeight="300"
                    fontSize="96"
                    fill="#F5F0E8"
                    fillOpacity="0.06"
                  >
                    03
                  </text>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>


    </main>
  );
}
