import { Component, Input, OnInit } from '@angular/core';
import { GetdataserviceService } from '../services/getdataservice.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {

  @Input() elementData;
  @Input() filterOptions;

  constructor(private GetdataserviceService: GetdataserviceService) { }

  /* Init data */

  ngOnInit(): void {
    this.elementData = this.GetdataserviceService.getElements();
  }

  /* This function appears when image has error url and replace this image with another one */

  errorImage(event, name): any {
    event.target.src = '../assets/error-image.png';
  }

}
