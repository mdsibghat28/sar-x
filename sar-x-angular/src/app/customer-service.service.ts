import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  url :string = "http://localhost:8090/register";

  constructor(private _http:HttpClient) { }
  
  public signUpRest(customer : Customer):Observable<any>{
    return this._http.post<any>(this.url,customer);


  }

}
