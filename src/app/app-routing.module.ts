import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatToolbar } from '@angular/material/toolbar';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { GuardGuard } from './shared/guard.guard';
import { AcenteComponent } from './Pages/acente/acente.component';
import { HostelComponent } from './Pages/hostel/hostel.component';
import { RoomtypeComponent } from './Pages/roomtype/roomtype.component';
import { HotelComponent } from './Pages/hotel/hotel.component';





const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
   {path:'home',component:HomeComponent,canActivate:[GuardGuard]},
   {path:'acente',component:AcenteComponent,canActivate:[GuardGuard]},
   {path:'hostel',component:HostelComponent,canActivate:[GuardGuard]},
   {path:'roomtype',component:RoomtypeComponent,canActivate:[GuardGuard]},
   {path:'hotel',component:HotelComponent,canActivate:[GuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatToolbarModule],

  exports: [RouterModule,MatToolbarModule]
})
export class AppRoutingModule { }
