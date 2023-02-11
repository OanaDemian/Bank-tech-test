const BankAccountView = require("./bankAccountView");
const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");

describe("BankAccountView", () => {
  it("displays an array of formated transactions", () => {
    const account = new BankAccountModel();
    account.newTransaction(new TransactionModel("10/01/2023", "credit", 1000));
    account.newTransaction(
      new TransactionModel("13-01-2023", "credit", 2000.0)
    );
    account.newTransaction(new TransactionModel("14-01-2023", "debit", 500));
    const transactions = account.allTransactions();
    const view = new BankAccountView(account);
    expect(
      view.transationsArrayFormatedForDisplay(transactions)[0]
    ).toMatch("14-01-2023 || || 500.00 || 2500.00");
    expect(
      view.transationsArrayFormatedForDisplay(transactions)[1]
    ).toMatch("13-01-2023 || 2000.00 || || 3000.00");
    expect(
      view.transationsArrayFormatedForDisplay(transactions)[2]
    ).toMatch("10/01/2023 || 1000.00 || || 1000.00");
  });
});
