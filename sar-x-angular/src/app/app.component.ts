import { Component } from '@angular/core';
import { CustomerServiceService } from './customer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sar-x-angular';

constructor(public loggedInservice: CustomerServiceService){}

}


