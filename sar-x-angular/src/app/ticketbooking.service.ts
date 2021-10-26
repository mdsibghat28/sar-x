import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { SpaceRooms } from './model/space-rooms';
import { SpaceTickets } from './model/space-tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketbookingService {

  constructor(private httpClient: HttpClient) { }

  public bookTicket(ticket: SpaceTickets): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/bookings", ticket)
  }
}
