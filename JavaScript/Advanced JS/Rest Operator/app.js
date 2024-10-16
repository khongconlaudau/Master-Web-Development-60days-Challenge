// The rest parameter syntax allows a function to accept an indefinite number of arguments
// As an array, providing a way to represent variadic function in JS

function person(firstName, lastName, ...sthelse) {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("More about me:", sthelse);
}

person("Manh", "Van", "student", "20", "Soccer");

console.log(person === undefined)