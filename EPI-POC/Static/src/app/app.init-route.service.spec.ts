import { TestBed, inject } from '@angular/core/testing';

import { App.InitRouteService } from './app.init-route.service';

describe('App.InitRouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.InitRouteService]
    });
  });

  it('should be created', inject([App.InitRouteService], (service: App.InitRouteService) => {
    expect(service).toBeTruthy();
  }));
});
