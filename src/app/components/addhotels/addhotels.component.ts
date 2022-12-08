import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddHotelRequest } from 'src/app/models/AddHotelRequest';
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
  hotelCode:string="";
  hotelName:string="";
  constructor(private hotelService:HotelsService,
    private _snackBar: MatSnackBar,) {


   }

  ngOnInit() {
    this.hotelService.gethotel().subscribe((data)=>{
      console.log("data",data);
      this.hotels=data;
    });

  }
  addhotels(){
    this.addHotelRequest.hotelCode = this.rghotelcode;
    this.addHotelRequest.hotelName = this.rghotelname;

    for(;this.s<this.hotels.length;this.s++){
      if(this.rghotelcode==this.hotels[this.s].hotelCode){

        this._snackBar.open("Kayıtlı Otel Var!");
        this.a=false;
        break;
      }
    }
    if(this.rghotelcode==""&&this.rghotelcode=="")
        {
          this._snackBar.open("Lütfen Boş Alanları Doldurunuz.");
        }else
    if(this.a==true){
      this.hotelService.addHotel(this.addHotelRequest).subscribe(resp=>{
    });
    this._snackBar.open("Kayıt Başarılı");
    this.hotelService.gethotel().subscribe((data)=>{
      console.log("data",data);
      this.hotels=data;
      window.location.reload();
    });
    }


}
}


