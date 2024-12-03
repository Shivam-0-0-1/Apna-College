/*
let btn1 = document.querySelector("#btn1")

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};
*/


// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked");
// });
/*
btn1.addEventListener("click", (evt) => {
    console.log("button 1 was clicked");
    console.log(evt);
});


btn1.addEventListener("click", () => {
    console.log("button 1 was clicked - handler2");
});
*/

/****************practise**************** 
 * Create a toggle button that changes the screen to dark-mode when clicked & light-mode
    when clicked again.
*/

/*
let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black"; 
    }else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
})
*/
/************i will create mouse however toggle ************** */
let div = document.querySelector("div");
let theme = "light";

div.addEventListener("mouseover", () => {
    if(theme === "light") {
        theme = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else {
        theme = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(theme);
})