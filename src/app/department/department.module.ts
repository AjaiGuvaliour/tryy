import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';

import { ManageStaffComponent } from './staff/manage-staff/manage-staff.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { ManageStudentComponent } from './student/manage-student/manage-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ManageDepartmentComponent } from './department/manage-department/manage-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  declarations: [ManageDepartmentComponent, AddDepartmentComponent, ManageStaffComponent, AddStaffComponent, ManageStudentComponent, AddStudentComponent]
})
export class DepartmentModule { }
