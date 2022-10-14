import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatToolbar } from '@angular/material/toolbar';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home/home.component';

const routes: Routes = [

  {path:'register',component:RegisterComponent,canActivate:[AuthService]},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatToolbarModule],

  exports: [RouterModule,MatToolbarModule]
})
export class AppRoutingModule { }
