import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  customer = new Customer();
  

  constructor(private _service : CustomerServiceService) { }    

  ngOnInit(): void {
  }
  signUpCustomer(){
    this._service.signUpRest(this.customer).subscribe(
    data => console.log("response received"),
    error =>console.log("Exception occured"));
    
    
  }


}
