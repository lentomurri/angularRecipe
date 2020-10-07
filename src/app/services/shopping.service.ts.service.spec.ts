import { TestBed } from '@angular/core/testing';

import { Shopping.Service.TsService } from './shopping.service.ts.service';

describe('Shopping.Service.TsService', () => {
  let service: Shopping.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shopping.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
