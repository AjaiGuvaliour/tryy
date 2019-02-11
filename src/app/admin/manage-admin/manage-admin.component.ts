import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent implements OnInit {
  addAdmin: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addAdminDetails(){
    this.addAdmin = ! this.addAdmin
  }
  adminCreated(event){
    if(event.success){
      this.addAdmin = ! this.addAdmin
      alert(event.message);
    }
  }
}
