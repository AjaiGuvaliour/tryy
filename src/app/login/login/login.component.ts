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
        userName: ['',new FormControl('',Validators.required)],
        password: ['',new FormControl('',Validators.required)]
      })
  }

  login(formValue: UserDetails){
    if(formValue){
    //  this.service.getService('').subscribe(resp=>{console.log(resp)})
    // console.log(formValue)
     localStorage.setItem('login','hai');
     this.router.navigate(['/main/department'])
    }
  }
}
