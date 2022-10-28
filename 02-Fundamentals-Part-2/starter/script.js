"use strict";
const log = console.log;
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;

if (hasDriversLicence) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 134;


function logger() {
  log(`My name is Gonzalo.`);
}

// Calling, running or invoking function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
log(appleOrangeJuice);


// Function declaration
const age1 = calcAge1(2022, 2001);
log(age1);

function calcAge1(actualYear, birthYear) {
  return actualYear - birthYear;
}

// Function expression
const calcAge2 = function (actualYear, birthYear) {
  return actualYear - birthYear;
};

const age2 = calcAge2(2022, 2001);
log(age2);


// 36
const calcAge3 = (now, birthYear) => now - birthYear;

const age3 = calcAge3(2022, 2001);
log(age3);

const yearsUntilRetirement = (now, birthYear, firstName) => {
  const age = now - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

log(yearsUntilRetirement(2022, 2001, `Gonzalo`));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

log(yearsUntilRetirement(1991, `Jonas`));

log(yearsUntilRetirement(1950, `Mike`));


const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];

const y = new Array(1991, 1984, 2008, 2020);

log(friends[2]);
log(friends[0]);

log(friends.length);
log(friends[friends.length - 1]);

friends[2] = `Jay`;
log(friends);

const firstName = `Gonzalo`;
const gonzalo = [firstName, `Zanelli`, 2022 - 2001, `programmer`, friends];
log(gonzalo);
log(gonzalo.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
log(ages);


const friends = [`Michael`, `Steven`, `Peter`];

// Add elements
const newLenght = friends.push(`Jay`);
log(friends);
log(newLenght);

friends.unshift(`John`);
log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
log(friends);
log(popped);

friends.shift();
log(friends);

log(friends.indexOf(`Steven`)); // Esta, returns 1
log(friends.indexOf(`Bob`)); // No esta, returns -1

log(friends.includes(`Steven`));
log(friends.includes(`Bob`));

if (friends.includes(`Steven`)) {
  log(`You have a friend called Steven`);
}


const gonza = {
  firstName: `Gonzalo`,
  lastName: `Zanelli`,
  age: 2022 - 2001,
  job: `vendedor`,
  friends: [`Sofia`, `Franco`, `Juan`],
};

log(gonza.lastName);
log(gonza[`lastName`]);

const nameKey = `Name`;
console.log(gonza[`first` + nameKey]);
console.log(gonza[`last` + nameKey]);

const interestedIn = prompt(
  `What do you want to know about Gonza? Choose between firstName, lastName, age, job and friends!`
);

if (gonza[interestedIn]) {
  console.log(gonza[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job and friends!`
  );
}

gonza.location = `Argentina`;
gonza[`twitter`] = `@ellokutor`;
log(gonza);

gonza.bestFriend = gonza.friends[1];
log(gonza.bestFriend);


const gonza = {
  firstName: `Gonzalo`,
  lastName: `Zanelli`,
  birthYear: 2001,
  job: `vendedor`,
  friends: [`Sofia`, `Franco`, `Juan`],
  hasDriversLicence: true,

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

log(gonza.calcAge(gonza.birthYear));

log(gonza.age);
log(gonza.age);
log(gonza.age);

// log(gonza["calcAge"](gonza.birthYear));

let answer;
if (gonza.hasDriversLicence) {
  answer = `a`;
} else {
  answer = `no`;
}

log(
  `${gonza.firstName} is a ${gonza.calcAge()}-year old ${
    gonza.job
  } and he has ${answer} driver's licence.`
);


//LOOPS !!!!!

// log(`Lifting weights repetition 1`);

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}!`);
}

//for loop keeps running while condition is true!


const gonza = [
  `Gonzalo`,
  `Zanelli`,
  2022 - 2001,
  `teacher`,
  [`Sofia`, `Franco`, `Alejandro`],
  true,
];
const types = [];

for (let i = 0; i < gonza.length; i++) {
  //Reading from gonza array
  console.log(gonza[i], typeof gonza[i]);

  //Filling types array
  // types[i] = typeof gonza[i];

  types.push(typeof gonza[i]);
}

log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and break statement
console.log(`--- ONLY STRINGS ---`);

for (let i = 0; i < gonza.length; i++) {
  if (typeof gonza[i] !== `string`) continue;

  console.log(gonza[i], typeof gonza[i]);
}

console.log(`--- BREAK WITH NUMBERS ---`);

for (let i = 0; i < gonza.length; i++) {
  if (typeof gonza[i] === `number`) break;

  console.log(gonza[i], typeof gonza[i]);
}


const gonza = [
  `Gonzalo`,
  `Zanelli`,
  2022 - 2001,
  `teacher`,
  [`Sofia`, `Franco`, `Alejandro`],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = gonza.length - 1; i >= 0; i--) {
  console.log(i, gonza[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise} ---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exersise ${exercise}: Lifting weights repetition ${rep}`);
  }
}


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}!`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
*/
