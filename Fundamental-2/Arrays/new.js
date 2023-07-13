"use strict";

const friend1 = "Eren";
const friend2 = "Gamze";
const friend3 = "Emre";

// with arrays we can bundle these datas by using brackets []

//before we start arrays are 0 based so when we want to get an element  we enter an order of the element and the order starts with the 0 and goes 1,2........
//------------------------------------------------
const friendList = ["Eren", "Gamze", "Emre"];

// also we can create arrays like this

const anotherList = new Array("Eren", "Emre", "Gamze");
console.log(anotherList);
//----------------------------------------------------------

console.log(friendList);
console.log(friendList[0], friendList[1], friendList[2]); // you can cal the each elements like this
console.log(friendList.length);
// lenth is not zero based so when we want learn the array's length it says exact number

console.log(friendList[friendList.length - 1]); // last element of an array

// what happens if I would want to change the element of array

friendList[0] = "Mahmut"; // we can mutate elements like this
console.log(friendList);

// but our array starts with the const keyword how is that possible const keyword only prevents changes in primitive values so we can change arrays object so on. So what we can not do is we can not change the whole array
//for example friendList = ['Ayşe']

// we can put an array inside of an array

const arr_1 = ["Zehra", "Ali", "Mahmut", friendList];

//console.log(calcAge(arr_1)); // this returns NaN Type of value even it's a number array

const arr_num = [12, 23, 322, 3213];
// console.log(arr_num + 10); // output :'12, 23, 322, 321310" it happened because of plus operator

//console.log(arr_num - 10); // Output: NaN
//------------------------------------------------------------------------------------------

// add elements
arr_1.push("Kazım"); // this method attaches end of  an element of an array also it returns the length of an array with the added element

arr_1.unshift("Şaban"); // it adds the element to the beginning and returns new length

// Remove elements

console.log(arr_1.pop()); // it removes the last element and returns removed element

arr_1.shift(); // it removes the first element and returns what it removed

console.log(arr_1.indexOf("Ali")); // this method returns index number of the reference if there is not element that you entered it returns '-1'

console.log(arr_1.includes("Ali")); // it returns boolean type and this method use strict equality operator

if (arr_1.includes("Zehra")) {
  console.log("There is Zehra yes");
}
