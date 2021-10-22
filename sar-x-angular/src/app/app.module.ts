import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
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

import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    HomeNavbarComponent,
    CustomerNavbarComponent,
    TicketBookingComponent,
    SpaceRoomBookingComponent
=======
=======
    RegistrationComponent,
>>>>>>> e8e414b116812081ccdcf397a139f9eff02fc2b6
    LoginComponent,
    ViewBookingsComponent,
    HomeNavbarComponent,
    CustomerNavbarComponent
>>>>>>> rel1
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
