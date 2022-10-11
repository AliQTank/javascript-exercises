const leapYears = function(year) {
    return year % 400 === 0 ? true :
    year % 100 === 0 ? false :
    year % 4 === 0 ? true : false;
    
    // if (year % 400 === 0) {
    //     return true
    // } else if (year % 4 === 0) {
    //     if (year % 100 ===0) {
    //         return false;
    //     } return true
    // }
    // return false
};

// Do not edit below this line
module.exports = leapYears;
