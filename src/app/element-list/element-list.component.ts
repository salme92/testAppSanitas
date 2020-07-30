import { Component, Input, OnInit } from '@angular/core';
import { GetdataserviceService } from '../services/getdataservice.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {

  @Input() elementData: any[];
  @Input() searchId : String ;

  constructor(private GetdataserviceService: GetdataserviceService) { }

  ngOnInit(): void {
    this.elementData = this.GetdataserviceService.getElements();
  }

  errorImage(event, name): any {
  //  event.target.src = '../assets/error-image.png';
  }

}
