const BankAccountView = require("./bankAccountView");
const BankAccountModel = require("./bankAccountModel");
const TransactionModel = require("./transactionModel");

describe("BankAccountView", () => {
  describe("transationsArrayFormatedForDisplay", () => {
    it("aligns credit to the left", () => {
      const account = new BankAccountModel();
      account.newTransaction(new TransactionModel("10/01/2023", "credit", 1000));
      const view = new BankAccountView(account);
      expect(view.transationsArrayFormatedForDisplay(account.allTransactions())[0]).toMatch(
        "10/01/2023 || 1000.00 || || 1000.00"
      );
    });

    it("aligns debit to the right", () => {
      const account = new BankAccountModel();
      account.newTransaction(new TransactionModel("10/01/2023", "debit", 1000));
      const view = new BankAccountView(account);
      expect(view.transationsArrayFormatedForDisplay(account.allTransactions())[0]).toMatch(
        "10/01/2023 || || 1000.00 || -1000.00"
      );
    });

    it("shows transactions in reverse chronological order", () => {
      //curently this is based on the order transactions are added to the array, not the date value.
      const account = new BankAccountModel();
      account.newTransaction(new TransactionModel("10/01/2023", "credit", 1000));
      account.newTransaction(new TransactionModel("13-01-2023", "credit", 2000.0));
      account.newTransaction(new TransactionModel("14-01-2023", "debit", 500));
      const view = new BankAccountView(account);
      expect(view.transationsArrayFormatedForDisplay(account.allTransactions())).toEqual([
        "14-01-2023 || || 500.00 || 2500.00",
        "13-01-2023 || 2000.00 || || 3000.00",
        "10/01/2023 || 1000.00 || || 1000.00",
      ]);
    });
  });
});
