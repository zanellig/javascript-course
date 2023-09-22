'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;

// Declare a function to close the app
function closeApp() {
  containerApp.style.opacity = 0;
  labelWelcome.textContent = `Log in to get started`;
}
// The same to open it
function openApp() {
  containerApp.style.opacity = 100;
}

// Visual functionality to hide the login input when we login
function emptyHideLoginInput() {
  inputLoginPin.blur();
  inputLoginUsername.blur();
  inputLoginPin.style.opacity =
    inputLoginUsername.style.opacity =
    btnLogin.style.opacity =
      0;
  inputLoginUsername.value = inputLoginPin.value = '';
}

// The same, but to show it
function showLoginInput() {
  inputLoginPin.blur();
  inputLoginUsername.blur();
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.style.opacity = 100;
  inputLoginUsername.style.opacity = 100;
  btnLogin.style.opacity = 100;
}

function copyMovements() {
  currentAccount.sortedMovements = currentAccount.movements.slice();
}

function displayMovements(movements) {
  // Empties the container
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    // Checks if the movement (element of the array) is greater or lesser than 0, as to check if it's a deposit or a withdrawal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Show the type of movement that has been done, besides the number of the movement. Then the value of the movement itself (fixed to 2 decimals).
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>
    `;
    // Then I add the movement HTML that I created dinamically to the html document.
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
// IIFE to create dinamically the usernames for each account.
(accs => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
})(accounts);

function calcBalance(acc) {
  // Sum of all the movements to calculate the balance, then I store this value into a new property of the account's object.
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
}
// I then immediately calculate each of the account's balances.
accounts.forEach(calcBalance);

// Separate function to SHOW and update the balance that is shown in the UI.
function displayBalance(acc) {
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
}

function displaySummaryIn(arr) {
  // Checks if the movement is a deposit, then it adds all the deposits together.
  const summary = arr.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${summary.toFixed(2)}€`;
}

function displaySummaryOut(arr) {
  // Same for the withdrawals and then it displays the absolute value.
  const summary = Math.abs(
    arr.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );

  labelSumOut.textContent = `${summary.toFixed(2)}€`;
}

// The bank gives an interest on each deposit made on the account. If the interest generated is at least 1 of the currency selected, then it adds it to the total interest value.
function displayInterest(acc) {
  // Each deposits generates an interest based on the accounts pre-established balance.
  const interest = acc.movements
    .filter(mov => mov > 0) // Filters the deposits.
    .map(deposit => (deposit * acc.interestRate) / 100) // Then get the actual interest that the deposit generated.
    .filter(int => int >= 1) // Filter the interest if it's above 1 euro generated.
    .reduce((acc, int) => acc + int, 0); // Then add it to the total interest value.
  labelSumInterest.textContent = `${Math.abs(interest).toFixed(2)}€`;
}

function updateUI(currentAccount) {
  calcBalance(currentAccount);
  displayBalance(currentAccount);
  displaySummaryIn(currentAccount.movements);
  displaySummaryOut(currentAccount.movements);
  displayMovements(currentAccount.sortedMovements);
  displayInterest(currentAccount);
}

function clearAndUnfocusTransfer() {
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();
}

function clearAndUnfocusDelete() {
  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();
  inputCloseUsername.blur();
}

function emptyLoanInput() {
  inputLoanAmount.blur();
  inputLoanAmount.value = '';
}

