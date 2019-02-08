import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../sharedModule/Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',pathMatch:'full'
  },
  {
    path: 'login',
    canActivate:[AuthGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate:[AuthGuard],
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
