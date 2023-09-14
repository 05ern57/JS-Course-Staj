'use strict';

// const Person = function (firstName, birthYear) {
//   //  These porperties called instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   we can also add functions in this
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// lets explain what we did here. Firstly we define a Person constructor then new operator created an empty string
// later then Person contructer called by pointing empty string via this keyword after that we created a firstName and birthYear
// properties into the empty string than parameters of the constructor assigned as their values.
// Lastly new operator returns the filled empty object so jonas variable assigned as the new object

// const eren = new Person('Eren', 2003);
// const sample = 'yoooooo';

// console.log(eren instanceof Person);
// console.log(sample instanceof Person);

// console.log(Person.prototype);

// // prototype
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear); // in case, this keyword stands for object's porperty that called the function
// };

// we use prototypes because when we create objects via constructor every object would have the same function in it and it would  take up space from our memory but instead of this if we use prototypes  we  would have this

//                            PROTOTYPE
//                      ---------------------
//                      |     calcAge()      |
//                      | prototype bla bla  |
//                      ---------------------
//                     /                     \
//                    /                       \
//              eren (obj)                   jonas(obj)

// jonas.calcAge();
// eren.calcAge();

// console.log(eren.__proto__);
// console.log(Person.prototype === eren.__proto__);
// // Person.prototype actually is not the prototype of Person because Person.prototype is actually collection of the prototypes that are constructed by Person constructor

// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(eren)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, eren);
// console.log(jonas.species, eren.species);

// console.log(jonas.hasOwnProperty('firstName')); // this is true because it is inside of object not inside of prototype
// console.log(jonas.hasOwnProperty('species')); // it is false because species property is inside of the prototype of them(jonas, eren)

// console.log(Person.prototype);
// console.log(jonas.__proto__); // jonas.__proto__ = Person.prototype
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// // we can add new properties into Array constructor prototype
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// but it is not a good idea for some reasons
// 1. javascript can add a new property with same name
// 2. when you are working with a group it may not a good idea
// and so on and so forth

// const arr = [0, 0, 1, 1, 2, 3, 4, 8, 7, 9, 55, 9, 9, 9, 5, 5, 6, 6, 102];
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.log(h1.__proto__.__proto__);

// console.log(HTMLElement.prototype);
// console.log(Element.prototype);
// console.log(Node.prototype);
// console.log(EventTarget.prototype);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5; // this will always be stands for the object that will use this method
//   console.log(this.speed);
// };

// const instance1 = new Car('BMW', 120);
// const instance2 = new Car('Mercedes', 95);

// instance1.brake();
// instance1.accelerate();
// instance2.brake();
// instance2.accelerate();

// class expression
// this also work like this because i guess in js classes are just a special type of functions
// we use class keyword here but behind the scenes it is still
// const PersonCl = class {};

// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     // when we need to write a function  we don't need to write outside by like PersonCl.prototype.newFunction instead ...
//   }

//   // we write here and js automaticly adds this to prototype of PersonCl
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // getter-setter Methods
// }

// PersonCl.prototype.newFunction = function () {
//   console.log('gül diye');
// };

// const ero = new PersonCl('Mouhammmed Aliiiiiğğğ', 1996);
// console.log(ero);
// ero.calcAge();
// ero.newFunction();

// ero.firstName = 'Ali';
// console.log(ero);
// Things that you sould know about classes
// 1. Classes are not hoisted
// 2. We can pass classes as arguments and also return them via functions (first-class citizens)
// 3. Classes are executed in strict mode

// I am going to repeat this lesson

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
// }

// const asd = new PersonCl('Eren Erdogan', 2003);
// console.log(asd);
// const ero = new PersonCl('ERen Nigar', 2003);

// Array.from(querySelectorAll('h1'));

// Static Methods

// const Person = function (firstName, birthYear) {
//   // İnstance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// // adding static method is simply like this

// Person.staticMethodExample = function () {
//   console.log('Ahey Ahey');
// };
// // we can call static methods only with the constructer's name or class's name

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // we call these methods Instance methods because these methods will be added to the prototype
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   // when we define a static method in a class we simply do this
//   // we call this static methods and I said other method name at the upper line
//   static instanceMethod() {
//     console.log('ahey ahey ahey');
//   }
// }

// const asd = new PersonCl('Eren Erdogan', 2003);
// console.log(asd);
// const ero = new PersonCl('ERen Nigar', 2003);

// // Array.from(querySelectorAll('h1'));
// PersonCl.instanceMethod();
// Person.staticMethodExample();
// // ero.instanceMethod(); // it will throw error when you  open it

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// I will repeat this for understanding the inheritence of constructer functions
// ----------------
const PersonProto = {
  clacAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const keko = Object.create(PersonProto); // we manually matched the prototype of keko
keko.init('Mo Ali', 1933);
keko.firstName = 'Mouham';
console.log(keko.firstName);

// -------------------
// // when we use Object.create() we manualy match the prototype of the object
// const steven = Object.create(PersonProto);
// console.log(steven);
// // also properties to
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// // we don't have to assign the properties like villager, instead we can use this
// sarah.init('Sarah', 1966);
// sarah.calcAge();

// Challange #2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log(`${this.make} is moving ${(this.speed += 10)} km per hour`);
//   }

//   brake() {
//     console.log(`${this.make} is moving ${(this.speed -= 5)} km per hour`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(mph) {
//     const converted = mph * 1.6;
//     this.speed = converted;
//   }
// }

// const ford = new CarCl('Ford', 120);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);
// ford.brake();

// const bmw = new CarCl('BMW', 120);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// console.log(bmw.speedUS);
// bmw.speedUS = 50;
// console.log(bmw);
// // after we logged object to the console if we accelerate or break object's speed also would change but we can only see when we look details
// bmw.accelerate();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log();
};

const mike = new Student('Mike Tyson', 1967, 'Boxing');
console.log(mike);
console.log(mike.__proto__.__proto__.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__);
console.log(Student.prototype);
console.log(Student.prototype);
