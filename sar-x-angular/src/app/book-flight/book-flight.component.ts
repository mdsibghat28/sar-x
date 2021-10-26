import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { SpaceRooms } from '../model/space-rooms';
import { SpaceTickets } from '../model/space-tickets';
import { SpacebookingService } from '../spacebooking.service';
import { TicketbookingService } from '../ticketbooking.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  currentCustomer = JSON.parse(sessionStorage.getItem('currentCustomer') || '{}');
  ticket:SpaceTickets = {
    name: String(this.route.snapshot.paramMap.get('name')),
    passengers: 0,
    customerId: this.currentCustomer.customerId,
    date: "",
    source: "",
    destination: "",
    passenger_name: this.currentCustomer.firstName + " " + this.currentCustomer.lastName,
    className: ""
  }
 
  constructor(private service: TicketbookingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

   let name = String(this.route.snapshot.paramMap.get('name'));
   console.log(name);

  }
  bookTicket(){
    console.log(this.ticket);
    this.service.bookTicket(this.ticket).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/view-booking']);
        
      },
      error => {
        console.log("error");
        alert("Fill all the fields");
      }
    )
  }

}
