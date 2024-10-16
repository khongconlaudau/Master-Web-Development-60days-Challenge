const num = [1, 2, 3, 4, 5];
console.log(typeof num);

const stringArr = ["apple", "banana", "cherry"];
console.log(stringArr);
for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i]);
    console.log(stringArr[-1]);
}

num.push(6);
console.log(num);
num.unshift(0);
console.log(num.slice(0, 2))


// nested array
// const nestedArr = ["one", ["two", "three"], 1, true, false];
// // console.log(nestedArr);
// for (i in nestedArr) {
//     // console.log(nestedArr[i]);
//     if (i in ["two", "three"]) {
//         console.log(nestedArr[i][1]);
//         console.log(nestedArr[i][0]);
//     }
//
// }

// let actArr = Array(10, "1, 2, 3, 4, 5, 4, 6, 7, 8, 9, 20")
// console.log(actArr);
let summerFruit = ["apple", "banana", "cherry"];
let winterFruit = ["cherry"];
let fruit = summerFruit.concat(winterFruit);
console.log(fruit);
console.log(summerFruit.includes("apple"));
console.log(summerFruit.includes("app"));
console.log(typeof summerFruit.join("-"));
console.log(summerFruit.reverse());