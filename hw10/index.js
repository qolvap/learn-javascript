// This function returns another function, creating a closure
function handleLikePost() {
  // Variable defined in the outer function's scope, captured by the inner function
  let likeCount = 0;

  // Inner function (closure) has access to the outer function's scope, closure keeps the variable alive
  return function addLike() {
    // Modifying the likeCount variable from the outer function's scope
    likeCount += 1;
    // Returning the updated likeCount
    return likeCount;
  };

  // The following line is commented out and will not be executed
  // addLike();
  // Logging will not work here because likeCount is not in the scope
  console.log("like count:", likeCount);
}

// Assigning the returned inner function (addLike) to the variable 'like'
const like = handleLikePost();

// Invoking 'like' three times
console.log(like()); // Outputs: 1
console.log(like()); // Outputs: 2
console.log(like()); // Outputs: 3
// IMPORTANT to call function in different scope than where function was original defined

// anothe example
// This function returns another function, creating a closure
function countdown() {
  // Variable defined in the outer function's scope, captured by the inner function
  let countFromNum = 10;

  // Inner function (closure) has access to the outer function's scope
  return function decrease() {
    // now countFromNum is a part of the decrease fun grabbed from the out of scope
    // Modifying the countFromNum variable from the outer function's scope
    countFromNum -= 1; // now it will continue live inside decrease()
    // Returning the updated countFromNum
    return countFromNum;
  };
}

// Assigning the returned inner function (decrease) to the variable 'countingDown'
const countingDown = countdown(); // we ran fun wich return fun

// Invoking 'countingDown' three times
console.log(countingDown()); // Outputs: 9
console.log(countingDown()); // Outputs: 8
console.log(countingDown()); // Outputs: 7
// another example
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  };
}

const countingDown = countdown(30, 10);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
