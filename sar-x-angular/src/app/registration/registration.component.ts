import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer = new Customer();
  // loginDetails = {
  //   email = 
  // }
  msg = "";
  

  constructor(private _service : CustomerServiceService, private _router:Router) { }    

  ngOnInit(): void {
  }
  signUpCustomer(){
    this._service.signUpRest(this.customer).subscribe(
      
    data => {
      console.log("response received");
      this.msg="Registered Successfully";
      // this._router.navigate(["/login"]);

    
    },
    error =>
    {
      console.log("Exception occured");
      
      
    }
    );
    
  }


}
  