// Object-oriented Programming
// Lecture OOP6
// Prototype

// Constructor function
function Person(name) {
  this.name = name;
}

// Objects created from Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

// Set property on Person prototype...
Person.prototype.isInstructor = true;

// ... and objects created with that
// constructor can access that prop
console.log(elie.isInstructor); // true
console.log(colt.isInstructor); // true
