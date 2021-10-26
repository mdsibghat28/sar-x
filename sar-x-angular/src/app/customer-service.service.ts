import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
loggedIn: boolean = false;

  constructor(private _http:HttpClient) { }
  
  public signUpRest(customer : Customer):Observable<any>{
    return this._http.post<any>("http://localhost:8080/register",customer);

  }
  public loginRest(customer : Customer):Observable<any>{
    let currentcustomer= this._http.get<any>("http://localhost:8080/login/"+ customer.email + "/" + customer.password);
    return currentcustomer;
  }

  login():void {
    this.loggedIn = true ;
  }

  logout():void{
    this.loggedIn = false;
  }
  public isLoggedIn():boolean{
    return this.loggedIn;
  }

}
