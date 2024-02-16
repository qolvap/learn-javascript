// Function to get the number of full days before New Year
function getFullDaysBeforeNewYear(date, month) {
  // Check if date and month are provided and valid
  if (
    typeof date !== "number" ||
    typeof month !== "number" ||
    isNaN(date) ||
    isNaN(month) ||
    !isFinite(date) ||
    !isFinite(month) ||
    date < 1 ||
    date > 31 ||
    month < 1 ||
    month > 12
  ) {
    return null; // Return null if invalid input
  }

  // Calculate the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Calculate the date of the next year
  const nextYearDate = new Date(currentYear + 1, 0, 1);

  // Calculate the difference in milliseconds between the next year and the provided date
  const timeDiff =
    nextYearDate.getTime() - new Date(currentYear, month - 1, date).getTime();

  // Convert milliseconds to days and round to get the number of full days
  const fullDays = Math.round(timeDiff / (1000 * 3600 * 24));

  return fullDays; // Return the number of full days
}

// Example usage:
console.log(getFullDaysBeforeNewYear(30, 12)); // 2
console.log(getFullDaysBeforeNewYear(31, 12)); // 1
console.log(getFullDaysBeforeNewYear(28, 12)); // 4
console.log(getFullDaysBeforeNewYear()); // null
console.log(getFullDaysBeforeNewYear(0, 0)); // null
console.log(getFullDaysBeforeNewYear(-7, 1)); // null
console.log(getFullDaysBeforeNewYear(NaN, 1)); // null
console.log(getFullDaysBeforeNewYear(Infinity, 1)); // null

// Function to format date with weekday
function formatWithWeekday(date) {
  // Check if date is provided and valid
  if (!date || !(date instanceof Date)) {
    return ""; // Return empty string if date is null, undefined, or not a Date object
  }

  // Define arrays for weekdays and months
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract weekday, day, month, and year from the provided date
  const weekdayName = weekdays[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  // Return the formatted string
  return `${weekdayName}, ${day}, ${monthName} ${year}`;
}

// Example usage:
console.log(formatWithWeekday(new Date(2022, 10, 21))); // 'Monday, 21, November 2022'
console.log(formatWithWeekday(new Date(2022, 10, 22))); // 'Tuesday, 22, November 2022'
console.log(formatWithWeekday(null)); // ''
console.log(formatWithWeekday(undefined)); // ''
console.log(formatWithWeekday()); // ''

// Function to check if a date is valid
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

// Example usage:
let date = new Date(2022, 28, 10);
let invalidDate = new Date(undefined);

console.log(isValidDate(date)); // true
console.log(isValidDate(invalidDate)); // false
console.log(isValidDate(null)); // false
console.log(isValidDate(undefined)); // false
console.log(isValidDate({})); // false
console.log(isValidDate(3333)); // false
console.log(isValidDate("")); // false
console.log(isValidDate([])); // false

// Function to check if a date is after another date
function isAfter(date, dateToCompare) {
  // Check if both dates are valid
  if (!(date instanceof Date) || !(dateToCompare instanceof Date)) {
    return false; // Return false if any of the dates is not a Date object
  }

  // Compare the timestamps of the dates
  return date.getTime() > dateToCompare.getTime();
}

// Example usage:
let date1 = new Date(2022, 22, 10);
let date2 = new Date(2022, 23, 10);

console.log(isAfter(date1, date2)); // false
console.log(isAfter(date2, date1)); // true
console.log(isAfter(date1, new Date(undefined))); // false
console.log(isAfter(date1, null)); // false
console.log(isAfter(date1, undefined)); // false
console.log(isAfter(date1, {})); // false
console.log(isAfter(date1, 3333)); // false
console.log(isAfter(date1, "")); // false
console.log(isAfter(date1, [])); // false

// Function to format distance between a given date and now in words
function formatDistanceToNow(date) {
  if (!date || !(date instanceof Date)) {
    return "Date is unknown"; // Return 'Date is unknown' if date is null, undefined, or not a Date object
  }

  const now = new Date(); // Current date and time

  // Calculate the difference in milliseconds between the provided date and now
  const distanceInMillis = Math.abs(now - date);

  // Convert milliseconds to seconds
  const distanceInSeconds = distanceInMillis / 1000;

  if (distanceInSeconds < 30) {
    return "less than a minute";
  } else if (distanceInSeconds < 90) {
    return "1 minute";
  } else if (distanceInSeconds < 2670) {
    return `${Math.round(distanceInSeconds / 60)} minutes`;
  } else if (distanceInSeconds < 5370) {
    return "about 1 hour";
  } else {
    // Format the date in the specified format
    const formattedDate = `${("0" + date.getDate()).slice(-2)}.${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}.${date.getFullYear()} ${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;
    return formattedDate;
  }
}

// Example usage:
console.log(formatDistanceToNow(new Date(new Date() - 10))); // 'less than a minute'
console.log(formatDistanceToNow(new Date(new Date() - 60 * 1000))); // '1 minute'
console.log(formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000))); // '31 minutes'
console.log(formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000))); // 'about 1 hour'

console.log(formatDistanceToNow(new Date(2012, 6, 28, 9, 7, 32))); // '28.07.2016 09:07:32'
console.log(formatDistanceToNow(null)); // 'Date is unknown'
console.log(formatDistanceToNow()); // 'Date is unknown'
