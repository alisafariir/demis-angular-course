import { Routes } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master.layout';

export const routes: Routes = [
    {
        path: '',
        component: MasterLayoutComponent,
        loadChildren: () => import('./pages/pages.routes').then(c => c.pageRoutes)
    }
];
