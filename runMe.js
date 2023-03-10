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
