import { TestBed } from '@angular/core/testing';

import { ProductSrvcService } from './product-srvc.service';

describe('ProductSrvcService', () => {
  let service: ProductSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
