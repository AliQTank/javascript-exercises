const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];    
  }	
  return arraySum
};

const sumreduceMethod = function (array) {
  return array.reduce((total, index) => total + index, 0);
}

function multiply(array) {
  let arrayMultiplication = 1;
  for (let i = 0; i < array.length; i++) {
    arrayMultiplication *= array[i];
  }
  return arrayMultiplication;
}

const multiplyReduceMethod = function(array) {
  return array.length 
  ? array.reduce((total, indexValue) => total * indexValue,)
  : 0;
}

function power(a, b) {
  return a ** b;
}

const factorial = function(value) {
  if (value <= 1) {
    return 1
  } else {
    return value * factorial(value-1);
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
