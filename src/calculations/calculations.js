

var loanFactors = {
    standardRate: 0.04,
    healthyRange: 0.02,
    goodIncomePortion: 0.3,
    // principal in $
    // interestRate %/annum
    // termLength in months
    // fees in $/month
    // currentIncome in $
    calculateMonthlyRepayments: (principal, interestRate, termLength, fees) => { // termLength in months
        return fees+Math.ceil((principal*(interestRate/12))/(1-Math.pow(1+interestRate/12,-termLength)));
    },
    calculateTotalRepayment: (principal, interestRate, termLength, fees) => {
        return Math.ceil(termLength*(fees+(principal*(interestRate/12))/(1-Math.pow(1+interestRate/12,-termLength))));
    },
    isLoanTooHigh: (principal, interestRate, termLength, fees, currentIncome) =>{
        var monthlyRepayments = fees+Math.ceil((principal*(interestRate/12))/(1-Math.pow(1+interestRate/12,-termLength)));
        if (monthlyRepayments > loanFactors.goodIncomePortion*currentIncome){
            return true;
        } return false;
    },
    incomeOverPeriod: (termLength, currentIncome) => {
        return currentIncome * termLength;
    },
    percentOfLoanToCar: (carPrice, loan) => {
        return loan/carPrice;
    }, 
}
module.exports =loanFactors;
