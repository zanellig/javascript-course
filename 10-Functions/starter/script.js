'use strict';

/* DEFAULT VALUES:
const bookings = [];

const createBooking = function (
  flightNumber = null,
  numPassengers = null,
  price = 199 * numPassengers
) {
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
// Passing values vs reference.
createBooking('LH123', 2, 800);
createBooking('LH123');
*/
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum = null, passenger = null) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
    return;
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
*/
/* CALLBACK FUNCTIONS:
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
/* Returning a function from a function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hola')('Gonzalo');

const greeting = greeting => name => console.log(`${greeting} ${name}`);

greeting('Hola')('capo');
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
const book = lufthansa.book;

lufthansa.book(239, 'Gonzalo Zanelli');
lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
// Call method
// eurowings.book(563, 'Sarah Williams');
book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 764, 'Martin Luther');

// Apply method
const flightData = [764, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Wonder');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTaxRate = rate => value => value + value * (rate / 100);
const addVAT = addTaxRate(23);
console.log(addVAT(100));
*/

/* CHALLENGE #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  displayResults(str) {
    let newStr = `Poll results are:`;
    for (let i = 0; i < str.length; i++) {
      newStr += ` ${String(str[i])}`;
    }
    return alert(newStr);
  },
  registerNewAnswer() {
    for (let i = 0; i < 1; i) {
      const answer = Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}
      \n[Write option number]`
        )
      );
      if (typeof answer === 'number' && answer >= 0 && answer <= 3) {
        this.answers[answer]++;
        i++;
        if (
          this.answers[0] +
            this.answers[1] +
            this.answers[2] +
            this.answers[3] ===
          10
        ) {
          this.displayResults(this.answers);
        }
        return answer;
      } else {
        alert('Please write only numbers between 0 and 3 ;)');
      }
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
*/
// IIFE Inmediately Invoked Functions / Function Expressions
/*
(function () {
  console.log(
    `Runs once. Doesn't get stored in any variable. The data inside it is private, because it has it's own scope.`
  );
})();
// Wrap in parenthesis. Inmediately call it.
(() => {
  console.log(`This will never run again.`);
})();
// Another way to privatize data:
{
  const isPrivate = `I'm not accesible outside this object literal.`;
}


const parentFn = () => {
  let variable = 0;
  return () => {
    variable++;
    return variable;
  };
};

const sum = parentFn();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// Re asignar f()
h();
f();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);
*/
// TODO CHALLENGE TODO

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
