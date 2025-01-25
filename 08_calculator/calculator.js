const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let result = array.reduce((output,current) => {
    return output+current;
  },0)
  return result;
};

const multiply = function(array) {
	let result = array.reduce((output,current) => {
    return output*current;
  },1)
  return result;
};

const power = function(a,b) {
  console.log(a^b);
  return a**b;
	
};

const factorial = function(num) {
  let result = 1;
  for (let i=1; i<=num; i++) {
    result = result*i;
  }
	return result
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

console.log(factorial(5))