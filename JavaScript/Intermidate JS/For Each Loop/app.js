const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
    console.log(color, index);
})

const words = ["hello", "world", "how", "y'all", "doing"]
words.forEach((word, index) => {
    words[index] = word[0].toUpperCase() + word.slice(1);
})

console.log(words)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function adder(number) {
    sum += number;
}

numbers.forEach(adder)
console.log(sum)