btnLogin.addEventListener('click', e => {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI.
    openApp();
    copyMovements();
    // Display welcome message.
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }.`;

    emptyHideLoginInput();

    // Updates UI
    updateUI(currentAccount);
  } else if (!currentAccount !== Number(inputLoginPin.value)) {
    closeApp();
    showLoginInput();
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const recipient = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    // First check if the amount is greater than zero, cause if it's not, then the user can "steal" money from another account.
    amount < 0 ||
    // Then we check if the user actually has the amount he wants to transfer.
    amount > currentAccount.balance ||
    // If the recipient is different than the current user.
    recipient?.username === currentAccount.username ||
    // If the recipients username actually exists.
    recipient?.username === undefined
  ) {
    // If any of this conditions is true, basically the opposite of what is explained above, then we empty the input fields, and get the cursor off the input.
    clearAndUnfocusTransfer();
  } else if (!!recipient) {
    currentAccount.balance -= amount;
    recipient.balance += amount;

    // Add the amount of the movement to each of the respective arrays of movements, each with the sign that corresponds.
    currentAccount.movements.push(-amount);
    recipient.movements.push(amount);

    // This updateUI function, is used to update the balance, movements and interest, but also updates everything else.
    updateUI(currentAccount);
  }
  clearAndUnfocusTransfer();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amountRequested = Number(inputLoanAmount.value);

  if (
    amountRequested > 0 &&
    currentAccount.movements.some(mov => mov >= amountRequested * 0.1)
  ) {
    currentAccount.movements.push(amountRequested);

    updateUI(currentAccount);
  }

  emptyLoanInput();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    clearAndUnfocusDelete();
    closeApp();
    showLoginInput();
  } else clearAndUnfocusDelete();
});

let order = 'unsorted';

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  if (order === 'unsorted') {
    order = 'maxtomin';
    // I KNOW THAT it is a bad practice to modify the original array, but I didn't find any way FOR MY CODE to make it work with a minimal amount of additional code. Sorry :(
    // Above was an old note that I left to remind me that if a work half an hour trying to find a solution, I will eventually find it.
    copyMovements();
    currentAccount.sortedMovements.sort((a, b) => a - b);
    btnSort.textContent = '↓ SORT';
    updateUI(currentAccount);
  } else if (order === 'maxtomin') {
    order = 'mintomax';
    copyMovements();
    currentAccount.sortedMovements.sort((a, b) => b - a);
    btnSort.textContent = '↑ SORT';
    updateUI(currentAccount);
  } else if (order === 'mintomax') {
    order = 'unsorted';
    copyMovements();
    btnSort.textContent = 'SORT';
    updateUI(currentAccount);
  }
});
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// METHODS: slice, splice, reverse, concat, join

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log(`--- forEach ---`);
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// forEach uso en MAPAS y SETS
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}.`);
});

