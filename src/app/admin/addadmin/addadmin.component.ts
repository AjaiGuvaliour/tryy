import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../../sharedModule/Services/app.service';
import { DataService } from '../../sharedModule/Services/dataService/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss']
})
export class AddadminComponent implements OnInit {
  @Output() adminClick = new EventEmitter<any>();
  adminForm: FormGroup;
  adminEditData = [];
  constructor(public form: FormBuilder,private service : AppService,private dataService : DataService) { 
    this.adminForm = this.form.group({
          adminName:['',{validators: [Validators.required]}],
          email:['',Validators.required],
          number:['',{validators: [Validators.required]}],
        });
}

  ngOnInit() {
     this.dataService.adminDetails.subscribe(
      data=>{
        this.adminEditData = data;
      }
    )
    this.adminForm.patchValue({
      adminName: this.adminEditData["username"],
      email:    this.adminEditData["email"],
      number:   this.adminEditData["phoneNum"],
    })
  }
  editAdmin(formValue: any){
      formValue["id"]=this.adminEditData["ID"];
      this.service.postService('admin/update',formValue).subscribe(resp=>{
        if(resp.success){
          this.adminClick.emit(resp)
          alert("successfully updated");
        }
      })
  }
  addAdmin(formValue: any){
      this.service.postService('admin/addAdmin',formValue).subscribe(resp=>{
        if(resp.success){
          this.adminClick.emit(resp)
          alert("successfully registered");
        }
      })
  }

}
