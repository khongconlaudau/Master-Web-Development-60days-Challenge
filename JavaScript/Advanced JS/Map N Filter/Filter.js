let people = [
    {firstName: "John", age: 33},
    {firstName: "Duc", age: 20},
    {firstName: "Jane", age: 32},
    {firstName: "Doe", age: 22},
]

const validAge = people.filter((person) => person.age > 30)

console.log(validAge)