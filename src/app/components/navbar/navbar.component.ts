import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { LoginComponent } from 'src/app/Pages';
import { AcenteComponent } from 'src/app/Pages/acente/acente.component';
import { MatDrawer } from '@angular/material/sidenav';

import { AsyncPipe } from '@angular/common';
import { map, Observable, shareReplay } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
 logusername:any;
title:any;
url:any;

constructor(
  private route:Router,
  private asyncPipe: AsyncPipe,
  private breakpointObserver: BreakpointObserver,
){

}
  ngOnInit(){
    this.logusername=localStorage.getItem('Loguser');


    }
  closeDrawer(drawer: MatDrawer): void {
    const handset = this.asyncPipe.transform(this.isHandset);

    if (handset) {
      drawer.toggle();
    }
    else return;
  }
  isHandset: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
acente(){
  this.route.navigate(["acente"])
  this.title="Acente";
}

hotel(){
  this.route.navigate(["hotel"])
  this.title="Otel";
}
hostel(){
  this.route.navigate(["hostel"])
    this.title="Pansiyon";

}
  roomtype(){
    this.title="Oda Tipi";
  this.route.navigate(["roomtype"])
  }
}



