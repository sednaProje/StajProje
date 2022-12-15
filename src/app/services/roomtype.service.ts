import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoomType } from '../interfaces/RoomType';

@Injectable({
  providedIn: 'root'
})
export class RoomtypeService {

constructor(private http:HttpClient) { }
getroomtype()
{
  return this.http.get(environment.url+"RoomType/RoomTypeGet");
}
removeroomtype(id:string)
{
  return this.http.delete(environment.url+"RoomType/Delete/"+id);
}

updateroomtype(updateRoom:RoomType):Observable<any>
{
  return this.http.put(environment.url+"RoomType/Update/0",updateRoom)
}
addRoom(addRoom:RoomType):Observable<any>
  {
    return this.http.post(environment.url+"RoomType/AddRoomType",addRoom);
  }
}
