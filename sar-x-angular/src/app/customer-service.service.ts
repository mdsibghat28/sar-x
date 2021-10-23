import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  // url :string = "http://localhost:8090/register";
  

  constructor(private _http:HttpClient) { }
  
  public signUpRest(customer : Customer):Observable<any>{
    return this._http.post<any>("http://localhost:8090/register",customer);

  }
  public loginRest(customer : Customer):Observable<any>{
    let currentcustomer= this._http.get<any>("http://localhost:8090/login/"+ customer.email + "/" + customer.password)

    let cust = currentcustomer.subscribe(data=>console.log(data));
    console.log(typeof(cust));
    return currentcustomer;
    
    

  }

}
