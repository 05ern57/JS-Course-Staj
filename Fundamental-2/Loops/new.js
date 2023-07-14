"use strict";

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findHigher(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(max);
  console.log(min);
}

findHigher(a);
findHigher([3, 7, 5]);
