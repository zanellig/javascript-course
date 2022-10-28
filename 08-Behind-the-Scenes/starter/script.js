'use strict';
/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // const firstName = 'Steven';
      const str = `Oh, and you're a millennial ${firstName}`;
      console.log(str);

      // function add(a, b) {
      //   return a + b;
      // }
    }
    console.log(millennial);
  }
  printAge();

  return age;
}

const firstName = 'Gonza';

calcAge(1996);

console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 2));
console.log(addExpr(2, 3));
console.log(addArrow(2, 4));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
const y = 2;
let z = 3;

console.log(this);

const calcAge = function (birthYear) {
  console.log(2050 - birthYear);
  console.log(this);
};

calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2050 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const mathilda = {
  year: 2017,
};
mathilda.calcAge = jonas.calcAge;
mathilda.calcAge();

const f = jonas.calcAge;
f();

var firstName = 'Mathilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;

    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillennial();

    // Solution 2 (No need of declaring self variable. Arrow functions use parent scope "this" keyword.)
    const isMillennialArrow = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennialArrow();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return console.log(a + b);
};

addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return console.log(a + b);
};

addArrow(2, 5);

let age = 30;
let oldAge = age;
age += 1;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(me);
console.log(friend);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// Not an exact clone.
const marriedJessica = {
  firstName: jessica.firstName,
  lastName: 'Davis',
  age: jessica.age,
};

console.log(jessica);
console.log(marriedJessica);

// How to copy an object sloppily.

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

console.log(jessica2);
console.log(jessicaCopy);

// New (native) solution to deep cloning!
const jessicaDeepClone = structuredClone(jessica2);
jessicaDeepClone.family.push('Mary');
console.log(jessicaDeepClone);
*/
