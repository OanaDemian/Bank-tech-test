# Bank Tech Test

 This app enables interaction with the code via Node REPL.
 It allows the user to make deposits, withdrawals and print statements. A bank statement includes a history of transactions. Each transaction has a date, an amount, and an updated ballance.

### Dependencies

You will need Node installed. To install dependencies, run `npm install`
To run tests, run `npm test`
To see test coverage, run `jest --coverage`
To format the code, run `npx prettier --write .`

### How to run Bank Tech Test

REPL can be started by simply running `node` on shell/console without any arguments. More on REPL commnands here: https://www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm

You will see the REPL Command prompt `>` where you can type any Node.js command.

Node REPL supports multiline expression.

Check the following code in action:

```js
const BankAccountView = require('./bankAccountView');
const BankAccountModel = require('./bankAccountModel');
const TransactionModel = require('./transactionModel');
const transaction = new TransactionModel('10/01/2023', 'credit', 1000.0);
const account = new BankAccountModel();
account.newTransaction(transaction);
const transactions = account.allTransactions();
const view = new BankAccountView(account);
const secondTransaction = new TransactionModel('13-01-2023', 'credit', 2000);
account.newTransaction(secondTransaction);
const thirdTransaction = new TransactionModel('14-01-2023', 'debit', 500);
account.newTransaction(thirdTransaction);
view.printStatement(transactions);
```

date || credit || debit || balance
14-01-2023 || || 500.00 || 2500.00
13-01-2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
undefined

>

Alternatively you can simply run: `node runMe.js` which will do the same as the above.


![image](./screenshot.png)

### Code Structure
    
I started by creating the data models: 
     - the transactionModel class: with three instance properties inside the constructor: a date, a type and an amount. This class does not contain logic.
     - the bankAccountModel class: with two instance properties inside the constructor: an array of transactions, instances of transactionModel and a ballance. Here we handle making a new transaction, and getting the list of transations, each with an updated the ballance. 
Then I created the bankAccountView class: with one instance property inside the constructor which is an instance of the banckAccountModel. Here we handle formating the array of transation objects for display as well as  printing the bank account statement.

### Approach

  After creating the data models for transaction and account, I tried to use TDD to guide my development process and GIT to document this process. I also refactored my code and created separate methods which improved readability. For example, in bankAccountView, one method formats the transactions and another method prints them. In bankAccountModel, i created a private method which updates the ballance in accordance to the transaction type.

  
