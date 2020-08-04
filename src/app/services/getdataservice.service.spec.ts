import { TestBed } from '@angular/core/testing';

import { getDataService } from './getdataservice.service';

describe('getDataService', () => {
  let service: getDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getDataService);
  });

    /* Test to knows it has 4000 elements on service data */

    it('should create 4000 elements on json', () => {
      let service: getDataService = TestBed.get(getDataService);
      let elements = service.getElements();
      expect(elements.length).toBe(4000);
    });
    
});
