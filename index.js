let ratioOfTwoNumbers = require("../ratio/index.js");
let factorialOfNumber = require("../factorial/index.js");

function ratioAndFactorial(x, y, z) {
  return {
    ratio: ratioOfTwoNumbers(x, y),
    factorial: factorialOfNumber(z),
  };
}

module.exports = ratioAndFactorial;

console.log(ratioAndFactorial(3, 4, 5));
