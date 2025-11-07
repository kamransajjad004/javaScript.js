// Default Parameters

function hi(a = 0, b = "guest") {
    console.log(`my name ${a} and age ${b}`);
}


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

