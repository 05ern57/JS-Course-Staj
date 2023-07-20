'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (sIndex, mIndex) {
//     return [this.starterMenu[sIndex], this.mainMenu[mIndex]];
//   },

//   // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//   //   console.log(`
//   //   Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
//   //   `);
//   // },
//   orderDelivery: function ({
//     starterIndex = 0,
//     mainIndex = 1,
//     time = 'in a few hours',
//     address,
//   }) {
//     console.log(`
//     Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
//     `);
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIng, ...ings) {
//     console.log(
//       `Good choice, your pizza with ${ings} and especially ${mainIng} ingradients will be ready soon  `
//     );
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // let newObj = { ...restaurant };
// restaurant.name = 'Erennnnnnnnn';

// let newObj = {
//   mentioned: 'Colorodo',
//   ...restaurant,
//   founder: 'Erenito Erdodito',
// }; // if we change smth after

// console.log(newObj);

// let ingrediants = ['carrot', 'mushroom', 'chicken'];

// restaurant.orderPasta(...ingrediants);

// //!!!!!!!!!!!!!!! we  use  Spread operators when we pass arguments into function or when we build an new array or shallow coppying an new object

// const arr = [1, 2, 3, 4, 5, 6];
// const badNewArr = [1, 2, arr[2], arr[3], arr[4]];
// console.log(badNewArr);

// const newArr = [...arr]; // this array has 'arr' array's elements but don't has array's itself
// console.log(newArr);
// console.log(...newArr); // now  just the elements will be logged

// let man = 'Eren';
// console.log(...man);

// let aroar = [[...restaurant.categories], [...restaurant.mainMenu]];
// console.log(aroar);

// // Rest operator works similar to spread operator
// // we can easly understand the difference between spread operator and rest operator  How? if we use '...' operator right side of the equal operator than its spread operator but when the opposite of it then it is a rest operator we mostly use the rest operator destructuring

// let cities = [1, 2, 3, 4, 5, 6, 7, 8];

// // we can not use the rest element at the beginning it must be at the end of the destructuring
// let [adana, adiyaman, ...digerleri] = cities;
// // let [adana, adiyaman, ...digerleri] = cities;
// console.log(digerleri);

// let person = {
//   name: 'Eren',
//   surname: 'Erdogan',
//   country: 'Turkiye',
//   city: 'Ankara',
// };

// let { name = 'hüso', surname = 'asdasd', ...address } = person;
// console.log(name);
// console.log(surname);
// console.log(address);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);
// // bunda sıradan gitmek zorunda değiliz  direk almak istediğimiz değerin key'ini yazıp sonrasında

// //how can we use rest operator in a functions

// const add = (...numbers) => {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   console.log(total);
// };

// add(2, 5);
// add(2, 5, 7, 5, 10, 11, 15);

// let c = [3, 6, 2];
// add(...c);

// restaurant.orderPizza('Peperoni', 'Mozarela', 'jalopeno', 'chicken');

// // !!! Spread operator is expanding rest operator is compressing
// //--------------------------------------------------------
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0, // 0 is falsy value
// };

// //when we use falsy values with orr operators it can affect our code in a bad way because lets say we give 0 to one property and then we wanted to check that is assigned or not or operator would return a false value, so because of this we can use '??' operator .It returns false only when value null or undefined

// rest1.numGuests ??= 10; // 'Operator sadece rest1.numGuests null ise sağdaki değeri dödürür egerki biz hiç numGuest tanımlamamış olsaydık sonuç 10 olacaktı'
// //'??' operator  checks wether rest1.numGuests null or not. If it is null then the result will be equal to the right side of the operator

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (score, ...sportmens) {
    console.log(...sportmens, score);
  },
};

let [players1, players2] = game.players;
console.log(players1, players2);
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
let allPlayers = [...players1, ...players2];
console.log(allPlayers);
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// let {
//   odds: { team1, x: draw, team2 },
// } = game.odds;
// console.log(odds);

//objeleri parçalama işlerini öğrenememişsin

game.printGoals(game.score, ...game.scored);
console.log();
