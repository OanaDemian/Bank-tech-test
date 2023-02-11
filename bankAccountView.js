class BankAccountView {
  constructor (account) {
    this.account = account;
  }
  printStatement(transactions) {
    
    console.log("date || credit || debit || balance");
    return transactions.map(transaction => {
      let printTransactionAmount = "";
      if (transaction.type === 'credit') {
         printTransactionAmount = `|| ${transaction.amount} || ||`
     } else {
         printTransactionAmount = `|| || ${transaction.amount} ||`  
     }
      return (`\n${transaction.date}${printTransactionAmount}${this.account.getBallance()}\n`);
    })
  }
  // printTransactionAmountByType(transaction) {
  //   if (transaction.type === 'credit') {
  //     return `|| ${transaction.amount} || ||`
  //  } else {
  //     return  `|| || ${transaction.amount} ||`  
  //  }
  // }
}
module.exports = BankAccountView;