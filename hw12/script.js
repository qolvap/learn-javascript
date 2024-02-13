// Function to create a user object with first name and last name properties
function createUser(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

/*
This function takes two parameters: firstName - a string with the user's first name. lastName - a string with the user's last name.

The function should create a new object and return it.
This object should have two properties: firstName and lastName.
firstName and lastName function parameters should be set to new object properties accordingly:
*/

// Creating a user object using createUser function
let userCheck = createUser("Stan", "Lee");
console.log("user: ", userCheck);

// Function to get the full name from a user object
function getFullName(user) {
  // Check if the user object exists and has firstName and lastName properties
  if (!user || !user.firstName || !user.lastName) {
    return ""; // Return an empty string if user object or properties are missing
  }

  // Return the full name by concatenating firstName and lastName with a space in between
  return `${user.firstName} ${user.lastName}`.trim();
}

/*
The function takes an object(user) as a parameter.
This object(user) has two mandatory properties: firstName and lastName.
The function should merge values from these properties, starting from firstName, adding one space between them, and return the result.
The function should return an empty string '' if a user object is not passed.
*/

// Creating a user object
let user = {
  firstName: "Stan",
  lastName: "Lee",
};

// Getting the full name from the user object
let fullName = getFullName(user);
console.log(fullName); // "Stan Lee"

// Testing getFullName function with an empty object
let emptyFullName = getFullName();
console.log(emptyFullName); // ""

// Function to get the width value from a nested property of an object
function getWidth(params) {
  // Check if the params object and its nested properties exist
  if (!params || !params.styling || !params.styling.sizes) {
    return null; // Return null if params or required properties are missing
  }

  // Return the width value from the nested property, or null if not found
  return params.styling.sizes.width || null;
}

/*
The function should return a value from the nested property width.
params object always has the format described above.
Also, the function should not break for an empty object or an object with empty styling object inside. 
It should return null in this case.
 */

// Example objects with nested properties
let params1 = {
  styling: {
    sizes: {
      width: "777px",
      height: "888px",
    },
  },
};

// Getting the width value from the params1 object
let width1 = getWidth(params1);
console.log(width1); // "777px"

// Testing getWidth function with an empty object
let params2 = {};
let nullWidth1 = getWidth(params2);
console.log(nullWidth1); // null

// Testing getWidth function with missing nested properties
let params3 = {
  styling: {},
};
let nullWidth2 = getWidth(params3);
console.log(nullWidth2); // null

// Function to extend an object with a new property
function extendObject(obj, isValid) {
  // Clone the original object
  let clonedObject = { ...obj };

  // Add a new property to the cloned object
  clonedObject.isValid = isValid;

  // Return the cloned object with the new property
  return clonedObject;
}

/*
This function takes two parameters: obj - any object; isValid - boolean value: true/false;

The function should clone an object passed in an obj parameter.
The object passed as a parameter can be of any kind.
To the cloned object it should add new property isValid.
The value from a function parameter isValid should be set to the isValid property of a cloned object.
The function should return a cloned object with added isValid property.
The function should not mutate an object from obj parameter.
*/

// Example object to extend
let obj = {
  title: "Simple Object",
  isAdmin: false,
};

// Extending the object with a new property
let clonedObject = extendObject(obj, true);
console.log(clonedObject); // { title: 'Simple Object', isAdmin: false, isValid: true }

console.log(obj === clonedObject); // false

// Function to sum all finite number values from an object
function sumPrices(prices) {
  let sum = 0;

  // Iterate over each property of the object
  for (let key in prices) {
    // Check if the property value is a finite number
    if (typeof prices[key] === "number" && isFinite(prices[key])) {
      // Add the number value to the sum
      sum += prices[key];
    }
  }

  // Return the total sum
  return sum;
}

/*
The function should sum all property values with number type (finite only) and return the sum.
Properties names are not fixed, there could be any string values.
Please, note that in addition to price properties, the object stores additional information: currency type (currency), salary paid or not (isPayed), and any others. We expect to receive the sum of properties with number(finite) type only, other properties should be ignored.
Special numeric values: NaN, Infinity, -Infinity should be excluded.
If prices object doesn't have properties with number type, the function should return zero(0).
*/

// Example object with numeric and non-numeric properties
let prices1 = {
  pineapples: 1100,
  lemons: 100,
  tomatoes: 700,
  Year: "1973",
  sun: "is shining",
  areAllNumbers: NaN,
  isPayed: false,
  from: Infinity,
  to: -Infinity,
};

// Getting the sum of finite number values from prices1 object
let result1 = sumPrices(prices1); // 1900 sum

// Testing sumPrices function with an empty object
let result2 = sumPrices({}); // 0

// Function to create a user object with full name properties and methods
function createUserWithFullName(firstName, lastName) {
  // Create a user object using createUser function
  let user = createUser(firstName, lastName);

  // Add methods to the user object
  user.setFirstName = function (newFirstName) {
    this.firstName = newFirstName;
  };

  user.setLastName = function (newLastName) {
    this.lastName = newLastName;
  };

  user.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  // Return the user object with methods
  return user;
}

/*
This function takes two parameters: firstName - a string with the user's first name. lastName - a string with the user's last name.

The function should create a new object and return it.
Returned object should have two properties: firstName and lastName. 
The values for properties should be from firstName and lastName parameters.
Returned object should have three methods:
setFirstName(newFirstName) - takes newFirstName as a parameter and sets its value to the firstName property of the object.

setLastName(newLastName) - takes newLastName as a parameter and sets its value to the lastName property of the object.

getFullName() - merges values from firstName and lastName properties adding a space between and returning the result. 
It should work the same way as getFullName function from previous task.

Please, note methods should use this inside.
*/

// Creating a user object with full name properties and methods
let userUser = createUserWithFullName("Stan", "Lee");

// Accessing properties and methods of the user object
userUser.firstNameCheck; // 'Stan'
userUser.lastNameCheck; // 'Lee'

let fullNameUser = userUser.getFullName(); // 'Stan Lee'

userUser.setFirstNameCheck("Will");
userUser.setLastNameCheck("Smith");

userUser.firstNameCheck; // 'Will'
userUser.lastNameCheck; // 'Smith'

let fullNameCheck = user.getFullName(); // 'Will Smith'
let emptyFullNameCheck = getFullName();
emptyFullName; // ""
