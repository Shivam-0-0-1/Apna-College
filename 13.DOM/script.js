 // pillars of DOM 

 // 1. Selection of an Element
 // 2 Changing HTML
 // 3 Changing CSS
 // 4 Event Listner

 /***** changing HTML *********
  
 var a = document.querySelector("h1")
 console.log(a); // so, thst we don't have to write it again....

 a.innerHTML = "Changed HTML" // it will change inner text of selected...

 // short-cut
 document.querySelector("h1").innerHTML = "huiiii"

 *********/

/******  Changing CSS ********
 
 var b = document.querySelector("h1")
 b.style.color = "blue" // use syle even when our file name is something else
 b.style.backgroundColor = "black"

*/

/******* Event Listner *******
var c = document.querySelector("h1")

c.addEventListener("click", function() {
    c.innerHTML = "Badal gya hu m abb"
    c.style.color = "yellow"
    c.style.backgroundColor = "#000"
})

**********/

/************ Bulb 
 var bulb = document.querySelector("#bulb") // id-> #
 var btn = document.querySelector("button")

 var flag = 0

btn.addEventListener("click", function() {
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("clicked");
        flag = 1
    }else{
        bulb.style.backgroundColor = "white"
        console.log("again clicked");
        flag = 0
        }

})
                        ***************/


var h = document.querySelectorAll("h1") // for selecting all the elements
console.log(h);

h.forEach(function(e){
    console.log(e);
    
})

// document.getElementById("")
// document.getElementsByClassName("")


var box = document.querySelector("#box")

box.innerHTML = "<h1>Hello</h1>" // it will print just -> Hello, & now we can even apply *CSS*
box.textContent = "<h1>Hello</h1>"  //it will print as it is -> <h1>Hello</h1>