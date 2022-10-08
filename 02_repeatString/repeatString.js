const repeatString = function(string, num) {

    //FOR LOOP
    if (num >= 0) {
    let repeatedString = [];
    for (let i = 0; i < num; i++){
        repeatedString.push(string) 
    } return repeatedString.join("");
    } else {return "ERROR"};

    // //REPEAT METHOD
    // return string.repeat(num);

    // //WHILE LOOP
    // var repeatedString ="";
    // while(num > 0) {
    //     repeatedString += string;
    //     num--
    // } return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
