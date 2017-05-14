import { CalculatorPage } from './app.po';

describe('calculator App', () => {
  let page: CalculatorPage;

  beforeEach(() => {
    page = new CalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
