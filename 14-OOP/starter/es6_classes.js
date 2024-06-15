'use strict';
// class expression
const PersonExpression = class {};
// class declaration
class Person {
  constructor(name, birth_year) {
    this.name = name;
    this.birth_year = birth_year;
  }
  calcAge() {
    return new Date().getFullYear() - this.birth_year;
  }
}

const jessica = new Person('Jessica', 2001);

console.log(jessica.calcAge());
