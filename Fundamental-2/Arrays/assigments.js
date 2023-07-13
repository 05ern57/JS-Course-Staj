"use strict";

// #Challange 1

const calcAvarage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAvarage(85, 54, 41);
const scoreKoalas = calcAvarage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgDolphins === avgKoalas) {
    console.log("No team wins");
  } else {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);

//-------------------------------------------------

function calcTip(bill) {
  if (bill < 300 && bill > 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
