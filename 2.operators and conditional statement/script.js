//checking for comment

//Arithematic operators
let a = 5;
let b = 2;

//console.log("a + b =", a + b);
// OR

// let c = a+b;
// console.log("a = ", a, "b = ", b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a ** b =", a ** b); // ** -> exponentiation, power
// console.log("a % b =", a % b); // % -> Modulus, work as reminder

// unary operator
let p = 9;
let k = 3;

// console.log("p = ", p, "k = ", k);

// console.log("p-- = ", p--); // in post decrement/increment = here decrement/increment(change) has happened but willn't reflect in this line
// console.log(p); // it will shown in next line like this

// console.log("++k = ", ++k); // in pre increment/decrement change will shown in same line


//  Assigment operator
let d = 5;
let e = 7;

a **= 4; // +=, -=, *=
// console.log("d **= ", d);

// Comparison operator(==, !=, ===, !==, <, >, <=, >=)

let u = 7;
let y = 9;
let r = "7"
// console.log("u == y", u==y);
// console.log("u == r", u==r);
// console.log("u === r", u===r);

//Logical operator(&&, ||, !)

let w = 6;
let q = 4;

// console.log("cond1 && cond2 = ", a < b && a === 6);

let cond1 = w < q; //false
let cond2 = q === 6; //true
//console.log("cond1 && cond2 = ", cond1 && cond2);

// conditaional statment

/*let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}*/

/*if (mode === "light") {
    color = "white";
}*/

//  console.log(color);

// condition ? true output : false output

let age = 25;

age >= 18 ? "adult" : "not adult";
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);
//age >= 18 ? console.log("adult") : console.log("not adult");

// MDN Doc

//alert("hello!");

//promt -> can also give pop up msg & it's additional functionality is it can take input as well
// prompt("hello!")

// let name = prompt("hello!");
// console.log(name);

//practise
// bye me v

// let checking = prompt("enter a number");
// //if (checking/5 === 0){ // why not to use / there bcz === is strict inequality operator
// if (checking % 5 === 0){
//    console.log("it is a multiple of 5");
// } else {
//     console.log("it isn't a multiple of 5");
// };

let j = prompt("enter your score");

/*
 Convert input to a number, as prompt returns a string
 */
j = Number(j);

if(j <= 100 && j >= 80 ) {
    console.log("A");
} else {
    console.log("try harder");
}