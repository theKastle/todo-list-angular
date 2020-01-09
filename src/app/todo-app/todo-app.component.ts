import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { TodosServiceService } from "../todos-service.service";

@Component({
  selector: "app-todo-app",
  templateUrl: "./todo-app.component.html",
  styleUrls: ["./todo-app.component.css"]
})
export class TodoAppComponent implements OnInit {
  name = "Angular";
  todoForm = new FormGroup({
    title: new FormControl()
  });
  todos: { title: string; done?: boolean }[];
  filterDoneOnly: boolean = false;
  showSummary: boolean = false;

  constructor(private todosService: TodosServiceService) {}

  ngOnInit() {
    this.todosService.todos.subscribe(todos => {
      this.todos = todos;
    });
  }

  onItemChecked(todo) {
    // ** Experiment **
    // const checkedTodo = this.todos.find(item => item.title === todo.title);
    // checkedTodo.done = !checkedTodo.done

    // This is interesting.
    // todo is PASSED BY REFERENCE
    this.todosService.markCompleted(todo);

    //  ** Experiment **
    // const anyOtherIndex = 2;
    // const anotherTodo = this.todos[anyOtherIndex];
    // anotherTodo.done = !anotherTodo.done;

    // ** Experiment **
    // console.log(this.todos)
    // setTimeout(() => {
    //   console.log(this.todos);
    // })
  }

  addTodo() {
    const title = this.todoForm.value.title;
    const todo = { title };
    this.todosService.create(todo);
    this.todoForm.reset();

    // This works also
    // this.todos = [...this.todos, todo];

    // Clearly Angular doesn't use referential equality check to diff VDom and render like React
    // Does that mean we don't have to follow those immutablity best practices (e.g use spreading operators, array's filter, slice, etc)
    // as strict as React?
  }

  removeTodo(todo) {
    this.todosService.remove(todo);
  }
}
