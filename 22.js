function sumNumbers(a, b) {
    return a + b;
}
let final = sumNumbers(2, 5);
console.log(final + 2); //undefined

function sum(a, b) {
    let x = a + b;
    console.log(x);
    return x;
}
let total = sum(2, 3);
console.log(total * 2);

//Note :
//1. use return to pass the value
//2. we can't write after return

function add (x , y) {
    let q = x + y
    console.log(q);
    return q
}

let poora = add(5, 6)
console.log(poora - 1);

function add1(x , y){
    let w = x + y
    console.log(w);
    return w
}
add(5 , 4)

//Function expressions

// A Function can also be stored in a variable

//Simple Function
function mul(x, y) {
    return x * y;
}
let finale = mul (2, 4);
console.log(finale * 2);

//function expression
let mul1 = function (x, y){
    return x * y;
}

let final1 = mul1(2,5);
console.log(final1 * 2);

let div = function (x,y){
    return x - y
}

console.log(div(5 , 3));