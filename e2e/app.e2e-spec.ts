import { Angular4UnitTestPage } from './app.po';

describe('angular4-unit-test App', () => {
  let page: Angular4UnitTestPage;

  beforeEach(() => {
    page = new Angular4UnitTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
