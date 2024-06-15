'use strict';

const Constructor = function (propiedad) {
  this.propiedad = propiedad;
};
Constructor.metodoEstatico = function () {
  return this;
};
Constructor.prototype.metodoDeInstancia = function () {
  return this;
};

const instancia = new Constructor('string');
// console.log(instancia.metodoDeInstancia());

// Class test

class Prueba {
  constructor(argumento) {
    this.propiedad = argumento;
  }
  get propiedad() {
    return this._propiedad;
  }
  set propiedad(argumento) {
    this._propiedad = argumento;
  }

  static metodo(argumentoOpcional) {
    argumentoOpcional ? (this.propiedad = argumentoOpcional) : null;
    argumentoOpcional || this.propiedad ? console.log(this.propiedad) : null;
  }
}

const _1 = new Prueba('string');

Prueba.metodo();
