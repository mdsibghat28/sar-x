import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { room } from '../model/room';
import { roomsData } from '../model/room-names';

@Component({
  selector: 'app-space-rooms',
  templateUrl: './space-rooms.component.html',
  styleUrls: ['./space-rooms.component.css']
})
export class SpaceRoomsComponent implements OnInit {

  rooms: room[] = roomsData;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  bookRoom(name: string) {
    this.router.navigate(['/space-room-book', {name: name}]);
  }


}
