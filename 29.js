// Array Methods

// 1. at() method

let arr = ["hi", "hello", "bye"];
console.log(arr.at(0));
console.log(arr.at(2));
// Index ==> value
arr[0]
console.log(arr.at(2));

//2. concat() Method

let arr1 = [10, 20, 30]
let arr2 = [40, 50, 60]

let total = arr1.concat(arr2)
console.log(total);
console.log(arr1.concat(arr2));
console.log(arr1)
console.log(arr1.concat(arr2));

//3. fill() Method

let fruits = ["apple", "mango", "orange"]

let total1 = fruits.fill("pineapple")
console.log(total1);
let total2 = fruits.fill("ok")
console.log(total2);

//4. indexof() Method

let nums = ["one", "two","three", "four"]

console.log(nums.indexOf("one"));
console.log(["one", "two","three", "four".indexOf("one")]);
console.log(object);
console.log(nums.indexOf("one"));
// 5. lastindexOf()

let arr3 = [10, ,20 ,30 ,40 ,10 ,20]
console.log(arr3.lastIndexOf(10));

// 6. lenght()

let arr4 = [10,20,30,40,50,60]
console.log(arr4.length);
console.log(arr4.length);

// 7. push()

let arr5 = [10,20,30,50]
arr5.push(40)
arr5.push(50)
console.log(arr5);

//8. pop()

let arr6 = [10,20,30]
arr6.pop()
console.log(arr6);

//9. unshift()

let arr7 = [10,20,30]
arr7.unshift(100)
console.log(arr7);

//10. shift()

let arr8 = [10,20,30]
arr8.shift()
console.log(arr8);