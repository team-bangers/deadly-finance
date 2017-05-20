

var loanFactors = {
    standardRate: 0.04,
    percentile: 0.02,
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
module.exports =loanFactors;
// export default loanFactors;

// console.log(loanFactors.calculateMonthlyRepayments(1500,0.03,60));