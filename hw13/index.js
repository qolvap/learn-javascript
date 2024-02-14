// Function "addNumber"
function addNumber(arr, number) {
  // Check if number is 0 or NaN
  if (number === 0 || isNaN(number)) {
    return arr; // Return original array
  }

  // Check if number is positive
  if (number > 0) {
    arr.unshift(number); // Add number to the beginning of the array
  } else {
    arr.push(number); // Add number to the end of the array
  }

  return arr; // Return modified array
}

let array = [1, 2, 3, 4, 10, 8, 1, 3, 7, 11];
let number = 8;

let newArray = addNumber(array, number);
console.log(newArray); // [8, 1, 2, 3, 4, 10, 8, 1, 3, 7, 11]

number = -8;
newArray = addNumber(array, number);
console.log(newArray); // [1, 2, 3, 4, 10, 8, 1, 3, 7, 11, -8]

number = 0;
newArray = addNumber(array, number);
console.log(newArray); // [1, 2, 3, 4, 10, 8, 1, 3, 7, 11]

number = NaN;
newArray = addNumber(array, number);
console.log(newArray); // [1, 2, 3, 4, 10, 8, 1, 3, 7, 11]

// Function "compareArrays"
function compareArrays(arr1, arr2) {
  // Check if arrays have different lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate through each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // If any corresponding elements are different, return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // If all corresponding elements are the same, return true
  return true;
}

const arr1 = [8, 1, 2, 3, 4, 10, 8, 1, 3, 7, 11];
const arr2 = [8, 1, 2, 3];

console.log(compareArrays(arr1, arr1)); // true
console.log(compareArrays(arr1, arr2)); // false

// Function "getNumberOfEven"
function getNumberOfEven(arr) {
  // Initialize a variable to store the count of even elements
  let count = 0;

  // Iterate through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Check if the element is a number and even
    if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
      // If it's even, increment the count
      count++;
    }
  }

  // Return the count of even elements
  return count;
}

const arr = [8, 1, 2, 3, 4, 10, 8, 1, 3, 7, 11];
console.log(getNumberOfEven(arr)); // 5

// Function "getSubarray"
function getSubarray(arr, data) {
  // Check if the array is empty or does not contain the data
  if (arr.length === 0 || !arr.includes(data)) {
    return [];
  }

  // Find the index of the data in the array
  const dataIndex = arr.indexOf(data);

  // Return the subarray from the beginning until the data index (inclusive)
  return arr.slice(0, dataIndex + 1);
}

// Example usage:
const arrNum = [8, 1, 2, 3, 4, 10, 8, 1, 3, 7, 11];
let data = 7;
console.log(getSubarray(arrNum, data)); // [8, 1, 2, 3, 4, 10, 8, 1, 3, 7]

data = 0;
console.log(getSubarray(arrNum, data)); // []

const arrNum1 = ["d", "ds", "asdx", "r", "w", "w"];
let data1 = "r";
console.log(getSubarray(arrNum1, data1)); // ['d','ds','asdx', 'r']

data1 = "w";
console.log(getSubarray(arrNum1, data1)); // ['w', 'w']

// Function "getDuplicateValues"
function getDuplicateValues(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return [];
  }

  // Create an object to store the count of each element
  const countMap = {};
  const duplicates = [];

  // Iterate through the array and count the occurrences of each element
  arr.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;
  });

  // Iterate through the countMap to find elements with count greater than 1 (duplicates)
  for (const key in countMap) {
    if (countMap[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

// Example usage:
const arrDubNum = [8, 1, 2, 3, 4, 10, 8, 1, 3, 7, 1, 1];
console.log(getDuplicateValues(arrDubNum)); // [8, 1, 3]

const arrDubNum1 = ["d", "ds", "asdx", "r", "w", "w"];
console.log(getDuplicateValues(arrDubNum1)); // ['w']

// Function "getMaxNumbers"
function getMaxNumbers(arrMax) {
  // Initialize an empty array to store the maximum numbers
  let maxNumbers = [];

  // Check if the passed array is not empty
  if (arrMax.length === 0) {
    return maxNumbers; // Return empty array if the input array is empty
  }

  // Iterate through each subarray in the main array
  for (let subArr of arrMax) {
    // Find the maximum number in the current subarray
    let max = Math.max(...subArr);
    // Add the maximum number to the maxNumbers array
    maxNumbers.push(max);
  }

  // Return the array of maximum numbers
  return maxNumbers;
}

// Example usage:
const arrMax = [[1, 6, 9, 1], [2, 3, -4, 8], [15]];
console.log(getMaxNumbers(arrMax)); // Outputs: [9, 8, 15]

const arrMax1 = [];
console.log(getMaxNumbers(arrMax1)); // Outputs: []

const arrMax2 = [
  [1, 6, 9, 1],
  [2, 3, -4, 8],
];
console.log(getMaxNumbers(arrMax2)); // Outputs: [9, 8]
