import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppService } from '../../sharedModule/Services/app.service';
import { UserDetails } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder,private service : AppService) { }
  myForm : FormGroup;

  ngOnInit() {
      this.myForm = this.formBuilder.group({
        email: ['',new FormControl('',Validators.required)],
        password: ['',new FormControl('',Validators.required)]
      })
  }

  login(formValue: UserDetails){
    if(formValue){
     this.service.postService('authentication/login',formValue).subscribe(resp=>{
       this.userLogin(resp);
    })
    }
  }
  userLogin(resp: any){
    if(resp.success){
      localStorage.setItem('token',JSON.stringify(resp.data));
      this.router.navigate([resp.data['menuDetails']['mainmenu']])
    }
    else{

    }
  }
}
