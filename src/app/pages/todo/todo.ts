import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from './todo.service';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { Todo } from '../../types/todo.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  providers: [TodoService],
  imports: [MatListModule],
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  router = inject(Router);

  todoList = signal<Todo[]>([]);
  message = signal<string[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe({
      next: (value: any) => {
        this.todoList.update((prevValues) => {
          return [...prevValues, ...value];
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  handleItemClick(e: Todo) {
    this.router.navigate([`/todo/todos/`, e.id]);
  }
}
