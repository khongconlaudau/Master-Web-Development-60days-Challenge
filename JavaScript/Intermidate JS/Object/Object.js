const person = {
    fName: "Manh",
    lName: "Van",
    age: 20,
    location: ["Planet", "Earth"],
    isPro: true
}

console.log(person);
console.log(person.fName);
console.log(person["location"]);
// add new element to object
person.fullName = "Van Duc Manh";
console.log(person);

// delete element in object
delete person.fName;
console.log(person);

console.log(typeof person);













