class BankAccountView {
  constructor(account) {
    this.account = account;
  }

  printTransactionAmountByType(transaction) {
    let printTransactionAmount = "";
    if (transaction.type === "credit") {
      printTransactionAmount = `|| ${transaction.amount.toFixed(2)} || ||`;
    } else {
      printTransactionAmount = `|| || ${transaction.amount.toFixed(2)} ||`;
    }
    return printTransactionAmount;
  }

  transationsArrayFormatedForDisplay(transactions) {
    return transactions
      .map((eachTransaction) => {
        return `${
          eachTransaction.transaction.date
        } ${this.printTransactionAmountByType(
          eachTransaction.transaction
        )} ${eachTransaction.updatedBallance.toFixed(2)}`;
      })
      .reverse();
  }

  printStatement(transactions) {
    console.log("date || credit || debit || balance");
    console.log(
      this.transationsArrayFormatedForDisplay(transactions).join("\n")
    );
  }
}

module.exports = BankAccountView;
