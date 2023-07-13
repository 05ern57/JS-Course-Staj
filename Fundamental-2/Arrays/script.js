"use strict";

//Function Declaration

// for the function declaration we call function in upper lines before we declare-wite the function

// also this is called hoisting, function is hoisted(yukarı çekildi) so can called the function before we declare it
const age1 = calcAge(1991);

function calcAge(birthYear) {
  return 2023 - birthYear;
}

// hoisting also can be for the varaibles

console.log(x);
var x = 5;

// output will be undefined because var x already hoisted , i guess this code proccessed by javascript like this
var y;
console.log(y);
y = 5;

//-----------------------------
//Function Expression

// for the function expression we can't call the function before we write the function it would give errors in the console

const calcAge_2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge_2(1991);

console.log(age1, age2);

// Arrow Functions is type of function expressions

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// when we use an arrow function in a single line we dont have to use return or curly braces and it wraps the parameter if there is only one paramater

// Arrow functions do not get this keyword, we can't use this keyword in an Arrow Function !!!!!!!!!!!!!

const yearsUntilRetairment = (birthYear, firstName) => {
  const age4 = calcAge3(birthYear); // 2023 - birthYear
  const retirementAge = 50;
  const result1 = retirementAge - age4;
  return `There is still ${result1} year ${firstName}`;
};

console.log(yearsUntilRetairment(1991, "Eren")); // when you give a referance of the function it will print to console whole block of code

const cutFruit = function (fruit) {
  return fruit * 4;
};

const proccessFruit = (apple, orrange) => {
  const one = cutFruit(apple);
  const two = cutFruit(orrange);

  const juice = `Juice with ${one} pieces of apple and ${two} pieces of  orange`;
  return juice;
};

console.log(proccessFruit(2, 2));

//-------------------------------------
