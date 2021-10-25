import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space-rooms',
  templateUrl: './space-rooms.component.html',
  styleUrls: ['./space-rooms.component.css']
})
export class SpaceRoomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
bookRoom(){
  this.router.navigate(['/space-room-book']);
}


}
