/*
const student = {
    fullName: "shivam",
    marks: 74.4,
    printMarks: function () {
        console.log("marks = ", this.marks); //this.marks => student.marks
    },
};
*/

const employee = {
    calctax2 : function () {
        console.log("tax rate is 10%");
    },
 /*   calctax() {  // we can also write like this, & this is preferred  
        console.log("tax rate is 10%");
    }
*/
};

const karanArjun = {
    salary: 50000,
};
/*
const karanArjun2 = {
    salary: 50000,
};

const karanArjun3 = {
    salary: 50000,
};

const karanArjun4 = {
    salary: 50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee; 
karanArjun4.__proto__ = employee;

*/

const karan = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

karan.__proto__ = employee;


/********************************************    Class ******************************************/

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating a new object");
        this.brand = brand;
        this.mileage = mileage;
    }
/*    start() {
        console.log("start");
    }
*/
    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand; // generally we give same name but in real both are different => this.brand = brand;
    }
}

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
let fortuner = new ToyotaCar("fortuner", 10); //constructor
console.log(fortuner);

// let lexus = new ToyotaCar();
// lexus.setBrand("lexus")
let lexus = new ToyotaCar("lexus", 12); //constructor
console.log(lexus);


/**************inheritance in js****************** */

class parent {
    hello() {
        console.log("hello");
    }
}

class child extends parent {}
   
let obj = new child();


class person {
    constructor() {
        this.species = "homo sapiens"
    }

    
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends person{
    work() {
        console.log("solve problems, build something");
    }
}

let shivamObj = new Engineer();

class doctor extends person{
    work() {
        console.log("treat patients");
    }
}

let shivamObj2 = new doctor();

/* if child & parent have same method, child's method will be used [method overriding]