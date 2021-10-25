import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-space-room-booking',
  templateUrl: './space-room-booking.component.html',
  styleUrls: ['./space-room-booking.component.css']
})
export class SpaceRoomBookingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // let id: any = this.route.snapshot.paramMap.get('id');
  }

}
