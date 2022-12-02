import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

constructor(private http:HttpClient) {

 }
gethotel()
{
  return this.http.get(environment.url+"Hotels/Hotelget");
}
deleteHotel(id:string)
{
  return this.http.delete(environment.url+"Hotels/"+id)
}
}
