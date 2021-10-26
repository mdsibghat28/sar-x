import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { SpaceRooms } from '../model/space-rooms';
import { SpacebookingService } from '../spacebooking.service';

@Component({
  selector: 'app-space-room-booking',
  templateUrl: './space-room-booking.component.html',
  styleUrls: ['./space-room-booking.component.css']
})
export class SpaceRoomBookingComponent implements OnInit {
  name!: string;
  currentCustomer = JSON.parse(sessionStorage.getItem('currentCustomer') || '{}');
  room:SpaceRooms = {
    roomName: String(this.route.snapshot.paramMap.get('name')),
    accomodates: 0,
    customerId: this.currentCustomer.customerId,
    checkIn: "",
    checkOut: "",
    name: this.currentCustomer.firstName + " " + this.currentCustomer.lastName,
    roomId: 0
  }
 
  constructor(private service: SpacebookingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

   let name = String(this.route.snapshot.paramMap.get('name'));
   console.log(name);

  }
  bookRoom(){
    console.log(this.room);
    this.service.bookRoom(this.room).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/view-booking']);
      },
      error => {
        console.log("error");
      }
    )
  }

}
