'use strict';

import('./challenge.js');
const log = console.log;

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
''.index;

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [...sepInfo] = flight.split(';');

  let [message, from, to, time] = sepInfo;

  message = message.split('_').join(' ').trim();

  from = getCode(from);

  to = getCode(to);

  time = time.split(':').join('h');

  if (message.slice(0, message.indexOf(' ')) === 'Delayed') {
    log(`🔴 ${message} from ${from} to ${to} (${time})`.padStart(50, ' '));
  } else {
    log(`${message} from ${from} to ${to} (${time})`.padStart(50, ' '));
  }
}

/*
// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = `20:00`, address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Order received at ${time}, for ${address}, main course ${this.mainMenu[mainIndex]} and starter ${this.starterMenu[starterIndex]}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    if (otherIngredients.length > 0) {
      console.log(otherIngredients);
    }
  },
};


log('a+very+nice+string'.split('+'));

log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName, ...notName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  const fullCapitalizedName = namesUpper.join(' ');
  return fullCapitalizedName;
};

// Using replace method as an alternative
const capitalizeNameAlt = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  const fullCapitalizedName = namesUpper.join(' ');
  return fullCapitalizedName;
};

const passenger = 'jessica ann smith davis';

console.log(capitalizeName(passenger));
console.log(capitalizeName('jonas schmedtmann'));

console.log(capitalizeNameAlt(passenger));

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '#'));
console.log('Gonza'.padStart(20, '#'));

console.log('Gonza'.padEnd(20, '#'));

// Real world padding example

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4539990530700214));

// Repeat method

const message2 = 'Bad weather... All departures delayed... ';

console.log(message2.repeat(5));

// Due to the bad weather there are several planes waiting in line.

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);


///////////////////////////////////////
// Working with strings #2
const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Fix capitalization in name
const passenger = 'jOnAS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.io \n';

const correctEmail = loginEmail.toLowerCase().trim();

console.log(correctEmail);

const priceGB = '£288,97';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceGB);
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

console.log(announcement.replaceAll('door', 'gate')); // New replaceAll method!

// Regular expression (old)
console.log(announcement.replace(/door/g, 'gate')); // g stands for global flag

// Methods that return booleans...
const plane = `Airbus A320neo`;
console.log(plane.includes(`A320`));
console.log(plane.includes(`Boeing`));
console.log(plane.startsWith(`Air`));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`${plane} is a part of the NEW Airbus family`);
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    log(`You are not allowed on board!`);
  } else {
    log(`Welcome aboard!`);
  }
};

checkBaggage(`I have a laptop,  some food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);


const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); // Can call the position index within the string

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // Methods specific to strings
// Extract first word
console.log(airline.slice(0, airline.indexOf(' ')));
// Extract last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// Extract from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = seat => {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You've got the middle seat!`);
  } else {
    console.log(`You got lucky bitch.`);
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


// Map iterables
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct! ✅'],
  [false, 'Try again! ❌'],
]);
console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMaps = new Map(Object.entries(openingHours));
console.log(hoursMaps);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt(`Your answer:`));
console.log(answer);

// MAPS!!! (FUNDAMENTALS)
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisboa, Portugal');

// Chain set method
rest
  .set('categories', restaurant.categories)
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// Can use any data type, as a key or as a value
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time >= rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
// console.log(rest);
console.log(rest.size);

rest.set([1, 2], 'Test'); // Creates an anonymous array in the HEAP.
console.log(rest.get([1, 2])); // So when we try to call the 'same' array, it doesn't work.
// That's because the two arrays are not actually the same element in the HEAP. So the console.log() is not actually pointing at the same key or array in the map.
// Returns undefined.

// !!!!!!!
const arr = [1, 2];
rest.set(arr, 'Test2');
console.log(rest.get(arr)); // returns Test2 ✅
// Both pointing to the same object in memory.

// DOM elements as key or value
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);

// SETS!!!
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Gonza'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
console.log(new Set([...staff]).size);

console.log(new Set('GonzaloZanelli').size);

// Properties NAMES
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days`;

for (const day of Object.keys(openingHours)) {
  openStr += ` ${day},`;
}

// console.log(openStr);

// Properties VALUES
const values = Object.values(openingHours);
// console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


// Obtenemos un error porque "openingHours.mon" no existe, entonces no podemos checkear "undefined.open"
// console.log(restaurant.openingHours.mon && restaurant.openingHours.mon.open);

// Optional chaining!
// console.log(restaurant?.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  open === 'closed' && console.log(`On ${day} we are ${open}`);
  open !== 'closed' && console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist!`);

console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist!`);

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

console.log(users[0]?.name ?? 'User array empty!');
users.length >= 0 && console.log(users[0].name);


// For Of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, e] of menu.entries()) {
  console.log(`${i + 1}: ${e}`);
}


const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests ||= null;
// rest2.numGuests ||= null;

rest1.numGuests ??= null;
rest2.numGuests ??= null;

rest2.owner &&= '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;
const guests = restaurant.numGuests || null;
console.log(guests);

// Nullish coalescing operator.
const guestsCorrect = restaurant.numGuests ?? null;
console.log(guestsCorrect);

// Logical operators can use ANY data type, return ANY data type and they do short-circuiting. [short circuit evaluation]
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

// It will return the FIRST truthy value of the chain.

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;

const guests = restaurant.numGuests ? restaurant.numGuests : null;

const guests2 = restaurant.numGuests || null;

console.log(guests2);

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// OR operator stops when it detects a truthy value.
// AND operator stops when it detects a falsy value.


// REST operator. LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

// REST on objects.
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms');


const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Iterables: arrays, strings, maps, sets. NOT objects.

const str = 'Jonas';
const letters = [...str];

// Real world example.
const ingredients = [
  prompt(`Let's make pasta! Ingredient number one:`),
  prompt(`Ingredient number two:`),
  prompt(`Ingredient number three:`),
];
restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Giuseppe` };

const restaurantCopy = { ...restaurant };

restaurantCopy.name = `Ristorante Roma`;

console.log(restaurant.name);
console.log(restaurantCopy.name);


//////////////////////////////////////////
// Destructuring Objects

restaurant.orderDelivery({
  time: `23:30`,
  address: `Via del Sol, 21`,
  mainIndex: 2,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: `Via del Sol, 21`,
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu);
// console.log(starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

const {
  fri: { open: fridayOpen, close: fridayClose },
} = openingHours;


// console.log(fridayOpen, fridayClose);

//////////////////////////////////////////
// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);


let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main, secondary);

const [starterCourse, mainCourse] = restaurant.order(2, 0);

console.log(starterCourse, mainCourse);*/
