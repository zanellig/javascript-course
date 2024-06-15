'use strict';
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const averageDolphins = calcAverage(44, 23, 71);

// const averageKoalas = calcAverage(65, 54, 49);

const averageDolphins = calcAverage(85, 54, 41);

const averageKoalas = calcAverage(23, 34, 27);

const checkWinner = function (averageDolphins, averageKoalas) {
  if (averageDolphins >= averageKoalas * 2) {
    console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
  } else {
    if (averageKoalas >= averageDolphins * 2) {
      console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
    } else {
      console.log(`No team wins.`);
    }
  }
};

checkWinner(averageDolphins, averageKoalas);

let tip;
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
};
console.log(calcTip(100));

const bills = [125, 555, 44];

const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(total[0], total[1], total[2]);


const john = {
  firstName: `John`,
  lastName: `Smith`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const johnBMI = this.mass / this.height ** 2;
    return johnBMI;
  },
};

const mark = {
  firstName: `Mark`,
  lastName: `Miller`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const markBMI = this.mass / this.height ** 2;
    return markBMI;
  },
};

let higherBMI;
if (john.johnBMI > mark.markBMI) {
  higherBMI = `higher`;
} else if (mark.markBMI > john.johnBMI) {
  higherBMI = `lower`;
}

console.log(
  `${john.firstName} ${
    john.lastName
  }'s BMI (${john.calcBMI()}) is ${higherBMI} than ${mark.firstName} ${
    mark.lastName
  }'s BMI (${mark.calcBMI()})!`
);


// TIP CALC LOOP
console.log(`--- TIP LOOP ---`);
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

let tip;
let total;
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
};

for (let i = 0; i <= bills.length - 1; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

console.log(` --- CALC AVERAGE --- `);

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let sum = 0;

for (let i = 0; i <= totals.length - 1; i++) {
  sum = totals[i] + sum;
}

let avg;
const calcAverage = function (sum) {
  avg = sum / totals.length;
  return avg;
};

console.log(calcAverage(sum));
*/
