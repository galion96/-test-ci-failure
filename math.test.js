const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, calculateDiscount, isEven } = require('./math');

// These will PASS
test('add: 2 + 3 = 5', () => {
  assert.strictEqual(add(2, 3), 6);
});

test('add: negative numbers', () => {
  assert.strictEqual(add(-1, -1), -2);
});

test('subtract: 5 - 3 = 2', () => {
  assert.strictEqual(subtract(5, 3), 2);
});

test('multiply: 4 * 5 = 20', () => {
  assert.strictEqual(multiply(4, 5), 20);
});

// These will FAIL
test('divide: handles division by zero', () => {
  // Expects an error or Infinity handling, but gets Infinity
  const result = divide(10, 0);
  assert.strictEqual(result, 'Cannot divide by zero');
});

test('calculateDiscount: 20% off $100 should be $80', () => {
  // Bug: returns 80 instead of correct calculation
  assert.strictEqual(calculateDiscount(100, 20), 80);
});

test('calculateDiscount: 50% off $200 should be $100', () => {
  assert.strictEqual(calculateDiscount(200, 50), 100);
});

test('isEven: -4 should be even', () => {
  assert.strictEqual(isEven(-4), true);
});

test('isEven: -3 should be odd', () => {
  // This might fail depending on JS modulo behavior
  assert.strictEqual(isEven(-3), false);
});
