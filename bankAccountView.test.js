const BankAccountView = require("./bankAccountView");
const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");

describe("BankAccountView", () => {
  it("displays an array of formated transactions", () => {
    const transaction = new TransactionModel("10/01/2023", "credit", 1000.0);
    const account = new BankAccountModel(transaction.amount);
    account.newTransaction(transaction);
    const secondTransaction = new TransactionModel(
      "13-01-2023",
      "credit",
      2000.0
    );
    account.newTransaction(secondTransaction);
    const thirdTransaction = new TransactionModel("14-01-2023", "debit", 500);
    account.newTransaction(thirdTransaction);
    const transactions = account.allTransactions();
    const view = new BankAccountView(account);
    expect(
      view.transationsArrayFormatedForDisplay(transactions, account)[0]
    ).toMatch("14-01-2023 || || 500.00 || 2500.00");
    expect(
      view.transationsArrayFormatedForDisplay(transactions, account)[1]
    ).toMatch("13-01-2023 || 2000.00 || || 3000.00");
    expect(
      view.transationsArrayFormatedForDisplay(transactions, account)[2]
    ).toMatch("10/01/2023 || 1000.00 || || 1000.00");
  });
});
