/************* 
 *                                           1) Add friend feature with same button
 

 var istatus = document.querySelector("h5")

var add = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")
var check = 0

add.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"

        add.innerHTML = "Remove Friend"
        add.style.backgroundColor = "white"
        add.style.color = "black"
        check = 1
    }else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        
        add.innerHTML = "Add Friend"
        add.style.backgroundColor = "cadetblue"
        add.style.color = "cornsilk"
        check = 0
        
    }
})


// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "stranger"
//     istatus.style.color = "red"
    
// })

**************************************************************************************/

var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(() => {
        love.style.transform ="translate(-50%, -50%) scale(1)"
    }, 300);
});