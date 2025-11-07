// Default Parameters

function hi(a = 0, b = "guest") {
    console.log(`my name ${a} and age ${b}`);
}

function yo (x = 0, y = 1){
    console.log(`myname ${x} nd ${y}`);
}
let q = 5
let w = 4
hi()
yo(5 , 4)

// Destructuring Assignment

let person = {
    fName: "Kamran",
    age: 20,
    isAlive: true,
    isSleeping: null
}

let {fName, age, isAlive, isSleeping} = person;
console.log(fName, age, isAlive, isSleeping);

let person1 = ["Suhail", 20, true, null, undefined]

let [a, b, c,d] = person1;
console.log(a, b, c, d);

// let {fName, age, isAlive, isSleeping} = person
// console.log(object);