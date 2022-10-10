const removeFromArray = function(array, valueToRemove) {
    let newArray = [...array];
    let valueToremoveLength = null;
    if (!Array.isArray(valueToRemove)){
        for (let i = 0; i <= newArray.length; i++){
            if (newArray[i] === valueToRemove){
                let firstPartOfArray = newArray.slice(0, newArray.indexOf(valueToRemove));
                let secondPartOfArray = newArray.slice(newArray.indexOf(valueToRemove) + 1);
                let concatenatedArray = firstPartOfArray.concat(secondPartOfArray);
                return concatenatedArray;
            }
        }

    } else {
        return "more than one"
    }
    

};

// Do not edit below this line
module.exports = removeFromArray;
