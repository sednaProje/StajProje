import { registerLocaleData } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { config, Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/login';
import { UserService } from 'src/app/services/user.service';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/interfaces/register';
import { AddContactRequest } from 'src/app/models/AddContactRequest';

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
  Username:string="";
  Password:string="";
  addContactRequest:AddContactRequest = new AddContactRequest();


data:any;
  i:any= 0;
  users:any;
  constructor(
    private route:Router,
    private _snackBar: MatSnackBar,
    private http:HttpClient,
    private userData:UserService,
    private formBuilder:FormBuilder,
    private registerService:RegisterService
    ) {

    userData.getusers().subscribe((data)=>{
      console.log("data",data);
      this.users=data;
    });
   }


   register(){

    this.addContactRequest.Username = this.rgusername;
    this.addContactRequest.Password = this.rgpassword;
  this.registerService.addUser(this.addContactRequest).subscribe(resp=>{
   this._snackBar.open("Kayıt Başarılı");
   window.location.reload();
})

}

login(){

  for (this.i = 0 ;this.i<this.users.length;this.i++){
    if(this.username==this.users[this.i].username&&this.password==this.users[this.i].password){
      localStorage.setItem(this.token,"token");
      this.route.navigate(["home"])
      console.log("Çalıştı");
      break;
    }
  }

}
  ngOnInit() {
if(localStorage.getItem(this.token)!=null){
  this.route.navigate(["home"])
}else this.route.navigate(["login"])
  }
}

