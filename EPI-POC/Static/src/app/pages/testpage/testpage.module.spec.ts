import { TestpageModule } from './testpage.module';

describe('TestpageModule', () => {
  let testpageModule: TestpageModule;

  beforeEach(() => {
    testpageModule = new TestpageModule();
  });

  it('should create an instance', () => {
    expect(testpageModule).toBeTruthy();
  });
});
