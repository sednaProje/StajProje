import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})


export class LoginComponent implements OnInit {
  token:string="token";
  username:string="";
  password:string="";

  rgusername:string="";
  rgpassword:string="";

  // username = new FormControl();
  // password = new FormControl();
  constructor(private route:Router) { }
login(){

if(this.username==this.rgusername&&this.password==this.rgpassword){
  localStorage.setItem(this.token,"token");
  this.route.navigate(["home"])
  console.log("Çalıştı");

}
}
rg(){
  console.log(this.rgusername);
console.log(this.rgpassword);

}
  ngOnInit() {
if(localStorage.getItem(this.token)!=null){
  this.route.navigate(["home"])
}else this.route.navigate(["login"])

  }

}
