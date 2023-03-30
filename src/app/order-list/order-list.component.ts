import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Order } from './../shared/order';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  p: number = 1;
  Order: Order[];
  hideWhenNoOrder: boolean = false;
  noData: boolean = false;
  preLoader: boolean = false;

  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetOrdersList();
    s.snapshotChanges().subscribe(data => {
      this.Order = [];
      data.forEach(
        item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.Order.push(a as Order)
        })
    })
  }
  dataState() {
    this.crudApi.GetOrdersList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoOrder = false;
        this.noData = true;
      } else {
        this.hideWhenNoOrder = true;
        this.noData = false;
      }
    })
  }
  deleteOrder(order) {
    if (window.confirm('Are you sure you want to delete this order ?')) {
      this.crudApi.DeleteOrder(order.$key)
      this.toastr.success(order.name + "'s order was successfully deleted")
    }
  }
}
