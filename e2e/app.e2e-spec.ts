import { EatWithFriendsPage } from './app.po';

describe('eat-with-friends App', () => {
  let page: EatWithFriendsPage;

  beforeEach(() => {
    page = new EatWithFriendsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
