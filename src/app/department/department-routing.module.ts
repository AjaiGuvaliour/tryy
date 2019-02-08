import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { ManageDepartmentComponent } from './department/manage-department/manage-department.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { ManageStudentComponent } from './student/manage-student/manage-student.component';
import { ManageStaffComponent } from './staff/manage-staff/manage-staff.component';
import { AuthGuard } from '../sharedModule/Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'manageDepartment',pathMatch:'full'
  },
  {
    path: 'addDepartment',
    component: AddDepartmentComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'addStaff',
    component: AddStaffComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'manageDepartment',
    component: ManageDepartmentComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'manageStudent',
    component: ManageStudentComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'manageStaff',
    component: ManageStaffComponent,
    canActivate:[AuthGuard]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
