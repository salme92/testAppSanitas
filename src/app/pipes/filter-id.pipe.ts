import { Pipe, PipeTransform } from '@angular/core';
import { ElementsList } from '../element-list/interface-element-list';

@Pipe({
  name: 'filterId'
})
export class FilterIdPipe implements PipeTransform {

  transform(value: Array<ElementsList>, filterOptions): Array<ElementsList> {

    if (!filterOptions) {
      return value;
    }


    if (filterOptions) {
      const filterResult = value.filter((result = filterOptions) => result.text.toString().includes(filterOptions));
      return filterResult;
    }


  }


}
