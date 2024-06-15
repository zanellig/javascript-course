'use strict';

// definimos el prototipo a mano en un object literal
const PersonProto = {
  calcularEdad() {
    return new Date().getFullYear() - this.nacimiento;
  },

  // esta va a ser la "funcion constructora"
  init(nombre, nacimiento) {
    this.nombre = nombre;
    this.nacimiento = nacimiento;
  },
};

const steven = Object.create(PersonProto);

steven.nombre = 'Steven';
steven.nacimiento = 2001;

// console.log(steven.calcularEdad());

/*
  si queremos crear un objeto programaticamente de esta manera, hay que otorgarle al 
  prototipo una especie de funcion constructora

  para then crear un objeto con las propiedades que queramos, llamamos a la funcion que 
  definimos como constructora en el prototipo
*/

const gonzalo = Object.create(PersonProto);
gonzalo.init('Gonzalo Zanelli', 2001);

console.log(gonzalo.calcularEdad());
