import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { RoomType } from 'src/app/interfaces/RoomType';
import { AddContactRequest } from 'src/app/models/AddContactRequest';
import { AddRoomtypeRequest } from 'src/app/models/AddRoomtypeRequest';
import { RoomtypeComponent } from 'src/app/Pages/roomtype/roomtype.component';
import { RoomtypeService } from 'src/app/services/roomtype.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addroomtypes',
  templateUrl: './addroomtypes.component.html',
  styleUrls: ['./addroomtypes.component.css']
})
export class AddroomtypesComponent implements OnInit {
  RoomdataSource = new MatTableDataSource<RoomType>();
  addRoomtypeRequest:AddRoomtypeRequest = new AddRoomtypeRequest;
  rgroom:string="";
  rgremark:string="";
  RoomsData: any;
  s:any= 0;
  rooms: RoomType[] = [];
  data:any;
  a:boolean=true;
  roomsType:string="";
  roomsRemark:string="";

  constructor(private roomService:RoomtypeService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RoomtypeComponent>,
    private roomsData: RoomtypeService,) {
      this.roomsData.getroomtype().subscribe((response) => {
        this.RoomsData = response;
   });
  }
cancel(){
  this.dialogRef.close();
}
  ngOnInit() {
  }
  addroomtype(){
    this.a=true;
    this.addRoomtypeRequest.roomType = this.rgroom;
    this.addRoomtypeRequest.remark = this.rgremark;
    for(;this.s<this.RoomsData.length;this.s++){
      if(this.rgroom==this.RoomsData[this.s].roomType){
        this._snackBar.open("Kayıtlı Otel Var!");
        this.a=false;
        break;
      }

    }
    if(this.rgroom==""||this.rgremark=="")
        {
          this._snackBar.open("Lütfen Boş Alanları Doldurunuz.");
          this.a=false;
        }
    if(this.a==true){
      this.roomService.addRoom(this.addRoomtypeRequest).subscribe(resp=>{
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Otel Ekleme Başarılı',
      showConfirmButton: false,
      timer: 1500
    })
    this.dialogRef.close();
    window.location.reload();

}

}
}


