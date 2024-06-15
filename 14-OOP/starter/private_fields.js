function test() {
  class BankAccount {
    // locale = navigator.language;

    #movements = [];

    constructor(username) {
      this.username = username;

      console.log(`Thanks for opening an account, ${username}.`);
    }

    get movements() {
      return this.#movements;
    }
  }

  const gonzalo = new BankAccount('gonzalo.zanelli');
}
function test2() {
  class BankAccount {
    // Private field for movements
    #movements = [];

    constructor(username) {
      this.username = username;
      console.log(`Thanks for opening an account, ${username}.`);
    }

    // Getter for movements - returns a copy of the movements array
    get movements() {
      return [...this.#movements];
    }

    // Public method to add a deposit
    addDeposit(amount) {
      if (typeof amount === 'number' && amount > 0) {
        this.#movements.push(amount);
        console.log(`Deposit of ${amount} added.`);
      } else {
        console.log('Invalid deposit amount. Please enter a positive number.');
      }
    }

    // Public method to add a withdrawal
    addWithdrawal(amount) {
      if (typeof amount === 'number' && amount > 0) {
        // Ensure withdrawal amount does not exceed the current balance
        const currentBalance = this.#movements.reduce(
          (acc, curr) => acc + curr,
          0
        );
        if (amount <= currentBalance) {
          this.#movements.push(-amount); // Withdrawals are represented as negative amounts
          console.log(`Withdrawal of ${amount} processed.`);
        } else {
          console.log(
            'Withdrawal amount exceeds the current balance. Transaction cancelled.'
          );
        }
      } else {
        console.log(
          'Invalid withdrawal amount. Please enter a positive number.'
        );
      }
    }
  }

  const gonzalo = new BankAccount('gonzalo.zanelli');

  // Example usage
  gonzalo.addDeposit(100);
  gonzalo.addWithdrawal(50);
  gonzalo.addDeposit(200);
  gonzalo.addWithdrawal(25);

  console.log(gonzalo.movements); // Should log [100, -50, 200, -25]
}
function test3() {
  class BankAccount {
    #movements = [];
    #balance = 0;

    constructor(username) {
      this.username = username;
      console.log(`Thanks for opening an account, ${username}.`);
    }

    get balance() {
      return this.#balance;
    }

    // Method to add a deposit
    addDeposit(amount) {
      if (this.#validateAmount(amount)) {
        this.#movements.push(amount);
        this.#balance += amount;
        console.log(
          `Deposit of ${amount} added. New balance is ${this.#balance}.`
        );
      }
    }

    // Method to add a withdrawal
    addWithdrawal(amount) {
      if (this.#validateAmount(amount) && this.#hasSufficientFunds(amount)) {
        this.#movements.push(-amount);
        this.#balance -= amount;
        console.log(
          `Withdrawal of ${amount} processed. New balance is ${this.#balance}.`
        );
      } else {
        console.log(
          `Withdrawal of ${amount} could not be processed due to insufficient funds.`
        );
      }
    }

    // Private method to validate transaction amount
    #validateAmount(amount) {
      if (typeof amount === 'number' && amount > 0) {
        return true;
      } else {
        console.log('Transaction failed: Amount must be a positive number.');
        return false;
      }
    }

    // Private method to check for sufficient funds
    #hasSufficientFunds(amount) {
      return this.#balance >= amount;
    }
  }

  // Example usage
  const gonzalo = new BankAccount('gonzalo.zanelli');
  gonzalo.addDeposit(500);
  gonzalo.addWithdrawal(200);
  gonzalo.addWithdrawal(400); // This should show an insufficient funds message.
}
// run in browser
function private_methods() {
  class Account {
    // mission-critical
    #movements = [0];
    #loans = [0];

    constructor(username) {
      this.username = username;
      console.log(`Created account for ${username}`);
    }

    // private methods
    static #approveLoan() {
      console.log('Loan approved');
      return true;
    }
    static #rejectLoan() {
      console.log('Loan rejected');
      return false;
    }
    #authLoan(ammountRequested) {
      if (ammountRequested * 0.5 > this.balance) {
        return Account.#rejectLoan();
      } else {
        return Account.#approveLoan();
      }
    }

    #deposit(ammount) {
      if (typeof ammount === 'number') this.#movements.push(ammount);
    }

    // public interface
    get movements() {
      return [...this.#movements];
    }

    get balance() {
      return this.movements.reduce((acc, cur) => acc + cur);
    }

    get loans() {
      return [...this.#loans];
    }

    get debt() {
      return this.loans.reduce((acc, cur) => acc + cur);
    }

    // user methods
    requestLoan(ammount) {
      if (this.#authLoan(ammount)) {
        this.#loans.push(ammount);
        this.#deposit(ammount);
      }
    }
  }

  const gonzalo = new Account('gonzalo.zanelli');
}

private_methods();
