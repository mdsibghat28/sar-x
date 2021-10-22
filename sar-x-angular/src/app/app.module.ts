import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { SpaceRoomBookingComponent } from './space-room-booking/space-room-booking.component';
import { LoginComponent } from './login/login.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

import { RegistrationComponent } from './registration/registration.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    CustomerNavbarComponent,
    TicketBookingComponent,
    SpaceRoomBookingComponent,

    RegistrationComponent,

    LoginComponent,
    ViewBookingsComponent,
    HomeNavbarComponent,
    CustomerNavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
