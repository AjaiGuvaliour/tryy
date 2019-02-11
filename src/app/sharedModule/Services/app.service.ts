import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {baseUrl} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient ) { }
  
  option = new HttpHeaders({'Content-Type':'application/json'})

  getService(url: any): Observable<any>{
   return this.http.get(baseUrl+url,{ headers: this.option }).pipe(catchError(this.handleError));
  }

  postService(url: any,data: any): Observable<any>{
    return this.http.post(baseUrl+url,data,{ headers: this.option }).pipe(catchError(this.handleError));
  }

  deleteService(url: any,id: any): Observable<any>{
    return this.http.delete(baseUrl+url,{ headers: this.option }).pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;  
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
