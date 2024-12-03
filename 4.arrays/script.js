let marks = [97, 82, 75, 64, 66];
console.log(marks);
console.log(marks.length);

//typeof marks -> object

// marks[0], marks[4] 

// looping over an array
//for loop
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"]

for (let i = 0; i < heroes.length; i++) {
    // console.log(heroes[i]);
}

//for of
for (let hero of heroes) {
    // console.log(hero);
}

let cities = ["delhi", "pune", "mumbai", "hyderbad", "gurgaon"];

for (let city of cities) {
    //console.log(city);
    // console.log(city.toUpperCase());
}
/******* practise ********
 * Q) for a given array with marks of student -> [85,97,44,37,76,60] find the average marks
      of the entire class
*/
student = [85,97,44,37,76,60];

sum = 0;
for ( let val of student) {
    sum += val;
}
avg = sum/student.length;
// console.log(`the avg marks of the student = ${avg}`); 

/*
Q) for a given array with prices of 5 items -> [250,645,300,900,50] all items have an offer of
10% OFF on them. change the array to store final price after applying offer.
*/

let items = [250, 645, 300, 900, 50];

let i = 0;
for ( let val of items) {
   // console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    // console.log(`value after offer = ${items[i]}`)
    i++;
}

// for (let i = 0; i < items.length; i++) {}

// using for loop

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);
 