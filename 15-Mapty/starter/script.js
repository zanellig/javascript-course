'use strict';

// DOM Elements
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const elevationFormDiv = inputElevation.closest('.form__row');
const cadenceFormDiv = inputCadence.closest('.form__row');

/**
 * @typedef {Object} WorkoutType
 * @property {string} type - 'running' | 'cycling'
 * @property {number[]} coords
 * @property {number} distance
 * @property {number} duration
 * @property {Date} date
 * @property {number} id
 * @property {string} description
 * @property {number} [elevation] - Optional
 * @property {number} [cadence] - Optional
 * @property {number} [pace] - Optional
 * @property {number} [speed] - Optional
 */

/**
 * @typedef {Object} BaseWorkoutParams
 * @property {number[]} coords
 * @property {number} distance
 * @property {number} duration
 * @property {number} specificValue - cadence for running, elevation for cycling
 */

/**
 * @typedef {WorkoutType & {cadence: number, pace: number}} RunType
 */

/**
 * @typedef {WorkoutType & {elevation: number, speed: number}} RideType
 */

class App {
  #workouts = [];
  #map;
  #mapEvent;
  #mapZoomLevel = 13;

  constructor() {
    if (App.instance) {
      return App.instance;
    }
    App.instance = this;
    // get local storage
    this.#getLocalStorage();

    // get user position
    this.#getPosition();

    // attach event listeners
    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField.bind(this));
    containerWorkouts.addEventListener('click', this.#moveToPopup.bind(this));
  }

  static getInstance() {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  #getPosition() {
    navigator.geolocation?.getCurrentPosition(this.#loadMap.bind(this), () =>
      alert(`Couldn't get your position.`)
    );
  }

  #loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    this.#map.on('click', this.#showForm.bind(this));

    for (const workout of this.#workouts) {
      this.#renderWorkoutMarker(workout);
    }
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    this.#checkHiddenElevation();
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #toggleElevationField() {
    if (inputType.value === 'running') {
      elevationFormDiv.classList.add('form__row--hidden');
      cadenceFormDiv.classList.remove('form__row--hidden');
    } else {
      elevationFormDiv.classList.remove('form__row--hidden');
      cadenceFormDiv.classList.add('form__row--hidden');
    }
  }

  #checkHiddenElevation() {
    if (inputType.value === 'cycling') {
      elevationFormDiv.classList.remove('form__row--hidden');
      cadenceFormDiv.classList.add('form__row--hidden');
    } else {
      elevationFormDiv.classList.add('form__row--hidden');
      cadenceFormDiv.classList.remove('form__row--hidden');
    }
  }

  #newWorkout(e) {
    e.preventDefault();

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const specificValue =
      type === 'running' ? +inputCadence.value : +inputElevation.value;

    if (
      !this.#validInput(distance, duration, specificValue) ||
      !this.#allPositive(distance, duration, specificValue)
    ) {
      return alert('Inputs must be positive numbers!');
    }

    const workoutParams = {
      coords: [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng],
      distance,
      duration,
      specificValue,
    };

    const workout = WorkoutFactory.createWorkout(type, workoutParams);

    this.#workouts.push(workout);

    this.#renderWorkoutMarker(workout);
    this.#renderWorkout(workout);
    this.#hideForm();
    this.#setLocalStorage();
  }

  #renderWorkoutMarker(workout) {
    const workoutHTML = `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${
      workout.description
    }`;

    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        }).setContent(workoutHTML)
      )
      .openPopup();
  }

  #renderWorkout(workout) {
    const workoutHTML = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
        ${
          workout.type === 'running'
            ? `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>`
            : `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">m</span>
          </div>`
        }
      </li>
    `;
    containerWorkouts.insertAdjacentHTML('beforeend', workoutHTML);
  }

  #moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    if (!workout) {
      console.error(`Workout with ID ${workoutEl.dataset.id} not found.`);
      return;
    }

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  #hideForm() {
    form.reset();
    form.classList.add('hidden');
  }

  #validInput(...inputs) {
    return inputs.every(inp => Number.isFinite(inp));
  }

  #allPositive(...inputs) {
    return inputs.every(inp => inp > 0);
  }

  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  #getLocalStorage() {
    /**
     * @type {Workout[] | null}
     */
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    for (const workout of data) {
      if (workout.type === 'running') {
        const run = new Run(workout);
        this.#workouts.push(run);
      }
      if (workout.type === 'cycling') {
        const ride = new Ride(workout);
        this.#workouts.push(ride);
      }
    }

    this.#workouts.forEach(work => {
      this.#renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

class Workout {
  date = new Date();
  id = generateUUID();

  constructor({ coords, distance, duration }) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription(type) {
    // prettier-ignore
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ];

    this.description = `${type[0].toUpperCase()}${type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Run extends Workout {
  type = 'running';

  constructor(params) {
    super(params);
    this.cadence = params.specificValue;
    this.calcPace();
    this._setDescription(this.type);
  }

  calcPace() {
    this.pace = this.duration / this.distance;
  }
}

class Ride extends Workout {
  type = 'cycling';

  constructor(params) {
    super(params);
    this.elevation = params.specificValue;
    this.calcSpeed();
    this._setDescription(this.type);
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
  }
}

class WorkoutFactory {
  static createWorkout(type, params) {
    switch (type) {
      case 'running':
        return new Run(params);
      case 'cycling':
        return new Ride(params);
      default:
        throw new Error('Unknown workout type');
    }
  }
}

const app = App.getInstance();

function generateUUID() {
  // Public Domain/MIT
  let d = new Date().getTime(); // Timestamp
  let d2 = (performance && performance.now && performance.now() * 1000) || 0; // Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; // random number between 0 and 16
    if (d > 0) {
      // Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      // Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}
