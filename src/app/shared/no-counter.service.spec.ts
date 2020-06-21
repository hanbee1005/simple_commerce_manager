import { TestBed } from '@angular/core/testing';

import { NoCounterService } from './no-counter.service';

describe('NoCounterService', () => {
  let service: NoCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
