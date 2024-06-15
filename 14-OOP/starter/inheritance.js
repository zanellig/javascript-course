'use strict';

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

const Student = function (course) {
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I'm studying ${this.course}.`);
};

const mike = new Student('Mike', 1998, 'CS');
mike.introduce();

/*
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  calcularNacimiento() {
    return new Date().getFullYear() - this.edad - 1;
  }

  get edad() {
    return this._edad || 'No se ha definido edad.';
  }

  set edad(edad) {
    this._edad = edad;
  }

  static separarNombre() {
    return this.nombre.split(' ');
  }
}

// const neron = new Persona('Neron Puglisi');

// neron.edad = 16;
// console.log(neron.calcularNacimiento());

const Chabon = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
};
Chabon.prototype.nacimiento = function () {
  return new Date().getFullYear() - this.edad - 1;
};
Chabon.devolverNombre = function () {
  return this.nombre;
};

const gonzalo = new Chabon('Gonzalo Zanelli', 22);
*/
