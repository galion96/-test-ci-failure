function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // Bug: doesn't handle division by zero
  return a / b;
}

function calculateDiscount(price, percent) {
  // Bug: wrong formula (divides by 10 instead of 100)
  return price - (price * percent / 10);
}

function isEven(n) {
  // Bug: returns wrong result for negative numbers
  return n % 2 === 0;
}

module.exports = { add, subtract, multiply, divide, calculateDiscount, isEven };
