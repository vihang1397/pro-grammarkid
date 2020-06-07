var myCar = {
  make: "Audi",
  year: 2017,
  model: "Q3 Quattro SUV",
  color: "Black",
  passengers: 5,
  covertible: false,
  mileage: 150000,
  started: false,
  fuel: 0,
  start: function () {
    if (this.fuel > 0) {
      this.started = true;
    } else {
      alert("You need to fill fuel for car to run!");
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes Zoom Zoom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh! We're out of fuel!");
        this.stop();
      }
    } else {
      alert("You need to start the car before driving.");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
    alert("Filled " + amount + "L of fuel.");
  },
};

myCar.start();
myCar.drive();
myCar.addFuel(5);
myCar.start();
myCar.drive();
myCar.drive();
myCar.drive();
myCar.drive();
myCar.drive();
myCar.drive();
myCar.stop();
