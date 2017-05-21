const loanFactors = require('./calculations');
const answers = require('../questions');

var algorithm = {
    calculateStars: (answers) => {
        // start with 3 stars 
        var stars = 3;
        // automatic fail criteria
        console.log(answers);
        if (answers[1].a == false) return 1; // know interest rate
        else {
            return 3;
        }
        // if (answers[9].a == true) return 1; // pay before receive
        // if (answers[10].a == true) return 1; // look sketchy

        // // get calculation data
        // var monthly = loanFactors.calculateMonthlyRepayments();
        // var totalLoan = loanFactors.calculateTotalRepayment();
        // var tooHigh = loanFactors.isLoanTooHigh();
        // var totalIncome = loanFactors.incomeOverPeriod();
        // var carPercent = loanFactors.percentOfLoanToCar();
        
        /* running algorithm*/
        // check interest rate
        // if (answers[2].a <= 1) star = algorithm.starDecrease(star, 2);
        // if (answers[2].a > 1 && answers[2].a <= 4) star= algorithm.starIncrease(star,1);
        // if (answers[2].a > 4 && answers[2].a <= 8)  star = algorithm.starDecrease(star,1);
        // if (answers[2].a > 8 && answers[2].a <= 11) star = algorithm.starDecrease(star,2);
        // if (answers[2].a > 11) return 1; // you're being screwed!  
        
        // // check down payment
        // if (answers[4].a > false) star = algorithm.starDecrease(star,2);
        
        // // check if there are accessories
        // if (answers[5].a > true) star = algorithm.starDecrease(star, 1);
        // else {
        //     star = algorithm.starIncrease(star, 1);
        // }

        // //
        return stars;
    },
    starIncrease: (starValue, change)=>{
        starValue+=change;
        if (starValue > 5) starValue = 5;
        return starValue;
    },
    starDecrease: (starValue) => {
        starValue-=change;
        if (starValue < 1) starValue = 1;
        return starValue;
    },
    starDoNothing: ()=>{
        return 0;
    }
}

module.exports =algorithm;