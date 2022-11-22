const palindromes = function (string) {
    const withoutSigns = /[\w]+/; 
    let myNewString = string;
    let myCleanArray = [];

    let myFirstArray = myNewString
    .toLowerCase()
    .split("");

    for (const letter of myFirstArray) {
        if (withoutSigns.test(letter)) {
            myCleanArray.push(letter);
        }
    }
    
    let myReversedArray = myNewString
    .toLowerCase()
    .split("")
    .reverse();

    let regexedArray = [];

    for (const x of myReversedArray) {
        if (withoutSigns.test(x)) {
            regexedArray.push(x);
        }
    }

    return myCleanArray.toString() === regexedArray.toString(); 

};

// Do not edit below this line
module.exports = palindromes;
