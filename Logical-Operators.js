// Logical Operators in JavaScript

let age = 20;
let hasID = true;

// 1. Logical AND (&&)
// Both conditions must be true
console.log("AND (&&):", age >= 18 && hasID);
// true


// 2. Logical OR (||)
// At least one condition must be true
let isWeekend = false;
let isHoliday = true;

console.log("OR (||):", isWeekend || isHoliday);
// true


// 3. Logical NOT (!)
// Reverses true to false and false to true
let isLoggedIn = false;

console.log("NOT (!):", !isLoggedIn);
// true


// 4. Nullish Coalescing (??)
// Uses the right value if left is null or undefined
let username = null;

console.log("Nullish (??):", username ?? "Guest");
// Guest


// 5. Logical AND Assignment (&&=)
let a = true;

a &&= false;

console.log("AND Assignment (&&=):", a);
// false


// 6. Logical OR Assignment (||=)
let name = "";

name ||= "Ranjith";

console.log("OR Assignment (||=):", name);
// Ranjith


// 7. Nullish Assignment (??=)
let user = null;

user ??= "Guest";

console.log("Nullish Assignment (??=):", user);
// Guest