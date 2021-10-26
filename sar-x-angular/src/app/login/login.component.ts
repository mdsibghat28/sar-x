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
  currentCustomer: Customer | undefined;
  msg = "";

  constructor(private _service:CustomerServiceService, private _router:Router) { }

  ngOnInit(): void {
  }
  loginCustomer() {
    this._service.loginRest(this.customer).subscribe(
      data=>{
        console.log("Login Successful");
       this.currentCustomer = data;
        sessionStorage.setItem('currentCustomer', JSON.stringify(this.currentCustomer));
        this._router.navigate(['space-rooms']);
        this._service.login();

      },
      error=>{
        console.log("Exception Occured");
        this.msg = "Please enter valid email and password";
      }
      
    );
    
  }

}
