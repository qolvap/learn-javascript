// Create a string of numbers separated by a space.
function createString(x, y, step) {
  let result = "";
  for (let i = x; i <= y; i += step) {
    result += i + " ";
  }
  return result.trim();
}

// Test cases for createString
console.log(createString(0, 20, 5)); // Expected: "0 5 10 15 20"
console.log(createString(0, 21, 4)); // Expected: "0 4 8 12 16 20"

// Write a function which returns the sum of the series up to n-th term.
function rangeSum1(x, y) {
  let sum = 0;
  for (let i = 0; i <= y; i++) {
    sum += i;
  }
  return sum;
}

// Test cases for rangeSum1
console.log(rangeSum1(0, 3)); // Expected: 10
console.log(rangeSum1(1, 4)); // Expected: 20

// Create a JavaScript function to get the sum of all numbers in the given range.
function rangeSum2(x, y) {
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}

// Test cases for rangeSum2
console.log(rangeSum2(5, 10)); // Expected: 45
console.log(rangeSum2(0, 6)); // Expected: 21

// Write a function which returns the sum of the series up to nth term with rounding.
function seriesSum(x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += 1 / (i * i);
  }
  return sum.toFixed(2);
}

// Test cases for seriesSum
console.log(seriesSum(1)); // Expected: "1.00"
console.log(seriesSum(5)); // Expected: "1.46"
console.log(seriesSum(0)); // Expected: "0.00"

// Create a function to calculate the number of digits.
function countDigits(x) {
  return x.toString().length;
}

// Test cases for countDigits
console.log(countDigits(123654789)); // Expected: 9
console.log(countDigits(252525)); // Expected: 6
console.log(countDigits(0)); // Expected: 1
