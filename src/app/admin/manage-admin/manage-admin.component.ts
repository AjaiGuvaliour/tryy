import { Component, OnInit } from '@angular/core';
import { AppService } from '../../sharedModule/Services/app.service';
import { DataService } from '../../sharedModule/Services/dataService/data-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {
  addAdmin: boolean = false;
  public displayedColumns = ['username', 'email', 'userRoles', 'phoneNum','action'];

  constructor(private service : AppService,private toster : ToastrManager,private dataService: DataService) { }
  dataSource : any =[];
  ngOnInit() {
     this.getDetails();
  }

  getDetails(){
    this.service.getService('admin/getAll').subscribe(resp=>{
      if(resp.success)
      this.getAdmin(resp);
   })
  }
  getAdmin(resp: any){
    if(resp.success){
      this.dataSource  = resp.data;
    }
  }
  addAdminDetails(){
    this.addAdmin = ! this.addAdmin;
    this.dataService.updateAdminDetails([]);

  }
  edit(details : any){
    this.dataService.updateAdminDetails(details);
    this.addAdmin = ! this.addAdmin;
  }
  delete(details : any){
    this.service.deleteService('admin/deleteById/'+details.ID).subscribe(resp=>{
      if(resp.success){
      this.getDetails();
      this.toster.successToastr(resp.message);
    }
    else{
      this.toster.errorToastr(resp.message);
    }
    })
  }
  adminCreated(event){
    if(event.success){
      this.addAdmin = ! this.addAdmin;
      this.toster.successToastr(event.message);
      this.getDetails();
    }
    else{
      this.toster.errorToastr(event.message);
    }
  }
}
