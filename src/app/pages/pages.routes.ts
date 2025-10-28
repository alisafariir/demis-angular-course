import { Routes } from '@angular/router';

export const pageRoutes: Routes = [
    
    {
        path: 'todos',
        loadComponent: () => import('./todo/todo').then(c => c.TodoComponent)
    },
    {
        path:'todos/:id',    
        loadComponent: () => import('./todo-item/todo-item').then(c => c.TodoItemComponent)
    }
];
