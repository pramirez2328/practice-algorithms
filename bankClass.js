class Bank {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  getBalance() {
    console.log(this.balance);
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds');
    } else {
      this.balance -= amount;
    }
  }
}

const bank = new Bank('Chase', 100);
bank.getBalance(); // 100
bank.deposit(50); // 150
bank.withdraw(100); // 50
bank.withdraw(100); // 'Insufficient funds'
bank.getBalance(); // 50
