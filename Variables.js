//a variable is a named container used to store data values. You can store numbers, strings, objects, arrays, functions, and more in variables.

let name = "Ranjith";        // String
let age = 21;              // Number
let isStudent = true;      // Boolean
let score = null;          // Null
let value;                 // Undefined
let fruits = ["Apple", "Banana"]; // Array
let person = { name: "Bob", age: 30 }; // Object

console.log(name);
console.log(age);
console.log(isStudent);
console.log(score);
console.log(value);
console.log(fruits);
console.log(person);

/*
For modern JavaScript, prefer:

const for values that won't change.
let for values that may change.
Avoid var in new code.
*/

const PI = 3.14159;
console.log(PI);

/* 
Features:

Cannot be reassigned.
Block-scoped.
Must be initialized when declared.

Note: If a const variable holds an object or array, you can still modify its contents.

*/