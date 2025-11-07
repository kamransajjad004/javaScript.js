//17. every() method

let nums = [2 ,4 ,6 ,8, 11]

let check = nums.every((x) => x > 0 )
console.log(check);

let checkk = nums.every((x) => x > 0)


// 18. find() method


let nums1 = [2 ,4 ,6 ,8]

let check1 = nums.find((x) => x > 0 )
let check2 = nums.find((x) => x < 0 )
let check3= nums.find((x) => x > 0 )
let check4 = nums.find((x) => x > 0 )

let chick = nums.find((x) => x > 0)
console.log(chick);

console.log(check1);

//19. findIndex() method

let nums2 = [2 ,4 ,6 ,8]
let check5 = nums.findIndex((x) => x > 3 )
console.log(check5);
let chick1 = nums.findIndex((x) => { x > 3})

//20 forEach() Method

try {
let numbers = [1, 2, 3, 4, 5]

console.log(numbers);
numbers.forEach((ele) => {
    console.log(ele * 2);
});
console.log(numbers);}
catch(error) {
    console.log(error.name, error.message);
}

let names = ["kaif", "saboor", "rayyan", "kamran"]

names.forEach((x) => {
    console.log(x);
})

// 21. map() method

let nums12 = [1,2,3,4,5]

let final = nums12.map((x) => x * 2);
console.log(final);

// 22. filter method()

let classroom = [
    {
        fullName: "Kamran",
        age: 21,
        college: "MJ"
    },
    {
        fullName: "Ibrahim ",
        age: 81,
        college: "MJ"
    },
    {
        fullName: "Kaif",
        age: 21,
        college: "lords"
    },
    {
        fullName: "Malik",
        age: 40,
        college: "Drop"
    }
]

let output2 = classroom.filter((a) => a.age < 40);
console.log(output2);

// 23. Slice method

let arr = [10, 20, 30, 40]

let output = arr.slice(1, 3);
console.log(output);

// 24. Some method

let arr1 = [2, 4, 6, 8, 11]
let outputt = arr1.every((x) => x % 2 ==0)
let outputt1 = arr1.some((x) => x % 2 ==0)
console.log(outputt1);
console.log(outputt);

// 25. reduce() method
let numbers1 = [10, 20, 30, 40, 50]

let total = numbers1.reduce((a , b) => {
    return a + b
}, 0);
console.log(total);

//26. reduceRight() method

let arrr = ["Ali", "f", "s", "k"]
let total1 = arrr.reduceRight((a , b) => {
    return a + b
}, );
console.log(total1);
