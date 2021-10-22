import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBookingsComponent,
    HomeNavbarComponent,
    CustomerNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
