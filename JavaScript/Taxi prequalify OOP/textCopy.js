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

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
        console.log("You can give this " + taxi.make + " " + taxi.model + " a HARD PASS.");
    } else if (car.year > 1960) {
        return false;
        console.log("You can give this " + taxi.make + " " + taxi.model + " a HARD PASS.");
    } else {
        return true;
        console.log("You should really check out the " + taxi.make + " " + taxi.model);    
    }
}

var worthALook = prequal(taxi);
var worthALook = prequal(cadi);
var worthALook = prequal(fiat);