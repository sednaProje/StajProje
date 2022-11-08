import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatToolbar } from '@angular/material/toolbar';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { GuardGuard } from './shared/guard.guard';
import { UserComponent } from './components/user/user.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'a',component:UserComponent},
   {path:'home',component:HomeComponent,canActivate:[GuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatToolbarModule],

  exports: [RouterModule,MatToolbarModule]
})
export class AppRoutingModule { }
