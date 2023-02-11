class BankAccountModel {
  constructor() {
    this.transactions = [];
    this.ballance = 0;
  }

  getBallance() {
    return this.ballance;
  }
  newTransaction(transaction) {
    if (transaction.type === "credit") {
      this.ballance += transaction.amount;
      this.transactions.push({
        transaction: transaction,
        updatedBallance: this.ballance,
      });
    } else {
      this.ballance -= transaction.amount;
      this.transactions.push({
        transaction: transaction,
        updatedBallance: this.ballance,
      });
    }
  }

  allTransactions() {
    return this.transactions;
  }
}

module.exports = BankAccountModel;
