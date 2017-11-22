import { AngularKarmaJasminePage } from './app.po';

describe('angular-karma-jasmine App', () => {
  let page: AngularKarmaJasminePage;

  beforeEach(() => {
    page = new AngularKarmaJasminePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
