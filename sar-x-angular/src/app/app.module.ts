import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { SpaceRoomBookingComponent } from './space-room-booking/space-room-booking.component';
=======
import { LoginComponent } from './login/login.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
>>>>>>> rel1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeNavbarComponent,
    CustomerNavbarComponent,
    TicketBookingComponent,
    SpaceRoomBookingComponent
=======
    LoginComponent,
    ViewBookingsComponent,
    HomeNavbarComponent,
    CustomerNavbarComponent
>>>>>>> rel1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
