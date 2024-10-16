// The reduce() method applies the reducer function to each element of an array, accumulating the results into a
// single value. It is often used to perform calculations or aggregations on array elements and simplify the arr
// into a single value

const nums = [1, 2, 3, 4, 5];
total = nums.reduce((prev, curr) => {
    return prev + curr;
}, 0);

console.log(total);

const people = [
    {name: "Manh", age: 20},
    {name: "Cherry", age: 22},
    {name: "Duc", age: 32},
]


const oldestAge = people.reduce((prev, curr) => {
    return curr.age > prev ? curr.age : prev;
}, 0)
console.log(oldestAge);


const words = [
    "Apple",
    "Banana",
    "Cherry",
    "Apple",
    "Banana",
    "Cherry",
    "Grape"
];

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    return frequencyMap;
}, {});
console.log(wordFrequency["z"] || 0);
console.log(wordFrequency);

const numbers = [2, 3, 4, 5];
const product = numbers.reduce((prev, curr) => {
    return prev * curr;
}, 1);

console.log(product)