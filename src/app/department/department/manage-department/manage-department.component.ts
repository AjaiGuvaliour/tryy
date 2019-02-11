import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-department',
  templateUrl: './manage-department.component.html',
  styleUrls: ['./manage-department.component.scss']
})
export class ManageDepartmentComponent implements OnInit {
  profileForm: FormGroup;
  constructor(public form: FormBuilder) { 
    this.profileForm = this.form.group({
           username:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
          email:['',Validators.required],
          number:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
          pwd:['',Validators.required]
       });

}

  ngOnInit() {
  }

}
