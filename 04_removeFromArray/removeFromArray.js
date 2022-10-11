const removeFromArray = function(...args) {
    let array = args[0];    
    let argumentsLength = arguments.length;
    
    if (argumentsLength === 2){
        let valueToRemove = args[1];
        for (let i = 0; i <= array.length; i++){
            if (array[i] === valueToRemove){
                let firstPartOfArray = array.slice(0, array.indexOf(valueToRemove));
                let secondPartOfArray = array.slice(array.indexOf(valueToRemove) + 1);
                let concatenatedArray = firstPartOfArray.concat(secondPartOfArray);
                return concatenatedArray;
            }
        }
    } else if (argumentsLength > 2) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!args.includes(array[i])) {

                newArray.push(array[i]);
            }
        }        
        return newArray;
    } else {"not enough arguments"}
}

// const removeFromArray = function(...args) {
//     const array = args[0];
//     const newArray = [];
//     array.forEach(element => {
//         if(!args.includes(element)){
//             newArray.push(element);
//         }        
//     });    
//     return array;
// }

// Do not edit below this line
module.exports = removeFromArray;


