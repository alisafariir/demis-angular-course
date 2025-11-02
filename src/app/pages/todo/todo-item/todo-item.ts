import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo } from '../../../types/todo.interface';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.html',
  providers: [TodoService],
})
export class TodoItemComponent implements OnInit {
  todoItem = signal<Todo>({});
  todoService = inject(TodoService);
  activedRoute = inject(ActivatedRoute);
  isLoading = signal(false);
  constructor() {}

  ngOnInit(): void {
    this.isLoading.set(true);
    this.activedRoute.params.subscribe((p: any) => {
      this.todoService.getTodoById(p.todoId).subscribe({
        next: (todo) => {
          this.todoItem.set(todo);
          this.isLoading.set(false);
        },
      });
    });
  }
}
