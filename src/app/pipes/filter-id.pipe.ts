import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterId'
})
export class FilterIdPipe implements PipeTransform {

  transform(value: any[], filterOptions): any {

    let filterResult = value;

    /* If filterOptions isn't true, it returns value data with all elements */

    if (!filterOptions) {
      return value;
    }

    /* Get data and compare, transform this one like string and compare with includes it has same value between those values*/

    if (filterOptions ) {
      filterResult = filterResult.filter((filterResult) => filterResult.text.toString().includes(filterOptions));
    }

    return filterResult;

  }


}
