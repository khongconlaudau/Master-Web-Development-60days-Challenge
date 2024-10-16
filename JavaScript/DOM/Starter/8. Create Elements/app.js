// creates Elements
const h1 = document.createElement("h1");
const body = document.body;
h1.innerText = "Goodbye!"
h1.classList.add("greetings");
// h1.classList.remove("greetings");
console.log(h1);

// append
body.appendChild(h1);

// ---------
const ul = document.querySelector("ul");
const first = document.querySelector("li");
console.log(first);
const newLi = document.createElement("li");
newLi.innerText = "Im a new li tag";


// selector.insertBefore(what, where)
ul.insertBefore(newLi, first);