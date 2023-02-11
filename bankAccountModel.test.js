const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");
describe("BankModel", () => {
  it("displays the ballance 1000 for: a client makes a deposit of 1000 on 10-01-2023", () => {
    const account = new BankAccountModel();
    const transaction = new TransactionModel("10/01/2023", "credit", 1000);
    account.newTransaction(transaction);
    expect(account.getBallance()).toEqual(1000);
  });

  it("displays the ballance 2500 for: a client makes a deposit of 1000 on 10-01-2023, And a deposit of 2000 on 13-01-2023, And a withdrawal of 500 on 14-01-2023", () => {
    const account = new BankAccountModel();
    const transaction = new TransactionModel("10-01-2023", "credit", 1000);
    account.newTransaction(transaction);
    expect(account.getBallance()).toEqual(1000);
    const secondTransaction = new TransactionModel(
      "13-01-2023",
      "credit",
      2000
    );
    account.newTransaction(secondTransaction);
    expect(account.getBallance()).toEqual(3000);
    const thirdTransaction = new TransactionModel("14-01-2023", "debit", 500);
    account.newTransaction(thirdTransaction);
    expect(account.getBallance()).toEqual(2500);
  });

  it("displays the array of all transations", () => {
    const account = new BankAccountModel();
    const transaction = new TransactionModel("10-01-2023", "credit", 1000);
    account.newTransaction(transaction);
    const secondTransaction = new TransactionModel(
      "13-01-2023",
      "credit",
      2000
    );
    account.newTransaction(secondTransaction);
    const thirdTransaction = new TransactionModel("14-01-2023", "debit", 500);
    account.newTransaction(thirdTransaction);
    expect(account.allTransactions().length).toEqual(3);
  });
});
