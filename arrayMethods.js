// JAVASCRIPT: map(), filter(), and reduce()

// 1. map()

// DEFINITION:
// map() creates a NEW array by performing an operation
// on every element of the original array.

// IMPORTANT:
// - map() does not change the original array.
// - The number of elements usually remains the same.

// SYNTAX:
// array.map(element => operation);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]

console.log(numbers);
// Output: [1, 2, 3, 4, 5]


// 2. filter()

// DEFINITION:
// filter() creates a NEW array containing only the
// elements that satisfy a specified condition.

// IMPORTANT:
// - filter() does not change the original array.
// - The new array can have fewer elements.

// SYNTAX:
// array.filter(element => condition);

const ages = [12, 18, 25, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults);
// Output: [18, 25, 30]


// 3. reduce()

// DEFINITION:
// reduce() processes all elements of an array and
// produces ONE final value.

// IMPORTANT TERMS:
//
// accumulator:
// Stores the result from the previous iteration.
//
// currentValue:
// The current element being processed.
//
// initialValue:
// The starting value of the accumulator.

// SYNTAX:
// array.reduce((accumulator, currentValue) => {
//     return updatedValue;
// }, initialValue);

const prices = [100, 200, 300, 400];

const total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);
// Output: 1000


// REAL-WORLD EXAMPLE: SHOPPING CART

const cart = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 2000
    },
    {
        name: "Monitor",
        price: 15000
    }
];


// map() example
// Get only the product names.

const productNames = cart.map(product => product.name);

console.log(productNames);
// Output:
// ["Laptop", "Mouse", "Keyboard", "Monitor"]


// filter() example
// Get products that cost more than ₹2000.

const expensiveProducts = cart.filter(product => product.price > 2000);

console.log(expensiveProducts);


// reduce() example
// Calculate the total price of all products.

const cartTotal = cart.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(cartTotal);
// Output: 68000


// Using filter() + map()
// First select expensive products.
// Then get their names.

const expensiveProductNames = cart
    .filter(product => product.price > 2000)
    .map(product => product.name);

console.log(expensiveProductNames);
// Output:
// ["Laptop", "Monitor"]


// Using filter() + map() + reduce()
//
// Step 1: Find products costing more than ₹2000.
// Step 2: Get their prices.
// Step 3: Calculate their total.

const expensiveTotal = cart
    .filter(product => product.price > 2000)
    .map(product => product.price)
    .reduce((total, price) => total + price, 0);

console.log(expensiveTotal);
// Output: 65000


// QUICK MEMORY TRICK:
//
// map()    → CHANGE every element
// filter() → SELECT elements
// reduce() → CALCULATE one final value