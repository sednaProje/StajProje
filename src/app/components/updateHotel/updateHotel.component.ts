import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Hotel } from 'src/app/interfaces/Hotel';
import { AddHotelRequest } from 'src/app/models/AddHotelRequest';
import { HotelsService } from 'src/app/services/Hotel.service';

interface DialogData {
  element: Hotel;
  table: MatTable<any>;
  dialogRef: MatDialogRef<any>;
}

@Component({
  selector: 'app-updateHotel',
  templateUrl: './updateHotel.component.html',
  styleUrls: ['./updateHotel.component.css'],
})
export class UpdateHotelComponent implements OnInit {
  updateHotelRequest: AddHotelRequest = new AddHotelRequest();

  constructor(
    private hotelService:HotelsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<UpdateHotelComponent>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  newHotelCode: string
  newHotelName: string
  id = this.data.element.id;
  ngOnInit() {}
  updateHotel() {
    if (!this.newHotelCode ) {
      this.snackBar.open("Otel Kodu ve Otel Adını Doldurunuz");
      return;
    }

    this.data.element.hotelCode = this.newHotelCode;
    this.data.element.hotelName = this.newHotelName;
    this.snackBar.open("Kayıtlarınız Güncellendi!");
    this.hotelService.updateHotel(this.data.element).subscribe(resp=>{
    });

  }
}
