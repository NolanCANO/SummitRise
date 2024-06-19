import { TestBed } from '@angular/core/testing';

import { PriceSwitchService } from './price-switch.service';

describe('PriceSwitchService', () => {
  let service: PriceSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
