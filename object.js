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