const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((total, current) => total + current, 0);
}

/*const sum = function(numArray) {
	let sumArray = 0;
  for (const num of numArray) {
    sumArray += num;
  }

  return sumArray;
};
*/

const multiply = function(numArray) {
  return numArray.reduce((total, current) => total * current);
}

/*const multiply = function(numArray) {
  let multiplyArray = 1;
  for (const num of numArray) {
    multiplyArray *= num;
  }

  return multiplyArray;
};
*/

const power = function(base, exp) {
  return base**exp;
};

const factorial = function(num) {
	if (num == 0)
    return 1;
  else {
    let result = 1;
    for (i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
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
