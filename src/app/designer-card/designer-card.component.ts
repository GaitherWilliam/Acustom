import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerFormComponent } from 'app/customer-form/customer-form.component';

@Component({
  selector: 'app-designer-card',
  templateUrl: './designer-card.component.html',
  styleUrls: ['./designer-card.component.css']
})
export class DesignerCardComponent {

  constructor(
    public dialog: MatDialog
  ){
  
  }

  openOrderDialog(){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(CustomerFormComponent, dialogConfig)
  }
}
