// The ternary operator is a short way of writing an if...else statement.

//Syntax

//condition ? valueIfTrue : valueIfFalse;

let boy = 21;

let result = boy>=18 ? "Voter": "Not Voter";
console.log(result)


// Guard Operator 

//The guard operator is commonly implemented using the logical AND (&&) operator. It executes the second expression only when the first expression is truthy.

let message = 2>1 && 'Ranjith';
console.log(`The Message Is : ${message}`);



//  || means "if the first one is falsy, use the second one."

let username = "Ranjith";

let name = username || "Guest";

console.log(name);