const firstLI = document.querySelector("li");
console.log(firstLI.parentElement);
console.log(firstLI.parentElement.parentElement);
console.log(firstLI.parentElement.parentElement.parentElement);
console.log(firstLI.parentElement.parentElement.parentElement.parentElement);

const ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);
console.log(ul.children[4]);

console.log(ul.children[0].innerText);


console.log(firstLI.nextElementSibling.innerText);


let lastLI = document.querySelector(".fourth");
console.log(lastLI.previousElementSibling.innerText);