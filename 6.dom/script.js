// console.log("hello!");
// alert("apna college")

/* Window object 
    the window object represent an open window in a browser. it is browser's object(not JavaScript's)
    & is automatically created by browser.

    it is a global object with lots of properties & methods.

console.log -> print
console.dis -> document -> it use to print propeerties & methods
*/

// console.dir(document.body) // or we can use others just by changing .body

let heading = document.getElementById("heading")
//  console.dir(heading); // console.log(heading);

let headings = document.getElementsByClassName("heading-class");
// console.dir(headings); //returns - HTML collection -> Array(however it is different thing)


let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

let firstEle = document.querySelector("p"); //will give only first element if needs all then use querySelectorAll
console.dir(firstEle);

let allEle = document.querySelectorAll("p"); //it returns nodeList
console.dir(allEle);

let secEle = document.querySelector("#myId");
console.dir(secEle); //it doesn't make sense to use querySelectorAll cuz it is defined to a particular 

 // firstchild, lastchild, children, appendchild, removechild, element