var taxi = {
    make: "Webville Motors",
    year: 1955,
    model: "Taxi",
    color: "Yellow",
    passengers: 4,
    covertible: false,
    mileage: 281341
};

var cadi = {
    make: "GM",
    year: 1955,
    model: "Cadillac",
    color: "Tan",
    passengers: 5,
    covertible: false,
    mileage: 12892 
}

var fiat = {
    make: "Fiat",
    year: 1957,
    model: "500",
    color: "Medium Blue",
    passengers: 2,
    covertible: false,
    mileage: 88000 
}

var chevy = {
    make: "Chevy",
    year: 1957,
    model: "Bel-Air",
    color: "Red",
    passengers: 2,
    covertible: false,
    mileage: 1021
}

// var models = [taxi, cadi, fiat, chevy];

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

// function buyIt(models) {
//     var worthALook;
//     for (i=0; i < models.length; i++) {
//         worthALook = prequal(models[i]);
//         if (worthALook) {
//             console.log("You should really check out the " + models.make + " " + models.model);
//         } else {
//             console.log("You can give this " + models.make + " " + models.model + " a HARD PASS.");
//         }
//     }
// }

var worthALook = prequal(taxi);
if (worthALook) {
    console.log("You should really check out the " + taxi.make + " " + taxi.model);
} else {
    console.log("You can give this " + taxi.make + " " + taxi.model + " a HARD PASS.");
}

var worthALook = prequal(cadi);
if (worthALook) {
    console.log("You should really check out the " + cadi.make + " " + cadi.model);
} else {
    console.log("You can give this " + cadi.make + " " + cadi.model + " a HARD PASS.");
}

var worthALook = prequal(fiat);
if (worthALook) {
    console.log("You should really check out the " + fiat.make + " " + fiat.model);
} else {
    console.log("You can give this " + fiat.make + " " + fiat.model + " a HARD PASS.");
}

var worthALook = prequal(chevy);
if (worthALook) {
    console.log("You should really check out the " + chevy.make + " " + chevy.model);
} else {
    console.log("You can give this " + chevy.make + " " + chevy.model + " a HARD PASS.");
}

