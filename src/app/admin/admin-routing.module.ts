import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { AddadminComponent } from './addadmin/addadmin.component';

const routes: Routes = [
  {
    path : '',
    redirectTo:'manageAdmin',
    pathMatch:'full'
  },
  {
    path:'manageAdmin',
    component:ManageAdminComponent   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
