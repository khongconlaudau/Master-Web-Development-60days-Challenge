// year, month, day, hours, minutes, seconds, milliseconds.

const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.toString());
console.log(currentDate.toLocaleString());
console.log(currentDate.toISOString())

const fixedDate = new Date(2025, 2, 26, 2, 30, 0, 0);
console.log(fixedDate);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(`${year}-${month}-${day}`);