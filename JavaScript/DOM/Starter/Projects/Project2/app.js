const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    changeBgColor(color);
  });
});

function changeBgColor(color) {
    body.classList.add(color);
}
