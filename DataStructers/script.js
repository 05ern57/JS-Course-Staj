'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (sIndex, mIndex) {
    return [this.starterMenu[sIndex], this.mainMenu[mIndex]];
  },

  // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
  //   console.log(`
  //   Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
  //   `);
  // },
  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 1,
    time = 'in a few hours',
    address,
  }) {
    console.log(`
    Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
    `);
  },

  openingHours: {
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
  },
};

// const arr = [1, 2, 3, 4, 5];

// const [, f, a, b, c] = arr;
// console.log(a, b, c, f);

// const [first, second] = restaurant.categories; // Output:'Italian', 'Pizzeria'
// let [main, , secondary] = restaurant.categories; // Output: 'İtalian', 'Vegeterian'
// console.log(main, secondary);

//if we want to change two variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//we can do easily like this way
// [secondary, main] = [main, secondary]; // we mutate it
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));
// let [starter, mainM] = restaurant.order(2, 0);
// console.log(starter, mainM);

// const nested = [2, 4, [5, 6]];
//const [a, , [i, j]] = nested; // we destructuring inside of a destructuring because we had nested array
// console.log(a, i, j);

//we can set default values while we're destructuring
//why we are we woing this because you may think there is same amounth variable with values and it may not be what you think so u can use this
// const [p = 0, o = 0, m = 0, z = 0] = nested;
// console.log(p, o, m, z);

// when we are destructuring object we must enter the exact same key name in curly braces order does not matter bu as i said we must use the axact same key names

const { name, openingHours } = restaurant;
// console.log(name, openingHours);

// const { thu, fri, sat } = restaurant.openingHours;
// console.log(thu, fri, sat);

//if we want to change the key names wile we destructuring we can use this way. With this way we can assign new key names
let { name: newName, openingHours: opHours } = restaurant;
console.log(newName, opHours);

//we can also set default values to key that doesn't exist
let { menu = {}, starterMenu: myMenu = {} } = restaurant;
console.log(menu, myMenu);

// while we destructuring we can see the value undefined this happens because of the

//mutating variables
let a = 1;
let b = 2;
const o = { a: 23, b: 7 };
//{a,b} = o;
//instead of that use this
({ a, b } = o); //this 'a' and 'b' is not the object's keys, these are the variables
console.log(a, b);

// const { fri } = openingHours;
// console.log(fri); // {open: 11, close:23}

const {
  fri: { open: pop, close: c },
} = openingHours;
console.log(pop, c);

// we made destructuring while we creating te method function we destructured the paramater
restaurant.orderDelivery({
  time: '22.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// and at the second step we made default destructuring
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  mainIndex: 2,
});
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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...sportmens) {
//     console.log(...sportmens, sportmens.length);
//   },
// };

// let [players1, players2] = game.players;
// console.log(players1, players2);
// let [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// let allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // if you want to get odds we should make destructuring only with odds
// let {
//   odds: { team1, x: draw, team2 },
// } = game;
// let { odds } = game;

// // when we do an nested destructuturing we should not give the part of an object we should give the reference of whole object

// game.printGoals(...game.scored);
// console.log(team1, team2, draw, odds);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

// let { players } = game;

// let [as1, as2] = players;

// console.log(as1, as2);

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'China',
  'Japan',
  'India',
  'Australia',
  'Brazil',
  'Mexico',
  'South Africa',
  'Russia',
  'Turkey',
  'South Korea',
  'Saudi Arabia',
  'United Arab Emirates',
  'Egypt',
  'Nigeria',
  'Argentina',
  'Chile',
  'New Zealand',
  'Sweden',
  'Switzerland',
  'Netherlands',
  'Belgium',
  'Norway',
  'Denmark',
  'Finland',
  'Greece',
  'Austria',
  'Portugal',
];

// console.log(countries);

// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i]);
// }

// // there is an easy way of doing this and this is called for of loop
// for (const item of countries.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// console.log(countries.entries());
// //we can still use continue and brek with the for of operator

// //we can also use destructuring at here by writing the same way intead of writing item
// for (const [index, element] of countries.entries()) {
//   console.log(`${index + 1}: ${element}`);
// }

// console.log(openingHours['thu'], openingHours['fri']);

// const restaurant = {
// name: 'Classico Italiano',
// location: 'Via Angelo Tavanti 23, Firenze, Italy',
// categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// order: function (sIndex, mIndex) {
// return [this.starterMenu[sIndex], this.mainMenu[mIndex]];
// },

// // orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
// //   console.log(`
// // //   Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
// //   `);
// // },

// //ES5 version a way declaring function
// orderDelivery: function ({
// starterIndex = 0,
// mainIndex = 1,
// time = 'in a few hours',
// address,
// }) {
// console.log(`
// // Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
// `);
// },

// //ES6 version a way of declaring function
// orderPasta(ing1, ing2, ing3) {
// console.log(
// `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
// );
// },

// orderPizza(mainIng, ...ings) {
// console.log(
// // `Good choice, your pizza with ${ings} and especially ${mainIng} ingradients will be ready soon  `
// );
// },

// //ES5 version Object Literals
// //openingHours: openingHours,

// // ES6 Enhanced Object Literals
// openingHours,
// };
// console.log(restaurant.openingHours);

