import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { SpaceRooms } from '../model/space-rooms';
import { SpacebookingService } from '../spacebooking.service';

@Component({
  selector: 'app-space-room-booking',
  templateUrl: './space-room-booking.component.html',
  styleUrls: ['./space-room-booking.component.css']
})
export class SpaceRoomBookingComponent implements OnInit {
  currentCustomer : Customer = JSON.parse(sessionStorage.getItem('currentCustomer') || '{}');
  room:SpaceRooms = {
    roomName: "",
    accomodates: 0,
    customerId: this.currentCustomer.id,
    checkIn: "",
    checkOut: "",
    name: ""
  }
 
  constructor(private service: SpacebookingService) { }

  ngOnInit(): void {

  }

  bookRoom(){
    console.log(this.room);
    this.service.bookRoom(this.room).subscribe(
      data => {
        console.log("response received");
      },
      error => {
        console.log("error");
      }
    )
  }

}
