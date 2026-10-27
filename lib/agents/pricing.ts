export function calculatePricing(productType: 'tee' | 'hoodie') {
  const cost = productType === 'tee' ? 12 : 24;
  const retail = productType === 'tee' ? 68 : 148;
  const profit = retail - cost - 3; // stripe fee approx
  return { cost, retail, profit };
}