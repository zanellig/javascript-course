'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.status = function () {
  console.log(`${this.make} going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.status();
mercedes.status();
