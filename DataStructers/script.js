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
