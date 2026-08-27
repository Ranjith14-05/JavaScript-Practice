//An array is a data structure in JavaScript used to store multiple values in a single variable, where each value can be accessed using its index.

const myArray = [10,20,30];
console.log(myArray)

console.log(myArray[1]);

//JavaScript arrays can store different types of values in the same array.

const myArray2 = ['String',10,{name:"Ranjith",Age:21},true]

console.log(myArray2)

//To check it is Array or Not

console.log(typeof(myArray)); // Gives Object
console.log(Array.isArray(myArray2));

let fruits = ['Apple','Mango','Orange','Banana'];

console.log(fruits);

fruits[1] = 'Papaya';
console.log(fruits);

//Common array methods

fruits.push('JackFurit')   // add to end
console.log(fruits);

console.log(fruits.length);  // Returns the length of the Array

fruits.pop();  // remove from end
console.log(fruits);
