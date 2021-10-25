import { Component, OnInit } from '@angular/core';

import { SpaceTickets } from '../model/space-tickets';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
tickets:SpaceTickets [] | undefined;
 tkt =  new SpaceTickets();

  constructor(private service:TicketService) { }

  ngOnInit(): void {
    
   
  
      
    
    this.service.ticketRest().subscribe(
      data => {
            this.tickets=data;

            console.log(this.tickets);
      }
            
    );
    
    


      
      
  }
 

}
