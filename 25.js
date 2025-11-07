// Crud operation

//Create
//Rename
//Update
//delete

let person = {
fname : "kamran",
phone: 8519897600,
age : 10,
isAlive : true,
health : undefined,
sleeping : null

}

console.log(person.call="no");
console.log(person);
console.log(person.call="ok");
console.log(delete person.call);

//How to acess object keys
// dot notation

console.log(person.fname);
console.log(person.age);

// using bracket notation

console.log(person["fname"]);

//update
console.log(person)
person.age = 20
console.log(person);

//create

person.address = "hyderabad"
console.log(person);
// delete

delete person.isAlive
console.log(person);