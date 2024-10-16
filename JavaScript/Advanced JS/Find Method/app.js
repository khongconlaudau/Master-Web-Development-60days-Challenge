// The find() method is another built-in array helper in JS that allows you to find "the first element" in an array
// that matches a specific condition.

const people = [
    {name: "Duc", age: 20},
    {name: "Mason", age: 20},
    {name: "Johnson", age: 20},
    {name: "Tom", age: 20},
    {name: "Johnson", age: 30},
]

const result = people.find((person) => person.name === "Johnson");
console.log(result);