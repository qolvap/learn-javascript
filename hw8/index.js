"use strict";
// 1) sloppy "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language

// hoisting - the way to describe the behavior of hoisting(lifting up) the variable declaration to the top of the context(scope) its runing in.
// how js see this?
var age; // first declaration, variables declared with var are hoisted, let & const are not hoisted
console.log(age); // undefined - then log, which logs inatial value of undefined
age = 26; // then assigned value to the variable age
// var message = "hello world";
// var message = "hello again";

// for the browser the global object is named - window
// for the server the global object is named - global

// console.log(message);

// var console = 'hi'
// console.log("hi");

// let / const use let when the value is going to change
console.log(age);
// temporal dead zone - u cant use variable before it exists, it doesnt exist yet.
let age = 26; // thows an error:ReferenceError: Cannot access 'age' before initialization
console.log(age);
const age = 26; // thows an error:ReferenceError: Cannot access 'age' before initialization
let age = 26;
let age = 26; // thows an error: its already been declared before
// using let:
let age;
age = 26;
age = 36; // reasigning
// block scope. A set of grouped commands is called a block of code. The block is commonly used with structures if, for, while, function etc.
var price = 20;
var isSale = true;
// variable shadowing - the effect of overwritting variables
if (isSale) {
  // discount price of product
  var price = 20 - 2;
  // do something
  console.log("sale price", price); // ›sale price,18
}

console.log("original price", price); // ›price,20
// new price is living in global, not only in if statment & effecting the original price
// variables declared with var live in global scope, var ignores the if statment block
// let & const are block scoped, any variable created in block scope, cannot be accesed outside the block
// let & const - block-scoped
if (isSale) {
  // discount price of product
  let price = 20 - 2;
  // do something
  console.log("sale price", price); //  ›sale price,18
}

console.log("price", price); // ›price,20
// another example
function check() {
  if (true) {
    var x = 5;
  }
  conosle.log(x);
}
check(); // !ReferenceError: conosle is not defined
/* var is scoped in the if statement not the whole function because
the var was defined in the if statement and not the function itself.  
If the var was defined outside the if statement and inside the function then the value will be 5 */
// another example
var b = 10;
if (b % 3 == 0) {
  var i = 10;
}
console.log(i); // output is undefined value because i lives in if statment block-scoped
