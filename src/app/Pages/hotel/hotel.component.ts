import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { UpdateHotelComponent } from 'src/app/components/updateHotel/updateHotel.component';
import { Hotel } from 'src/app/interfaces/Hotel';
import { AddContactRequest } from 'src/app/models/AddContactRequest';
import { AddHotelRequest } from 'src/app/models/AddHotelRequest';

import { HotelsService } from 'src/app/services/Hotel.service';
import { environment } from 'src/environments/environment';
import { AddhotelsComponent } from '../../components/addhotels/addhotels.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  addHotelRequest: AddHotelRequest = new AddHotelRequest();
  HotelData: any;
  displayedColumns: string[] = ['id', 'hotelCode', 'hotelName', 'updateico'];
  hotels: Hotel[] = [];
  chotel: any[];

  filteredUsers: any[];
  filterBy:any;
  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private hotelData: HotelsService,

  ) {
    this.hotelData.gethotel().subscribe((response) => {
      this.HotelData = response;
      console.log(this.HotelData);
    });
  }
  @ViewChild(MatTable)
  table: MatTable<Hotel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  opendialog() {
    this.dialog.open(AddhotelsComponent, {});
  }
  ngOnInit() {
    this.HotelData = new MatTableDataSource<Hotel>(this.hotels);
  }
  ngAfterViewInit() {}
  removeHotel(element: any) {

    this.hotelData.deleteHotel(element).subscribe((result) => {
      this.hotelData.gethotel().subscribe((response) => {
        this.HotelData = response;
        this._snackBar.open('Silme Başarılı!');
      });
    });
  }

  editHotel(element: any) {

    const dialog = this.dialog.open(UpdateHotelComponent, {
      data: { element },
    });
  }
}
