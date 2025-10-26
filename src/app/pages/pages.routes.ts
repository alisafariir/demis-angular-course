import { Routes } from '@angular/router';

export const pageRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./todo/todo').then(c => c.TodoComponent)
    },
    {
        path:'test',    
        loadComponent: () => import('./test/test').then(c => c.TestComponent)
    }
];
