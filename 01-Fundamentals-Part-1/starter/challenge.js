/*
const markMass = 78;
const markHeight = 1.69;
// console.log(
// "Mark weights ",
// markMass,
// "kg. And his Height is ",
// markHeight,
// "m."
// );

const johnMass = 92;
const johnHeight = 1.95;
// console.log(
// "John weights ",
// johnMass,
// "kg. And his Height is ",
// johnHeight,
// "m."
// );

const markBMI = (markMass / markHeight ** 2).toFixed(2);
const johnBMI = (johnMass / johnHeight ** 2).toFixed(2);
// console.log("Marks BMI is ", markBMI, "while Johns BMI is ", johnBMI, ".");

// const markHigherBMI = markBMI > johnBMI;
// console.log("Its ", markHigherBMI, "that Marks BMI is HIGHER than Johns BMI");

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's!`);
  console.log(
    `Mark's BMI is (${markBMI}), while John's BMI is (${johnBMI}). That's why Marks's BMI is higher 😀.`
  );
} else {
  console.log(`John's BMI is higher than Mark's!`);
  console.log(
    `Mark's BMI is (${markBMI}), while John's BMI is (${johnBMI}). That's why Johns's BMI is higher 😀.`
  );
}


// Ejemplo 1
// const scoreDolphins1 = 96;
// const scoreDolphins2 = 108;
// const scoreDolphins3 = 89;

// const scoreKoalas1 = 88;
// const scoreKoalas2 = 91;
// const scoreKoalas3 = 110;

//Ejemplo 2
// const scoreDolphins1 = 97;
// const scoreDolphins2 = 112;
// const scoreDolphins3 = 101;

// const scoreKoalas1 = 109;
// const scoreKoalas2 = 95;
// const scoreKoalas3 = 123;

const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;

const averageDolphins = Number(
  ((scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3).toFixed(2)
);

const averageKoalas = Number(
  ((scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3).toFixed(2)
);

console.log(`Average Dolphins score > ${averageDolphins}`);
console.log(`Average Koalas score > ${averageKoalas}`);

if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log(`It's a draw!`);
} else if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(`Dolphins win 🏆`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log(`Koalas win 🏆`);
} else {
  console.log(`No team won :(`);
}

let tip;
let bill = Number(prompt(`Enter the bill value...`));

bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

let total = tip + bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`
);
*/
