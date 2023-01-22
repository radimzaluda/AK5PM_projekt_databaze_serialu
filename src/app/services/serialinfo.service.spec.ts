import { TestBed } from '@angular/core/testing';

import { SerialinfoService } from './serialinfo.service';

describe('SerialinfoService', () => {
  let service: SerialinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerialinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
