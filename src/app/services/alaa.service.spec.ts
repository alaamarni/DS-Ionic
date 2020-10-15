import { TestBed } from '@angular/core/testing';

import { AlaaService } from './alaa.service';

describe('AlaaService', () => {
  let service: AlaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
