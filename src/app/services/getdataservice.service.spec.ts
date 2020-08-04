import { TestBed } from '@angular/core/testing';

import { GetDataService } from './getdataservice.service';

describe('GetDataService', () => {
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataService);
  });

  /* Test to knows it has 4000 elements on service data */

  it('should create 4000 elements on json', () => {
    const service: GetDataService = TestBed.inject(GetDataService);
    const elements = service.getElements();
    expect(elements.length).toBe(4000);
  });

});

