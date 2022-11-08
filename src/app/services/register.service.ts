import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../interfaces/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(
    private http:HttpClient,
    ) { }


addUser(register:Register):Observable<any>
  {
    return this.http.post(environment.url+"Contacts/register",register);
  }
}
