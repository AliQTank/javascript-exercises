const sumAll = function(firstInt, secondInt) {
    let acumSum = 0;


    if (Number.isInteger(firstInt) && Number.isInteger(secondInt) && firstInt > 0 && secondInt > 0) {
        if (firstInt < secondInt) {
            for (let i = firstInt; i <= secondInt; i++){
                acumSum += i;
            }
            return acumSum;
        } else {
            for (let i = firstInt; i >= secondInt; i--){
                acumSum += i;
            }
            return acumSum;
        }
    } return "ERROR";        
    
};

// Do not edit below this line
module.exports = sumAll;
