import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
const routes: Routes = [
  {
    path:'login',component: LoginComponent
  },
  {
    path:'view-booking',component: ViewBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
