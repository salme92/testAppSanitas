import { Component, Input, OnInit } from '@angular/core';
import { getDataService } from '../services/getdataservice.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {

  @Input() elementData;
  @Input() filterOptions;

  filter_title = 'Filter Example';

  constructor(private getDataService: getDataService) { }

  ngOnInit(): void {
    this.elementData = this.getDataService.getElements();
  }

  /* This function appears when image has error url and replace this image with another one */

  errorImage(event, name): void {
    event.target.src = '../assets/error-image.png';
  }

}
