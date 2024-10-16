function greet() {
    return `Hello, my name is ${person.name} & I am ${person.age} years old`;
}

const person = {
    name: "Manh",
    age: 20,
    greet
}

console.log(person.greet());

// or
const person2 = {
    name: "Mason",
    age: 20,
    chao: function () {
        return `Hello, my name is ${person2.name} and I am ${person2.age}`;
    }
}

console.log(person2.chao());