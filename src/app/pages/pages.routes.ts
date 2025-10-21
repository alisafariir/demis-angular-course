import { Routes } from '@angular/router';

export const pageRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./todo/todo').then(c => c.TodoComponent)
    }
];