// console.log(restaurant.openingHours.mon);
// // // // console.log(restaurant.openingHours.mon.open); //normally when we run this code it will throw an error because left side of open is undefined and undefined.open causes a TypeError

// //we would solve this with ES5 version like this:
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// //but we can solve this with ES6 much more easily like this:
// // // // // console.log(restaurant.openingHours.mon?.open); // this operator uses short-circuiting(ish, beacuse it goes like chain thats why we call optionall chaining ) but how? well it check 'restaurant.openingHours.mon' is undefined or not if it is undefined then it returns undefined if it is nor then returns what user wants let me give one example:
// // console.log(restaurant.openingHours.fri?.open); // now it returned open because let side of the operator is not undefined

// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);
// // this is equals to this:
// console.log(restaurant.openingHours?.mon?.open);

// const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (let d of weekdays1) {
// const open = restaurant.openingHours[d]?.open ?? 'hell am';
// console.log(`On ${d}, we open at ${open}`);
// }

// // console.log(restaurant.order?.(0, 1) ?? `Method does not exist`); // ı think this is important

// const users = [{ name: 'Eren', email: 'asdasd@hotmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');

// console.log();

// // LOOPİNG OBJECTS
// let days = Object.keys(openingHours);

// for (let j of days) {
// console.log(j);
// }

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;
// for (let d of properties) {
// openStr += `${d}, `;
// }
// console.log(openStr);

// //Object.keys() method returns the values of object as an array

// let entries = Object.entries(openingHours);
// console.log(entries);

// for (let x of entries) console.log(x);

// for (let c of days.entries()) console.log(c);

// for (let c of cities) {
//   console.log(c);
// }
// console.log(Object.keys(sehirler));
// console.log(Object.values(sehirler));
// let my = Object.entries(sehirler);
// console.log(my);

// // for (let [key, value] of my) {
// //   console.log(`Can ${key}'imizin plakası ${value}'dır`);
// // }

// for (let { key, value } of cities) {
//   console.log(`Can ${key}'imizin plakası ${value}'dır`);
// }

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`sat`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const sehirler = {
  Adana: 1,
  Adıyaman: 2,
  Afyonkarahisar: 3,
  Ağrı: 4,
  Amasya: 5,
  Ankara: 6,
  Antalya: 7,
  Artvin: 8,
  Aydın: 9,
  Balıkesir: 10,
  Bilecik: 11,
  Bingöl: 12,
  Bitlis: 13,
  Bolu: 14,
  Burdur: 15,
  Bursa: 16,
  Çanakkale: 17,
  Çankırı: 18,
  Çorum: 19,
  Denizli: 20,
  // Diğer şehirler burada eklenebilir...
};

// we can simply use loop over object by using in keyword when we use in a hold the same key name so with this we are loging console to string basically
//we can also reach the values
for (let a in sehirler) {
  console.log(a, sehirler[a]);
}

let deneme = Object.entries(weekdays); // when we give array as a parameter to 'Object.entries()' it returns index number of values as a key's value
console.log(deneme);
let deneme1 = Object.entries(openingHours); // when we give object than it gives us an array with key's value and normal value  [[key,value], [secondKey,secondValue], [thirdKey,ThirdValue]]
console.log(deneme1);
let deneme2 = Object.entries(sehirler); // it is another object example
console.log(deneme2);

for (let [key, value] of deneme2) {
  //[[key,value], [secondKey,secondValue]]
  //of operator returns array that has two arrays, so we just destructured the array
  //then used value by value
  console.log(`Can ${key}'imizin plakası ${value}'dır`);
}

let dene = Object.keys(sehirler); //Object keys just returns a values that has key values, so in this case we will get an array that consist city names
console.log(dene);

let plakalar = Object.values(sehirler);
console.log(plakalar);

const cities = [
  { city: 'Adana', plateNumber: 1 },
  { city: 'Adıyaman', plateNumber: 2 },
  { city: 'Afyonkarahisar', plateNumber: 3 },
  { city: 'Ağrı', plateNumber: 4 },
  { city: 'Amasya', plateNumber: 5 },
  { city: 'Ankara', plateNumber: 6 },
  { city: 'Antalya', plateNumber: 7 },
  { city: 'Artvin', plateNumber: 8 },
  { city: 'Aydın', plateNumber: 9 },
  { city: 'Balıkesir', plateNumber: 10 },
  { city: 'Bilecik', plateNumber: 11 },
  { city: 'Bingöl', plateNumber: 12 },
  { city: 'Bitlis', plateNumber: 13 },
  { city: 'Bolu', plateNumber: 14 },
  { city: 'Burdur', plateNumber: 15 },
  { city: 'Bursa', plateNumber: 16 },
  { city: 'Çanakkale', plateNumber: 17 },
  { city: 'Çankırı', plateNumber: 18 },
  { city: 'Çorum', plateNumber: 19 },
  { city: 'Denizli', plateNumber: 20 },
  // Diğer şehirler burada eklenebilir...
];
let a = [];
for (let x of cities) {
  let [bir, iki] = Object.entries(x);
  a.push(bir, iki);
}
console.log(a);

for (let [key, value] of a) {
  console.log(key, value);
}
