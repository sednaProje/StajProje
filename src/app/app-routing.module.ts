import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatToolbar } from '@angular/material/toolbar';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MatToolbarModule],

  exports: [RouterModule,MatToolbarModule]
})
export class AppRoutingModule { }
