import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

type Todo = {
  title: string;
  done?: boolean;
};

type TodoList = Todo[];

const initial = [
  {
    title: "Create mock data for todo list",
    done: true
  },
  {
    title: "Create child component to represent one todo item"
  },
  {
    title: "Use child component to render the list of todos"
  },
  {
    title: "Add field to each item to represent check status"
  },
  {
    title: "Render check status"
  },
  {
    title: "Add event emitter to each item to emit check event"
  }
];

@Injectable()
export class TodosServiceService {
  constructor() {}
  private todoStorage: TodoList = initial;
  private todoSource = new BehaviorSubject<TodoList>(this.todoStorage);
  todos = this.todoSource.asObservable();

  create(todo: Todo) {
    this.todoStorage.push(todo);
    this.todoSource.next([...this.todoStorage]);
  }

  remove(todo: Todo) {
    this.todoStorage = this.todoStorage.filter(
      item => item.title !== todo.title
    );
    this.todoSource.next([...this.todoStorage]);
  }

  markCompleted(todo: Todo) {
    todo.done = !todo.done;
    this.todoSource.next([...this.todoStorage]);
  }
}
