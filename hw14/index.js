function sumSequence(n) {
  // If n is 0, return '0.00'
  if (n === 0) {
    return "0.00";
  }

  // Initialize sum to store the sum of the sequence
  let sum = 0;

  // Calculate the sum of the sequence up to the nth term
  for (let i = 1; i <= n; i++) {
    sum += 1 / Math.pow(2, i);
  }

  // Round the sum to two decimal places
  sum = sum.toFixed(2);

  // Return the sum as a string
  return sum.toString();
}

// Example usage:
console.log(sumSequence(1)); // '0.50'
console.log(sumSequence(2)); // '0.75' (1/2 + 1/4)
console.log(sumSequence(4)); // '0.94' (1/2 + 1/4 + 1/8 + 1/16)
console.log(sumSequence(5)); // '0.97' (1/2 + 1/4 + 1/8 + 1/16 + 1/32)

/*
sumSequence:

This function calculates the sum of a series up to the nth term, where the series is 1/2 + 1/4 + 1/8 + ... + 1/2^n.
It takes one parameter n, which indicates the number of terms in the series.
If n is 0, it returns '0.00'.
It initializes the sum variable to store the sum of the series.
The function then calculates the sum of the series using a loop from 1 to n.
Each term of the series is added to the sum.
Finally, the sum is rounded to two decimal places using the toFixed method and returned as a string.
*/

function mergeArrays(...arrays) {
  // If no arrays are passed, return an empty array
  if (arrays.length === 0) {
    return [];
  }

  // Use the spread syntax to concatenate all arrays into one array
  return arrays.flat();
}

// Example usage:
console.log(mergeArrays([1, 2, 3], [5, 6], [9])); // [1, 2, 3, 5, 6, 9]
console.log(mergeArrays([1, 2, 3], [5, 6])); // [1, 2, 3, 5, 6]
console.log(mergeArrays()); // []

/*
mergeArrays:

This function merges multiple arrays into one array.
It uses the spread syntax to accept any number of arrays as arguments.
If no arrays are passed, it returns an empty array [].
Otherwise, it concatenates all arrays into one using the flat method and returns the result.
*/

function isPrime(n) {
  // If n is less than 2, it is not prime
  if (n < 2) {
    return false;
  }
}

// Example usage:
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false

/*
isPrime:

This function checks if a given number n is prime.
If n is less than 2, it immediately returns false since prime numbers must be greater than 1.
*/

