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

    if (filterOptions) {
      // tslint:disable-next-line:no-shadowed-variable
      filterResult = filterResult.filter((filterResult) => filterResult.text.toString().includes(filterOptions));
    }

    return filterResult;

  }


}
