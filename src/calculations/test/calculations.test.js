
const loanFactors = require('../calculations');


test('calculate monthly repayments for 1500P, 0.03I, 60months to return 127.2', () => {
  expect(loanFactors.calculateMonthlyRepayments(1500, 0.03,60)).toBe(127.2);
});


// calculateMonthlyRepayments: (principle, interestRate, termLength) => {
//         return principle*(interestRate/12)/(1-Math.pow(1+interestRate/12,-termLength));
//     }