import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer = new Customer();
  msg = "";

  constructor(private _service:CustomerServiceService, private _router:Router) { }
  currentCustomer:Customer|undefined;
  ngOnInit(): void {
  }
  loginCustomer() {
    this._service.loginRest(this.customer).subscribe(
      data=>{
        console.log("Login Successful");
        this.currentCustomer=data;
        sessionStorage.setItem('currentCustomer',JSON.stringify(this.currentCustomer));
        this._router.navigate(['view-booking']);
        
      },
      error=>{
        console.log("Exception Occured");
        this.msg = "Please enter valid email and password";
      }
      
    );
    
  }

}
