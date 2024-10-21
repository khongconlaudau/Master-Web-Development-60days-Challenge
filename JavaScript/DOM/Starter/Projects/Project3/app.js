const ratings = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingContainer.addEventListener("click",(e)=>{
   if(e.target.parentNode.classList.contains("rating")){
    selectedRating = e.target.nextElementSibling.innerText;
    console.log(selectedRating);
   }
})

sendBtn.addEventListener("click",()=>{
    panel.innerHTML = `
    <p class = "heart">💖</p>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>`;
});
