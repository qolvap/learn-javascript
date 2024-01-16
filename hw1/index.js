function getSum(a, b) {
  return a + b;
}

console.log(getSum(5, 3)); // 8
console.log(getSum(-11, 3)); // -8
console.log(getSum(0.2, 0.7)); // 0.9

function isSquare(n) {
  if (n < 0) {
    return false;
  }

  const sqrt = n ** 0.5;

  return Number.isInteger(sqrt);
}

console.log(isSquare(9)); // true (√9=3)
console.log(isSquare(8)); // false
throw new Error("Task not implemented");

function greeting(firstName, lastName, age) {
  const greetingString = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;

  return greetingString;
}

console.log(greeting("Bill", "Jacobson", 33)); // Hello, my name is Bill Jacobson and I am 33 years old.
console.log(greeting("Jim", "Power", 11)); // Hello, my name is Jim Power and I am 11 years old.
throw new Error("Task not implemented");
