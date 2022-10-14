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
  token:string="var";
  username:string="";
  password:string="";


  // username = new FormControl();
  // password = new FormControl();
  constructor(private route:Router) { }
login(){
if(this.username=="veysel"&&this.password=="1234"){
  localStorage.setItem(this.token,"token");
  this.route.navigate(["home"])
  console.log("Çalıştı");

}
}
  ngOnInit() {


  }

}
