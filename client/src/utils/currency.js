// Helper to format amounts as Indian Rupees (INR).
// By default this assumes source prices are in USD and converts them to INR
// using the USD_TO_INR conversion rate. If your backend already provides
// prices in INR, set `convertFromUSD` to false when calling `formatINR`.

const USD_TO_INR = 83.0; // Assumption: 1 USD = 83 INR. Change as needed.

export function formatINR(amount, { convertFromUSD = true, decimals = 2 } = {}) {
  let num = Number(amount);
  if (Number.isNaN(num)) num = 0;

  const value = convertFromUSD ? num * USD_TO_INR : num;

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

export default formatINR;
