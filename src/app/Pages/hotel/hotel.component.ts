import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { AddContactRequest } from 'src/app/models/AddContactRequest';
import { AddHotelRequest } from 'src/app/models/AddHotelRequest';
import { AddHotelService } from 'src/app/services/addHotel.service';
import { HotelsService } from 'src/app/services/Hotel.service';
import { AddhotelsComponent } from './addhotels/addhotels.component';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  addHotelRequest:AddHotelRequest = new AddHotelRequest();
HotelData :any;
displayedColumns: string[] = ['id', 'hotelCode', 'hotelName'];
hotelCode:string="";
hotelName:string="";


  constructor(
    public dialog: MatDialog,
    private addHotel:AddHotelService,
    private hotelData:HotelsService
  ) {
    this.hotelData.gethotel().subscribe((response)=>{
      console.log(response)
      this.HotelData=response;
      console.log(this.HotelData)
    }
    )

   }
   opendialog()
   {
    this.dialog.open(AddhotelsComponent,{
      data: {code: this.hotelCode, name: this.hotelName},

    })
   }


  ngOnInit() {

  }

}
