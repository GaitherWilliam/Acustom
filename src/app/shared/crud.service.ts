import { Injectable } from '@angular/core';
import { Order } from '../shared/order';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database'

let Order: Array<Order>

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  ordersRef: AngularFireList<any>;
  orderRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
  //create order
  AddOrder(order: Order) {
    this.ordersRef.push({
      name: order.name,
      quantity: order.quantity,
      product: order.product,
      comment: order.comment,
    });
  }
  //Fetch single order
  GetOrder(id: string) {
    this.orderRef = this.db.object('order/' + id);
    return this.orderRef;
  }
  //Fetch order list
  GetOrdersList() {
    this.ordersRef = this.db.list('orders-list');
    return this.ordersRef
  }
  //Update order object
  UpdateOrder(order: Order) {
    this.orderRef.update({
      name: order.name,
      quantity: order.quantity,
      product: order.product,
      comment: order.comment
    })
  }
  //Delete order object
  DeleteOrder(id: string) {
    this.orderRef = this.db.object('orders-list/' + id)
    this.orderRef.remove()
  }
}
