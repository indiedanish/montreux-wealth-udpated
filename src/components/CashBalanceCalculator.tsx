import { useMemo, useState } from 'react';

const LIMIT_401K_2026 = 70000;
const RETURN_RATE = 0.07;

type StateTaxProfile = 'high' | 'mid' | 'low';
type EmployeeCount = 'solo' | 'small' | 'medium' | 'large';

function estimateCbContribution(age: number, income: number, employees: EmployeeCount): number {
  const ageFactor = age < 40 ? 0.35 : age < 50 ? 0.55 : age < 60 ? 0.75 : 1;
  const base = Math.min(income * 0.45, age >= 55 ? 320000 : age >= 45 ? 250000 : 180000);
  const employeeReduction =
    employees === 'solo' ? 1 : employees === 'small' ? 0.85 : employees === 'medium' ? 0.65 : 0.45;
  return Math.round(base * ageFactor * employeeReduction);
}

function marginalRate(federal: number, stateProfile: StateTaxProfile): number {
  const stateRates: Record<StateTaxProfile, number> = { high: 0.1, mid: 0.05, low: 0 };
  return federal + stateRates[stateProfile];
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CashBalanceCalculator() {
  const [age, setAge] = useState(45);
  const [income, setIncome] = useState(500000);
  const [contribution401k, setContribution401k] = useState(40000);
  const [federalRate, setFederalRate] = useState(0.35);
  const [stateProfile, setStateProfile] = useState<StateTaxProfile>('high');
  const [employees, setEmployees] = useState<EmployeeCount>('solo');
  const [yearsToRetirement, setYearsToRetirement] = useState(15);

  const results = useMemo(() => {
    const rate = marginalRate(federalRate, stateProfile);
    const cbContribution = estimateCbContribution(age, income, employees);
    const totalWithCb = Math.min(contribution401k + cbContribution, cbContribution + LIMIT_401K_2026);
    const additionalContribution = totalWithCb - contribution401k;

    const taxSavings401k = contribution401k * rate;
    const taxSavingsWithCb = totalWithCb * rate;
    const additionalTaxSavings = additionalContribution * rate;
    const lifetimeTaxSavings = additionalTaxSavings * yearsToRetirement;

    const fv401k =
      contribution401k * ((Math.pow(1 + RETURN_RATE, yearsToRetirement) - 1) / RETURN_RATE);
    const fvWithCb = totalWithCb * ((Math.pow(1 + RETURN_RATE, yearsToRetirement) - 1) / RETURN_RATE);
    const additionalFv = fvWithCb - fv401k;

    return {
      cbContribution,
      totalWithCb,
      additionalContribution,
      taxSavings401k,
      taxSavingsWithCb,
      additionalTaxSavings,
      lifetimeTaxSavings,
      fv401k,
      fvWithCb,
      additionalFv,
    };
  }, [age, income, contribution401k, federalRate, stateProfile, employees, yearsToRetirement]);

  const selectClass =
    'w-full border border-gray-200 bg-white px-4 py-3 text-sm font-body text-text-dark focus:outline-none focus:border-gold transition-colors';
  const labelClass = 'font-body text-xs tracking-widest uppercase text-text-muted mb-2 block';

  return (
    <div className="bg-white shadow-sm">
      <div className="bg-navy px-8 py-10 md:px-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-xs tracking-widest uppercase text-gold">Tax Savings Estimator</span>
        </div>
        <h3 className="font-heading font-light text-2xl md:text-3xl text-cream leading-snug">
          See What a 401(k) Alone May Be Leaving on the Table
        </h3>
        <p className="font-body text-cream/60 text-sm mt-4 max-w-2xl leading-relaxed">
          Illustrative only. Actual contribution limits depend on actuarial calculations, plan design,
          and nondiscrimination testing. Not tax, legal, or investment advice.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Inputs */}
        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-8">Your Profile</p>

          <div className="space-y-8">
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
                {formatCurrency(contribution401k)} · 2026 combined limit: {formatCurrency(LIMIT_401K_2026)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cb-federal" className={labelClass}>
                  Federal Marginal Rate
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
                  State Tax Profile
                </label>
                <select
                  id="cb-state"
                  value={stateProfile}
                  onChange={(e) => setStateProfile(e.target.value as StateTaxProfile)}
                  className={selectClass}
                >
                  <option value="high">High-tax state (~10%)</option>
                  <option value="mid">Mid-tax state (~5%)</option>
                  <option value="low">Low / no-tax state (~0%)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cb-employees" className={labelClass}>
                Non-Owner Employees
              </label>
              <select
                id="cb-employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value as EmployeeCount)}
                className={selectClass}
              >
                <option value="solo">Just me (or me + spouse)</option>
                <option value="small">1–3 employees</option>
                <option value="medium">4–10 employees</option>
                <option value="large">10+ employees</option>
              </select>
            </div>

            <div>
              <label htmlFor="cb-years" className={labelClass}>
                Years Until Retirement — {yearsToRetirement}
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

        {/* Results */}
        <div className="p-8 md:p-12 bg-cream">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-6">Your Illustration</p>

          <div className="bg-navy p-8 mb-8">
            <p className="font-body text-xs tracking-widest uppercase text-gold/70">Potential Lifetime Tax Savings</p>
            <p className="font-heading font-light text-4xl md:text-5xl text-gold mt-3">
              {formatCurrency(results.lifetimeTaxSavings)}
            </p>
            <p className="font-body text-cream/60 text-sm mt-4 leading-relaxed">
              {formatCurrency(results.additionalTaxSavings)} in annual tax savings × {yearsToRetirement} years
              of peak earning — by sheltering an additional{' '}
              {formatCurrency(results.additionalContribution)} per year beyond your current 401(k).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="text-left py-3 text-text-muted font-normal">Metric</th>
                  <th className="text-right py-3 text-text-muted font-normal">401(k) Only</th>
                  <th className="text-right py-3 text-text-muted font-normal">With CBP</th>
                  <th className="text-right py-3 text-gold font-normal">Your Benefit</th>
                </tr>
              </thead>
              <tbody className="text-navy">
                <tr className="border-b border-gray-200">
                  <td className="py-4">Annual Contribution</td>
                  <td className="text-right py-4">{formatCurrency(contribution401k)}</td>
                  <td className="text-right py-4">{formatCurrency(results.totalWithCb)}</td>
                  <td className="text-right py-4 text-gold font-medium">
                    +{formatCurrency(results.additionalContribution)}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">Annual Tax Savings</td>
                  <td className="text-right py-4">{formatCurrency(results.taxSavings401k)}</td>
                  <td className="text-right py-4">{formatCurrency(results.taxSavingsWithCb)}</td>
                  <td className="text-right py-4 text-gold font-medium">
                    +{formatCurrency(results.additionalTaxSavings)}
                  </td>
                </tr>
                <tr>
                  <td className="py-4">Est. Value at Retirement</td>
                  <td className="text-right py-4">{formatCurrency(results.fv401k)}</td>
                  <td className="text-right py-4">{formatCurrency(results.fvWithCb)}</td>
                  <td className="text-right py-4 text-gold font-medium">
                    +{formatCurrency(results.additionalFv)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-body text-xs text-text-muted mt-6 leading-relaxed italic">
            Assumes 7% long-run investment return. CBP contributions are age-banded estimates. Plans with
            employees are subject to nondiscrimination testing. Actuarial and TPA fees (typically $2,000–$5,000/year)
            not included.
          </p>
        </div>
      </div>
    </div>
  );
}
