// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");

//print 1 to 5
// for (let count = 1/* institalization*/; count <= 5 /*stopping*/; count++ /*updation*/) {
//     console.log("hi");
// }

//Calculate sum of 1 to 5
/*
let n = prompt("enter a number");
n = Number(n);
let sum = 0; // learned from chatgpt

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("sum of your number is = ", sum);
console.log("loop has ended");
*/

//while loop
/*
let i = 1;
while (i<=5) {
    console.log("i = ", i);
    i++; //it is very imp to update it while loop
}
*/
// do while loop
 
/*
let k = 20;
do {
    console.log("my code");
    k++;
} while (k <= 10);

let l = 1;
do {
    console.log("l = ", l);
    l++;
} while (l <= 10);
 */

// for-of loop -> used for strings & arrays only

/*
let str = "my code";

for (let i of str) { // iterator -> characters
console.log("i=", i);
}
*/
// string size calculator
/*
let stri = "javascript";

let size = 0;
for (let i of stri) {
    console.log("i = ", i);
    size++;
}

console.log("string size = ", size);
*/

// for-in loop -> we can use it for object and arrays
/*
let student = {
    name: "rahul kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for (let key in student) {
    console.log("key = ", key, "value =", student[key]);
}
*?
/*
****************  practise ***************
Q 1) print all even numbers from 0 to 100.
*/
/*
for(i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
};
*/
/*
Q 2) create a game where you start with any random game number. ask the user to keep
     guessing the game number until the user enters correct value.
*/
/*
let num = 6;
let guess = prompt("enter a number")

guess = Number(guess)

while (num != guess) {
    guess = Number(prompt("enter a number again"))
};

console.log("congo");
*/

 /********** string ***********/
 // String interpolation

 //Template literals
 let specialString = `This is a template literal`
console.log(typeof specialString);

let str = "Apna\ncollege"; //13 , \n = for next line, \t = tab,, both will considered as single character
console.log(str.length);

let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item,"is", obj.price, "rupees");

let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output);

