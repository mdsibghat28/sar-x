import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { SpaceRooms } from './model/space-rooms';

@Injectable({
  providedIn: 'root'
})
export class SpacebookingService {

  constructor(private httpClient: HttpClient) { }

  public bookRoom(room: SpaceRooms): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/rooms", room)
  }
}
