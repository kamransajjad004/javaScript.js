// Implicit conversion

let a = 1 + true
console.log(a);

let b = 2 + ""
console.log(b);

let c = 2 + " ";
console.log(c);

// let e = "ok" + 1
// console.log(e);

// let f = 1 + undefined
// console.log(f);

//anything to number(-*/)

let e = '5' - '3'
let f = '5' / '3'
let g = '5' *'3'
let h = '5' - 'hi'
console.log(e,f,g,h)

//anything to boolean

let a1 = "2" + true
let a2 = 2 + true
let a3 = 0 - false
console.log(a1)

//Null to Number 

let c1 = 4 + null
console.log(c1)

//undefined to null

let d1 =  undefined + 1
console.log(d1) 
