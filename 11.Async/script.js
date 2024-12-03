// console.log("one");
// console.log("two");
// console.log("three"); 

/*
function hello() {
    console.log("hello");
}

setTimeout(hello, 4000); // timeout, 1000 -> 1s


setTimeout(() => {
    console.log("hello");
}, 4000);

*/

/*
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 4000);

console.log("three"); 
console.log("four"); 
*/
/*
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);

calculator(1, 2, (a, b) => {
    console.log(a + b);
});

const hemlo = () => {
    console.log("hello");
};

setTimeout(hemlo, 3000);
*/
/************************callback hell *****************************/
/*
function getData(dataId, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);    
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        })
    })
})
*/
/*******************
 * promises 
 
-> threestates
 1. pending
 2. resolve
 3. reject
 
 */
/*
 let promise = new Promise((resolve, reject) => {
    console.log("i am a promise"); // if only this, PromiseStste -> "pending"
    // resolve("success"); //can call with any value, PromiseResult -> any value
    reject("some error");// same as above
});
*/
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success")
        // reject("error ocurred")
    });
};

let promise = getPromise();
promise.then((res) => { //res -> use as a reference of above => resolve
    console.log("promise fulfilled", res);
});

promise.catch((err) => { //err -> use as a reference of above => error
    console.log("rejected", err);
});

/*********promise chainig**************/

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success")
        }, 4000)
    });
};


/** will print simultaneoulsy = x
console.log("fetching data1.....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2......");
let p2 = asyncFunc2();
p2.then((res) => {
    console.log(res);
});


***/

/***right way***/

console.log("fetching data1.....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("fetching data2....");
    let p2 = asyncFunc2();
    p2.then((res) => {});
});


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
};

getData(1)
    .then((res) => {
    return getData(2);
})
    .then(() => {
    return getData(3);
})  
    .then ((res) => {
    console.log("success");
})

/*******Async-Await******* */

async function hello() {
    console.log("hello");
} 

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wether data");
            resolve(200);
        }, 2000)
    });
}

async function getWeatherData() {
    console.log("fetching data 1...");
    await api(); //1st call, after after execution then 2nd call will work & it's goes on

    console.log("fetching data 2....");
    await api(); //2nd

    console.log("fetching data 3....");
    await api(); //3rd,  we can  give them id inside (), await api(3)

}

/*     *********IFEE(immediately invoked function expression)************ 
 just put it in a bracket & add a pair of (); in the end 

 benefit -> we don't have to call that function

 loss -> it will work only 1 times , if need again we have to use copy paste
*/

(async function getWeatherData() {
    console.log("fetching data 1...");
    await api(1); 
    console.log("fetching data 2....");
    await api(2);
    console.log("fetching data 3....");
    await api(3);
}) ();