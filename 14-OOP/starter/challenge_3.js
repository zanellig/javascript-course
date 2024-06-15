///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class Car {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }
  accelerate() {
    this.currentSpeed += 10;
  }
  brake() {
    this.currentSpeed -= 5;
  }
  status() {
    console.log(`${this.make} going at ${this.currentSpeed}km/h.`);
  }
}

class EV extends Car {
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);
    this.charge = this.validateCharge(charge);
  }

  validateCharge(charge) {
    // Ensure charge is between 0 and 100
    return Math.min(100, Math.max(0, charge));
  }

  chargeBattery(chargeTo) {
    // Add validation to ensure charge does not exceed 100% or drop below 0%
    this.charge = this.validateCharge(this.charge + chargeTo);
  }

  accelerate() {
    if (this.currentSpeed < 322) {
      // Check if the current speed is below the top speed before accelerating
      this.currentSpeed += 20;
      // Ensure the speed does not exceed the top speed
      this.currentSpeed = Math.min(this.currentSpeed, 322);
    } else {
      console.log('Already at top speed!');
    }
    this.charge--;
    // Validate charge after acceleration
    this.charge = this.validateCharge(this.charge);
  }

  status() {
    console.log(
      `${this.make} going at ${this.currentSpeed}km/h, with a charge of ${this.charge}%.`
    );
  }
}

const tesla = new EV('Tesla', 120, 23);

setInterval(() => {
  tesla.status();
  tesla.accelerate();
}, 1000);
