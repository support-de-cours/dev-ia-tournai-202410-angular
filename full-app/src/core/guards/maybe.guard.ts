import { CanActivateFn } from '@angular/router';

export const maybeGuard: CanActivateFn = (route, state) => {
  const result = Math.random() >= 0.5;
  console.log('MayBe Guard', result);

  return result;
};
