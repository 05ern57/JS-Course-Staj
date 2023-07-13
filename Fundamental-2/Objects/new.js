"use strict";

const friendList = ["Eren", "Gamze", "Emre"];

// Object Functions
const eren = {
  firstName: "Eren",
  secondName: "Erdoğan",
  birthYear: 2003,
  job: "intern",
  friends: friendList,
  driverslicense: true,
  getSummary: function () {
    return `${this.firstName} is a ${this.ageClac()} year old ${
      this.job
    }, and he has ${this.driverslicense ? `a` : `not`} driver's license `;
  },

  // How we use Object Functions
  // ageClac: function (birthYear) {  // ---------    1
  //   return 2023 - birthYear;
  // },
  // console.log(eren.ageClac(2003));
  // console.log(eren["ageClac"](2003)); // this is little bit complex

  // ageClac: function () {
  //   console.log(this);            //-------------    2
  //   return 2023 - this.birthYear;
  // },

  ageClac: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};
eren.ageClac();

console.log(eren.age);
console.log(eren); // we added age to eren object
console.log(eren.getSummary());
