import { TestBed } from '@angular/core/testing';

import { Route3serviceService } from './route3service.service';

describe('Route3serviceService', () => {
  let service: Route3serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Route3serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
