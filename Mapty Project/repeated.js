'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  // we will use this at other classes we should't set as private
  date = new Date();
  id = Date.now();

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  // for example we will not call this method at Workout constructor, instead we will call this method at Running's and Cycling's constructors
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()} `;
  }
}

class Running extends Workout {
  // we set type because we will use this while we are creating the description()
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this._calcPace();
    this._setDescription();
  }

  _calcPace() {
    this.pace = (this.distance / this.duration).toFixed(1);
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this._calcSpeed();
    this._setDescription();
  }

  _calcSpeed() {
    // prettier-ignore
    return this.speed = (this.distance / (this.duration / 60)).toFixed(1);
  }
}

class App {
  #map;
  #mapZoom = 15;
  #mapEvent;
  #workout;
  #workouts = [];

  constructor() {
    this._getPosition();
    inputType.addEventListener('change', this._toggleElevationField);

    form.addEventListener('submit', this._newWorkout.bind(this));
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    // getCurrentPosition has 2 args one succes one error
    // succes has position parameter that can reach the coords of user
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this));
  }

  _loadMap(position) {
    console.log(position);
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoom);
    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}',
      {
        minZoom: 0,
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png',
      }
    ).addTo(this.#map);

    // we can not use mapEvents outside of the where map been created
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    // showing the form everytime when the click happens
    this.#mapEvent = mapE;
    console.log(this.#mapEvent);
    form.classList.add('hidden');
    setTimeout(function () {
      form.classList.remove('hidden');
    }, 100);

    inputDistance.focus();
  }

  // we use 'change' event this is important
  _toggleElevationField(e) {
    if (e.target.value === 'running') {
      inputElevation.parentElement.classList.toggle('form__row--hidden');
      inputCadence.parentElement.classList.toggle('form__row--hidden');
    } else {
      inputElevation.parentElement.classList.toggle('form__row--hidden');
      inputCadence.parentElement.classList.toggle('form__row--hidden');
    }
  }

  _hideForm() {
    // cleaning the form
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // hiding the form
    form.classList.add('hidden');
    form.style.display = 'none';

    setTimeout(function () {
      form.style.display = 'grid';
    }, 100);
  }

  _newWorkout(e) {
    e.preventDefault();
    // creating supporting functions
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // storing the values
    const type = inputType.value;
    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);
    const cadence = Number(inputCadence.value);
    const elevationGain = Number(inputElevation.value);

    // taking the coords
    const { lat, lng } = this.#mapEvent.latlng;
    const coords = [lat, lng];

    // Creating the object

    if (type === 'running') {
      // checking if the values are valid (guard clouse)
      if (
        // we can not use this if statement as single guard clause because there is cadence and elecationGaing
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert(
          'Values that you entered are not valid you should enter positive Numbers'
        );

      this.#workout = new Running(coords, distance, duration, cadence);
    }

    if (type === 'cycling') {
      // checking if the values are valid (guard clouse)
      if (
        !validInputs(distance, duration, elevationGain) ||
        !allPositive(distance, duration, elevationGain)
      )
        return alert(
          'Values that you entered are not valid you should enter positive Numbers'
        );

      this.#workout = new Cycling(coords, distance, duration, elevationGain);
    }

    // adding workout to workouts array
    this.#workouts.push(this.#workout);

    //  Rendering the Marker on Map
    this._renderWorkoutMarker(this.#workout);

    // Rendering workout on list
    this._renderWorkout(this.#workout);

    // Hiding and cleaning the form the from
    this._hideForm();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .bindPopup(
        L.popup({
          content: `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${
            workout.description
          }`,
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `workout--${workout.type}`,
        })
      )
      .addTo(this.#map)
      .openPopup();
    // you must add openPopup method at the and because otherwise you are trying to open popup before it is been added to map
  }

  _renderWorkout(workout) {
    if (!workout) return;
    const filter = workout.type === 'running' ? true : false;
    // the element that we will add to list
    const html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${filter ? '🏃‍♂️' : '🚴‍♀️'}</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${
            filter ? workout.pace : workout.speed
          }</span>
          <span class="workout__unit">${filter ? 'min/km' : 'min'}</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">${filter ? '🦶🏼' : '⛰'}</span>
          <span class="workout__value">${
            filter ? workout.cadence : workout.elevationGain
          }</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    if (!e.target.closest('.workout')) return;
    const li = e.target.closest('.workout');
    // console.log(li.dataset.id);
    const obj = this.#workouts.find(work => work.id === Number(li.dataset.id));
    console.log(obj);
  }
}

const app = new App();
