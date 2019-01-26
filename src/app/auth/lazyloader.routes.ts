import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'material-widgets', loadChildren: '../material-widgets/material-widgets.module#MaterialWidgetsModule' },
        { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
 
    ]
}];
