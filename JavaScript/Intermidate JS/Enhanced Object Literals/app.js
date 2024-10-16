// function user(name, age, job) {
//     return {
//         name: name,
//         age: age,
//         job: job,
//         intro: function () {
//             console.log(`My nane is ${name}. I'm ${age} years old and I'm a ${job}`);
//         }
//
//     }
// }

// OR

function user(name, age, job) {
    return {
        name,
        age,
        job,
        intro: () => {
            console.log(`My nane is ${name}. I'm ${age} years old and I'm a ${job}`);
        }
    }
}

const duc = user("Duc", 20, "Programmer");
duc.intro();

console.log(duc);


const a = 1;
const b = 2;
const c = 3;

const obj = {a, b, c}
console.log(obj)