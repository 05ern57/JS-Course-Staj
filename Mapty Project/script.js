'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Geolocation API

// navigator is an object that interacts with the API's that our browser provides. This API's make it possible the informations about users device and informations that device can provide
// getCurrentPosition() is take two callback parameters first succes and second is error
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       const map = L.map('map').setView([latitude, longitude], 13);
//     },
//     function () {
//       alert(`We couldn't get your location`);
//     }
//   );
// }

// Functions

// const changeVariables = function () {
//   if (inputType.value === 'cycling') {
//     inputElevation.parentElement.classList.remove('form__row--hidden');
//     inputCadence.parentElement.classList.add('form__row--hidden');
//   } else {
//     inputElevation.parentElement.classList.add('form__row--hidden');
//     inputCadence.parentElement.classList.remove('form__row--hidden');
//   }
// };

// Using A Third Party Library Leaflet

// let map, mapEvent;
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude, longitude } = position.coords;
//       const coords = [latitude, longitude];

//       map = L.map('map').setView(coords, 15);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       map.on('click', function (mapE) {
//         mapEvent = mapE;

//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert(`We couldn't get your position`);
//     }
//   );
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   inputDistance.value =
//     inputDuration.value =
//     inputCadence.value =
//     inputElevation.value =
//       '';
//   // Display Marker
//   console.log(mapEvent);
//   const { lat, lng } = mapEvent.latlng;
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         content: 'asdasdasdasdasdad',
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'cycling-popup',
//       })
//     )
//     .openPopup();
// });

// inputType.addEventListener('change', function () {
//   // if (inputType.value === 'running') {
//   //   inputCadence.parentElement.classList.remove('form__row--hidden');
//   //   inputElevation.parentElement.classList.add('form__row--hidden');
//   // } else {
//   //   inputCadence.parentElement.classList.add('form__row--hidden');
//   //   inputElevation.parentElement.classList.remove('form__row--hidden');
//   // }

//   // instead of this we can simply use this

//   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
// });

// Creating class for User Interface
// let map, mapEvent;
// class App {
//   // we want every thing that is related to our application in this class so
//   #map;
//   #mapEvent;

//   constructor() {
//     this._getPosition();

//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleEleventionField);
//   }

//   // Private Methods

//   _getPosition() {
//     // in here we set _loadMap method as a callback method and also we used this keyword inside of the callback method, but as we learned this keyword might not  mean the same meaning for _loadMap method as it means for the _getPosition method.The reason for that we can get errors in our console. we can solve this poblem by using bind-call-and_other
//     if (navigator.geolocation)
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert(`We couldn't get your position`);
//         }
//       );
//   }

//   _loadMap(position) {
//     const { latitude, longitude } = position.coords;
//     console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
//     const coords = [latitude, longitude];
//     console.log(this);
//     // (_getLoaction's callback) like wise here
//     this.#map = L.map('map').setView(coords, 15);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);
//   }

//   _showForm(mapE) {
//     this.#mapEvent = mapE;

//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _toggleEleventionField() {
//     // if (inputType.value === 'running') {
//     //   inputCadence.parentElement.classList.remove('form__row--hidden');
//     //   inputElevation.parentElement.classList.add('form__row--hidden');
//     // } else {
//     //   inputCadence.parentElement.classList.add('form__row--hidden');
//     //   inputElevation.parentElement.classList.remove('form__row--hidden');
//     // }

//     // instead of this we can simply use this

//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     e.preventDefault();
//     inputDistance.value =
//       inputDuration.value =
//       inputCadence.value =
//       inputElevation.value =
//         '';
//     // Display Marker
//     const { lat, lng } = this.#mapEvent.latlng;
//     L.marker([lat, lng])
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           content: 'asdasdasdasdasdad',
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: 'cycling-popup',
//         })
//       )
//       .openPopup();
//   }
// }

// I will write App class again

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

////////////////////////////////////////////////////////
// APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      // getCurrentPosition method takes two callback functions one for succes and error
      // succes function has position parameter
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`We couldn't get your location`);
        }
      );
  }

  _loadMap(position) {
    // this method recieved position paramater
    console.log(position);
    const { latitude, longitude } = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Idk why but map events doesn't work from other place that the map is created
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    // we used mapE because it is like event parameter but for map's functionlatity
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // if you right this code like this style functions you need to return the value because othervise code won't work
    // const validInputs = function (...inputs) {
    //   return inputs.every(inp => Number.isFinite(inp));
    // };

    // const allPositive = function (...inputs) {
    //   return inputs.every(inp => inp >= 0);
    // };

    // but with arrow functions if your code isn't more than one line then you don't need to return because it will return itself
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp >= 0);

    // *-get data from form
    const type = inputType.value;
    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    console.log(type);
    console.log(distance);
    console.log(duration);
    // *-If workout is running, create running object
    if (type === 'running') {
      const cadence = Number(inputCadence.value);
      // *-Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('buda olmazsa artık yeter');
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // *-If workout is cycling, create cycling object
    if (type === 'cycling') {
      const elevation = Number(inputElevation.value);
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert('çalış bire kape');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // *-Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    // *-Render workout on map as a marker
    this.renderWorkoutMarker(workout);

    // Clearing the input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Display marker
    // console.log(this.#mapEvent);

    // *-Render workout on list

    // *-Hide form on list and clear inputs
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          content: `you went ${workout.distance}`,
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .openPopup();
  }
}

const app = new App();
// app._getPosition();
// instead of calling this function here we can call it at constructor function because constructor funtion will be executed when the App object will be created
