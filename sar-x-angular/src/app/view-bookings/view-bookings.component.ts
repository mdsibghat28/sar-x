import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpaceRooms } from '../model/space-rooms';

import { SpaceTickets } from '../model/space-tickets';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';
import { SpaceRoomService } from './space-room.service';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
tickets:SpaceTickets [] | undefined;


 
 rooms:SpaceRooms [] | undefined;
 spaceTicketDeleted:boolean=false;
 spaceRoomDeleted:boolean=false;


  constructor(private service:TicketService,private _service:SpaceRoomService,private _router:Router) { }

  ngOnInit(): void {
    this.service.ticketRest().subscribe(
      data => {
            this.tickets=data;

            console.log(this.tickets);
      }
            
    );
     
    this._service.roomRest().subscribe(
      data => {
            this.rooms=data;

            console.log(this.rooms);
      }
            
    );
 
  }

  cancleTicket(id:number){
    this.service.canceltckt(id).subscribe(
      data=>
      {
        console.log("Deleted");
       this.spaceTicketDeleted=true;
        this.ngOnInit();
        
      }
      

    );
  }

  cancleRoom(id:number){
    this._service.cancelRm(id).subscribe(
      data=>
      {
        console.log("Deleted");
        this.spaceRoomDeleted=true;
       
        this.ngOnInit();
      }

    );
  }



    
   
  }



  

