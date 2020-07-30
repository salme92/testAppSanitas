import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterId'
})
export class FilterIdPipe implements PipeTransform {

  transform(value: string, searchId: elementData) {
    return null;
  }

}
