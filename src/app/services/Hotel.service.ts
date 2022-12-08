import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { strings } from '@material/snackbar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '../interfaces/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
id:string;
constructor(private http:HttpClient) {

 }
gethotel()
{
  return this.http.get(environment.url+"Hotels/Hotelget");
}
deleteHotel(id:string)
{

  return this.http.delete(environment.url+"Hotels/Delete/"+id)

}
addHotel(addHotel:Hotel):Observable<any>
  {
    return this.http.post(environment.url+"Hotels/AddHotel",addHotel);
  }
  updateHotel(updateHotel:Hotel):Observable<any>
  {

    return this.http.put(environment.url+"Hotels/Update/0",updateHotel)
  }
}
