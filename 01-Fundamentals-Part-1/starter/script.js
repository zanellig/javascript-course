/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Gonzalo");
console.log(23);

let firstName = "Gonzalo";

console.log(firstName);

// Convenciones de nombres para varianbles

//Caracteres permitidos > LETRAS, NUMEROS, GUION BAJO, SIGNO PESOS.

let gonza_sofita = "GS"; //Para espaciar dos palabras se puede usar un guion bajo.

let $function = 27; //Para utilizar nombres de variable reservados, se le puede colocar $ delante.

let person = "Gonza"; //La primera letra de una variable es minuscula. Las mayusculas se utilizan en POO (Programacion Orientada a Objetos)

let PI = 3.1415; //Variable en MAYUS no cambia NUNCA.

//Nombres de variables DESCRIPTIVOS.
let myFirstJob = "Vendedor";
let myCurrentJob = "Programador";

let job1 = "vendedor";
let job2 = "programador";

console.log(myFirstJob, myCurrentJob);

//Boolean
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Gonzalo");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(typeof year);

console.log(typeof null);

let age = 19;
age = 20;

const birthYear = 2001;
// birthYear = 2000;

// const job;

var job = "Vendedor";
job = "Programador";

lastName = "Zanelli";
console.log(lastName);

// Math operators
let now = 2022;
const ageGonza = now - 2001;
const ageSofi = now - 2004;
console.log(ageGonza, ageSofi);

console.log(ageGonza * 2, ageGonza / 10, 2 ** 3);

const firstName = "Gonzalo";
const lastName = "Zanelli";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//Comparison operators
console.log(ageGonza > ageSofi); // >, <, >=, <=
console.log(ageSofi >= 18);

const isFullAge = ageSofi >= 18;

console.log(now - 2001 > now - 2004);

let now = 2022;
const ageGonza = now - 2001;
const ageSofi = now - 2004;

console.log(now - 2001 > now - 2004);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageGonza + ageSofi) / 2;
console.log(ageGonza, ageSofi, averageAge);


const firstName = "Gonzalo";
const job = "programmer";
const birthYear = 2001;
const year = 2022;

const gonzalo =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(gonzalo);

const gonzaloNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(gonzaloNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);

console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1; // "10"
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Gonzalo"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if (height) {
  console.log(`Yay! Height is defined.`);
} else {
  console.log(`Height is ${height}`);
}


// const age = 18;
// if (age === 18) console.log(`You just became an adult.`); // Strict

// if (age == "18") console.log(`You just became an adult.`); // Loose

let favourite = Number(prompt(`What's your favorite number?`));
console.log(favourite);

if (favourite === 23) {
  alert(`Cool! 23 is a great number!`);
} else if (favourite === 7) {
  alert(`7 is also a great number!`);
} else {
  alert(`Try 23...`);
  let favourite = Number(prompt(`Again, whats your favourite number?`));
  console.log(favourite);
  if (favourite === 23) {
    alert(`Good job!`);
  } else {
    alert(`I'm not going to give you any more tries. 😒`);
  }
}


const hasDriversLicence = true; // A
const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && !isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

let day = prompt(`What day is it?`);

switch (day) {
  case `monday`: // day === monday
    console.log(`Plan course structure.`);
    console.log(`Go to coding meetup.`);
    break;
  case `tuesday`:
    console.log(`Prepare theory videos.`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`Write code examples.`);
    break;
  case `friday`:
    console.log(`Record videos.`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`Enjoy the weekend!`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === `monday`) {
  console.log(`Plan course structure.`);
  console.log(`Go to coding meetup.`);
} else if (day === `tuesday`) {
  console.log(`Prepare theory videos.`);
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`Write code examples.`);
} else if (day === `friday`) {
  console.log(`Record videos.`);
} else if (day === `saturday` || day === `sunday`) {
  console.log(`Enjoy the weekend!`);
} else {
  console.log(`Not a valid day!`);
}


3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = `23 is bigger`;
}

const me = `Jonas`;
console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `water 💧`;
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);
*/

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Gonzalo");
console.log(23);

