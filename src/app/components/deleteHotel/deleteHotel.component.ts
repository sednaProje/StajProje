import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hotel } from 'src/app/interfaces/Hotel';
import { HotelsService } from 'src/app/services/Hotel.service';

dialogRef: MatDialogRef<any>;
@Component({
  selector: 'app-deleteHotel',
  templateUrl: './deleteHotel.component.html',
  styleUrls: ['./deleteHotel.component.css']
})
export class DeleteHotelComponent implements OnInit {
  HotelData :any;

  constructor(
    private dialogRef: MatDialogRef<DeleteHotelComponent>,
    private hotelData:HotelsService,
    private snackBar: MatSnackBar,
  ) {


  }
  hotels: Hotel[];
  ngOnInit(): void{
    this.hotelData.gethotel().subscribe((response)=>{
      this.HotelData=response;
      console.log(this.HotelData)
    })
  }
  delete() {
    const condition = this.hotels.some(c => c.HotelId === this.HotelData.element.id);

    if (condition) {
      this.snackBar.open('This category is using with another column.', "OK");
      return;
    }



}
}
