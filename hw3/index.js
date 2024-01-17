// The plane departs of wizzair on even days, rayanair — on odd days.
let day = prompt("Enter departure date");
if (day % 2 === 0) {
  console.log("Departure wizzair");
} else {
  console.log("Departure rayanair");
}

// same stuff using ternary operator
airport = day % 2 == 0 ? "Departure of wizzair" : "Departure of rayanair";
console.log(airport);

// the recommendations of tours are selected depending on the season provided by user:
let month = prompt("enter current month number");
if (month == 12 || month == 1 || month == 2) {
  console.log(" Winter. The ski tours are recommended");
} else if (month == 3 || month == 4 || month == 5) {
  console.log(" Spring. Hikes and excursions to parks are recommended");
} else if (month == 6 || month == 7 || month == 8) {
  console.log(" Summer. The sea tours are recommended");
} else if (month == 9 || month == 10 || month == 11) {
  console.log(" Autumn. The city tours are recommended");
} else {
  console.log(" Such month does not exist ");
}

// calculating the distance of commuting using swith operator
let distance = prompt("Enter distance");
let transport = prompt("Enter the kind of transport");
switch (transport) {
  case "bicycle":
    console.log(`Travel time - ${distance / 10}`);
    break;
  case "bus":
    console.log(`Travel time - ${distance / 30}`);
    break;
  case "train":
    console.log(`Travel time - ${distance / 100}`);
    break;
  default:
    console.log("no such transport");
}

// the number of the month determines the time of the year
let month = prompt("enter month number");
switch (month) {
  case "12":
  case "1":
  case "2":
    console.log("winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("autumn");
    break;
  default:
    console.log("such month does not exist");
    break;
}
