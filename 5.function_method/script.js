function myFunction() {
    console.log("welcome to apna college");
    console.log("we are learning js :");
}

// myFunction();

function myfunction(msg) { // parameter -> input
    console.log(msg);
}

// myfunction("i love js"); // argument

// function -> numbers, sum

function sum(x, y) {
    // console.log(x + y);
    s = x + y;
    return s; // any code which is after return will not run
}


let val = sum(3, 7);
// console.log(val);

// sum function
function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
};

// multiplication function
function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    return a * b ;
}

const printHello = () => {console.log("hello")};

// or we can write it without this {} in one line of code but generally we preferred to use{}
// const printHello = () => console.log("hello");

/*
****************practise*************** 
Q) create a function using the "function" keyword that takes a string as an argument & returs the 
number of cowels in the string.
*/

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
return count;
}

//function in js is spl cuz we can use it as method by applying .foreach

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printval(val) {
    console.log(val);
});
// generally we use callback using arrow function

/* 
callback function have 3 parameters 
1. val/item(we can name anything)
2. idx(index)
3. arr(array itself, can depend what we have given the name)
*/

// let arrr = ["pune", "delhi", "mumbai"];

// arrr.forEach((val) => {
//     // console.log(val);
//     console.log(val.toLocaleUpperCase());
// });

let arrr = ["pune", "delhi", "mumbai"];

arrr.forEach((val, idx, arrr) => {
    console.log(val, idx, arr);
});

// it is a higher order function/methods 

/*********************practise******************
 * for a given array of numbers, print the squrew of value using the forEach loop.
 */
let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num*num);
});

 // some more array methods -> arr.map(), arr.filter(), arr.reduce()   

