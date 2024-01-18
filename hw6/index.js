// Returns the nearest value to 'z' from 'x' and 'y'
function nearest(z, x, y) {
  const distanceX = Math.abs(z - x);
  const distanceY = Math.abs(z - y);

  // Returns x if distanceX is less than distanceY, otherwise returns y
  return distanceX < distanceY ? x : y;
}

console.log(nearest(10, 8, 15)); // 8
console.log(nearest(5, 3, 6)); // 6
console.log(nearest(20, 25, 18)); // 18

// Removes duplicate elements from the array
function removeDuplicate(arr) {
  const uniqueArr = [];

  for (const element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }

  return uniqueArr;
}

console.log(removeDuplicate([1, 2, 3, 4, 2, 5, 6, 1])); // [1, 2, 3, 4, 5, 6]
console.log(removeDuplicate(["apple", "orange", "banana", "apple"])); // ['apple', 'orange', 'banana']
console.log(removeDuplicate([5, 3, 7, 5, 1, 3, 8])); // [5, 3, 7, 1, 8]

// Creates a string by repeating the input string 'count' times
function backToFront(str, count) {
  if (!str || count <= 0) {
    return "";
  }

  return Array(count + 1).join(str);
}

console.log(backToFront("test", 2)); // testtest
console.log(backToFront("hello", 1)); // hello
console.log(backToFront("world", 5)); // worldworldworldworldworld
