import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { RoomType } from 'src/app/interfaces/RoomType';
import { AddRoomtypeRequest } from 'src/app/models/AddRoomtypeRequest';
import { RoomtypeService } from 'src/app/services/roomtype.service';
import Swal from 'sweetalert2';

interface DialogData {
  element: RoomType;
  table: MatTable<any>;
  dialogRef: MatDialogRef<any>;
}

@Component({
  selector: 'app-updateroomtype',
  templateUrl: './updateroomtype.component.html',
  styleUrls: ['./updateroomtype.component.css']
})
export class UpdateroomtypeComponent implements OnInit {
  updateRoomtypeRequest: AddRoomtypeRequest = new AddRoomtypeRequest();

  constructor( private roomtypeService:RoomtypeService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<UpdateroomtypeComponent>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,) { }
    newRoomType: string
    newRemark: string
    id = this.data.element.id;

    updateRoom() {
      if (!this.newRoomType||!this.newRemark) {
        this.snackBar.open("Oda Tipi ve Açıklamayı Doldurunuz");
        return;
      }
      this.data.element.roomType = this.newRoomType;
    this.data.element.remark = this.newRemark;
    Swal.fire({
      title:'Başarılı',
      text:'Oda Tipi Güncellenmiştir.',
      icon:'success',
      showConfirmButton: false,
      timer:1500
    }
    )
    debugger
    this.roomtypeService.updateroomtype(this.data.element).subscribe(resp=>{
    });
    this.dialogRef.close();
  }
  updatecancel(){
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
