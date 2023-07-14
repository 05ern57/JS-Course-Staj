"use strict";

// #Challange 1

// const calcAvarage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAvarage(85, 54, 41);
// const scoreKoalas = calcAvarage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgDolphins === avgKoalas) {
//     console.log("No team wins");
//   } else {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// //-------------------------------------------------

// function calcTip(bill) {
//   if (bill < 300 && bill > 50) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} people and its
//   capital city is ${capitalCity}`;
// }

// const a = describeCountry("a", "6 million", "helsinki");
// const b = describeCountry("b", "80 million", "Ankara");
// const c = describeCountry("c", "7million", "istanbul");

// console.log(a);
// console.log(b);
// console.log(c);

// function percentageOfWorld1(population) {
//   const whole_w = 7900000000;
//   return (population / whole_w) * 100;
// }

// const u = percentageOfWorld1(6546545465);
// const so = percentageOfWorld1(54687654);
// const ugly = percentageOfWorld1(897879465);
// console.log(u);
// console.log(so);
// console.log(ugly);

// const percentageOfWorld2 = function (population) {
//   const w = 7900000000;
//   return (population / w) * 100;
// };

// const da = percentageOfWorld2(6546545465);
// const sa = percentageOfWorld2(54687654);
// const as = percentageOfWorld2(897879465);
// console.log(da);
// console.log(sa);
// console.log(as);

// const percentageOfWorld3 = (population) => {
//   const r = 7900000000;
//   return `${(population / r) * 100}%`;
// };

// const describePopulation = (counrty, pop) => {
//   return `${counrty} has ${pop} people,
//   which is about ${percentageOfWorld3(pop)} of the world`;
// };

// console.log(describePopulation("Türkiye", 2312132165465));

const pop = [123321321, 2132132, 32132132, 5454654];

pop.length === 4 ? console.log(true) : console.log(false);
