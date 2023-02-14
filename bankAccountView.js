class BankAccountView {
  constructor(account) {
    this.account = account;
  }

  printTransactionAmountByType(transaction) {
    if (transaction.type === 'credit') {
      return `|| ${transaction.amount.toFixed(2)} || ||`;
    } else {
      return `|| || ${transaction.amount.toFixed(2)} ||`;
    }
  }

  transationsArrayFormatedForDisplay(transactions) {
    return transactions
      .map((ballanceUpdate) =>
        [
          ballanceUpdate.transaction.date,
          this.printTransactionAmountByType(ballanceUpdate.transaction),
          ballanceUpdate.updatedBallance.toFixed(2),
        ].join(' ')
      )
      .reverse();
  }

  printStatement(transactions) {
    console.log('date || credit || debit || balance');
    console.log(this.transationsArrayFormatedForDisplay(transactions).join('\n'));
  }
}

module.exports = BankAccountView;
