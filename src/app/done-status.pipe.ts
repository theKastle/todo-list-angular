import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "doneStatus"
})
export class DoneStatusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value === true ? "Done" : "In Progress";
  }
}
