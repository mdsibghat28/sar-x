import { TestBed } from '@angular/core/testing';

import { SpacebookingService } from './spacebooking.service';

describe('SpacebookingService', () => {
  let service: SpacebookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacebookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
