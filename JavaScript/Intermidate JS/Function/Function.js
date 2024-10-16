// function name(parameterIfAny){...}
function saySth() {
    console.log("Hello World!");
}

function sayHello(name) {
    name = name.toLowerCase();
    console.log(`Hello ${name}`);
    console.log("Hello", name);
}

function add(x, y) {
    return x + y;
}

sayHello("Duc");
saySth();
console.log(add(20, 10));

// Function Declaration:
yap("dhsadhiud");

function yap(anything) {
    console.log(anything);
}

// Function Expression:
greetings("Mason");
const greetings = function (user) {
    console.log(`Hello ${user}`)
}

greetings("Mason");