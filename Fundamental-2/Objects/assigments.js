// "use strict";

// // #challange 3
// const mark = {
//   name: "Mark",
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   name: "John",
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// }

const myCountry = {
  country: "Türkiye",
  capital: "Ankara",
  language: "Türkçe",
  pop: 80000000,
  neighbours: ["russia", "Azerbeijan", "ıraq", "greece"],
  describe: function () {
    console.log(
      `${this.country} has${this.pop * 2} ${this.language}-speaking people, ${
        this.neighbours.length
      } neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    if (this.neighbours != "") {
      this.isIsland = false;
    } else {
      this.isIsland = true;
    }
  },
};

// console.log(
//   `${myCountry.country} has${myCountry.pop * 2} ${
//     myCountry.language
//   }-speaking people, ${
//     myCountry.neighbours.length
//   } neighbouring countries and a capital called ${myCountry.capital}.`
// );

// console.log(
//   `${myCountry["country"]} has${myCountry["pop"] * 2} ${
//     myCountry["language"]
//   }-speaking people, ${
//     myCountry["neighbours"].length
//   } neighbouring countries and a capital called ${myCountry["capital"]}.`
// );

myCountry.describe();
