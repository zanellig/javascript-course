// 'use strict';

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');
// const elevationFormDiv = inputElevation.closest('.form__row');
// const cadenceFormDiv = inputCadence.closest('.form__row');

// let map;
// let mapEvent;

// /**
//  * @typedef {Object} WorkoutType
//  * @property {string} type - 'running' | 'cycling'
//  * @property {number[]} coords
//  * @property {number} distance
//  * @property {number} duration
//  * @property {Date} date
//  * @property {number} id
//  * @property {string} description
//  * @property {number} [elevation] - Optional
//  * @property {number} [cadence] - Optional
//  * @property {number} [pace] - Optional
//  * @property {number} [speed] - Optional
//  */

// /**
//  * @typedef {WorkoutType & {cadence: number, pace: number}} RunType
//  */

// /**
//  * @typedef {WorkoutType & {elevation: number, speed: number}} RideType
//  */

// /**
//  * @typedef {Object} BaseWorkoutParams
//  * @property {number[]} coords
//  * @property {number} distance
//  * @property {number} duration
//  * @property {number} specificValue - cadence | elevation
//  */
// class App {
//   #workouts = [];
//   #map;
//   #mapEvent;

//   constructor() {
//     this.#getPosition();
//     form.addEventListener('submit', this.#newWorkout.bind(this));
//     inputType.addEventListener('change', this.#toggleElevationField.bind(this));
//   }

//   #getPosition() {
//     navigator.geolocation?.getCurrentPosition(
//       this.#loadMap.bind(this),
//       function () {
//         alert(`Couldn't get your position.`);
//       }
//     );
//   }

//   #loadMap(position) {
//     const { latitude, longitude } = position.coords;
//     const coords = [latitude, longitude];
//     this.#map = L.map('map').setView(coords, 13);

//     L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//       attribution:
//         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     }).addTo(this.#map);

//     this.#checkHiddenElevation();
//     this.#map.on('click', this.#showForm.bind(this));
//   }

//   #showForm(mapE) {
//     this.#mapEvent = mapE;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   #toggleElevationField() {
//     if (inputType.value === 'running') {
//       elevationFormDiv.classList.add('form__row--hidden');
//       cadenceFormDiv.classList.remove('form__row--hidden');
//     } else {
//       elevationFormDiv.classList.remove('form__row--hidden');
//       cadenceFormDiv.classList.add('form__row--hidden');
//     }
//   }

//   #newWorkout(e) {
//     e.preventDefault();
//     /**
//      * @type {string} 'running' | 'cycling'
//      */
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;
//     /**
//      * @type {RunType | RideType}
//      */
//     let workout;

//     // Validations
//     if (type === 'running') {
//       const cadence = +inputCadence.value;
//       if (
//         !this.#validInput([distance, duration, cadence]) ||
//         !this.#allPositive([distance, duration, cadence])
//       ) {
//         return alert('Inputs must be positive numbers!');
//       }
//       workout = new Run({
//         coords: [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng],
//         distance,
//         duration,
//         specificValue: cadence,
//       });
//     }

//     if (type === 'cycling') {
//       const elevation = +inputElevation.value;
//       if (
//         !this.#validInput([distance, duration, elevation]) ||
//         !this.#allPositive([distance, duration])
//       ) {
//         return alert('Inputs must be positive numbers!');
//       }
//       workout = new Ride({
//         coords: [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng],
//         distance,
//         duration,
//         specificValue: elevation,
//       });
//     }

//     this.#workouts.push(workout);

//     this.#renderWorkoutMarker(workout);
//     this.#hideForm();
//   }
//   /**
//    * @param {WorkoutType} workout
//    */
//   #renderWorkoutMarker(workout) {
//     const workoutHTML = `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}${
//       workout.type === 'running' ? 'Running' : 'Cycling'
//     } on ${workout.date.toLocaleString('default', {
//       month: 'long',
//     })} ${workout.date.getDate()}
//     `;

//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 250,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         }).setContent(workoutHTML)
//       )
//       .openPopup();
//   }

