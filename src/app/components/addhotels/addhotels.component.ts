import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddHotelRequest } from 'src/app/models/AddHotelRequest';
import { AddHotelService } from 'src/app/services/addHotel.service';
import { HotelsService } from 'src/app/services/Hotel.service';

@Component({
  selector: 'app-addhotels',
  templateUrl: './addhotels.component.html',
  styleUrls: ['./addhotels.component.css']
})
export class AddhotelsComponent implements OnInit {
  addHotelRequest:AddHotelRequest = new AddHotelRequest;
  rghotelcode:string="";
  rghotelname:string="";
  hotelscode:string="";
  s:any= 0;
  hotels:any;
  data:any;
  a:boolean=true;
  HotelCode:string="";
  HotelName:string="";
  constructor( private addHotelService:AddHotelService, private hotelService:HotelsService,
    private _snackBar: MatSnackBar,) {
      hotelService.gethotel().subscribe((data)=>{
        console.log("data",data);
        this.hotels=data;
      });

   }

  ngOnInit() {
  }
  addhotels(){
    this.addHotelRequest.HotelCode = this.rghotelcode;
    this.addHotelRequest.HotelName = this.rghotelname;

    for(;this.s<this.hotels.length;this.s++){
      if(this.rghotelcode==this.hotels[this.s].hotelCode){
        this._snackBar.open("Kayıt var");
        this.a=false;
        break;
      }
    }
    if(this.a==true){
      this.addHotelService.addHotel(this.addHotelRequest).subscribe(resp=>{
             });
      this._snackBar.open("Kayıt Başarılı");
      this.ngOnInit();
      window.location.reload();
    }


}
}


