class BankAccountModel {
  constructor() {
    this.transactions = [];
    this.ballance = 0;
  }

  getBallance() {
    return this.ballance;
  }
  newTransaction(transaction) {
    this.#privateUpdateBallance(transaction);
    this.transactions.push({
      transaction: transaction,
      updatedBallance: this.ballance,
    });
  }

  #privateUpdateBallance(transaction) {
    if (transaction.type === "credit") {
      this.ballance += transaction.amount;
    } else {
      this.ballance -= transaction.amount;
    }
  }

  allTransactions() {
    return this.transactions;
  }
}

module.exports = BankAccountModel;
