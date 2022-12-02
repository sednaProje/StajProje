import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '../interfaces/Hotel';

@Injectable({
  providedIn: 'root'
})
export class AddHotelService {

constructor(private http:HttpClient,) {

 }
addHotel(addHotel:Hotel):Observable<any>
  {
    return this.http.post(environment.url+"Hotels/AddHotel",addHotel);
  }

}
