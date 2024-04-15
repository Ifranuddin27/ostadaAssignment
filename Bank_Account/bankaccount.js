class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}`);
      } else {
        console.log("Invalid deposit amount");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
        } else {
          console.log("Insufficient funds");
        }
      } else {
        console.log("Invalid withdrawal amount");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  const account1 = new BankAccount(1001, "John Doe", 500);
  const account2 = new BankAccount(1002, "Jane Smith", 1000);
  
  account1.displayAccountInfo();
  account1.deposit(200);
  account1.withdraw(50);
  account1.withdraw(700); 
  console.log("Current balance:", account1.getBalance());
  
  
  account2.displayAccountInfo();
  account2.deposit(300);
  account2.withdraw(200);
  console.log("Current balance:", account2.getBalance());
  