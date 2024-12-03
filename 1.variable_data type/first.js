full_name = "tony stark";
age = 24;
price = 99.99;
a = null;
y = undefined;
is_follow = true;
//console.log(full_name);
/* 
java script is a dynamic type programming language means we don't have to tell it 
what type of value we are storing in it 

= this is assingment operator

7 types pf primitive data type -> Number, String, Boolean, Undefined, Null, BigInt, Symbol
Non-primitive -> Object(Array,Function)
Object 
*/
const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
}; //how to change inside object value
student["name"] = "Rahul Sharma"
student["age"] = student["age"] + 1

/*
two methods to asses this object
1 -> console.log(student["age"]);
2 -> console.log(student.age);
*/


//practise

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};
//console.log(product.price);

const insta = {
    userName: "NotShown",
    Followers: "596k",
    following: 4,
    isFollow: true,
}

//console.log(insta.Followers);