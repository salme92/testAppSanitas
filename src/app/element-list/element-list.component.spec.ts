import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GetdataserviceService } from '../services/getdataservice.service'

import { ElementListComponent } from './element-list.component';

describe('ElementListComponent', () => {
  let component: ElementListComponent;
  let fixture: ComponentFixture<ElementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Test to knows it has 4000 elements on service data */

  it('should create 4000 elements on json', () => {
    let service: GetdataserviceService = TestBed.get(GetdataserviceService);
    let elements = service.getElements();
    expect(elements.length).toBe(4000);
  });
});
