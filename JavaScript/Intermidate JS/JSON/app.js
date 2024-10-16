const person = {
    name: "Duc Manh Van",
    age: 20,
    email: "dm@gmail.com",
    isStudent: true,
    hobbies: ["Music", "Bla..Bla"],
    address: {
        country: "VietName",
        isABeautifulCountry: true
    }
}

console.log(person);

// JSON.stringify() convert JS's objects to JSON String
console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));