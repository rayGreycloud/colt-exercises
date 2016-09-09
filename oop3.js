// Object-oriented Programming
// Exercise OOP3/OOP4
// Using constructor functions and
// keyword 'new' and call/apply methods

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  Car.call(this, make, model, year)
  this.numWheels = 2;
}

// Using apply with 'arguments' keyword
function AlternativeFuel(make, model, year, fuelType) {
  Car.apply(this, arguments)
  this.fuelType = fuelType;
}

// Alternative form using argument array
// function AlternativeFuel(make, model, year, fuelType) {
//   Car.apply(this, [make, model, year])
//   this.fuelType = fuelType;
// }

var harley = new Motorcycle("Harley", "Sportster", 2012)
console.log(harley)

var volt = new AlternativeFuel("Chevy", "Volt", 2017, "Electric")
console.log(volt)
