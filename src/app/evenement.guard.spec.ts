import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { EvenementsGuard } from './evenement.guard';

describe('EvenementsGuard', () => {
      let guard: EvenementsGuard;
      

  beforeEach(() => {
    TestBed.configureTestingModule({});
      guard = TestBed.inject(EvenementsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
