const removeFromArray = function(...args) {
    let array = args[0];    
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;}
  //  } else {"not enough arguments"}
//}

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