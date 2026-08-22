//JSON 
//JSON = JavaScript Object Notation
// It is a text format used to store and exchange data.




// JavaScript Object
const user = {
    name: "Ranjith",
    age: 21,
    course: "AI & DS"
};

// Object → JSON
const jsonUser = JSON.stringify(user);

// Store JSON in Local Storage
localStorage.setItem("user", jsonUser);


// Get data from Local Storage
const storedUser = localStorage.getItem("user");

// JSON → JavaScript Object
const userData = JSON.parse(storedUser);

console.log(userData.name);
console.log(userData.age);
console.log(userData.course);