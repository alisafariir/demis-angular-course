import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master.layout';
import { AuthComponent } from './layouts/auth-layout/auth.layout';

export const routes: Routes = [
    {
        path: '',
        component: MasterLayoutComponent,
        loadChildren: () => import('./pages/pages.routes').then(c => c.pageRoutes)
    },
    {
        path:'auth',
        component:AuthComponent,
        loadChildren:()=>import('./pages/auth/auth.routes').then(c=>c.authRoutes)
    }
];
