let js = "amazing";

console.log(5 + 7 + -1);
console.log(25);

let sayMyName = "Eren";

// let $ = "my little pony";

// console.log($);

//you can not use new keyword because it's reserved
//let new = 2424412424;

//reserved keywords function - if - else -bla bla bla.

let now = 2037;
let ageJonas = now - 1991;
let ageEren = now - 2003;
console.log(ageJonas * 2, ageEren ** 2, ageEren / 2);
// (2 ** 3) means exponent of 2 is 3 = 2 * 2 * 2 = 8

let firstName = "Eren";
let lastName = "Erdoğan";

let num = 5;

console.log(num + "Adet ");
let x = 5;
x += 10;
x *= 4;
x++;
x--;
x++;
console.log(x);

let _12 = 12;
let _15 = 15;

console.log(_12 >= _15);
console.log(_12 <= _15);

//template String/Literal ==> bu stringler içerisine yer tutucu ifadeler girilebilir bu ifadeler değişkenler olabilir.
console.log(`merhaba benim adım ${firstName} ve soyadım ${lastName}`);

//ECMAS5 version of the example above
console.log(" merhaba benim adım " + firstName + " ve soyadım " + lastName);

//Template Literal/String ECMAS5
console.log(
  "String with \n\
mutiple \n\
lines"
);

//ECMAS6 version  of the example
console.log(`String with 
multiple
lines`);

let age = 15;
//let isOldEnough = age >= 18;

if (age >= 18) {
  // if age would under 18 then this block would never be executed and it would
  // jump into else part to execute the else block
  console.log("Sarah can start driving license ");
} else {
  let yearsLeft = 18 - age;
  console.log(`${yearsLeft} years left Sarah to get license`);
}

let birthYear = 1988;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

let inputYear = "1991";
console.log(inputYear + 18); //Output: 199118

//we convert variables with Functions this is called type conversion
console.log(Number(inputYear) + String(80));
console.log(Number("Eren"));
console.log(typeof NaN); // Output: number

//javascript converts variables implicitly and this is called type coercion

console.log("I am " + 23 + " years old"); // plus operator triggers a coercion to strings
console.log("23" - "10" - 3); // Output: 10
//because minus operator triggers a coersion to numbers
console.log("20" * "3"); // Output: 60
console.log("21" / "3"); // Output: 7

let n = "1" + 1;
n++; // this operators also triggers coercion to numbers
console.log(n);

console.log(2 + 3 + 4 + "5"); // Outout: 95 = 2 + 3 + 4 => 9 + '5'

//5 Falsy values  : 0, '', undefined, null, NaN

console.log(Boolean(""));
console.log(Boolean(undefined)); // all of them are false
console.log(Boolean(null));
console.log(Boolean(NaN));
//---
console.log(Boolean("Eren"));
console.log(Boolean(1)); // these are true
console.log(Boolean([]));

let money = 0; //unsuccessful

money = 100; //successful

if (money) {
  console.log("successful");
} else {
  console.log("unseccessful");
}

let height;
if (height) {
  console.log("height is exist");
  //only if its assaigned //height = ...(any value)
  //except these : 0, '', NaN, null
} else {
  console.log("height is undefined"); // our output
}

// Difference between '==(loose)' and '===(strict)' comparison operators

let age = "18";

// this operator does not coercion so if age is not number than comparison operator will return false and thats why it's called strict comparison operator
if (this.age === 18) {
  consolo.log("You just became an adult :D (Strict)");
}

// this operator does coercions age can be string or something else if the coercioned type is the same as the 18
if (this.age == 18) {
  consolo.log("You just became an adult :D (Loose)");
}

// let fav = prompt("What's your fav number?"); // propmt returns String value its like text are or input text
// console.log(fav);
// console.log(typeof fav);

// if (fav === 23) {
//   console.log("Cool! 23 is an amazing number! (Strict)");
// }
// //İf we want to make with strict operator we should do  like this:
// if (Number(fav.trim()) === 23) {
//   console.log("Cool! 23 is an amazing number! (Strict)(Convreted Version)");
// }

// if (fav == 23) {
//   console.log("Cool! 23 is an amazing number! (Loose)");
// }

let hasDriversLicense = true;
let hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // Output: true
// if one of was true than it would be true

console.log(hasDriversLicense || hasGoodVision); // Output: true
// if both were false it would be false

const day = "Bla";

// Switch does a strict comparison like : ( day === 'Monday' )
switch (day) {
  case "Monday":
    console.log("A");
    break;
  case "Tuesday":
    console.log("B");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("D");
    break;
  case "Friday":
    console.log("E");
    break;
  case "Saturday":
    console.log("F");
    break;
  case "Sunday":
    console.log("G");
    break;
  default:
    console.log("This is the default.");
    break;
}

//We can do this by using if - else

if (day === "Monday") {
} else if (day === "Tuesday") {
} else if (day === "Wednesday" || day === "Thursday") {
} // ............

3 + 4; // is expression because it produces a value
//operators always produce an expressions
//expressions are like  words, statements are like senteces.

let age_1 = 23;
const drink = age_1 >= 18 ? "Şalgam" : "Su";
console.log(drink);

//if version of the example above

let drinki;
if (age_1 >= 18) {
  drinki = "Şalgam";
} else {
  drinki = "Su";
}
console.log(drinki);

console.log(`I like to dring ${age_1 >= 18 ? "Şalgam" : "Su"} `);
//You can not give an statement here and if else is statement. So, you can't use if else here

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("Koalas win the trophy");
}

const bill = 500;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

console.log(
  "The bill was " +
    bill +
    " , the tip was " +
    tip +
    " , and the total value " +
    (bill + tip)
);
