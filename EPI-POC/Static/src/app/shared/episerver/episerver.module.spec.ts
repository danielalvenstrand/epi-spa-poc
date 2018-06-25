import { EpiserverModule } from './episerver.module';

describe('EpiserverModule', () => {
  let episerverModule: EpiserverModule;

  beforeEach(() => {
    episerverModule = new EpiserverModule();
  });

  it('should create an instance', () => {
    expect(episerverModule).toBeTruthy();
  });
});
