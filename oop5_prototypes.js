// Object-oriented Programming
// Exercise OOP5
// Using prototype

// Constructor function
function Person(name) {
  this.name = name;
}

// Objects created from Person constructor

const elie = new Person('Elie');
const colt = new Person('Colt');

// Demo link between object and prototype
// using dunder '__prototype__'

console.log(elie.__prototype__ === Person.prototype) // true
console.log(colt.__prototype__ === Person.prototype) // true

// Person.prototype also has prop called
// constructor that points back to function

console.log(Person.prototype.constructor === Person) // true
