const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function(rest) {
  let total = 1;
  for(let i = 0; i < rest.length; i++){
    total *= rest[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let total = 1;
	for(i = num; i > 0; i--){
    total *= i;
  }
  return total;
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
