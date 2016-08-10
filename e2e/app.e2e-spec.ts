import { DutchTaxIncomeCalculator2Page } from './app.po';

describe('dutch-tax-income-calculator2 App', function() {
  let page: DutchTaxIncomeCalculator2Page;

  beforeEach(() => {
    page = new DutchTaxIncomeCalculator2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
