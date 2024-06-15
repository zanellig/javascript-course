class Car {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }
  accelerate() {
    if (this.currentSpeed < 322) {
      this.currentSpeed += 10;
      // Ensure the speed does not exceed the top speed
      this.currentSpeed = Math.min(this.currentSpeed, 322);
    }
  }
  brake() {
    if (this.currentSpeed > 0) {
      this.currentSpeed = Math.max(0, this.currentSpeed - 5); // Ensure speed does not go below 0
      console.log(`${this.make} is braking to ${this.currentSpeed}km/h.`);
    }
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
    if (this.charge > 0) {
      super.accelerate(); // Call the parent class's accelerate method
      this.charge--; // Decrease the charge by 1% on acceleration
      this.charge = this.validateCharge(this.charge); // Ensure the charge is within bounds
      console.log(
        `${this.make} going at ${this.currentSpeed}km/h, with a charge of ${this.charge}%.`
      );
    } else {
      console.log('The battery has run out and the car cannot accelerate.');
    }
  }

  status() {
    console.log(
      `${this.make} going at ${this.currentSpeed}km/h, with a charge of ${this.charge}%.`
    );
  }
}

const tesla = new EV('Tesla', 120, 23);

setInterval(() => {
  if (tesla.charge > 0) {
    tesla.accelerate();
  } else {
    tesla.brake();
    if (tesla.currentSpeed === 0) {
      // When the car comes to a complete stop
      console.log(
        'Battery is empty, and the car has stopped. Please recharge.'
      );
      // Optionally, you can simulate recharging here or take other actions.
    }
  }
}, 200);
