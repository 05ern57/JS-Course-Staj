'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); // element that we call with the queryselectorAll() method is called node list

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(el => {
  el.addEventListener('click', openModal);
});
//better way to adding eventListeners or using loops

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////// SMOOTH SCROLLİNG

const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('Bil bakalim nereyi okuyorsun şu an');

  // h1.removeEventListener('mouseenter', alertH1);
  // with this way we are trigering the event only one time
  // if we want to remove event after a certain time we can also do that
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);
// like this

const upperIcon = document.querySelector('.upper--icon');

upperIcon.addEventListener('click', function () {
  header.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const section_id = this.getAttribute('href');
    const coords = document.querySelector(section_id).getBoundingClientRect();
    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset,
      behavior: 'smooth',
    });
    // modern way
    // document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  });
});

// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log(e.target);
    const section_id = e.target.getAttribute('href');
    const coords = document.querySelector(section_id).getBoundingClientRect();
    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Event Delegation 2 for tabbed component
// my way to do it
// tabsContainer.addEventListener('click', function (e) {
//   // const clicked = e.target.closest('.operations__tab');
//   // we can do solve this problem(if statement) also like this
//   // if(!clicked) return; we call this guard clause (madde / ibare)
//   if (
//     e.target.classList.contains('operations__tab') &&
//     !e.target.classList.contains('operations__tab--active')
//   ) {
//     tabs.forEach(el => el.classList.remove('operations__tab--active'));
//     tabsContent.forEach(el =>
//       el.classList.remove('operations__content--active')
//     );
//     // tabs.filter(el => el.classList.contains('operations__tab--active'));
//     // this would not work because tabs returns a nodelist and it is quite different than arrays
//     e.target.classList.add('operations__tab--active');
//     document
//       .querySelector(`.operations__content--${e.target.dataset.tab}`)
//       .classList.add('operations__content--active');
//   } else {
//     return;
//   }
// });

// efficient way of using and to make event delegation work
tabsContainer.addEventListener('click', function (e) {
  const clickedTab = e.target.closest('.operations__tab');

  if (!clickedTab) return; // Clicked area was not a tab, do nothing;

  if (!clickedTab.classList.contains('operations__tab--active')) {
    tabs.forEach(el => el.classList.remove('operations__tab--active'));
    tabsContent.forEach(el =>
      el.classList.remove('operations__content--active')
    );
    clickedTab.classList.add('operations__tab--active');
    const selectedTabContent = document.querySelector(
      `.operations__content--${clickedTab.dataset.tab}`
    );
    if (selectedTabContent) {
      selectedTabContent.classList.add('operations__content--active');
    }
  }
});

// Menu fade animation
const nav = document.querySelector('.nav');
// we use mouseover because mouseenter does not bubble(event bubling)
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// we can make this work like this
// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });
// but instead of this we can use a way that is more efficient
nav.addEventListener('mauseover', handleHover.bind(0.5));
nav.addEventListener('mauseout', handleHover.bind(1));
// !!!!!!! we set this keyword to 0.5 and 1 because we can not pass an argument to a function that is into eventListener function. In addition if we have to pass multiple arguments we can pass an array into a bind method

// Sticky navigation
const section_1 = document.getElementById('section--1');
const initialCoords = section_1.getBoundingClientRect();
console.log(initialCoords);
// Scroll event is not available for document object
// we can only use with window object and also it is a bad way to implement this thing
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });

const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;
const stickNav = function (entries) {
  // entries.forEach(entry => {}); we loop only when we have multiple thresholds
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const observer = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       nav.classList.add('sticky');
//     } else {
//       nav.classList.remove('sticky');
//     }
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// ob server.observe(header);

// Revealing sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadingImg = function (entries, observer) {
  const [entry] = entries; // we use entries for multiple threshold
  // console.log(entry);

  //guard clause (we are using this for condition(isIntersecting))
  if (!entry.isIntersecting) return; // if it's not then stop  the conditon

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadingImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // think like negatif numbers are making your viewport smaller and positives are making bigger than it is
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider

const slides = document.querySelectorAll('.slide');
const btn_left = document.querySelector('.slider__btn--left');
const btn_right = document.querySelector('.slider__btn--right');
const dot_container = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length - 1;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

const transformAffects = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide !== maxSlide) {
    curSlide++;
    // transformAffects();
    // instead of typing this to here  we can just type this out of the if statement it will make the code more efficient and DRY
  } else {
    curSlide = 0;
    // transformAffects();
  }
  transformAffects(curSlide);
  activateDots(curSlide);
};
const prevSlide = function () {
  if (curSlide !== 0) {
    curSlide--;
  } else {
    curSlide = maxSlide;
  }
  transformAffects(curSlide);
  activateDots(curSlide);
};

