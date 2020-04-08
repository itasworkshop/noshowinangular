import { TestBed } from '@angular/core/testing';

import { NsserviceService } from './nsservice.service';

describe('NsserviceService', () => {
  let service: NsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
