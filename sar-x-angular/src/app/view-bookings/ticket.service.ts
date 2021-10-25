import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceTickets } from '../model/space-tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
customerTickets:SpaceTickets[]=[];
  constructor(private http:HttpClient) { }

  add(ticket:SpaceTickets){
    this.customerTickets.push(ticket);
  }
  
  public ticketRest():Observable<any>{
    return this.http.get<any>("http://localhost:8090/tickets/15371");
   
    

  }
  }


