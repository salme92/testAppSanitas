import { TestBed } from '@angular/core/testing';

import { GetdataserviceService } from './getdataservice.service';

describe('GetdataserviceService', () => {
  let service: GetdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdataserviceService);
  });

    /* Test to knows it has 4000 elements on service data */

    it('should create 4000 elements on json', () => {
      let service: GetdataserviceService = TestBed.get(GetdataserviceService);
      let elements = service.getElements();
      expect(elements.length).toBe(4000);
    });
    
});
