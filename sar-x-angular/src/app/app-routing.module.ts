import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

const routes: Routes = [
  {
    path:'',component: ViewBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
