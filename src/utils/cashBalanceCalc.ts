export const LIMIT_401K_2026 = 70000;
export const RETURN_RATE = 0.07;

export type StateTaxProfile = 'high' | 'mid' | 'low';
export type EmployeeCount = 'solo' | 'small' | 'medium' | 'large';

export type CalculatorInputs = {
  age: number;
  income: number;
  contribution401k: number;
  federalRate: number;
  stateProfile: StateTaxProfile;
  employees: EmployeeCount;
  yearsToRetirement: number;
};

export type CalculatorResults = {
  cbContribution: number;
  totalWithCb: number;
  additionalContribution: number;
  taxSavings401k: number;
  taxSavingsWithCb: number;
  additionalTaxSavings: number;
  lifetimeTaxSavings: number;
  fv401k: number;
  fvWithCb: number;
  additionalFv: number;
};

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

export function computeCalculatorResults(inputs: CalculatorInputs): CalculatorResults {
  const { age, income, contribution401k, federalRate, stateProfile, employees, yearsToRetirement } =
    inputs;
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
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
