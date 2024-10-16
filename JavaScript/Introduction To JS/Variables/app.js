// (reserved keyword) (variable name) (type of value)

// reversed keyword: var(NO RECOMMENDED), const, let


// let name = "Van Duc Manh "
// console.log(name);
//
// let fav;
// fav = "Soccer";
// console.log(fav);
//
// let _ducDev = true
// console.log(_ducDev);
//
// let $something = "Hello World"
// console.log($something)
//
// let book_store = "BB"
// console.log(book_store);


let name = "Van Duc Manh";
let whatDoYouWannaBeInYourLife = "Programmer";
let gender = "Male";
let twitterHandle = "@duxcwebdev";
console.log(name);
console.log(whatDoYouWannaBeInYourLife);
console.log(gender);
console.log(twitterHandle);


console.log(typeof whatDoYouWannaBeInYourLife);

let counter = 10;
console.log(counter++);
console.log(counter);

let temp = counter;
console.log(temp);

let firstNum = 2;
let secondNum = 3;
console.log(firstNum + secondNum);
console.log(firstNum - secondNum);
console.log(firstNum * secondNum);
console.log(firstNum / secondNum);
console.log(firstNum % secondNum);
console.log(firstNum ** firstNum);


// falsy:
// -> false
// -> null
// -> undefined
// -> 0
// -> -0
// -> NaN
// -> '',"",``, (empty quotes)


//Equality Operators
// === strict equality (type + value)
// !== strict non-equality (type + value)
// == lose equality operator (value)
// != not equality operator (value)

// console.log(10 == "10");
// console.log(10 === "10");
//
// console.log(10 !== "10");
// console.log(10 != "10")

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// substring

console.log(name.slice(0, 3))

// split and join

console.log(name.split(""));
console.log(name.split(" "));
console.log(name.split("").join(" "));

// includes
console.log(name.includes("duc"));
console.log(name.includes("Duc"));

// triple quote in java same as `` in JS
let say = `Hello World
  today is a beautiful day`;

let fname = "Manh";
let lname = "Van";
let fullName = `${fname} ${lname}`;
console.log(fullName);
console.log(say)


// Type Conversion
let money = "50";

// money = parseInt(money);
// OR
// money = +money
// OR
money = Number(money);

console.log(typeof money);
console.log(money);

let num = 20;
num = num.toString();
console.log(typeof num);
console.log(num);


for (let i = 0; i < 5; i++) {
    console.log("Hello World " + i);
    console.log("Hello World", i);
}