// let mer = "name";

// let haba = false;
// mer = 12354654;
// console.log(typeof true);
// console.log(typeof mer);
// console.log(typeof haba);
// console.log(typeof 123);
// console.log(typeof "insanlar");

// let basarisiz;

// console.log(typeof basarisiz);

let country = "Türkiye";
let continent = "Asia";
let population = 82 * 10 ** 6;
console.log(population);

let PI = 3.1415;

let isIsland = false;

let language;

// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);

language = "Turkce";

console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6000000;

console.log(finlandPopulation > population);

let avaragePop = 33000000;

console.log(population > avaragePop);

//precedence of '+' operator higher than the '>'
console.log(population + 35 > finlandPopulation + population);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

description = `Portugal is in Europe, and its 11 million people speak portugese`;
console.log(description);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// if (BMIMark > BMIJohn) {
//   console.log(
//     "Mark's BMI is higher than John's!",
//     `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`
//   );
// } else {
//   console.log(
//     "John's BMI is higher than Mark's!",
//     `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`
//   );
// }

console.log("9" + "5"); // 95
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //  false
console.log(5 + 6 + "4" + 9 - 2); // 1147

let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("'More than 1 border' in case");
} else {
  console.log("No borders");
}

if (Number(numNeighbours) === 1) {
  console.log("Only 1 border!");
} else if (Number(numNeighbours) > 1) {
  console.log("'More than 1 border' in case");
} else {
  console.log("No borders");
}

let pop = 80000000;

if (pop < 500000000 && language === "English") {
  console.log("You should live in Türkiye");
} else {
  console.log(" you should not live in Türkiye");
}

let lang = "Chinese";

switch (lang) {
  case "Chinese" || "Mandarin":
    console.log("MOST number of native speakers");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("It is also cool");
}

let co = "Türkiye";
let poption = 12000000;

let result =
  poption > 33000000
    ? `${co}'s s population is above average`
    : `${co}'s population is below average`;

console.log(result);
