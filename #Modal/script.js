'use strict';

const btns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const close_modal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(btns);

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let btn of btns) {
  btn.addEventListener('click', showModal);
}

close_modal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
// if we use the function whith paranthesis it will call the function immidiately

// when we trigger an event js creates an object that contains all the information about the event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  } else {
    console.log(e.key);
  }
});
//after we write this code when we press an any key javascript will create an object and in this object you can see in the key property which key you pressed

// document.addEventListener('click', function (e) {
//   console.log(e);
// });
