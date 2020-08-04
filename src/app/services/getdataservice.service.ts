import { Injectable } from '@angular/core';
import elementData from 'src/assets/data.json';
import { ElementsList } from '../element-list/interface-element-list';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() {
  }

  /* Service function, I get data on json. I typed this elements with ElementList type for have same typed (number, string, string) */

  getElements(): ElementsList[] {
    return elementData;
}
}
