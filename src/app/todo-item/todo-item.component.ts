import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() title: string;
  @Input() done: boolean;
  @Input() todo: { title: string; done: boolean };
  @Output() onCheck: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onItemClicked() {
    const emitValue = { title: this.title };
    this.onCheck.emit(emitValue);

    // ** Experiment **
    // We can even mutate parent data right inside child component !!
    // this.todo.done = !this.todo.done;
  }

  onTrashCanClicked() {
    this.onDelete.emit(this.todo);
  }
}
