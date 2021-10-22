import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { SpaceRoomBookingComponent } from './space-room-booking/space-room-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    CustomerNavbarComponent,
    TicketBookingComponent,
    SpaceRoomBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
