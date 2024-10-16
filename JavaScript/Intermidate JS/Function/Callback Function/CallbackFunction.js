// When we provide function as an (argument) to other function that function is known as call function


function showCallFunc(cf) {
    const value = 20;
    cf(value);
}

showCallFunc(function (value) {
    console.log(value);
});

let storeValue = 20;

function changeValue() {
    // storeValue = 30;
    let storeValue = 40;
    console.log(storeValue);
}

changeValue();
console.log(storeValue);