import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { SpaceRoomBookingComponent } from './space-room-booking/space-room-booking.component';
import { SpaceRoomsComponent } from './space-rooms/space-rooms.component';
const routes: Routes = [
  {path:'', component:RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'view-booking', component: ViewBookingsComponent},
  {path: 'space-rooms', component: SpaceRoomsComponent },
  {path: 'space-room-book', component: SpaceRoomBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
