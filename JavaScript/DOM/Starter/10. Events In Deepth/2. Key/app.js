const input = document.querySelector("input");


// input.addEventListener("keypress",()=>{
//     console.log("Key Pressed");
// })

// input.addEventListener("keyup",()=>{
//     console.log("Key Up");
// })

input.addEventListener("keypress",(event)=>{
    console.log(event.keyCode);
    console.log(event.code);
    console.log(event.ctrlKey);
    console.log(event.key);
})

