import { ChSwissrugbystatsAngular2Page } from './app.po';

describe('ch-swissrugbystats-angular2 App', function() {
  let page: ChSwissrugbystatsAngular2Page;

  beforeEach(() => {
    page = new ChSwissrugbystatsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
