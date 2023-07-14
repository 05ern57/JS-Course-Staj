"use strict";

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// instead of this we can use loops

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

const eren_arr = [
  "Eren",
  "Erdogan",
  2023 - 2003,
  "Intern",
  ["Gamze", "Emre", "İsmail", "Havva"],
];

const type = [];
//past way
// console.log(eren_arr[0]);
// console.log(eren_arr[1]);
// console.log(eren_arr[2]);
// console.log(eren_arr[3]);
// console.log(eren_arr[4]);

// for (let i = 0; i < eren_arr.length; i++) {
//   console.log(eren_arr[i]);

//   //way 1
//   //type[i] = typeof eren_arr[i];

//   //way 2
//   type.push(typeof eren_arr[i]);
// }

// for (let i = 0; i < eren_arr.length; i++) {
//   console.log(type[i]);
// }

// const bys = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < bys.length; i++) {
//   ages.push(2023 - bys[i]);
// }
// console.log(ages);

// for (let age of ages) {
//   console.log(age);
// }

console.log("----------STRİNG ONLY------------");
for (let i = 0; i < eren_arr.length; i++) {
  if (typeof eren_arr[i] !== "string") continue;
  console.log(eren_arr[i], typeof eren_arr[i]);
}
// continue jumps over the iteration when statement returns true value in if statement
console.log("----------BREAK W/ NUMBER ONLY------------");
for (let i = 0; i < eren_arr.length; i++) {
  if (typeof eren_arr[i] === "number") break;
  console.log(eren_arr[i], typeof eren_arr[i]);
}
// break jumps out of the loop when the statement returns true value in if statement

// for (let i = eren_arr.length - 1; i >= 0; i--) {
//   console.log(eren_arr[i]);
// }

// for (let i = 1; i < 6; i++) {
//   console.log(`exercise 1 repitition ${i}`);
//   for (let j = 1; j < 2; j++) {
//     console.log(`exercise 2 repitition ${i}`);
//     for (let b = 1; b < 2; b++) {
//       console.log(`exercise 3 repitition ${i}`);
//     }
//   }
// }

//clearer version
for (let e = 1; e < 4; e++) {
  console.log(`-------------------Exercise      ${e}  `);

  for (let i = 1; i < 4; i++) {
    console.log(`Set  ${i}`);

    for (let j = 1; j < 6; j++) {
      console.log(`Repitition  ${j}`);
    }
  }
}
//dummy version
for (let i = 1; i < 6; i++) {
  console.log(`exercise 1 repitition ${i}`);
  for (let j = 1; j < 6; j++) {
    if (i !== 5) continue;
    console.log(`exercise 2 repitition ${j}`);
    for (let b = 1; b < 6; b++) {
      if (j !== 5) continue;
      console.log(`exercise 3 repitition ${b}`);
    }
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`Repitition  ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
}
