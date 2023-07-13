"use strict";

const friendList_2 = ["Eren", "Gamze", "Emre"];

//this is called an object, it is basically compose of key-value structure
const eren_1 = {
  firstName: "Eren",
  secondName: "Erdoğan",
  age: 2017 - 2003,
  job: "intern",
  friends: friendList_2,
};
console.log(eren_1);

// there are two choices to reach values

console.log(eren_1.firstName);
//or
console.log(eren_1["firstName"]); // advantage of using a bracket way is that you can put expressions in it

const nameKey = "Name";

console.log(eren_1["first" + nameKey]);
console.log(eren_1["second" + nameKey]); // it is popular thing according to Jonas

// undefined primitive type is the value that javascript returns when it can not find  the object you want or the object does not exist

//const interestedIn = prompt("Chose job, firstName, lastName, friends");

//console.log(eren_1[interestedIn]); // it is a good example , if you try this with dot notation you would fail

// How can we add key to an object

eren_1.location = "Türkiye";
eren_1["city"] = "Ankara";
console.log(eren_1);

console.log(
  `${eren_1.firstName}  has ${eren_1.friends.length}, and his best Friend is ${eren_1.friends[1]}`
);

const eren_2 = {
  firstName: "Eren",
  secondName: "Erdoğan",
  age: 2017 - 2003,
  job: "intern",
  friends: friendList_2,
};
