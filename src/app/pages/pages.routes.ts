import { Routes } from '@angular/router';

export const pageRoutes: Routes = [
  {
    path: 'todos',
    loadComponent: () => import('./todo/todo').then((c) => c.TodoComponent),
  },
  {
    path: 'todos/:todoId',
    loadComponent: () => import('./todo/todo-item/todo-item').then((c) => c.TodoItemComponent),
  },
];
