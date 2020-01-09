import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DoneStatusPipe } from "./done-status.pipe";
import { HoverHighlightDirective } from "./hover-highlight.directive";
import { TodosServiceService } from "./todos-service.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FiltersPipe } from "./filters.pipe";
import { IntroComponent } from "./intro/intro.component";
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", component: IntroComponent },
      { path: "app", component: TodoAppComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoItemComponent,
    DoneStatusPipe,
    HoverHighlightDirective,
    FiltersPipe,
    TodoAppComponent,
    IntroComponent
  ],
  bootstrap: [AppComponent],
  providers: [TodosServiceService]
})
export class AppModule {}
