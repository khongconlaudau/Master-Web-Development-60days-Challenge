// The map() method creates a new array populated with the result of calling a provided function on every element in
// the calling array

let nums = [1, 2, 3, 4, 5];

let double = nums.map((num) => num * 2)

console.log(double);

let people = [
    {firstName: "John", age: 33},
    {firstName: "Duc", age: 20},
]

const ages = people.map((person) => {
    return person.age
})

console.log(ages);