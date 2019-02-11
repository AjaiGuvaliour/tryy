import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './sharedModule/Services/auth.guard';


const routes: Routes = [
    {
        path:'',
        loadChildren:'./login/login.module#LoginModule',
    },
    {
        path:'main',
        component:MainComponent,
        canActivate:[AuthGuard],
        
        children:[
            {
                path:'department',
                loadChildren:'./department/department.module#DepartmentModule',
            },
            {
                path:'admin',
                loadChildren:'./admin/admin.module#AdminModule',
            }
        ]

    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})

export class AppRouting{}