const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector(".todos");


function getTodo(value){
  // Creating new elements
  let todo = document.createElement("div");
  let textEl = document.createElement("span");
  let closeEl = document.createElement("span");

  // Setting value
  textEl.innerHTML = value;
  closeEl.innerHTML = "&times";

  // add class
  closeEl.classList.add("delete");
  todo.classList.add("todo");

  // Append element
  todo.appendChild(textEl);
  todo.appendChild(closeEl);

  closeEl.addEventListener("click",()=>{
    todos.removeChild(todo);
  })
  return todo;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let value = input.value.trim();
    todos.appendChild(getTodo(value));
    input.value = "";
});