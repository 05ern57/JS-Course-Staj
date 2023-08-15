'use strict';
// let arr = ['a', 'b', 'c', 'd', 'e'];

// //slice method copies the array an return a shallow copy of that
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); // 2 is included but 4 is not
// console.log(arr.slice(-2)); // means start from the first to last
// console.log(arr.slice()); // copies the entire array

// // splice method creates an array from an another array, creates an array the it passes elements that it removed from an array

// console.log(arr.splice(-1)); // it removed the last element from 'arr' element
// console.log(arr.splice(0, 1)); // splice(where to start, how many element will be removed, element will be added)
// console.log(arr);

// console.log(arr.splice(5, 0, arr.slice(-2)));
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr_ = ['f', 'g', 'h', 'j', 'k', 'l'];
// console.log(arr_);
// console.log(arr_.reverse()); // it mutates the real array, it does not
// console.log(arr_);

// // there is a concat() method too , concat() concats 2 array into a one method and it does not mutate the original arrays, so it returns an new array

// // join() method converts elements of an array to a string than puts every element to string with a notaion
// console.log(arr_.join(', '));

// const ar = [23, 12, 38];

// console.log(ar.at(0)); // it is same as ar[0];
// console.log(ar[arr.length - 1]);
// console.log(ar.at(-1)); // it will return the exact same value with the line 33

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (let [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited  ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('--------------------------------------------------');
// movements.forEach((movement, index, array) => {
//   // with for each we don't have to decstructer the index and the value we can take as an paramater
//   if (movement > 0) {
//     console.log(`Movement ${index}: You deposited  ${movement}`);
//   } else {
//     console.log(`Movement ${index}:You withdrew ${Math.abs(movement)}`);
//   }
// });
// // You can not use break and continue keyword with forEach

// // MAPS and SETS

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log('---------------------------------');
// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
//   console.log(map);
// });

// const checkDogs = function (arr1, arr2) {
//   const correctedArr = arr1.slice();
//   correctedArr.splice(-2, 2);
//   correctedArr.splice(0, 1);

//   console.log(correctedArr);
//   // const allAges = [...correctedArr, ...arr2];// thats is the spread operator way
//   const allAges = correctedArr.concat(arr2);

//   allAges.forEach((el, index) => {
//     el < 3
//       ? console.log(`Dog number ${index + 1} is still a puypy `)
//       : console.log(
//           `Dog number ${index + 1} is an adult, and it is ${el} years old`
//         );
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// const calcAverageHumanAge = function (ages) {
//   let humanAge = ages.map(age => {
//     if (age <= 2) {
//       return age * 2;
//     } else {
//       return 16 + age * 4;
//     }
//   });
//   humanAge = humanAge.filter(curr => curr > 18);
//   console.log(humanAge);
//   let avarageHumanAge = humanAge.reduce((acc, cur) => acc + cur, 0);
//   return Math.trunc(avarageHumanAge / humanAge.length);
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;
// const deposits = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov);
// console.log(deposits);

const calcAvarageHumanAge = ages => {
  let allAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(allAges);
  let adultOnes = allAges.filter(age => age > 18);
  console.log(adultOnes);
  let avarageAge =
    adultOnes.reduce((acc, cur) => acc + cur, 0) / adultOnes.length;
  console.log(avarageAge);
};
calcAvarageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAvarageHumanAge([16, 6, 10, 5, 6, 1, 4]);

movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // this mutates the original array
console.log(owners);

console.log(movements);
console.log(movements.sort()); // sort is for strings

// a stands for current value b sf next value
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b); // it is the same as the upper example
console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a > b) return 1;
// });

movements.sort((a, b) => b - a); // it is also same as the upper example
