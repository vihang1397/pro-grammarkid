// Variables declared
var loc1 = Math.floor(Math.random()*5);
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) { //Start of the loop
    guess = prompt("Ready, Aim, FIRE!!! (Enter number between 0-6):");

    if (guess < 0 || guess > 6) {
       alert("Please input a valid number!");
    } else {
        guesses = guesses + 1;

        if (guess == loc1 || guess == loc2 || guess == loc3) {
            alert("HIT!");
            hits = hits + 1;

//            if (guess == loc1 && guess != loc2 && guess != loc 3) {
//                alert("Already HIT there");
//                hits = hits - 1;
//            }

            if (hits == 3) {
                isSunk = true;
                alert ("You sunk the BattleShip!!!");
            } 
        } else if (guess != loc1 || guess != loc2 || guess != loc3) {
            alert("MISS");
        }
    }
}

var stats = `You took ${guesses} guesses to sink the battleship, your shooting accuracy is ${3/guesses*100}%`;

alert(stats);