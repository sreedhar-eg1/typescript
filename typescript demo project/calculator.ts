// data:
// Initial Investment
// annual contribution
// expected return
// duration

type InvestmentData = {
  initialInvestment: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialInvestment, annualContribution, expectedReturn, duration } =
    data;

  if (initialInvestment < 0) {
    return "Initial investment amount must be atleast zero.";
  }

  if (duration <= 0) {
    return "No valid amount of years provided.";
  }

  if (expectedReturn < 0) {
    return "Expected return must be atleast zero.";
  }

  let total = initialInvestment;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialInvestment;
    totalContributions = totalContributions + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      totalAmount: total,
      totalContributions,
      totalInterestEarned,
      year: `year ${i + 1}`,
    });
  }

  return annualResults;
}

function printResults(results: CalculationResult) {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  for (const yaerEndResult of results) {
    console.log(yaerEndResult.year);
    console.log(`Total: ${yaerEndResult.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contribution: ${yaerEndResult.totalContributions.toFixed(0)}`
    );
    console.log(
      `Total Interest Earned: ${yaerEndResult.totalInterestEarned.toFixed(0)}`
    );
    console.log("----------------------------------------------------");
  }
}

const investmentData: InvestmentData = {
  annualContribution: 500,
  duration: 10,
  expectedReturn: 0.08,
  initialInvestment: 5000,
};

const results = calculateInvestment(investmentData);

printResults(results);
