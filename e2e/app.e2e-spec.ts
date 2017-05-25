import { CarAveragePage } from './app.po';

describe('car-average App', () => {
  let page: CarAveragePage;

  beforeEach(() => {
    page = new CarAveragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
