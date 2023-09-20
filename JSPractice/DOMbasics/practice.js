//1.
const container = document.getElementById("container");
//2.
const box = document.querySelector("#container");
//box.style.border = "3px solid purple";
//3.
const liSeconds = document.getElementsByClassName("second");
//4.
const liThird = document.querySelector("ol .third");
//5.
container.innerText = "hello";
//6
const divFooter = document.querySelector(".footer");
divFooter.classList.add("main");
//7.
divFooter.classList.toggle("main");
//8.
const liElement = document.createElement("li");
//9.
liElement.innerText = "four";
//10.
const ulElement = document.querySelector("ul");
ulElement.append(liElement);
//11.
const orderedLiElements = document.querySelectorAll("ol li");
for (let element of orderedLiElements) {
  element.style.backgroundColor = "green";
}
//12.
//divFooter.textContent = "Footer";
divFooter.remove();
