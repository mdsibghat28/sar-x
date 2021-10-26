import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceRooms } from '../model/space-rooms';

@Injectable({
  providedIn: 'root'
})
export class SpaceRoomService {
  roomSpace:SpaceRooms[]=[];
  customer=JSON.parse(sessionStorage.getItem('currentCustomer')|| '{}');

  constructor(private http:HttpClient) { }
  
  public roomRest():Observable<any>{
    return this.http.get<any>("http://localhost:8090/spaceRoom/"+this.customer.customerId);
   
    

  }
  public cancelRm(id:number):Observable<any>{
    return this.http.delete<any>("http://localhost:8090/cancelRooms/"+id);
  }
}
