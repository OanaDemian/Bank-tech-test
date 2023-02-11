const BankAccountView = require('./bankAccountView');
const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");

describe('BankAccountView', ()=>{
  it('prints the account statement', ()=> {
    const account = new BankAccountModel();
    const transaction = new TransactionModel("10/01/2023", "credit", 1000);
    account.newTransaction(transaction);
    const secondTransaction = new TransactionModel(
      "13-01-2023",
      "credit",
      2000
    );
    account.newTransaction(secondTransaction);
    const transactions = account.allTransactions();
    const view = new BankAccountView(account);
    expect(view.printStatement(transactions)).toEqual("10/01/2023 || 1000.00 || || 1000.00")
  })
});