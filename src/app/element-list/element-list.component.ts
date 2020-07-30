import { Component, OnInit } from '@angular/core';
import { GetdataserviceService } from './services/getdataservice.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
