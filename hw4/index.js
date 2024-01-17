// EXAMPLE 1: Calculating the Total Price of Menu Items

// Array of menu items with their prices
const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
];

// Using reduce to calculate the total price
const totalPrice = menuItems.reduce((accumulator, menuItem) => {
    // Adding the price of the current menu item to the accumulator
    return accumulator + menuItem.price;  
}, 0);

// Logging the total price to the console
console.log("Total Price of Menu Items:", totalPrice);

// EXAMPLE 2: Calculating the Total 'Goat Rating' for Goats

// Array of goats with their ratings
const goats = [
    { name: "Messi", isGoat: true, rate: 1320 },
    { name: "CR7", isGoat: false, rate: 1400 },
    { name: "Maradona", isGoat: false, rate: 1370 },
    { name: "Pele", isGoat: false, rate: 1375 },
    { name: "Cruyff", isGoat: false, rate: 1750 },
    { name: "BMW", isGoat: false, rate: 1350 },  
];

// Using reduce to calculate the total goat rating
const totalGoatRating = goats.reduce((accumulator, goat) => {
    // Adding the rating of the current goat to the accumulator if it's a goat
    if (goat.isGoat) {
        return accumulator + goat.rate;
    } else {
        return accumulator;
    }
}, 0);

// Logging the total goat rating to the console
console.log("Total Goat Rating:", totalGoatRating);

// EXAMPLE 3: Logging Each Step in Calculating the Total Price

// Array of menu items with their prices
const menuItemsAgain = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
];

// Using reduce to calculate the total price, with logging each step
const totalPriceAgain = menuItemsAgain.reduce((accumulator, menuItem) =>