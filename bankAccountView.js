class BankAccountView {
  constructor (account) {
    this.account = account;
  }
  printStatement(transactions){
    console.log("date || credit || debit || balance");
    return transactions.map(transaction => {
      return (`\n${transaction.date} || ${transaction.type} || ${transaction.type} || ${this.account.getBallance()}\n`);
    })
  }
  
}
module.exports = BankAccountView;