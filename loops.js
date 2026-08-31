// For loop : Use it when you know how many times you want to repeat.

//A loop is a control structure that repeatedly executes a block of code as long as a specified condition is true.

for (let i =1; i<=5;i++){
    console.log(i);
}

//While Loop : use a while loop when you don't know exactly how many times the loop should run

let i = 0;

while(i<=5){
    console.log(`${i} While Loop`);
    i++;
}

//Do While : Runs at least once, even if the condition is false.

let j = 1;

do {
    console.log(j + " Do While Loop");
    j++;
} while (j <= 5);

//for...of loop : Very useful for arrays.

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

//for...in loop : Usually used to iterate through object properties.

let student = {
    name: "Ravi",
    age: 22
};

for (let key in student) {
    console.log(key, student[key]);
}

// Beaak Statement 

//The break statement immediately exits the loop. Once break is executed, the loop stops, and the program continues with the code after the loop.

for ( let i = 1 ; i<=10 ; i++){
    console.log(i);
    if (i==8)
        break;
}

// Continue Statement 

for(let i = 1 ; i<=10 ; i++){
    if (i==2)
        continue;
    console.log(i)
}