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

  printStatement(transactions) {
    console.log("date || credit || debit || balance");
    console.log(
      transactions
        .map((transaction) => {
          return `${transaction.date} ${this.printTransactionAmountByType(
            transaction
          )} ${this.account.getBallance().toFixed(2)}`;
        })
        .reverse()
        .join("\n")
    );
  }
}
module.exports = BankAccountView;
