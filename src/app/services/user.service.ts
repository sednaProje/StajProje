import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private url="https://localhost:7122/api/Contacts/get"
  constructor(private http:HttpClient) { }

  getusers()
  {
    return this.http.get(this.url);
  }

}
