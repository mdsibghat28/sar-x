import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { SpaceTickets } from '../model/space-tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
customerTickets:SpaceTickets[]=[];

customer=JSON.parse(sessionStorage.getItem('currentCustomer')|| '{}');
  constructor(private http:HttpClient) { }
  tckt !:SpaceTickets;
  add(ticket:SpaceTickets){
    this.customerTickets.push(ticket);
  }

  
  public ticketRest():Observable<any>{
    return this.http.get<any>("http://localhost:8080/tickets/"+this.customer.customerId);
   
    

  }

  public canceltckt(id:number):Observable<any>{
    
    return this.http.delete<any>("http://localhost:8080/canceltcks/"+id);
    
  }
  }


