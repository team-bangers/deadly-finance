


var loanFactors = {
    principle = [],
    termLength = [],
    interestRate = [],
    standardRates = 0.04,
    percentile = 0.02,
    calculateMonthlyRepayments: (principle, interestRate, termLength) => {
        return principle*(interestRate/12)/(1-Math.pow(1+interestRate/12,-termLength));
    },
    // calculateTotalRepayment:function(){
    //     return 
    // },
    // compareToStandardRates: function(){
    //     if (loanFactors.interestedRate > loanFactors.standardRates + percentile){

    //     } 
    //     else if (loanFactors.interestRate < loanFactors.standardRates - percentile){

    //     }
    //     else {

    //     }
    // },
}

export default loanFactors;
