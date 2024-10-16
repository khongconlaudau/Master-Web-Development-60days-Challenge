const person = {
    name: "Manh",
    age: 20,
    gender: "male",
}

for (let keys in person) {
    console.log(keys, person[keys])
}

let list = ["one", "two", "three"];

for (let index in list) {
    console.log(index, list[index])
}
for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

