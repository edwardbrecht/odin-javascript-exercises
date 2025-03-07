const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, num) => {
    return sum + num
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((result, num) => {
    return result * num;
  }, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
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
