const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
let lst = [];
lst = JSON.parse(localStorage.getItem("todoList"));
if (!lst) lst = [];
if (lst.length > 0) {
  for (let item of lst) {
    const newLi = document.createElement("li");
    newLi.innerText = item;
    newLi.setAttribute("data-todo", item);
    const spanEl = document.createElement("span");
    spanEl.innerText = "x";
    newLi.append(spanEl);
    ulEl.append(newLi);
  }
}
function addTodo(event) {
  event.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerText = inputEl.value;
  newLi.setAttribute("data-todo", inputEl.value);
  const spanEl = document.createElement("span");
  spanEl.innerText = "x";
  newLi.append(spanEl);
  ulEl.append(newLi);
  lst.push(inputEl.value);
  localStorage.setItem("todoList", JSON.stringify(lst));
  inputEl.value = "";
}
formEl.addEventListener("submit", addTodo);
ulEl.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  } else if (event.target.tagName === "SPAN") {
    const text = event.target.parentElement.dataset.todo;
    lst = lst.filter((item) => item !== text);
    if (lst.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(lst));
    } else {
      localStorage.removeItem("todoList");
    }
    event.target.parentElement.remove();
  } else {
    //console.log("Click somewhere else");
  }
});

//arr = arr.filter(item => item !== value)
