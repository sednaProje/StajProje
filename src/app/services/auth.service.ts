import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: any;

  constructor() { }
  IsLoggedIn(){ debugger
    return localStorage.getItem('token');
  }
}
