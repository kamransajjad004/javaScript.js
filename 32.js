// for of loop ()

let students = ["saboor", "kaif", "kamran"];
console.log(students);

for (let ele of students){
    console.log(ele);
}

// For in loop


let myDetails = {
    fullName: "Kamran",
    age: 10,
    isAlive: true,
    isSleeping: null,
    isAwake: undefined
}

for (let keys in myDetails){
    console.log(myDetails[keys]);
}