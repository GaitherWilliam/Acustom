import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { OrderListComponent } from '../order-list/order-list.component';

@Component({
  selector: 'app-designer-dashboard',
  templateUrl: './designer-dashboard.component.html',
  styleUrls: ['./designer-dashboard.component.css']
})
export class DesignerDashboardComponent {

  constructor(
    public dialog: MatDialog
  ){
  
  }

  openOrderListDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(OrderListComponent, dialogConfig)
  }

}
