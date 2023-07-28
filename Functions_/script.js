'use strict';

// //First-Class Function
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-Order Function + Callback Functions
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// const high5 = function () {
//   console.log('Highhhhhhh fiveeeeeeeeeeeeeeee');
// };
// document.body.addEventListener('click', high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`); // this happens because something called closures
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Eren');

// //we can make it easier like this:
// greet('Miyav miyav')('ni*a');
// const rFunc = greeting => name => console.log(`${greeting} ${name}`);

// rFunc('naaber')('müdür');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seet on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
//   },
// };

// lufthansa.book(32132, 'Eren Erdogan');
// console.log(lufthansa);
// const luft = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(luft, 12345, 'saaadi');

// const arr_1 = [123456123123, 'Ruhi'];

// book.apply(luft, arr_1);

// // const newBook = book.bind(luft);
// // newBook(123123, 'ola Soy Dora');

// //book.bind(luft)(35478, 'sen 15 milyar milyon'); // this worked toooo
// const boook = book.bind(luft, 8989, 'erennn');
// boook();
// boook(4545, 'we got sm new here'); // this arguments does not mean anything for our method because we alreardy passed new arguments
// function sayHello(greeting1, greeting2) {
//   console.log(greeting1 + ', ' + greeting2 + ', ben' + this.name);
// }

// const person = { name: 'Eren' };
// const app = ['HOLA', 'Mi Amigo'];

// sayHello.call(person, 'merhaba', 'nasılsın');
// sayHello.apply(person, app);// this takes arguments as an array

// const helo = sayHello.bind(person);

// helo('whatsup', 'maaaaaan');

// const addTax = (rate, value) => value + value * rate; // we did not use this keyword
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.3); // we will allways use '0.3' as a rate arg
// // addVat = value => value + value * 0.3;

// console.log(addVat(100));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0), // this code created an array with a length of it and filled with the value in a function

//   registerNewAnswer() {
//     const answer = prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     );

//     if (Number(answer) >= 0 && Number(answer) < 4) {
//       this.answers[answer]++;
//     } else {
//       console.log('You must enter a number between 0 and 3');
//     }
//     console.log(this.answers[answer]);
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are : ${this.answers.join(', ')}`);
//     }
//   },
// };
// //const a = poll.registerNewAnswer.bind(poll); // you must enter the name of the object that obtains the function
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answer: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answer: [1, 5, 3, 9, 6, 1] });
// poll.displayResults.call({ answer: [5, 2, 3] }, 'string');

// const arr_2 = [123, 123];
// console.log(arr_2);

function d() {
  f = function () {
    console.log('asdasd');
  };
}
console.dir(d);