function isEven(n) {
  // If n is even, return true, otherwise return false
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/*
 isEven:

This function checks if a given number n is even.
If n is divisible by 2 without a remainder, it returns true, indicating that n is even; otherwise, it returns false.
 */

function isPalindrome(str) {
  // Create a map to count the frequency of each character in the string
  const charCountMap = new Map();

  // Iterate through the characters in the string and populate the map
  for (let char of str) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  // Count the number of characters with odd frequencies
  let oddCount = 0;
  for (let count of charCountMap.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // If the string has one or zero characters with odd frequencies, it can be rearranged into a palindrome
  return oddCount <= 1;
}

// Example usage:
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("abbaa")); // true
console.log(isPalindrome("abbx")); // false
console.log(isPalindrome("aade")); // false
console.log(isPalindrome("ab")); // false
console.log(isPalindrome("abcba")); // true

/*
isPalindrome:

This function determines whether a given string is a palindrome or not.
It creates a map to count the frequency of each character in the string.
Then, it counts the number of characters with odd frequencies.
If the string has one or zero characters with odd frequencies, it can be rearranged into a palindrome, and the function returns true; otherwise, it returns false.
*/

function countLetters(str) {
  // Check if the input string is empty or not provided
  if (!str || str.length === 0) {
    return {};
  }

  // Create an object to store the count of each letter
  const letterCount = {};

  // Remove spaces and convert the string to lowercase for case-insensitive counting
  str = str.replace(/\s/g, "").toLowerCase();

  // Iterate through each character in the string
  for (let char of str) {
    // Increment the count of the current character in the letterCount object
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  return letterCount;
}

// Example usage:
console.log(countLetters("abababa")); // { a: 4, b: 3 }
console.log(countLetters("asdf sdf df f")); // { a: 1, s: 2, d: 3, f: 4 }
console.log(countLetters("")); // {}
console.log(countLetters()); // {}

/*
countLetters:

This function counts all the characters that occur in a string.
It takes a string str as a parameter.
It creates an object letterCount to store the count of each letter.
The function removes spaces from the input string and converts it to lowercase for case-insensitive counting.
Then, it iterates through each character in the string, increments the count of the character in the letterCount object, and returns the object.
*/

function divideArrays(arr, size) {
  // Check if size is less than or equal to 0
  if (size <= 0) {
    return [];
  }

  // Check if the length of the array is less than or equal to size
  if (arr.length <= size) {
    return [arr];
  }

  // Initialize an array to store the divided arrays
  const dividedArrays = [];

  // Iterate through the original array and divide it into smaller arrays
  for (let i = 0; i < arr.length; i += size) {
    // Push a slice of the original array with length 'size' into the dividedArrays
    dividedArrays.push(arr.slice(i, i + size));
  }

  return dividedArrays;
}

// Example usage:
console.log(divideArrays([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(divideArrays([1, 2, 3, 4, 5], 8)); // [1,2,3,4,5]
console.log(divideArrays([1, 2, 3, 4, 5], -1)); // []

/*
divideArrays:

This function separates an array into smaller arrays of a specified size.
It takes two parameters: arr (an array) and size (a number).
If size is less than or equal to 0, it returns an empty array [].
If the length of the original array is less than or equal to size, it returns an array containing the original array as its only element.
Otherwise, it divides the original array into smaller arrays of size size and returns them as an array of arrays.
*/

function findCommonElements(arr1, arr2) {
  // If either array is empty, return an empty array
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }
}

// Example usage:
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // []
console.log(findCommonElements([1, 2, 3], [])); // []

/*
findCommonElements:

This function finds the common elements between two arrays.
If either array is empty, it returns an empty array [].
*/

function findLongestSubstring(str) {
  // If the string is empty, return 0
  if (str.length === 0) {
    return 0;
  }
}

// Example usage:
console.log(findLongestSubstring("abcabcbb")); // 3
console.log(findLongestSubstring("bbbbb")); // 1
console.log(findLongestSubstring("pwwkew")); // 3
console.log(findLongestSubstring("")); // 0

/*
findLongestSubstring:

This function finds the length of the longest substring without repeating characters in a given string.
If the string is empty, it returns 0.
*/

function encrypt(str, n) {
  // Check if n is less than or equal to 0
  if (n <= 0) {
    return str;
  }

  // Convert n to a value between 0 and 25
  n = n % 26;

  // Convert the string to an array of characters
  const chars = str.split("");

  // Iterate through each character and encrypt it
  const encryptedChars = chars.map((char) => {
    // Get the character code
    let code = char.charCodeAt(0);

    // Check if the character is a capital letter
    if (code >= 65 && code <= 90) {
      // Shift the character code by n positions
      code -= n;

      // Handle wrap-around for characters that go below 'A'
      if (code < 65) {
        code += 26;
      }
    }

    // Convert the character code back to a character
    return String.fromCharCode(code);
  });

  // Join the encrypted characters back into a string
  return encryptedChars.join("");
}

// Example usage:
console.log(encrypt("FUNCTION", 3)); // 'CRKZQFLK'
console.log(encrypt("JAVASCRIPT", 2)); // 'HYTYQAPGNR'
console.log(encrypt("HELLO", 0)); // 'HELLO'
console.log(encrypt("HELLO", -4)); // 'HELLO'

/*
encrypt:

This function encrypts a string using Caesar's code, shifting each letter by a fixed number of positions down the alphabet.
It takes two parameters: str (the string to encrypt) and n (the number of positions to shift).
If n is less than or equal to 0, it returns the original string.
It converts n to a value between 0 and 25 to handle large values of n.
Then, it iterates through each character in the string, shifts the character code by n positions, handles wrap-around for characters that go below 'A', and returns the encrypted string.
*/
