import { TestBed, inject } from '@angular/core/testing';

import { InitRouteService } from './app.init-route.service';

describe('App.InitRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitRouteService]
    });
  });

  it('should be created', inject([InitRouteService], (service: InitRouteService) => {
    expect(service).toBeTruthy();
  }));
});
