const hero = document.querySelector(".hero");
const logo = document.querySelector("#logo");
const slider = document.querySelector(".slider");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const form = document.querySelector("#form");
const todoContainer = document.querySelector(".todo-container");

const tl = gsap.timeline();

tl.fromTo(hero, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "85%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(form, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(
    todoContainer,
    0.5,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
  );

//Selectors

const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners

document.addEventListener("DOMContentLoaded", getToDOs);
toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);

//Functions

function addToDo(event) {
  //Prevent empty default from submitting
  event.preventDefault();
  // Creating ToDO DIV
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  //Create li
  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);
  //ADD TODO TO SAVE LOCAL STORAGE
  saveLocalToDos(toDoInput.value);
  //COMPLETED BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);
  //TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton);
  //APPEND TO LIST
  toDoList.appendChild(toDoDiv);
  //Clear to-do input Value
  toDoInput.value = " ";
}

function deleteCheck(evt) {
  const item = evt.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //ADDING ANIMATION HERE AND ADDING EVENT LISTENER TO REMOVE ONCE ANIMATION ENDS
    todo.classList.add("fall");
    removeLocalToDos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterToDo(evt) {
  const todos = toDoList.childNodes;
  todos.forEach(function (todo) {
    switch (evt.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalToDos(todo) {
  //CHECK IF ALREADY A LIST EXISTS ON LOCAL STORAGE
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getToDOs() {
  console.log("hello world");
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    // Creating ToDO DIV
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    //Create li
    const newToDo = document.createElement("li");
    newToDo.innerText = todo;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);
    //COMPLETED BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    //TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);
    //APPEND TO LIST
    toDoList.appendChild(toDoDiv);
  });
}

function removeLocalToDos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
