import { TestBed } from '@angular/core/testing';

import { SrvcInterceptorInterceptor } from './srvc-interceptor.interceptor';

describe('SrvcInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SrvcInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SrvcInterceptorInterceptor = TestBed.inject(SrvcInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
