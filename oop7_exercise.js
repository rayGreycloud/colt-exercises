// Object-oriented Programming
// Exercise OOP7/8
// Using prototype chain

// Constructor function
function Vehicle (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = () => {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = () => {
  this.isRunning = false;
}

Vehicle.prototype.honk = () => {
  if (this.isRunning === true) {
    return "beep";
  }
}
