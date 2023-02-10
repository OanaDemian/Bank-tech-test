const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");
describe("BankModel", () => {
  it("displays the ballance", () => {
    const account = new BankAccountModel();
    const transaction = new TransactionModel('10/01/2023', 'credit', 1000)
    account.newTransaction(transaction)
    expect(account.getBallance()).toEqual(1000);
  });
});
