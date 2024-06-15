'use strict';

// Constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName || '';
  this.birthYear = birthYear || 1970;

  // Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2001);
const jack = new Person('Jack', 1975);

// Prototypes
Person.prototype.calcAge = function () {
  const currentYear = new Date().getFullYear();
  const age = currentYear - this.birthYear;
  return age;
};

// console.log(Person.__proto__ === Person.prototype);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.__proto__.isPrototypeOf(Person));

console.log(Array.__proto__);
