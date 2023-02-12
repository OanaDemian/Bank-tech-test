USER STORY

As a client, i would like to be able to deposit a sum of money from my account.

As a client, i would like to be able to withdraw a sum of money from my account.

As a client, when i print my account statement, i would like to be able to see the dates of the transations.

As a client, when i print my account statement, i would like to be able to see the transations on my account.

As a client, when i print my account statement, i would like to be able to see the ballance of the account.

EXAMPLE:

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

Data Model Example:

{'date': dd/mm/yy, 'type' : 'credit', 'amount' : 1000}

To be ran in Node - REPL Terminal

const BankAccountView = require("./bankAccountView");
const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");
const transaction = new TransactionModel("10/01/2023", "credit", 1000.0);
const account = new BankAccountModel();
account.newTransaction(transaction);
const transactions = account.allTransactions();
const view = new BankAccountView(account);
const secondTransaction = new TransactionModel("13-01-2023", "credit", 2000);
account.newTransaction(secondTransaction);
const thirdTransaction = new TransactionModel("14-01-2023", "debit", 500);
account.newTransaction(thirdTransaction);
view.printStatement(transactions);