const currenciesUnique = new Set([
  'USD',
  'GBP',
  'ARS',
  'ARS',
  'ARS',
  'USD',
  'EUR',
]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}`);
});

// CHALLENGE

const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia;
  dogsJuliaCopy.shift();
  dogsJuliaCopy.pop();
  dogsJuliaCopy.pop();

  const joinedData = dogsJuliaCopy.concat(dogsKate);

  joinedData.forEach((element, index) => {
    if (element >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult and is ${element} years old.`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is a puppy and is ${element} years old.`
      );
    }
  });
};
checkDogs(juliaData1, kateData1);
checkDogs(juliaData2, kateData2);

// MAP:
// Takes an array, loops over it, and applies a callback function. Then creates a new array and stores the modified data in it.

// FILTER:
// Takes an array, loops over it, and filters the elements using a condition into a new array.

// REDUCE:
// Boils down all the elements of an array into a single element.

// Storing conversion rate into a variable
const eurToUsd = 1.1;

const movementsUsd = account1.movements.map(mov => Math.trunc(mov * eurToUsd));

console.log(account1.movements);
console.log(movementsUsd);

// Basicamente el metodo "map" loopea a traves de un array y luego devuelve lo que a su vez devuelve la funcion callback.
const ternaryStringArray = account1.movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

ternaryStringArray.forEach(function (string) {
  console.log(string);
});

// if (mov > 0) {
//   return `Movement ${i + 1}: You deposited ${mov}`;
// } else {
//   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// }



// FILTER METHOD
// Filtra los entries de un array tomando en cuenta una condicion. Si la condicion es true, entonces devuelve el valor actual.
let movements = account1.movements;
const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(withdrawals);
console.log(deposits);

let movements = account1.movements;

// REDUCE METHOD
// El primer parametro de la funcion callback en el metodo reduce es un ACUMULADOR.

// El segundo valor, ademas de la funcion callback, que acepta el metodo REDUCE es el valor inicial del acumulador.

// const balance = movements.reduce(function (
//   acumulador,
//   movimientoActual,
//   index,
//   array
// ) {
//   console.log(`Iteration number ${index}: ${acumulador}`);
//   return acumulador + movimientoActual;
// },
// 0);

const balance = movements.reduce(
  (acumulador, movimientoActual) => acumulador + movimientoActual,
  0
);

console.log(balance);

// CHALLENGE #2
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  // I don't know why I created a variable with let in which I stored the results of the map method, but it worked.
  let humanAge = ages.map(
    age => (age <= 2 ? 2 * age : 16 + age * 4)
    // Simple, if the current entry is lesser or equal than 2, then returns the entry times 2.
    // if (age <= 2) {
    //   return age * 2;
    // } else {
    //   // Else, it returns the number 16, summed to the current entry times 4.
    //   return 16 + age * 4;
    // }
    // Could I've used the ternary operator? Yes. Was it my first approach? Yes. Did the function work when I used the ternary operator? No, so I decided to use the if else statement as a temporary, more visual solution.
  );
  // I then grab that modified array and filter the entries that are greater or equal than 18.
  const adults = humanAge.filter(age => age >= 18);

  // Created a variable for the average. Don't ask me why. I still don't know why I did this. Don't know if it's good or bad practice.
  const average =
    // Then, used the reduce method to calculate the average.
    adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // Returned the result of the average with only one decimal point, converted to a number.
  return Number(average.toFixed(2));
  // FIXED everything
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));

// ages.reduce((avg, age) => avg + age, ages[0]) / ages.length;

// CHALLENGE #3
// Reescribir la funcion anterior, pero con los metodos encadenados.
const calcAverageHumanAgeArrow = arr => {
  const average = arr
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return Number(average.toFixed(2));
};
console.log(calcAverageHumanAgeArrow(data1));
console.log(calcAverageHumanAgeArrow(data2));


const biggestValue = account1.movements.reduce(
  (acc, mov) => (mov > acc ? (acc = mov) : (acc = acc)),
  account1.movements[0]
);

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);



//Mas metodos
// SOME
// Devuelve un boolean si alguno de los elementos del array satisface la condicion
const deposits = account1.movements.some(mov => mov > 0);
console.log(deposits); //true

// EVERY
// Devuelve true si TODOS los elementos del array satisfacen la condicion
const allDeposits = account4.movements.every(mov => mov > 0);
console.log(allDeposits); //true

// FLAT
const nestedArray = [[1, 2, 3, 4], 5, 6, 7, 8];
console.log(nestedArray.flat(1));
// Toma el array, y si esta anidado, digamos que elimina los corchetes, y le saca el nesting, devuelve el array sin nesting

const nestedArray2 = [[1, [2, 3]], 4, [5, 6], [[7, 8]]];
console.log(nestedArray2.flat(1));
console.log(nestedArray2.flat(2));
// El parametro que toma es la cantidad de niveles (deep) en los que tiene que indagar

// Una practica comun es primero mapear un array en otro, y luego flattearlo
// Ejemplo:
const allMovements = accounts.map(acc => acc.movements).flat();
console.log(allMovements); // Devuelve un array con todos los movimientos, anteriormente ordenados en un array, con dentro mas arrays
const overallBalance = allMovements.reduce((acc, sum) => acc + sum, 0);
console.log(overallBalance);

// FLATMAP
// Hace lo mismo que hacer un chaining de .map y .flat, pero no puedo ir mas de un nivel de profundidad. El parametro queda fijo en 1
const allMovementsFlatMap = accounts.flatMap(acc => acc.movements);
console.log(allMovementsFlatMap); // Devuelve exactamente el mismo array que utilizandolos por separado

// FILL
const x = new Array(7);
console.log(x);

// El primer parametro especifica con QUE queremos llenar el array.
// x.fill(1);
console.log(x);

// El segundo parametro especifica a partir de que posicion del array empieza a llenar.
x.fill(1, 3, 5);

// El tercer parametro especifica hasta que posicion del array llena. O mejor dicho, la ultima posicion del array que quiero llenar.

// Array.from()

const y = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(y);

// Pareciera ser una funcion definida en el prototipo de Array... vere mas en OOP

const randomDiceRolls = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 101)
);
console.log(randomDiceRolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
*/
///////////////////////////////////////////////
// ARRAY METHODS PRACTICE
// A. Cual es la suma de los depositos realizados
const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositsSum);
// B. Cuantos depositos mayores a 1000
// const numDeposits$1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// Mismo ejercicio pero con REDUCE

const numDeposits$1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0);

console.log(numDeposits$1000);
