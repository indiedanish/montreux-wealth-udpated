import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CashBalanceCalculator from '../components/CashBalanceCalculator';
import { formatCurrency, type CalculatorResults } from '../utils/cashBalanceCalc';

// hide_event_type_details skips Calendly's duplicate logo + event landing page → straight to calendar
const CALENDLY_URL =
  'https://calendly.com/f-hasan-montreuxwealth/30min?hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&text_color=1a1a1a&primary_color=c9a84c';

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-6 max-w-md mx-auto">
      <div className="flex items-center gap-2">
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-body font-semibold ${
            step >= 1 ? 'bg-gold text-navy' : 'bg-cream/10 text-cream/40'
          }`}
        >
          {step > 1 ? '✓' : '1'}
        </span>
        <span
          className={`font-body text-xs md:text-sm tracking-wide uppercase hidden sm:inline ${
            step === 1 ? 'text-gold' : 'text-cream/50'
          }`}
        >
          Model Savings
        </span>
      </div>

      <div className={`h-px flex-1 max-w-16 ${step > 1 ? 'bg-gold' : 'bg-cream/20'}`} />

      <div className="flex items-center gap-2">
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-body font-semibold ${
            step === 2 ? 'bg-gold text-navy' : 'bg-cream/10 text-cream/40'
          }`}
        >
          2
        </span>
        <span
          className={`font-body text-xs md:text-sm tracking-wide uppercase hidden sm:inline ${
            step === 2 ? 'text-gold' : 'text-cream/50'
          }`}
        >
          Book Meeting
        </span>
      </div>
    </div>
  );
}

export default function CashBalanceCalculatorPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const goToBooking = (calcResults: CalculatorResults) => {
    setResults(calcResults);
    setStep(2);
  };

  const goBackToCalculator = () => {
    setStep(1);
  };

  useEffect(() => {
    if (step === 2) {
      bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [step]);

  return (
    <main className="bg-cream min-h-screen">
      {/* Compact header — stays visible, minimal scroll for ad traffic */}
      <section className="bg-navy pt-10 md:pt-12 pb-8 md:pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <StepIndicator step={step} />
          {step === 1 ? (
            <>
              <h1 className="font-heading font-light text-3xl md:text-4xl text-cream leading-snug mt-8">
                How Much Could You <span className="text-gold">Save in Taxes?</span>
              </h1>
              <p className="font-body text-cream/60 text-sm md:text-base mt-4 max-w-xl mx-auto">
                Adjust the sliders — takes 60 seconds. Then book a free review with our team.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-heading font-light text-3xl md:text-4xl text-cream leading-snug mt-8">
                Pick a Time That <span className="text-gold">Works for You</span>
              </h1>
              <p className="font-body text-cream/60 text-sm md:text-base mt-4 max-w-xl mx-auto">
                30 minutes · No obligation · We'll review your numbers together
              </p>
            </>
          )}
        </div>
      </section>

      {/* Step 1 — Calculator */}
      {step === 1 && (
        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <CashBalanceCalculator onContinue={goToBooking} />
          </div>
        </section>
      )}

      {/* Step 2 — Results recap + Calendly */}
      {step === 2 && results && (
        <section ref={bookingRef} className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            {/* Personalized recap — reinforces value before booking */}
            <div className="bg-navy p-6 md:p-8 mb-6 text-center">
              <p className="font-body text-xs tracking-widest uppercase text-gold/70">
                Based on your inputs
              </p>
              <p className="font-heading font-light text-4xl md:text-5xl text-gold mt-2">
                {formatCurrency(results.additionalTaxSavings)}
                <span className="text-2xl text-cream/60">/year</span>
              </p>
              <p className="font-body text-cream/60 text-sm mt-3">
                in potential annual tax savings ·{' '}
                {formatCurrency(results.lifetimeTaxSavings)} over your timeline
              </p>
            </div>

            {/* Calendly embed — clip top header bar to avoid duplicate org logo */}
            <div className="bg-white shadow-sm overflow-hidden border border-gray-100">
              <div className="relative h-[620px] md:h-[680px] overflow-hidden">
                <iframe
                  title="Book a consultation with Montreux Wealth"
                  src={CALENDLY_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0 w-full h-[calc(100%+72px)] -top-[72px] border-0"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <button
                type="button"
                onClick={goBackToCalculator}
                className="font-body text-sm text-text-muted hover:text-navy transition-colors"
              >
                ← Adjust my numbers
              </button>
              <p className="font-body text-xs text-text-muted text-center sm:text-right italic">
                Illustrative only · Not tax, legal, or investment advice
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer disclaimer */}
      <section className="bg-navy py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-body text-cream/40 text-xs leading-relaxed text-center">
            Montreux Wealth Management is a registered investment adviser. Please review our{' '}
            <Link to="/disclosures" className="text-gold/60 hover:text-gold underline">
              disclosures
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
