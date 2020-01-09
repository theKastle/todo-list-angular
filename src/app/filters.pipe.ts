import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filters"
})
export class FiltersPipe implements PipeTransform {
  transform(
    todoList: { tiltle: string; done?: boolean }[],
    doneOnly?: boolean
  ): any {
    return todoList.filter(todo => !doneOnly || todo.done === true);
  }
}
