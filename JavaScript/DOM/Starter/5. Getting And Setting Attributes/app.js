// 1. href
const a = document.querySelector("a");
console.log(a.href);

const input = document.querySelector("input");
console.log(input.value);
console.log(input.type);

// setting attribute
a.href = "https://www.youtube.com"
console.log(input.value = "Hello");
console.log(input.placeholder = "Please enter user name")

// getAttribute(attrName)
console.log(input.getAttribute("placeholder"));
console.log(input.getAttribute("type"))

// setAttribute(attrName,value)
input.setAttribute("type", "password");
input.setAttribute("placeholder", "Enter your password");