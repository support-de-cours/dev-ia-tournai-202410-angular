import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { yesGuardGuard } from './yes-guard.guard';

describe('yesGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => yesGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
