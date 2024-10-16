// The spread operator is a new addition to the set of operators in JavaScript ES6
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS Objects.
// Using this operator makes the code concise and enhances its readability

function giveMe4(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

colors = ["red", "green", "blue", "yellow"];

giveMe4(colors);
giveMe4(...colors);
giveMe4(1, 2, 3, 4);


const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];
const combined = [...nums1, ...nums2];
console.log(combined);


const person = {
    name: "Duc",
    age: 20,
    job: "Student",
}

const clone = {...person, hobbies: "Soccer"};
console.log(clone);


