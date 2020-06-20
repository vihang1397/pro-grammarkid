window.onload = function () {
  //Selectors

  const toDoInput = document.querySelector(".todo-input");
  const toDoButton = document.querySelector(".todo-button");
  const toDoList = document.querySelector(".todo-list");

  //Event Listeners

  toDoButton.addEventListener("click", addToDo);

  //Functions

  function addToDo(event) {
    //Prevent empty default from submitting
    event.preventDefault();
    //   event.stopImmediatePropagation();
    console.log("hello");
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
};
