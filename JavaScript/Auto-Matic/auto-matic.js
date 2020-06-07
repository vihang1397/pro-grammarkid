function makeCar() {
    var makes = ["Audi", "BMW", "Chevy", "Ford", "Honda", "Hyundai"];
    var models = ["Q5", "X3", "Spark", "Colorado", "Civic", "Sonata"];
    var years = ["2017", "2016", "2020", "2019", "2010", "2012"];
    var colors = ["Midnight Blue", "Galaxy Onyx", "Shining White", "Beach Tan", "Spring Yellow", "Samurai Red"];
    var convertibles = [true, false];

    var rand1 = Math.floor(Math.random()*makes.length);
    var rand2 = Math.floor(Math.random()*models.length);
    var rand3 = Math.floor(Math.random()*years.length);
    var rand4 = Math.floor(Math.random()*colors.length);
    var rand5 = Math.floor(Math.random()*5) + 2;
    var rand6 = Math.floor(Math.random()*convertibles.length);

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        covertible: convertibles[rand6],
        mileage: 0
    };
    return car;
    // Doesn't work here either.
    // if (car.convertible=true) {
    //     console.log("This is a convertible model");
    // } else if (car.convertible=false) {
    //     console.log("Convertible option isn't available at the moment")
    // }
    
}

function displayCar(car) {
    console.log("Your newcar is a " + car.year + " " + car.make + " " + car.model + ", which is " + car.color + " color and seats " + car.passengers + " comfortably.")
    
    // The following comment won't work as it is referencing a local variable from previous function
    // if (car.convertible=true) {
    //     console.log("This is a convertible model");
    // } else if (car.convertible=false) {
    //     console.log("Convertible option isn't available at the moment")
    // }
}

var carToSell = makeCar();
displayCar(carToSell);