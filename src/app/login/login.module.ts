import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoreModule } from '../sharedModule/core.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    CoreModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
