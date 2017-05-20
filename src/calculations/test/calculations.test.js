
const loanFactors = require('../calculations');

// monthly repayments assuming compound interest

test('calculate monthly repayments for 15000P, 0.03I, 60months to return 270', () => {
  expect(loanFactors.calculateMonthlyRepayments(15000, 0.03,60,0)).toBe(270);
});

test('calculate monthly repayments for 15000P, 0.03I, 60months,500 fees to return 770', () => {
  expect(loanFactors.calculateMonthlyRepayments(15000, 0.03,60,500)).toBe(770);
});

// test Total Values

test('calculate total repayments for 15000P, 0.03I, 60months, 0 fees to return 16172', () => {
  expect(loanFactors.calculateTotalRepayment(15000, 0.03,60,0)).toBe(16172);
});

test('calculate total repayments for 15000P, 0.03I, 60months, 500 fees  to return 46172', () => {
  expect(loanFactors.calculateTotalRepayment(15000, 0.03,60,500)).toBe(46172);
});

// test currentIncome 
test('monthly payments 15000P, 0.03I, 60months,500 fees and current income 900 to be false', () => {
  expect(loanFactors.isloanTooHigh(15000, 0.03,60,500,900)).toBe(true);
});

test('monthly payments 15000P, 0.03I, 60months,0 fees and current income 900 to be true', () => {
  expect(loanFactors.isloanTooHigh(15000, 0.03,60,0, 900)).toBe(false);
});

// test total income over term length
test('total income of $8000/month over 60 month term', ()=>{
  expect(loanFactors.incomeOverPeriod(60, 8000)).toBe(480000);
});
