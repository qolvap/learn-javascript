function getMin(number1, number2, number3) {
  const min = Math.min(number1, number2, number3);
  return min;
}

function evenOrOdd(x, y, z) {
  if (x % 2 === 0 && y % 2 === 0 && z % 2 === 0) {
    return "even";
  } else if (x % 2 !== 0 && y % 2 !== 0 && z % 2 !== 0) {
    return "odd";
  } else {
    return "even/odd";
  }
}

function inOrOutRange(x, y, z) {
  if (z >= x && z <= y) {
    return "In range";
  } else {
    return "Out of range";
  }
}

// check
console.log("getMin(5, 9, 7):", getMin(5, 9, 7)); // 5
console.log("getMin(5, 0, -7):", getMin(5, 0, -7)); // -7

console.log("evenOrOdd(1, 3, 11):", evenOrOdd(1, 3, 11)); // odd
console.log("evenOrOdd(2, 4, 8):", evenOrOdd(2, 4, 8)); // even
console.log("evenOrOdd(2, 5, 8):", evenOrOdd(2, 5, 8)); // even/odd

console.log("inOrOutRange(5, 10, 8):", inOrOutRange(5, 10, 8)); // In range
console.log("inOrOutRange(0, 6, 11):", inOrOutRange(0, 6, 11)); // Out of range
