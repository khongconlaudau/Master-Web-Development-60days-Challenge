// Template strings, also known as template literals, are a feature in JS that allows you to create strings with
// embedded expressions. They are denoted by backticks ``.

function info() {
    return "Hello World!"
}

console.log(`${info()}`);
console.log(`${info}`);
console.log(`${2 + 2}`);
console.log(`${["one", "two", "three"]}`);