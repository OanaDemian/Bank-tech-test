class BankAccountModel {
  constructor() {
    this.transactions = [];
    this.ballance = 0;
  }

  getBallance() {
    return this.ballance;
  }
  newTransaction(transaction) {
    if (transaction.type === 'credit') {
      this.ballance += transaction.amount
    } else {
      this.ballance -= transaction.amount
    }
  }
}

module.exports = BankAccountModel;
