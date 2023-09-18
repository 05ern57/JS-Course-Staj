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
// const PersonProto = {
//   clacAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const keko = Object.create(PersonProto); // we manually matched the prototype of keko
// keko.init('Mo Ali', 1933);
// keko.firstName = 'Mouham';
// console.log(keko.firstName);

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
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} is moving ${(this.speed += 10)} km per hour`);
  }

  brake() {
    console.log(`${this.make} is moving ${(this.speed -= 5)} km per hour`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(mph) {
    const converted = mph * 1.6;
    this.speed = converted;
  }
}

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

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// // we should write this code right after the constructor function because  if write this code after adding introduce function to prototype, we could override the method if  Person constructer also has the same function from itself or its prototype

// Student.prototype.introduce =  function () {
//   console.log(`Hi my name is ${this.firstName} and i am yearsold. Also  i am a ${this.course}`);
// }

// const mike = new Student('Mike', 1996, 'boxer')
// mike.introduce();
// // mike.calcAge();

// console.log(mike);
// // in our console we can see mike's prototype is set as Person we can easily change this
// Student.prototype.constructor = Student;
// // console.dir(Student);

// console.log(mike.__proto__);
// console.log(Student.prototype.__proto__);

// console.log(mike.__proto__.__proto__);
// console.log(Person.prototype);

// console.log(Object.prototype);
// console.log(mike.__proto__.__proto__.__proto__);
// console.log(mike instanceof Person);
// console.log(mike instanceof Student);

// console.log(mike.__proto__ == Person.prototype);

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// // when we look at the console of out website you will see mike object like this
// // EV {make: 'Tesla', speed: 120, charge: 23}
// // charge: 23
// // make: "Tesla"
// // speed: 115
// // [[Prototype]]: Car
// // the reson why last line set as Car is js's console is set the name by looking for the nearest constructer function. So it must be EV right.
// // However when you examine(incelemek) objects in js console it often displays  the name of the constructor function of the nearest  prototype in the chain
// console.log(tesla.__proto__);

// console.log(Car.prototype);
// console.log(tesla.__proto__.__proto__);

// console.log(tesla.__proto__ === EV.prototype);
// console.log(Car.prototype);

// // tesla.accelerate();
// // console.log(tesla.chargeBattery(95));
// tesla.brake();

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
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log('Hey there');
//   }
// }

// class StudentCl extends PersonCl {
//   // if you wont add new proprties you can simply pass the arguments into super constructor
//   constructor(fullName, birthYear, course) {
//     // if we don't call super first PersonCl constructor this keyword's referance would change
//     super(fullName, birthYear);
//     // we must call the super function first for binding of this keyword
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `My name is ${this.fullName} and i am ${this.calcAge()} years old!`
//     );
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2047 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012);
// console.log(martha);
// martha.introduce();
// martha.calcAge();
// console.log(martha.fullName);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Joe Mama', 1987);
// const StudentProto = Object.create(PersonProto);
// // the reason why we don't write '.prototype' is because we adding the function directly to prototype
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is  ${this.firstName} and i study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'boxer');
// jay.introduce();
// jay.calcAge();
// console.log(jay);
// console.log(steven);

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     // when we want to protect a property we simply add '_' before the property it's not truely private, just an convention.
//     this._pin = pin;
//     // we can add set values without more arguments
//     this._movements = [];
//     this._locale = navigator.language;

//     console.log(`Thanks for opening na account, ${owner}`);
//   }

//   // Public Interface

//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.approveLoan(val)) this.deposit(val);
//     console.log(`Loan Approved`);
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// // acc1.movements.push(250); // we can add deposits
// // acc1.movements.push(-350); // also widthrawals
// acc1.deposit(250);
// acc1.withdraw(550);

// acc1.requestLoan(1000);
// console.log(acc1.approveLoan());

// console.log(acc1);
// console.log(acc1.pin);

// console.log(acc1.getMovements());

//   ENCAPSULATİON İN JS   //

//  1) Public Fields
//  2) Private Fields
//  3) Public Methods
//  4) Private Fields

// class Account {
//   // !!! filed won't be on the prototypes like functions it will be on the instances

//   // 1) Public Fields
//   locale = navigator.language;

//   // 2) Private Fields
//   #movements = [];
//   // with '#' the porperty is finaly portected
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // when we want to set a private field in constructor function we need create upside first then we can redifine with the construtor
//     this.#pin = pin;
//   }

//   // 3)Public Methods

//   // Public Interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//     // we are returned the object because when we want to chain methods we need the object to remain using functions
//   }

//   widthraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       console.log('Loan Approved');
//       return this.deposit(val);
//     }
//   }

//   // 4) Private Methods
//   // when we look at our object adem in console we can see a property called Private methods and js is basically creates this function inside of that property
//   #approveLoan(val) {
//     return true;
//   }
// }

// const adem = new Account('Adem', 'TR', 1111);
// console.log(adem);
// // console.log(adem.#movements);

// // console.log(adem.#pin);
// // console.log(adem.reuqestLoan(560));

// // Chaining Methods
// adem.deposit(500).deposit(300).widthraw(200).requestLoan(700).requestLoan(3000);
// // this won't work because this functon returns nothing
// console.log(adem);
// console.log(adem.getMovements());

// const EV = function (make, speed, charge) {
//   Car.call(this, make ,speed);
//   this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);
// // with this code we set EV.prototype's prtotype as Car.prototype so we simply inherit Car's prototype

// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo ;
// }

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge --;
//   console.log(`${this.make} going at ${this.speed}
//   km/h, with a charge of ${this.charge}%`);
// };

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    this.#charge++;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    return this;
  }
}

const riv = new EVCl('Rivian', 120, 23);
console.log(riv);
riv
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .chargeBattery(55)
  .chargeBattery(75);
console.log(riv);
console.log(riv.speedUS);
