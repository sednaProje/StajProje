import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatToolbar } from '@angular/material/toolbar';
import { LoginComponent } from './Pages/login/login.component';


import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home/home.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
   {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatToolbarModule],

  exports: [RouterModule,MatToolbarModule]
})
export class AppRoutingModule { }
