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

// Array Destructuring in js 
//It means taking values from an array and storing them directly into variables.


//without Destructiring
const numbers = [10, 20, 30];

let a = numbers[0];
let b = numbers[1];
let c = numbers[2];

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// with destructuring 

const numbers2 = [10, 20, 30];

let [x,y,z] = numbers2;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// Accessing array using forEach loop

fruits.forEach((value) => {
    console.log(value);
}
);

//“map() is a JavaScript array method used to transform each element and return a new array. It does not modify the original array.”
let arr = [1,-2,3,4]
console.log(arr.filter(value => value>0));
let res = arr.map(value => value*2)
console.log(res);