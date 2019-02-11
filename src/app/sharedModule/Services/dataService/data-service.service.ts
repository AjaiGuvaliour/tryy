import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  adminDetails = new BehaviorSubject([]);
  constructor() { };

  updateAdminDetails(data: any){
    this.adminDetails.next(data);
  }
}
