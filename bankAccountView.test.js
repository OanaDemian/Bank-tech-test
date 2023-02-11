const BankAccountView = require('./bankAccountView');
const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");

describe('BankAccountView', ()=>{
  it('prints the account statement', ()=> {
    const transaction = new TransactionModel("10/01/2023", "credit", 1000);
    const account = new BankAccountModel();
    account.newTransaction(transaction);
    const transactions = account.allTransactions();
    const view = new BankAccountView(account);
    expect(view.printStatement(transactions)).toEqual("10/01/2023 || 1000.00 || || 1000.00")
  })
});