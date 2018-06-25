import { TestBed, inject } from '@angular/core/testing';

import { EpiserverService } from './episerver.service';

describe('EpiserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpiserverService]
    });
  });

  it('should be created', inject([EpiserverService], (service: EpiserverService) => {
    expect(service).toBeTruthy();
  }));
});
