import { Pipe, PipeTransform } from '@angular/core';
import {TodoComponent} from './todo/todo.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: TodoComponent[], searchText: string): any {
    if (!searchText) {
      return value;
    }

    searchText = searchText.toLowerCase();  // be nice and make case insensitive

    return value.filter( i => {
      return i.task.toLowerCase().includes(searchText);
    })
  }

}
