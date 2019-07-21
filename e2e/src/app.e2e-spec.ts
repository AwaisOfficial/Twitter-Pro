import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Welcome to Twitter-Pro!');
=======
    expect(page.getTitleText()).toEqual('Welcome to TwitterPro!');
>>>>>>> 66b78e075f24b34e9fe2703a95eefa3c11532bc5
  });
});
