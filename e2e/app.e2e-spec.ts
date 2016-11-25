import { LolreudxPage } from './app.po';

describe('lolreudx App', function() {
  let page: LolreudxPage;

  beforeEach(() => {
    page = new LolreudxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