// Slider's Dot Component

const createDots = function () {
  slides.forEach((_, i) => {
    dot_container.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide ="${slide}"]`)
    .classList.add('dots__dot--active');
};

// we are going to use event delegation

dot_container.addEventListener('click', function (e) {
  const dot = e.target;
  if (dot.classList.contains('dots__dot')) {
    const slide = dot.dataset.slide; // dif way of this const {slide} = e.target.dataset;
    curSlide = Number(slide);
    activateDots(curSlide);
    transformAffects(curSlide);
  }
});

const init = function () {
  transformAffects(curSlide);
  createDots();
  activateDots(0);
};
init();

// Event Listeners

btn_right.addEventListener('click', nextSlide);
btn_left.addEventListener('click', prevSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();

  // we can also implement the code with this way
  // e.key === 'ArrowLeft' && prevSlide();
  // e.key === 'ArrowRight' && nextSlide();
});

///////////////////////////////////////////////
////////////////LECTURE////////////////////////
///////////////////////////////////////////////

// console.log(document);
// console.log(document.documentElement); // output: html element

// const header = document.querySelector('.header'); // this returns a nodelist and it is not a live list
// console.log(header);

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// const section_1 = document.getElementById('section--1'); // this returns a HTMLCollection and it is a live collection when we delete something from the page the collection will update itself return that collection
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analitics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analitics <button class= "btn btn--close-cookie">Got It </button>';

// // header.prepend(message);
// // header.append(message); // it is a live element so this is the reason why
// // if want to use the message at multiple places we can use this way:
// // header.append(message.cloneNode(true));
// // we can add the mesage by next or previous the header

// // header.before(message);
// header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     //message.remove() // back then developers removing elements like this:
//     message.parentElement.removeChild(message);
//   });

// // message.style.backgroundColor = '#37383d';
// message.style.width = '100%';

// console.log(message.style); // we get styles from the inline style

// // so if try to get style from the class sheet that happens
// console.log(message.style.color); // nothinnnnnnnnnnnnnnnnnnnnng

// // but we can get
// console.log(getComputedStyle(message)); // this brings the data of style.css sheet of message so we can change things like that
// console.log(getComputedStyle(message).color); //
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// console.log(document.documentElement.style.height);
// console.log(document.documentElement.style);
// // document.documentElement.style.setProperty('--color-primary', 'orangered');
// // document.documentElement.style.setProperty(
// //   '--gradient-primary',
// //   'linear-gradient(to top left, yellow, green'
// // );

// console.log(getComputedStyle(message));
// document.createElement('p');
// header.before(message);
// message.style.setProperty('color', '#fff');

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // let assume we entered an designer property(it is not an expected property) and assigned as an Eren then to this:
// // console.log(logo.designer);
// // ofcourse it returns undefined

// // we can get designer by using getAttribute() method
// console.log(logo.getAttribute('designer'));
// logo.designer = 'Mahmut';
// console.log(logo.designer);
// // console.log(logo.setAttribute('designer', 'Ahmet'));
// console.log(logo.src);
// //this returns a absolute url but this:
// console.log(logo.getAttribute('src'));
// //this retuns a relative(göreceli) URL

// const link = document.querySelector('.twitter-link');
// // with this example we can see the difference easily
// console.log(link.href);
// console.log(link.getAttribute('href'));

// console.log(logo.dataset.versionNumber);

// // for the classes we use these 4 methodes
// logo.classList.add('c', 'j');
// logo.classList.remove('a', 'j');
// logo.classList.toggle('d', 'j');
// logo.classList.contains('m', 'j');

// // DON'T USE THİS!!!
// // logo.classList = 'jonas';
// // when we define a classList like that logo classList only has this jonas class so it is a little bit cumbersome

// ///////////////////// SMOOTH SCROLLİNG/////////////////////////////

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// // btnScrollTo.addEventListener('click', function (e) {
// //   // const s1coords = section1.getBoundingClientRect();
// //   // this method shows the distances of section1 based on the
// //   // console.log(s1coords);

// //   console.log(e.target.getBoundingClientRect());
// // });

// // const fTry = setTimeout(() => {
// //   const a = section1.getBoundingClientRect();
// //   console.log(a);
// // }, 5000);

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log('Current scroll (X,Y)', pageXOffset, pageYOffset);
//   // console.log(
//   //   'ViewportHeigth : ' + document.documentElement.clientHeight,
//   //   'ViewportWidth: ' + document.documentElement.clientWidth
//   // );

//   // This works only when we are at the top of the web page because getBoundingClientRect() gives coordinates relatively from your viewport values
//   // window.scrollTo(s1coords.left, s1coords.top);
//   //  so how can we fix this problem, like this:
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // we made it but how to make smooth scroll, like this:
//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
//   // simply we passed an object in scrollTo function

//   // There is more easy and modern way of doing this and it is like this:
//   // section1.scrollIntoView({ behavior: 'smooth' });
//   // but this way only works for modern browsers
// });

// // h1.addEventListener('mouseenter', function () {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // });
// // There is another way:

// // h1.onmouseenter = function () {
// //   console.log('welcome to the otherway of writing eventListeners');
// // };
// // this has seen as oldschool way so developers mostly use addEventListener method. And also this has some disadvantages:
// // I can write addEventListener more than onces but if I write old school way more than onces it would override the code before the last one
// // when we create an eventListener we can also remove the eventListener

// //////////////Event Bubling-Capturing/////////////////

// // const randomInt = (min, max) =>
// //   Math.floor(Math.random() * (max - min + 1) + min);

// // const randomColor = () =>
// //   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // // const f = function (e) {
// // //   e.currentTarget.style.backgroundColor = randomColor();
// // //   console.log(e.target);
// // //   console.log(e.currentTarget);
// // //   e.stopPropagation();
// // //   // this has some disadvatages
// // // };
// // document.querySelector('.nav__link').addEventListener('click', function (e) {
// //   console.log('LINK');
// //   e.currentTarget.style.backgroundColor = randomColor();
// //   console.log(e.target);
// //   console.log(e.currentTarget);
// // });

// // document.querySelector('.nav__links').addEventListener('click', function (e) {
// //   console.log('LINK BOX');
// //   e.currentTarget.style.backgroundColor = randomColor();
// //   console.log(e.target);
// //   console.log(e.currentTarget);
// //   e.stopPropagation();
// // });

// // document.querySelector('.nav').addEventListener(
// //   'click',
// //   function (e) {
// //     console.log('NAV');
// //     e.currentTarget.style.backgroundColor = randomColor();
// //     console.log(e.target);
// //     console.log(e.currentTarget);
// //   },
// //   true
// //   // when we pass true here, it works trough opposite direction except one thing and that is you should click the link not the nav (ı mean the child element)
// // );

// // Going Downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// // querySelector would bring '.highlight' element no matter how deep it is
// // In addition there are other element that contains '.highlight' but other elements are not children of h1 so querySelector would not bring them to you

// // when we need only and directly childrens of an element
// console.log(h1.childNodes); // btw nodes can be anything
// // or child elements
// console.log(h1.children); //htmlcollection
// // we can acces first child element by using :
// h1.firstElementChild.style.color = 'white';
// // olsa last child element
// h1.lastElementChild.style.color = 'blue';

// // Going Upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement); // they are almost same

// // when we try to reach the parent element of an element we can use this method
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// // usage of this is prety similar to querySelector - it brings the closest parent element and brings it to you actually it is opposite of it

// // Going Sideways: siblings
// // we can only reach direct(next,prev) siblings for some reason
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// //  when we need all the sibling we use this
// console.log(h1.parentElement);

// const deneme = [...h1.parentElement.children].filter(el => el !== h1);
// console.log(deneme);
// // deneme.forEach(el => (el.style.transform = 'scale(1.5)'));

// // // simple differences
// // console.log(h1);
// // console.log(h1.querySelector('h1')); // null
// // console.log(h1.closest('h1')); // h1 itself

// DOM Lifecycle events

document.addEventListener('DOMContentLoaded', function (e) {
  // this event will be triggered when the html and js uploaded to a browser
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  // we can use load event only with the window object and this event will be triggered only when the all sources uploaded to a browser
  console.log('Page fully Loaded', e);
});
