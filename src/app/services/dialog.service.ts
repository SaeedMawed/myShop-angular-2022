import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../components/popup-dialog/popup-dialog.component';
import { NotificationDialogComponent } from '../components/notification-dialog/notification-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  deleteItemConfirm(msg:string){
    return this.dialog.open(PopupDialogComponent,{
      width:'350px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      data:{
        message:msg
      }
    })


    }
    addedSuccessfully(msg:string){
      return this.dialog.open(NotificationDialogComponent,{
        width:'350px',
        panelClass:'notification-container',
        disableClose:false,
        data:{
          message:msg
        }
      })
    }
}
