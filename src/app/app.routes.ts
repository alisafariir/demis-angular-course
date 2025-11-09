import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master.layout';
import { AuthComponent } from './layouts/auth-layout/auth.layout';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo/todos',
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./pages/rxjs/rxjs.component').then((c) => c.RXJSComponent),
  },
  {
    path: 'todo',
    component: MasterLayoutComponent,
    loadChildren: () => import('./pages/pages.routes').then((c) => c.pageRoutes),
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./pages/auth/auth.routes').then((c) => c.authRoutes),
  },
];
