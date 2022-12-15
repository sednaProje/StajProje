import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AddroomtypesComponent } from 'src/app/components/addroomtypes/addroomtypes.component';
import { UpdateroomtypeComponent } from 'src/app/components/updateroomtype/updateroomtype.component';
import { RoomType } from 'src/app/interfaces/RoomType';
import { AddRoomtypeRequest } from 'src/app/models/AddRoomtypeRequest';
import { RoomtypeService } from 'src/app/services/roomtype.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.css']
})
export class RoomtypeComponent implements OnInit {
  addRoomtypeRequest: AddRoomtypeRequest = new AddRoomtypeRequest();
  RoomtypeData: any;
  displayedColumns: string[] = ['id', 'roomtypeName', 'roomtypeRemark', 'updateico'];
  types: RoomType[] = [];


  filteredUsers: any[];
  filterBy:any;
  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private typesData: RoomtypeService,

  ) {
    this.typesData.getroomtype().subscribe((response) => {
      this.RoomtypeData = response;
      console.log(this.RoomtypeData);
    });
  }
  @ViewChild(MatTable)
  table: MatTable<RoomType>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
  this.RoomtypeData = new MatTableDataSource<RoomType>(this.types);
  }
  ngAfterViewInit() {}
  removeRoomtype(element:any) {
    Swal.fire({
      title: 'Emin misin?',
      text:"Kayıtlı Oda Tipini Silmek İstiyor musun?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Hayır,İptal Et',
      confirmButtonText: 'Evet,Sil'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:'Silinme İşlemi Başarılı',
          text:'Kayıtlı Oda Tipi Silindi',
          icon:'success',
          showConfirmButton: false,
          timer:1500
        }
        )
        this.typesData.removeroomtype(element).subscribe((result) => {
          this.typesData.getroomtype().subscribe((response) => {
            this.RoomtypeData = response;
          });
        });
      }
    })


  }
  editTypes(element: any) {

    const dialog = this.dialog.open(UpdateroomtypeComponent, {
      data: { element },
    });
  }
  addRooms() {
    this.dialog.open(AddroomtypesComponent,{data:this.RoomtypeData});

  }

  }



