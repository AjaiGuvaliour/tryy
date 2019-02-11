import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { CoreModule } from '../sharedModule/core.module';

@NgModule({
  declarations: [ManageAdminComponent, AddadminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
