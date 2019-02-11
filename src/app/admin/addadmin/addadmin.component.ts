import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../../sharedModule/Services/app.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss']
})
export class AddadminComponent implements OnInit {
  @Output() adminClick = new EventEmitter<any>();
  adminForm: FormGroup;
  constructor(public form: FormBuilder,private service : AppService) { 
    this.adminForm = this.form.group({
          adminName:['',{validators: [Validators.required]}],
          email:['',Validators.required],
          number:['',{validators: [Validators.required]}],
       });

}

  ngOnInit() {
  }

  addAdmin(formValue: any){
    formValue["role"]="admin";
    this.service.postService('admin/addAdmin',formValue).subscribe(resp=>{
      if(resp.success){
        this.adminClick.emit(resp)
        alert("successfully registered");
      }
    })
  }

}
