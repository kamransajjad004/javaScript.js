//object methods

//1. entries method
/*
Object.entries() in Javascript is a built in method that
 returns an array of keyn value pairs from an object
*/

let person = {
    fname: "suhail",
    age: 20,
    isAlive: true
} 

let output = Object.entries(person)
console.log(output);

let arr = [
    ["fname", "suhail"],
    ["age", "20"],
    ["isAlive" , true],
]
console.log(arr[1][1]);

//2. Object.keys()

/*
Returns an array of keys (property name) 
of the object
*/

let user = {
    fname: "Kamran",
    age: 20,
    city: "hyd"
}

console.log(Object.keys(user));

//3. Object.values()
// Returns an array of values from the object.

let user1 = {
    fname: "Kamran",
    age: 20,
    city: "hyd"
}

console.log(Object.values(user1));

// Object.freeze()

/*
Freezes an object so that

you cannot add, remove, or change properties

it makes the object completely immutable
*/

let a = {
    name: "kamran",
    age: "20",
    city: "hyd"
}

console.log(Object.freeze(a));
a.name = "kam"
delete a.city
console.log(a);

// 5. isFrozen

/* it gives an output of boolean values if the arrays is either true or false*/

let b = {
    name: "kamran",
    age: "20",
    city: "hyd"
}

console.log(Object.isFrozen(b));