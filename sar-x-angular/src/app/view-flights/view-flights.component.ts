import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flight } from '../model/flight';
import { flightData } from '../model/flight-data';
import { room } from '../model/room';
import { roomsData } from '../model/room-names';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {

  rooms: flight[] = flightData;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  bookRoom(name: string) {
    this.router.navigate(['/book-flights', {name: name}]);
  }


}
