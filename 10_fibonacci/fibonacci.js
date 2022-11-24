const fibonacci = function(nthNumber) {
    let myArray = [1, 1];
    if (typeof nthNumber === 'string') {
        let toNUmber = Number(nthNumber);
        let index = toNUmber -1;

        if (index < 0) {
            return 'OOPS'
        } else if (index <= 1) {
            return myArray[index];
        } else {
            for(let i = 1; i < index; i++)  {
                // mySum = myArray[length];
                myArray.push(myArray[myArray.length-2] + myArray[myArray.length-1]);
            }
            return myArray[index];
        }  
              
    } else {

    let index = nthNumber - 1;

    if (index < 0) {
        return 'OOPS'
    } else if (index <= 1) {
        return myArray[index];
    } else {
        for(let i = 1; i < index; i++)  {
            // mySum = myArray[length];
            myArray.push(myArray[myArray.length-2] + myArray[myArray.length-1]);
        }
        return myArray[index];
    }
        
    }
    

    };

// Do not edit below this line
module.exports = fibonacci;
