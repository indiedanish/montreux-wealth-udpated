'use client';
import { useMemo, useState } from 'react';
import {
  LIMIT_401K_2026,
  computeCalculatorResults,
  formatCurrency,
  type CalculatorResults,
  type EmployeeCount,
  type StateTaxProfile,
} from '@/utils/cashBalanceCalc';

type CashBalanceCalculatorProps = {
  onContinue?: (results: CalculatorResults) => void;
};

export default function CashBalanceCalculator({ onContinue }: CashBalanceCalculatorProps) {
  const [age, setAge] = useState(45);
  const [income, setIncome] = useState(500000);
  const [contribution401k, setContribution401k] = useState(40000);
  const [federalRate, setFederalRate] = useState(0.35);
  const [stateProfile, setStateProfile] = useState<StateTaxProfile>('high');
  const [employees, setEmployees] = useState<EmployeeCount>('solo');
  const [yearsToRetirement, setYearsToRetirement] = useState(15);

  const results = useMemo(
    () =>
      computeCalculatorResults({
        age,
        income,
        contribution401k,
        federalRate,
        stateProfile,
        employees,
        yearsToRetirement,
      }),
    [age, income, contribution401k, federalRate, stateProfile, employees, yearsToRetirement]
  );

  const selectClass =
    'w-full border border-gray-200 bg-white px-4 py-3 text-sm font-body text-text-dark focus:outline-none focus:border-gold transition-colors';
  const labelClass = 'font-body text-xs tracking-widest uppercase text-text-muted mb-2 block';

  return (
    <div className="bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Inputs */}
        <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-6">Your Profile</p>

          <div className="space-y-6">
            <div>
              <label htmlFor="cb-age" className={labelClass}>
                Your Age — {age}
              </label>
              <input
                id="cb-age"
                type="range"
                min={30}
                max={70}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-gold"
              />
            </div>

            <div>
              <label htmlFor="cb-income" className={labelClass}>
                Annual W-2 / Net Business Income
              </label>
              <input
                id="cb-income"
                type="range"
                min={200000}
                max={2000000}
                step={25000}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <p className="font-heading text-xl text-navy mt-2">{formatCurrency(income)}</p>
            </div>

            <div>
              <label htmlFor="cb-401k" className={labelClass}>
                Current Annual 401(k) Contribution
              </label>
              <input
                id="cb-401k"
                type="range"
                min={0}
                max={LIMIT_401K_2026}
                step={5000}
                value={contribution401k}
                onChange={(e) => setContribution401k(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <p className="font-body text-sm text-text-muted mt-2">
                {formatCurrency(contribution401k)} · 2026 limit: {formatCurrency(LIMIT_401K_2026)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cb-federal" className={labelClass}>
                  Federal Rate
                </label>
                <select
                  id="cb-federal"
                  value={federalRate}
                  onChange={(e) => setFederalRate(Number(e.target.value))}
                  className={selectClass}
                >
                  <option value={0.24}>24%</option>
                  <option value={0.32}>32%</option>
                  <option value={0.35}>35%</option>
                  <option value={0.37}>37%</option>
                </select>
              </div>
              <div>
                <label htmlFor="cb-state" className={labelClass}>
                  State Taxes
                </label>
                <select
                  id="cb-state"
                  value={stateProfile}
                  onChange={(e) => setStateProfile(e.target.value as StateTaxProfile)}
                  className={selectClass}
                >
                  <option value="high">High (~10%)</option>
                  <option value="mid">Mid (~5%)</option>
                  <option value="low">Low / none</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cb-employees" className={labelClass}>
                Employees
              </label>
              <select
                id="cb-employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value as EmployeeCount)}
                className={selectClass}
              >
                <option value="solo">Just me (+ spouse)</option>
                <option value="small">1–3</option>
                <option value="medium">4–10</option>
                <option value="large">10+</option>
              </select>
            </div>

            <div>
              <label htmlFor="cb-years" className={labelClass}>
                Years to Retirement — {yearsToRetirement}
              </label>
              <input
                id="cb-years"
                type="range"
                min={5}
                max={25}
                value={yearsToRetirement}
                onChange={(e) => setYearsToRetirement(Number(e.target.value))}
                className="w-full accent-gold"
              />
            </div>
          </div>
        </div>

        {/* Results — sticky on desktop for always-visible value */}
        <div className="p-6 md:p-10 bg-cream lg:sticky lg:top-24 lg:self-start">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-4">Your Estimate</p>

          <div className="bg-navy p-6 md:p-8 mb-6">
            <p className="font-body text-xs tracking-widest uppercase text-gold/70">
              Potential Lifetime Tax Savings
            </p>
            <p className="font-heading font-light text-4xl md:text-5xl text-gold mt-2">
              {formatCurrency(results.lifetimeTaxSavings)}
            </p>
            <p className="font-body text-cream/60 text-sm mt-3 leading-relaxed">
              {formatCurrency(results.additionalTaxSavings)}/yr × {yearsToRetirement} years
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white p-4">
              <p className="font-body text-xs text-text-muted">Annual Tax Savings</p>
              <p className="font-heading text-xl text-gold mt-1">
                +{formatCurrency(results.additionalTaxSavings)}
              </p>
            </div>
            <div className="bg-white p-4">
              <p className="font-body text-xs text-text-muted">Extra Retirement Value</p>
              <p className="font-heading text-xl text-gold mt-1">
                +{formatCurrency(results.additionalFv)}
              </p>
            </div>
          </div>

          {onContinue && (
            <button
              type="button"
              onClick={() => onContinue(results)}
              className="group flex items-center justify-center gap-3 w-full bg-gold text-navy px-8 py-5 text-sm md:text-base tracking-widest uppercase font-semibold hover:bg-gold-light transition-all duration-300 font-body shadow-lg shadow-gold/20"
            >
              Book My Free 30-Min Review
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}

          <p className="font-body text-xs text-text-muted mt-4 leading-relaxed italic">
            Illustrative only · Not tax, legal, or investment advice
          </p>
        </div>
      </div>
    </div>
  );
}
