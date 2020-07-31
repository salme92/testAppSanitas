import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterId'
})
export class FilterIdPipe implements PipeTransform {

  transform(value: any[], filterOptions): any {

    let filterResult = value;

    if (!filterOptions) {
      return value;
    }

    if (filterOptions ) {
      filterResult = filterResult.filter((value) => value.text.toString().includes(filterOptions));
    }

    return filterResult;

  }


}
