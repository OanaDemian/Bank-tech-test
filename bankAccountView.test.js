const BankAccountView = require('./bankAccountView');
const BankAccountModel = require('./bankAccountModel');
const TransactionModel = require('./transactionModel');
jest.mock('./bankAccountModel');
describe('BankAccountView', () => {
  beforeEach(() => {
    BankAccountModel.mockClear();
  });
  describe('transationsArrayFormatedForDisplay', () => {
    it('aligns credit to the left', () => {
      const mockBankAccountModel = new BankAccountModel();
      mockBankAccountModel.allTransactions.mockImplementation(() => [
        { transaction: new TransactionModel('10/01/2023', 'credit', 1000), updatedBallance: 1000 },
      ]);
      const view = new BankAccountView(mockBankAccountModel);
      expect(view.transationsArrayFormatedForDisplay(mockBankAccountModel.allTransactions())[0]).toMatch(
        '10/01/2023 || 1000.00 || || 1000.00'
      );
    });

    it('aligns debit to the right', () => {
      const mockBankAccountModel = new BankAccountModel();
      mockBankAccountModel.allTransactions.mockImplementation(() => [
        { transaction: new TransactionModel('10/01/2023', 'debit', 1000), updatedBallance: -1000 },
      ]);
      const view = new BankAccountView(mockBankAccountModel);
      expect(view.transationsArrayFormatedForDisplay(mockBankAccountModel.allTransactions())[0]).toMatch(
        '10/01/2023 || || 1000.00 || -1000.00'
      );
    });

    it('shows transactions in reverse chronological order', () => {
      //curently this is based on the order transactions are added to the array, not the date value.
      const mockBankAccountModel = new BankAccountModel();
      mockBankAccountModel.allTransactions.mockImplementation(() => [
        { transaction: new TransactionModel('10/01/2023', 'credit', 1000), updatedBallance: 1000 },
        { transaction: new TransactionModel('13/01/2023', 'credit', 2000), updatedBallance: 3000 },
        { transaction: new TransactionModel('14/01/2023', 'debit', 500), updatedBallance: 2500 },
      ]);
      const view = new BankAccountView(mockBankAccountModel);
      expect(view.transationsArrayFormatedForDisplay(mockBankAccountModel.allTransactions()).length).toEqual(3);
      expect(view.transationsArrayFormatedForDisplay(mockBankAccountModel.allTransactions())).toEqual([
        '14/01/2023 || || 500.00 || 2500.00',
        '13/01/2023 || 2000.00 || || 3000.00',
        '10/01/2023 || 1000.00 || || 1000.00',
      ]);
    });
  });
});
