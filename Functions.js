// A function in JavaScript is a reusable block of code designed to perform a specific task. It can accept inputs through parameters and can return an output using the return statement.

// Rules for naming a function in JavaScript:

// 1. Start with a letter, _ or $
// 2. Cannot start with a number
// 3. Numbers are allowed after the first character
// 4. No spaces are allowed
// 5. Cannot use reserved keywords
// 6. Function names are case-sensitive
// 7. Use meaningful names
// 8. Usually use camelCase


function greet() {
    console.log("Hello");
}
greet();

//A parameter is a value that you give to a function so the function can work with that value.

//A function with a parameter is a function that accepts a value as input through a variable called a parameter.

function greet2(name){
    console.log("Hello "+name);
}
greet2("Ranjith");