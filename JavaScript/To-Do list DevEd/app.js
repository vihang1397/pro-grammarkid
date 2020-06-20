// const hero = document.querySelector(".hero");
// const logo = document.querySelector("#logo");
// const slider = document.querySelector(".slider");
// const hamburger = document.querySelector(".hamburger");
// const headline = document.querySelector(".headline");
// const form = document.querySelector("#form");

// const tl = gsap.timeline();

// tl.fromTo(hero, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
//   .fromTo(
//     hero,
//     1.2,
//     { width: "100%" },
//     { width: "85%", ease: Power2.easeInOut }
//   )
//   .fromTo(
//     slider,
//     1.2,
//     { x: "-100%" },
//     { x: "0%", ease: Power2.easeInOut },
//     "-=1.2"
//   )
//   .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
//   .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
//   .fromTo(form, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");

//Selectors

const toDoInput = document.querySelector("todo-input");
const toDoButton = document.querySelector("todo-button");
const toDoList = document.querySelector("todo-list");

//Event Listeners

toDoButton.addEventListener("click", addToDo);

//Functions

function addToDo(event) {
  //Prevent empty default from submitting
  event.preventDefault();
  // Creating ToDO DIV
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  //Create li
  const newToDo = document.createElement("li");
  newToDo.innerText = "hey";
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);
  //COMPLETED BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class=fas fa-check-square></i>";
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);
  //TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class=fas fa-trash></i>";
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton);
  //APPEND TO LIST
  toDoList.appendChild(toDoDiv);
}
