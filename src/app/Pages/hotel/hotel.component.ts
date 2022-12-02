import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { DeleteHotelComponent } from 'src/app/components/deleteHotel/deleteHotel.component';
import { UpdateHotelComponent } from 'src/app/components/updateHotel/updateHotel.component';
import { Hotel } from 'src/app/interfaces/Hotel';
import { AddContactRequest } from 'src/app/models/AddContactRequest';
import { AddHotelRequest } from 'src/app/models/AddHotelRequest';
import { AddHotelService } from 'src/app/services/addHotel.service';

import { HotelsService } from 'src/app/services/Hotel.service';
import { environment } from 'src/environments/environment';
import { AddhotelsComponent } from '../../components/addhotels/addhotels.component';



@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  addHotelRequest:AddHotelRequest = new AddHotelRequest();
HotelData :any;
displayedColumns: string[] = ['id', 'hotelCode', 'hotelName','updateico'];
hotels: Hotel[] = [];

  constructor(
    public dialog: MatDialog,
    private addHotel:AddHotelService,

    private hotelData:HotelsService,
    private cdr: ChangeDetectorRef,

  ) {
    this.hotelData.gethotel().subscribe((response)=>{
      this.HotelData=response;
      console.log(this.HotelData)
    }
    )

   }
   @ViewChild(MatTable)
  table: MatTable<Hotel>;
   @ViewChild(MatPaginator) paginator: MatPaginator;

   opendialog()

   {
    this.dialog.open(AddhotelsComponent,{

    })
   }
  ngOnInit() {
    this.HotelData = new MatTableDataSource<Hotel>(this.hotels);

  }
  ngAfterViewInit() {


  }
removeHotel(){
this.dialog.open(DeleteHotelComponent),{
  height: "300px",
  width: "250px",
}
}
editHotel(){
  this.dialog.open(UpdateHotelComponent),{

  }

}
}

