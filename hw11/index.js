// Array methods

// forEach()
const numbersForEach = [1, 2, 3, 4, 5];
// Iterate over the array and print each element + 2, multiplied by 3
numbersForEach.forEach((number) => {
  console.log((number + 2) * 3);
});
// Output:
// 9
// 12
// 15
// 18
// 21
/*
Does not modify the original array.
forEach() method iterates over each element of an array and executes a callback function for each element. 
The callback function takes the element as its argument and can perform any operation on it, such as printing it to the console or modifying it.
The forEach() method does not modify the original array, but it can modify the elements of the array. For example, you could use forEach() to increment each element of an array by 1.
The forEach() method does not return anything.
*/

// concat()
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
// Concatenate two arrays
const combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]
/*
Does not modify the original array.
concat() method concatenates two or more arrays into a single array. 
It takes one or more arrays as arguments and returns a new array that contains all the elements from all the input arrays. 
The concat() method does not modify the original arrays, but it creates a new array.
The concat() method can be used to concatenate multiple arrays into a single array.
*/

// filter()
const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter out the numbers greater than 5
const numbersGreaterThan5 = numbersFilter.filter((number) => {
  return number > 5;
});
console.log(numbersGreaterThan5); // Output: [6, 7, 8, 9, 10]
/*
Does not modify the original array.
filter() method creates a new array containing only the elements of the original array that pass a test. 
It takes a callback function as its argument, and the callback function is executed for each element of the array. 
If the callback function returns true for an element, that element is included in the new array. 
The filter() method does not modify the original array, but it creates a new array containing only the elements that pass a test.
The filter() method can be used to filter out specific elements from an array.
*/

// find()
const numbersFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Find the first number greater than 5
const firstNumberGreaterThan5 = numbersFind.find((number) => {
  return number > 5;
});
console.log(firstNumberGreaterThan5); // Output: 6
/*
Does not modify the original array.
find() method returns the first element of an array that passes a test. 
It takes a callback function as its argument, and the callback function is executed for each element of the array. 
If the callback function returns true for an element, that element is returned. 
The find() method does not modify the original array, but it returns the first element that passes a test.
The find() method can be used to find a specific element in an array.
*/

// findIndex()
const numbersFindIndex5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Find the first number greater than 5
const firstIndexNumberGreaterThan5 = numbersFindIndex5.find((number) => {
  return number > 5;
});
console.log(firstIndexNumberGreaterThan5); // Output: 6
/*
Does not modify the original array.
findIndex() method returns the index of the first element of an array that passes a test. 
It takes a callback function as its argument, and the callback function is executed for each element of the array. 
If the callback function returns true for an element, the index of that element is returned. 
The findIndex() method does not modify the original array, but it returns the index of the first element that passes a test.
The findIndex() method can be used to find the index of a specific element in an array.
*/

// includes()
const numbersIncludes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Check if the array includes the number 5
const doesArrayInclude5 = numbersIncludes.includes(5);
console.log(doesArrayInclude5); // Output: true
/*
Does not modify the original array.
includes() method checks if an array contains a specified element. 
It takes an element as its argument and returns true if the element is found in the array, and false otherwise.
The includes() method does not modify the original array, but it returns true if the array contains a specified element, and false otherwise.
The includes() method can be used to check if an array contains a specific element.
*/

// indexOf():
const numbersFindIndexOf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Find the index of the first occurrence of the number 5
const indexOfFirstOccurrenceOf5 = numbersFindIndexOf.indexOf(5);
console.log(indexOfFirstOccurrenceOf5); // Output: 4
/*
Does not modify the original array.
indexOf() method returns the index of the first occurrence of a specified element in an array. 
It takes an element as its argument and returns the index of the first occurrence of that element in the array, or -1 if the element is not found.
The indexOf() method does not modify the original array, but it returns the index of the first occurrence of a specified element in the array, or -1 if the element is not found.
The indexOf() method can be used to find the index of a specific element in an array.
*/