//   /**
//    * @param {WorkoutType} workout
//    */
//   #renderWorkout(workout) {
//     const WORKOUT_DATE = `${workout.date.toLocaleString('default', {
//       month: 'long',
//     })} ${workout.date.getDate()}`;
//     const WORKOUT_TYPE_TITLE =
//       workout.type[0].toUpperCase() + workout.type.slice(1);

//     let html = `
//     <li class="workout workout--${workout.type}" data-id="${workout.id}">
//       <h2 class="workout__title">${WORKOUT_TYPE_TITLE} on ${WORKOUT_DATE}</h2>
//       <div class="workout__details">
//         <span class="workout__icon">${
//           workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
//         }</span>
//         <span class="workout__value">${workout.distance}</span>
//          <span class="workout__unit">km</span>
//       </div>
//       <div class="workout__details">
//         <span class="workout__icon">⏱</span>
//         <span class="workout__value">${workout.duration}</span>
//         <span class="workout__unit">min</span>
//       </div>
//       `;

//     if (workout.type === 'running') {
//       html += `
//         <div class="workout__details">
//           <span class="workout__icon">⚡️</span>
//           <span class="workout__value">${workout.pace.toFixed(1)}</span>
//           <span class="workout__unit">min/km</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">🦶🏼</span>
//           <span class="workout__value">${workout.cadence}</span>
//           <span class="workout__unit">spm</span>
//         </div>
//       </li>
//       `;
//     }

//     if (workout.type === 'cycling') {
//       html += `
//         <div class="workout__details">
//           <span class="workout__icon">⚡️</span>
//           <span class="workout__value">${workout.speed.toFixed(1)}</span>
//           <span class="workout__unit">km/h</span>
//         </div>
//         <div class="workout__details">
//           <span class="workout__icon">⛰</span>
//           <span class="workout__value">${workout.elevationGain}</span>
//           <span class="workout__unit">m</span>
//         </div>
//       </li>
//       `;
//     }
//   }

//   #hideForm() {
//     inputCadence.value =
//       inputDistance.value =
//       inputDuration.value =
//       inputElevation.value =
//         '';
//     form.classList.add('hidden');
//   }

// #checkHiddenElevation() {
//   if (
//     !elevationFormDiv.classList.contains('form__row--hidden') &&
//     inputType.value !== 'cycling'
//   ) {
//     elevationFormDiv.classList.add('form__row--hidden');
//   } else {
//     cadenceFormDiv.classList.add('form__row--hidden');
//   }
// }

//   #validInput(inputs) {
//     return inputs.every(inp => Number.isFinite(inp));
//   }

//   #allPositive(inputs) {
//     return inputs.every(inp => inp > 0);
//   }
// }

// const app = new App();

// /**
//  * @type {WorkoutType}
//  */
// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);

//   /**
//    * @param {number[]} coords
//    * @param {number} distance
//    * @param {number} duration
//    */
//   constructor(coords, distance, duration) {
//     this.coords = coords; // [lat,lng]
//     this.distance = distance; // km
//     this.duration = duration; // min
//   }

//   /**
//    * @memberof Workout
//    * @returns {string}
//    */
//   _setDescription() {
//     // prettier-ignore
//     const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

//     this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
//       months[this.date.getMonth()]
//     } ${this.date.getDate()}`;
//   }
// }

// /**
//  * @type {RunType}
//  */
// class Run extends Workout {
//   type = 'running';

//   /**
//    * @param {BaseWorkoutParams} params
//    */
//   constructor({ coords, distance, duration, specificValue }) {
//     super(coords, distance, duration);
//     this.cadence = specificValue;
//     this.#calcPace().toFixed(1);
//     this._setDescription();
//   }

//   #calcPace() {
//     this.pace = this.duration / this.distance;
//     return this.pace;
//   }
// }

// /**
//  * @type {RideType}
//  */
// class Ride extends Workout {
//   type = 'cycling';

//   /**
//    * @param {BaseWorkoutParams} params
//    */
//   constructor({ coords, distance, duration, specificValue }) {
//     super(coords, distance, duration);
//     this.elevation = specificValue;
//     this.#calcSpeed().toFixed(1);
//     this._setDescription();
//   }

//   #calcSpeed() {
//     this.speed = this.distance / (this.duration / 60);
//     return this.speed;
//   }
// }
