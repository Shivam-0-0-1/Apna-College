const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact")
const btn= document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

/*
const getFacts = async () => {
    console.log("getting data........");
    let response = await fetch(URL);
    console.log(response); //response.status, //it is in JSON format 
    let data = await response.json();// this is for converting JSON to json format
    // console.log(data[0].text); //for specifc, // data[0].text

    factPara.innerText = data[0].text; //0,1,2,3,4
};  
*/

/****using promise chaining*****/

function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    })
}



btn.addEventListener("click", getFacts)