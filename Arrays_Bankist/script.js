'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

const displayMovements = function (movements, sorted = false) {
  containerMovements.innerHTML = '';

  const movs = sorted ? movements : movements.slice().sort((a, b) => a - b);

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov} tl</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = accounts => {
  setTimeout(function () {
    displayMovements(accounts.movements);

    calcDisplaySummary(accounts);

    calcBalance(accounts);
  }, 1000);
};

// const euroToUsd = 1.1;
// const movementsUsd = account1.movements.map(val => Math.trunc(val * euroToUsd));
// console.log(account1.movements);
// console.log(movementsUsd);

const calcBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} TL`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} TL`;
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} TL`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => Math.abs(acc + mov));
  labelSumInterest.textContent = `${interest.toFixed(2)} TL`;
};

const firstWithdrawal = movements.find(cur => cur < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// -------------------------------------my way----------------------//

// const userValidation = function (event) {
//   event.preventDefault();
//   accounts.find(acc => {
//     if (
//       acc.username == inputLoginUsername.value &&
//       acc.pin == inputLoginPin.value
//     ) {
//       displayMovements(acc.movements);
//       calcDisplaySummary(acc['movements']);
//       calcBalance(acc.movements);
//       containerApp.classList.add('visible');
//     }
//   });
//   inputLoginPin.value = '';
//   inputLoginUsername.value = '';
// };

// btnLogin.addEventListener('click', userValidation);

//--------------------------------------Jonas way --------------------//

// Event Handler   we can use this later for logout
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

let recipient;

const transferMoney = event => {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  let recipient = accounts.find(acc => acc.username === inputTransferTo.value);

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    currentAccount.username !== recipient.username
  ) {
    recipient.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  } else {
    console.log('You cant do that');
  }

  inputTransferAmount.value = '';
  inputTransferTo.value = '';
};

btnTransfer.addEventListener('click', transferMoney);

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov * 0.1 >= amount)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  console.log(currentAccount.movements);
  sorted = !sorted;
});

// const bankDepositSum = accounts.map(acc => acc.movements);
// console.log(bankDepositSum);
// console.log(bankDepositSum.flat());

// const bankDepositSum = accounts.flatMap(acc => acc.movements);
// console.log(bankDepositSum);

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(curr => curr > 0)
//   .reduce((acc, cur) => acc + cur);
// console.log(bankDepositSum);
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawal += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawal: 0 }
//   );
// //reduce's sums is exact same thing with the {deposits: 0 , withdrawal: 0}
// console.log(sums);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// //reduce's sums is exact same thing with the {deposits: 0 , withdrawals: 0}
// console.log(deposits, withdrawals);

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );
  return titleCase;
};
// whole word 'word[0].toUpperCase() + word.slice(1)' with inital letter

console.log(convertTitleCase('this is a nice title').join(' '));
console.log(
  convertTitleCase('this is a LONG title but not too long').join(' ')
);
console.log(
  convertTitleCase('and here is another title with an EXAMPLE').join(' ')
);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const recommendedFood = dogs.forEach(
  dog => (dog.recommended = dog.weight ** 0.75 * 28)
);
const res = dogs.filter(dog => dog.owners.includes('Sarah'));
res.recommended < res.curFood
  ? console.log('This dog eats too much')
  : console.log('This dog needs more food');
console.log(res);

const allOwners = dogs.flatMap(obj => obj.owners);
console.log(allOwners);

console.log(dogs.some(dog => dog.recommended === dog.curFood));
console.log(
  dogs.some(
    dog =>
      dog.recommended + dog.recommended * 0.1 > dog.curFood &&
      dog.recommended - dog.recommended * 0.1 < dog.curFood
  )
);
const allOkay = dogs.map(dog => [
  dog.recommended + dog.recommended * 0.1,
  dog.recommended - dog.recommended * 0.1,
]);
console.log(allOkay);

const siralama = dogs
  .slice()
  .map(obj => obj.recommended)
  .sort((a, b) => a - b);

console.log(dogs);
console.log(siralama);

const ownersEatTooMuch = dogs
  .filter(obj => obj.curFood > obj.recommended)
  .flatMap(obj => obj.owners);
const ownersEatTooLittle = dogs
  .filter(obj => obj.curFood < obj.recommended)
  .flatMap(obj => obj.owners);
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

console.log(`${ownersEatTooMuch.join(' and ')} dog's eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dog's eat too little`);
