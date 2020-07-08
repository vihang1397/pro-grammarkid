// DECLARING REQUIRED VARIABLE TO PULL INPUT

// const yearInput = document.querySelector("#yearInput").value;
const result = document.querySelector(".result");
const submit = document.querySelector("#submit");

// EVENT HANDLER FOR SUBMIT BUTTON

submit.addEventListener("click", leapOrNot);

// FUNCTIONS TO CALCULATE LEAP OR NOT

function leapOrNot(year) {
  // PREVENTING REFRESHING PAGE
  year.preventDefault();

  var yearInput = document.querySelector("#yearInput").value;

  if ((yearInput % 4 === 0 && yearInput % 100 != 0) || yearInput % 400 === 0) {
    console.log("The year is leap year");
    // MAKES THE ENTIRE PAGE JUST THE DOC.WRITE TEXT... NEED MORE RESEARCH.
    // document.write("The year is leap year");
  } else {
    console.log("This is not a leap year");
  }
  document.querySelector("#yearInput").value = " ";
}

// || year % 400 === 0) && year % 100 !== 0
// || year % 200 === 0
// && !(year % 100 === 0)

// const leapOrNot = document.createElement("li");
//     leapOrNot.innerText = yearInput.value;
//     leapOrNot.classList.add("result");
//     resultHistory.appendChild(leapOrNot);
