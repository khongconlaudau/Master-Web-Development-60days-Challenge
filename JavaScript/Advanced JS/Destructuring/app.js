// Destructuring allows us to "unpack" values from data-structure (Arrays, objects) into separate distinct variables.

const foo = ["one", "two", "three"];

const [o, t, th] = foo;

console.log(o);
console.log(t);
console.log(th);

const [red, yellow, green, blue] = foo
console.log(blue);


// let a, b;
// [a = 5, b = 2] = [, 9];
// console.log(a);
// console.log(b);

function f() {
    return [1, 2, 3, 4, 5];
}

let [i, , z] = f();
console.log(i);
// console.log(j);
console.log(z);

// Object destructuring

const student = {name: "Duc", position: "First", age: "20"}


const {name} = student;
console.log(name);

const person = {
    name: "Manh",
    age: 20,
    gender: "Male",
    country: "VietName",
}

const {nam, age, country} = person;

console.log(name);
console.log(age);
console.log(country);

// rename object destructuring
const num = {
    x: 100,
    y: 200,
}

const {x: newName, y: newAge} = num;

console.log(newName);
console.log(newAge);

// Object destructuring and rest operator

let {a, b, ...c} = {a: 100, b: 200, c: 300, d: 400, e: 500};
console.log(a);
console.log(b);
console.log(c);

person.gender
person.age

function printPersonInfo({name, age, country}) {
    console.log(
        `Name: ${name}`
    );
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}

printPersonInfo(person);

let options = {
    title: "My menu",
    items: ["item1", "item2"],
}

function showMenu({title, width: w = 100, height: h = 200, items: [item1, item2]}) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1)
    console.log(item2)
}

showMenu(options);