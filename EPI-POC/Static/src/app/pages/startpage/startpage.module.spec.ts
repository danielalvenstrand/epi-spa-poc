import { StartpageModule } from './startpage.module';

describe('StartpageModule', () => {
  let startpageModule: StartpageModule;

  beforeEach(() => {
    startpageModule = new StartpageModule();
  });

  it('should create an instance', () => {
    expect(startpageModule).toBeTruthy();
  });
});