let firstName = "Gonzalo";

console.log(firstName);

// Convenciones de nombres para varianbles

//Caracteres permitidos > LETRAS, NUMEROS, GUION BAJO, SIGNO PESOS.

let gonza_sofita = "GS"; //Para espaciar dos palabras se puede usar un guion bajo.

let $function = 27; //Para utilizar nombres de variable reservados, se le puede colocar $ delante.

let person = "Gonza"; //La primera letra de una variable es minuscula. Las mayusculas se utilizan en POO (Programacion Orientada a Objetos)

let PI = 3.1415; //Variable en MAYUS no cambia NUNCA.

//Nombres de variables DESCRIPTIVOS.
let myFirstJob = "Vendedor";
let myCurrentJob = "Programador";

let job1 = "vendedor";
let job2 = "programador";

console.log(myFirstJob, myCurrentJob);

//Boolean
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Gonzalo");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(typeof year);

console.log(typeof null);

let age = 19;
age = 20;

const birthYear = 2001;
// birthYear = 2000;

// const job;

var job = "Vendedor";
job = "Programador";

lastName = "Zanelli";
console.log(lastName);

// Math operators
let now = 2022;
const ageGonza = now - 2001;
const ageSofi = now - 2004;
console.log(ageGonza, ageSofi);

console.log(ageGonza * 2, ageGonza / 10, 2 ** 3);

const firstName = "Gonzalo";
const lastName = "Zanelli";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//Comparison operators
console.log(ageGonza > ageSofi); // >, <, >=, <=
console.log(ageSofi >= 18);

const isFullAge = ageSofi >= 18;

console.log(now - 2001 > now - 2004);

let now = 2022;
const ageGonza = now - 2001;
const ageSofi = now - 2004;

console.log(now - 2001 > now - 2004);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageGonza + ageSofi) / 2;
console.log(ageGonza, ageSofi, averageAge);


const firstName = "Gonzalo";
const job = "programmer";
const birthYear = 2001;
const year = 2022;

const gonzalo =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(gonzalo);

const gonzaloNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(gonzaloNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);

console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1; // "10"
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Gonzalo"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if (height) {
  console.log(`Yay! Height is defined.`);
} else {
  console.log(`Height is ${height}`);
}


// const age = 18;
// if (age === 18) console.log(`You just became an adult.`); // Strict

// if (age == "18") console.log(`You just became an adult.`); // Loose

let favourite = Number(prompt(`What's your favorite number?`));
console.log(favourite);

if (favourite === 23) {
  alert(`Cool! 23 is a great number!`);
} else if (favourite === 7) {
  alert(`7 is also a great number!`);
} else {
  alert(`Try 23...`);
  let favourite = Number(prompt(`Again, whats your favourite number?`));
  console.log(favourite);
  if (favourite === 23) {
    alert(`Good job!`);
  } else {
    alert(`I'm not going to give you any more tries. 😒`);
  }
}


const hasDriversLicence = true; // A
const hasGoodVision = true; // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && !isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

let day = prompt(`What day is it?`);

switch (day) {
  case `monday`: // day === monday
    console.log(`Plan course structure.`);
    console.log(`Go to coding meetup.`);
    break;
  case `tuesday`:
    console.log(`Prepare theory videos.`);
    break;
  case `wednesday`:
  case `thursday`:
    console.log(`Write code examples.`);
    break;
  case `friday`:
    console.log(`Record videos.`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`Enjoy the weekend!`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === `monday`) {
  console.log(`Plan course structure.`);
  console.log(`Go to coding meetup.`);
} else if (day === `tuesday`) {
  console.log(`Prepare theory videos.`);
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`Write code examples.`);
} else if (day === `friday`) {
  console.log(`Record videos.`);
} else if (day === `saturday` || day === `sunday`) {
  console.log(`Enjoy the weekend!`);
} else {
  console.log(`Not a valid day!`);
}


3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = `23 is bigger`;
}

const me = `Jonas`;
console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine 🍷`)
//   : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `water 💧`;
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);
*/
