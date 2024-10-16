//********** DOM SELECTORS ***********//

// 1.getElementByTagName
console.log(document.getElementsByTagName("body"));
console.log(document.getElementsByTagName("body").length);

// 2. getElementById
console.log(document.getElementById("main"));

// 3. getElementByClassName
console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("cls-1"));

// 4. querySelector
console.log(document.querySelector(".cls"));
console.log(document.querySelector("#main"));

// 5. querySelectorAll
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));


//-----------------------------------------
// Storing data in variables
const h1 = document.querySelector("h1");
console.log(h1);

