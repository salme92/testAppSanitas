import { Injectable } from '@angular/core';
import data from 'src/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class GetdataserviceService {

  constructor() { }

  getElements(): [] {
    return data;
}

}
