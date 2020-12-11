import { TestBed } from '@angular/core/testing';

import { RetourService } from './retour.service';

describe('RetourService', () => {
  let service: RetourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
