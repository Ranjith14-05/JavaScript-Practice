//"An object in JavaScript is a collection of related properties and methods stored as key-value pairs."

let person = {
    name: "Ranjith",
    age: 22,
    city: "Thirupathur",
    gender: "Male"
};

console.log("Name : "+person.name);
console.log("Age : "+ person.age);
console.log("City : "+ person.city);
console.log("Gender : "+person.gender);
person.age =21;

console.log("Age : "+person.age);
console.log(person);

//Bracket Notation 

console.log("Name : " + person['name']);

// Object can contain a function

// A function inside an object is called a method.

let person2 = {
    name: "Ranjith",

    greet: function() {
        console.log("Hello! " +this.name);
    }
};

person2.greet();

//A nested object is an object inside another object.

let person3 = {
    name: "Ranjith",
    age: 21,

    address: {
        city: "Thirupathur",
        pincode: 635702
    }
};

console.log(person3.address.city)
console.log(person3)

//Objects in JavaScript are reference types. When an object is assigned to another variable, both variables hold a reference to the same object in memory.


let user = {
    name: "Ranjith"
};

let user2 = user;

user.name = 'Sasi';

console.log(user.name);
console.log(user2.name);

//Destructuring is a JavaScript feature that allows us to extract values from objects or arrays and assign them directly to variables.

const object = {
    name: "Ranjith",
    age: 21,
    course: "AI & DS"
};

const { name, age } = object;

console.log(name);
console.log(age);

//shorthand property for objects

let object2 ={
    //instead of 
    //name: 'Ranjith'
    name,

    // Instead Of 

    // method : function function1(){
    // console.log("Hello");
    //}

    method (){
        console.log('Hello');
    }

}

console.log(object2);
object2.method();