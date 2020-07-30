import { Injectable } from '@angular/core';
import elementData from 'src/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class GetdataserviceService {

  constructor() {
  }

  getElements(): any[] {
    return elementData;
}

}