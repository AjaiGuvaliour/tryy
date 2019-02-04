import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../../sharedModule/Services/app.service';

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
        userName: [''],
        password: ['']
      })
  }

  login(formValue: any){
    //  this.service.getService('').subscribe(resp=>{console.log(resp)})
    console.log(formValue)
    localStorage.setItem('login','hai');
    this.router.navigate(['/main/department'])
  }
}
