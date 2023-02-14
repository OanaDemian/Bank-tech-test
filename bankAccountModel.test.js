const BankAccountModel = require('./bankAccountModel');
const TransactionModel = require('./transactionModel');
describe('BankModel', () => {
  it('has a starting ballance of 0', () => {
    const account = new BankAccountModel();
    expect(account.getBallance()).toEqual(0);
  });

  it('increases ballance when account is credited rounded to two decimal places', () => {
    const account = new BankAccountModel();
    account.newTransaction(new TransactionModel('10/01/2023', 'credit', 1000));
    expect(account.getBallance()).toEqual(1000.0);
  });

  it('decreases ballance when account is debited rounded to two decimal places', () => {
    const account = new BankAccountModel();
    account.newTransaction(new TransactionModel('10/01/2023', 'debit', 1000));
    expect(account.getBallance()).toEqual(-1000.0);
  });

  it('records each transaction and what the account ballance is updated to', () => {
    const account = new BankAccountModel();
    const transactionOne = new TransactionModel('10-01-2023', 'credit', 1000);
    const transactionTwo = new TransactionModel('13-01-2023', 'credit', 2000);
    const transactionThree = new TransactionModel('14-01-2023', 'debit', 500);

    account.newTransaction(transactionOne);
    account.newTransaction(transactionTwo);
    account.newTransaction(transactionThree);

    expect(account.allTransactions().length).toEqual(3);
    expect(account.allTransactions()[0].updatedBallance).toEqual(1000);
    expect(account.allTransactions()[1].updatedBallance).toEqual(3000);
    expect(account.allTransactions()[2].updatedBallance).toEqual(2500);
    expect(account.allTransactions()[0].transaction).toEqual(transactionOne);
    expect(account.allTransactions()[1].transaction).toEqual(transactionTwo);
    expect(account.allTransactions()[2].transaction).toEqual(transactionThree);
  });
});
