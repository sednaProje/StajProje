import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { config } from 'rxjs';
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
  constructor(private route:Router,private _snackBar: MatSnackBar) { }
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
this._snackBar.open("Kayıt Olundu!");

}
  ngOnInit() {
if(localStorage.getItem(this.token)!=null){
  this.route.navigate(["home"])
}else this.route.navigate(["login"])
  }



}