// join():
const numbersJoin = [1, 2, 3, 4, 5];
// Join the elements of the array into a string
const numbersStringJoin = numbersJoin.join(",");
console.log(numbersStringJoin); // Output: "1,2,3,4,5"
/*
Does not modify the original array.
join() method joins all the elements of an array into a single string. 
It takes a separator as its argument, and the separator is inserted between each element of the array.
The join() method does not modify the original array, but it creates a new string by joining all the elements of the array into a single string.
The join() method can be used to convert an array to a string.
*/

// map()
const numbersMapping = [1, 2, 3, 4, 5];
// Multiply each element of the array by 2
const doubledNumbers = numbersMapping.map((number) => {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
/*
Does not modify the original array.
map() method creates a new array by applying a callback function to each element of the original array. 
It takes a callback function as its argument, and the callback function is executed for each element of the array. 
The result of the callback function is included in the new array.
The map() method does not modify the original array, but it creates a new array by applying a callback function to each element of the original array.
The map() method can be used to transform each element of an array in a specific way.
*/

// DIFFERENCE BETWEEN forEach() AND map():
/*
Key differences:
forEach() iterates over the original array and performs an operation on each element, but it does not modify the original array. 
map() also iterates over the original array, but it creates a new array containing the results of the callback function.
forEach() does not return anything, while map() returns a new array.

When to use forEach():
Use forEach() when you want to iterate over an array and perform an operation on each element, but you don't need to create a new array.
For example, you can use forEach() to print each element of an array to the console, or to modify each element of an array in place.
Use forEach() when you want to iterate over an array and perform an operation on each element, but you don't need to create a new array.
For example, you can use forEach() to print each element of an array to the console, or to modify each element of an array in place.

When to use map():
Use map() when you want to create a new array containing the results of a callback function applied to each element of the original array.
For example, you can use map() to create a new array containing the squares of each element of an array, 
or to create a new array containing the uppercase versions of each element of an array.
Use map() when you want to create a new array containing the results of a callback function applied to each element of the original array.
For example, you can use map() to create a new array containing the squares of each element of an array, 
or to create a new array containing the uppercase versions of each element of an array.
*/
// Here is an example that demonstrates the difference between forEach() and map():
const numbersForEachEx = [1, 2, 3, 4, 5];
// Iterate over the array and print each element using forEach()
numbersForEachEx.forEach((numberEx) => {
  console.log(numberEx);
});
// Create a new array containing the squares of each element using map()
const squaredNumbers = numbers.map((numberMapping) => {
  return numberMapping * numberMapping;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// push()
const numbersPush = [1, 2, 3];
numbersPush.push(4, 5); // [1, 2, 3, 4, 5]
/*
It modifies the original array.
Adds one or more elements to the end of an array and returns the new length of the array.
*/

// pop()
const numbersPop = [1, 2, 3, 4, 5];
const lastNumber = numbersPop.pop(); // 5
/*
It modifies the original array.
pop() method removes the last element from an array and returns that element.
*/

// shift()
const numberShift = [1, 2, 3, 4, 5];
const firstNumber = numberShift.shift(); // 1
/*
It modifies the original array.
shift() method removes the first element from an array and returns that element.
*/

//unshift()
const numberUnshift = [2, 3, 4, 5];
numberUnshift.unshift(1); // [1, 2, 3, 4, 5]
/*
It modifies the original array.
unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
*/

// splice() s used to add or remove elements from an array at a specified position.
/* syntax: splice(start, deleteCount, ...items) 
Parameters:
start: The index at which to start changing the array.
deleteCount: The number of elements to remove from the array.
items: The elements to add to the array.
*/
// Adding elements:
const numberSpliceAdd = [1, 2, 3, 4, 5];
numberSpliceAdd.splice(2, 0, 6, 7); // [1, 2, 6, 7, 3, 4, 5]
/*
It modifies the original array.
The splice() method is called with three arguments:
start: The index at which to start adding elements (2).
deleteCount: The number of elements to remove from the array (0).
items: The elements to add to the array (6 and 7).
The splice() method adds the elements 6 and 7 to the array at index 2, shifting the existing elements to the right.
*/
// Removing elements:
const numberSpliceRemoving = [1, 2, 3, 4, 5];
const deletedNumbers = numberSpliceRemoving.splice(2, 2); // [3, 4]
// can also be used to replace elements in an array:
const numbersReplace = [1, 2, 3, 4, 5];
numbersReplace.splice(2, 2, 6, 7); // [1, 2, 6, 7, 5]
/*
The splice() method replaces the elements at indices 2 and 3 with the elements 6 and 7, shifting the existing elements to the right.
* `start`: The index at which to start replacing elements (2).
* `deleteCount`: The number of elements to remove from the array (2).
* `items`: The elements to add to the array (6 and 7).
*/
// so...
/*
It modifies the original array. The deleted elements are returned in an array.
The splice() method removes the elements at indices 2 and 3 from the array, shifting the existing elements to the left.
The splice() method is called with three arguments:
start: The index at which to start removing elements (2).
deleteCount: The number of elements to remove from the array (2).
items: No items are being added to the array, so this argument is omitted.
*/

// String methods:

// slice()
const strWorld = "Hello, world!";
const newStr = strWorld.slice(7); // "world!"
/*
The slice() method extracts the characters from the starting index 
to the end of the string and returns them as a new string. In this case, the new string is "world!".
*/
// or
const strHello = "Hello, world!";
const newStr2 = strHello.slice(0, 5); // "Hello" To extract the first five characters of a string
//or
const strMinusFive = "Hello, world!";
const newStr3 = strMinusFive.slice(-5); // "world" To extract the last five characters of a string
//or
const strSection = "Hello, world!";
const newStr4 = strSection.slice(7, 12); // "world"  To extract a section of a string from the middle
/*
It does not modify the original string.
The slice() method extracts a section of a string and returns a new string.
*/

// Number Methods:

/*
these methods are only available in some JavaScript environments,
such as Node.js and some web browsers. In other environments, you can use the findIndex() and lastIndexOf() methods instead.
*/

// findLast()
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 28 },
];
users.findLast((user) => user.age > 27); // { name: 'Jane', age: 30 }

const num = [1, 2, 3, 4, 5, 6, 7];
let lastNum = num.findLast((x) => x > 5); // 7
/*
finLast() Does not modify the original array.
Finds the last user in the array whose age is greater than 27.
In this case, both Jane and Jack have ages greater than 27. 
However, Jane comes after Jack in the array, 
so she is the last element that satisfies the condition.
or finds the last number wich is bigger than 5 // 7
Returns the found user object or undefined if no user satisfies the condition.
*/

// findIndex()
const numbersFindIndex = [1, 2, 3, 4, 5];
const firstEvenNumberIndex = numbersFindIndex.findIndex(
  (number) => number === 2
);
console.log(firstEvenNumberIndex); // 1
/*
This callback function checks if the number is equal to 2. 
The findIndex() method starts from the first element in the array 
and calls the callback function for each element. 
When the callback function returns true for the element 2, 
the findIndex() method returns the index of that element (1) as the result.
*/

// findLastIndex()
const words = ["apple", "banana", "cherry", "durian", "elderberry"];
words.findLastIndex((word) => word.length > 5); // 3

const numInd = [1, 2, 3, 4, 5, 6, 7];
let lastNumInd = numInd.findLast((x) => x > 5); // 6
/* 
findLastIndex() Does not modify the original array. 
finds the index of the last element in the array that satisfies the given condition.
In this case, both "durian" and "elderberry" have lengths greater than 5. 
However, "elderberry" comes after "durian" in the array, so its index is greater.
*/

// lastIndexOf()
const wordsLastInd = ["apple", "banana", "cherry", "durian", "elderberry"];
const lastLongWordIndex = wordsLastInd.lastIndexOf((word) => word.length > 5);
console.log(lastLongWordIndex); // 3
/*
callback function checks if the word's length is greater than 5. 
The lastIndexOf() method starts from the last element in the array and calls the callback function for each element. 
When the callback function returns true for the element "durian", the lastIndexOf() method returns the index of that element (3) as the result.
*/

// toReversed()
const colors = ["red", "orange", "yellow", "green", "blue"];
colors.toReversed(); // ['blue', 'green', 'yellow', 'orange', 'red']
// or
const numbersRev = [1, 2, 3, 4, 5];
numbersRev.toReversed(); // [5, 4, 3, 2, 1]
/*
Does not modify the original array.
Returns a new array with the colors in the original array in reverse order.
*/

// toSorted()
const numbers = [9, 2, 5, 1, 4, 3, 7, 6, 8];
numbers.toSorted(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
/*
Does not modify the original array.
Returns a new array with the numbers in the original array sorted in ascending order.
*/

// toSpliced()
const numbersToSpliced = [1, 2, 3, 4, 5];
numbersToSpliced.toSpliced(2, 2, 6, 7, 8); // [1, 2, 6, 7, 8, 5]
/*
Does not modify the original array.
Returns a new array with the elements in the original array spliced.
Takes two parameters: the index at which to start splicing and the number of elements to remove.
Can also take additional parameters to specify the elements to insert in place of the removed elements.
*/

// with()
const numbersWith = [1, 2, 3, 4, 5];

numbersWith.with((array) => {
  array[2] = 6;
  array[4] = 7;
}); // [1, 2, 6, 4, 7]
/*
Returns the original array after the callback function has been executed.
Allows you to modify the original array within the callback function.
Executes a callback function with the original array as its argument.
*/

// toString()
const numberToString = 123.456;
numberToString.toString(); // "123.456"
/*
Does not modify the original number.
Converts a number to a string representation.
*/

// toFixed()
const numberToFixed = 123.456789;
numberToFixed.toFixed(2); // "123.46"
/*
Does not modify the original number.
Converts a number to a string representation, 
rounding to the specified number of decimal places.
*/

// toExponential()
const number = 123456789;
const newNumber = number.toExponential(); // "1.23456789e+8"
/*
Does not modify the original number.
The toExponential() method converts a number to 
a string in exponential notation and returns the string.
*/

// Object methods:

// Object.keys()
const personKeys = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
const keys = Object.keys(personKeys); // ["name", "age", "city"]
/*
It does not modify the original object.
The Object.keys() method returns an array of the keys of an object.
*/

// Object.values()
const personValuse = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const values = Object.values(personValuse); // ["John Doe", 30, "New York"]
/*
It does not modify the original object.
The Object.values() method returns an array of the values of an object.
*/

// entries() entries() method is only available for objects that are iterable.
const personEntries = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
const entries = Object.entries(personEntries);
console.log(entries); // [['name', 'John Doe' ],[ 'age', 30 ],[ 'city', 'New York' ]]
/*
Object.entries() method returns an array of key-value pairs for each property in the personEntries object. 
Each key-value pair is represented as an array of two elements
*/

// lets iterate over object entries:
for (const [key, value] of entries) {
  console.log(`Key: ${key}, Value: ${value}`);
}
/*Output:
Key: name, Value: John Doe
Key: age, Value: 30
Key: city, Value: New York
*/

// or lets convert object to an array:
const array = Array.from(entries);
console.log(array); // [['name', 'John Doe' ],[ 'age', 30 ],[ 'city', 'New York' ]]

// assign()
const person1 = {
  name: "John Doe",
  age: 30,
};
const person2 = {
  city: "New York",
};
Object.assign(person1, person2); // { name: "John Doe", age: 30, city: "New York" }
/*
It modifies the target object.
The Object.assign() method copies the properties of one or more source objects to a target object and returns the target object.
*/

// FUNCTIONS:

// Number()
const stringNumber = "123.456";
Number(stringNumber); // 123.456
/*
Does not modify the original number.
Converts a string representation of a number to a number.
*/
// or
const booleanTrue = true;
const booleanFalse = false;
const numberTrue = Number(booleanTrue);
const numberFalse = Number(booleanFalse);
console.log(numberTrue); // Output: 1
console.log(numberFalse); // Output: 0
/*
The Number() function can also be used to convert a boolean value to a number. 
For example, Number(true) is equal to 1, and Number(false) is equal to 0.
*/
// or
/*
Number() function can be used to convert boolean values to numbers. This can be useful in certain situations, 
such as when you need to perform mathematical operations on boolean values. 
For example, the following code uses the Number() function to calculate the average of a list of boolean values:
*/
const booleanValues = [true, false, true, false, true];
const sum = booleanValues.reduce((a, b) => Number(a) + Number(b));
const average = sum / booleanValues.length;
console.log(average); // Output: 0.6
/*
In this example, the reduce() method is used to sum the boolean values in the booleanValues array. 
The Number() function is used to convert each boolean value to a number before it is added to the sum. 
The average variable is then calculated by dividing the sum by the length of the booleanValues array.
The output of this code is 0.6, which is the average of the boolean values true, false, true, false, and true.
*/

// parseInt()
const stringParseInt = "123abc456";
parseInt(stringParseInt); // 123
/*
Does not modify the original string.
Parses a string and returns the first integer it finds.
Ignores any characters after the first non-digit character.
*/

// parseFloat()
const stringParseFloat = "123.456abc";
parseFloat(stringParseFloat); // 123.456
/*
Does not modify the original string.
Parses a string and returns the first floating-point number it finds.
Ignores any characters after the first non-digit character.
*/

// Math.floor():
const numberFloor = 2.5678;
const flooredNumber = Math.floor(number);
console.log(flooredNumber); // Output: 2
/*
The Math.round() function takes a number as its argument and rounds it to the nearest integer.
If the number is equidistant between two integers, it is rounded to the nearest even integer.
*/

// Math.round():
const numberRound = 3.14159;
const roundedNumber = Math.round(number);
console.log(roundedNumber); // Output: 3
/*
The Math.floor() function takes a number as its argument and rounds it down to the nearest integer.
This means that any fractional part of the number is removed.
*/

// Math.ceil():
const numberCeil = 4.99999;
const ceiledNumber = Math.ceil(number);
console.log(ceiledNumber); // Output: 5
/*
The Math.ceil() function takes a number as its argument and rounds it up to the nearest integer.
This means that any fractional part of the number is increased by 1.
*/

// Math.random():
const randomNumber = Math.random();
console.log(randomNumber); // Output: A random number between 0 and 1, but not including 1
// or
const randomNumber2 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber2); // Output: A random integer between 1 and 10, including 1 and 10
// or
const randomNumber3 = Math.random() * 9 + 1;
console.log(randomNumber3); // Output: A random number between 1 and 10, but not including 10
/*
The Math.random() function generates a random number between 0 and 1, but not including 1.
This means that the possible values are 0, 0.1, 0.2, 0.3, ..., 0.9.
The Math.random() function can be used to generate a random number between 0 and 1, but not including 1.
The Math.random() function can also be used to generate a random number between a specified range. 
For example, to generate a random number between 1 and 10, you can use the following code: Math.floor(Math.random() * 10) + 1.
*/

// CONCLUSION

/*

Methods that modify the original array:

push(): Adds one or more elements to the end of an array and returns the new length of the array.
pop(): Removes the last element from an array and returns that element.
shift(): Removes the first element from an array and returns that element.
unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
splice(): Used to add or remove elements from an array at a specified position.
Methods that do not modify the original array:

Methods that do not modify the original array:

forEach(): Iterates over each element of an array and executes a callback function for each element.
concat(): Concatenates two or more arrays into a single array.
filter(): Creates a new array containing only the elements of the original array that pass a test.
find(): Returns the first element of an array that passes a test.
findIndex(): Returns the index of the first element of an array that passes a test.
includes(): Checks if an array contains a specified element.
indexOf(): Returns the index of the first occurrence of a specified element in an array, or -1 if the element is not found.
join(): Joins all the elements of an array into a single string.
map(): Creates a new array by applying a callback function to each element of the original array.
slice(): Extracts a section of a string or array and returns it as a new string or array.
sort(): Sorts the elements of an array in place and returns the sorted array.
reverse(): Reverses the order of the elements of an array in place and returns the reversed array.
Other JavaScript functions:

Other JavaScript functions:

Number(): Converts a string representation of a number to a number.
parseInt(): Parses a string and returns the first integer it finds.
parseFloat(): Parses a string and returns the first floating-point number it finds.
Math.round(): Rounds a number to the nearest integer.
Math.floor(): Rounds a number down to the nearest integer.
Math.ceil(): Rounds a number up to the nearest integer.
Math.random(): Returns a random number between 0 and 1.

*/
