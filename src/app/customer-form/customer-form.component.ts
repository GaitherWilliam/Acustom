import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface Product {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  public customerOrderForm: FormGroup;
  constructor(
    public crudAPI: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) { }
  ngOnInit() {
    this.crudAPI.GetOrdersList();
    this.customeOrderForm();
  }
  customeOrderForm() {
    this.customerOrderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [''],
      product: [''],
      comment: ['']
    })
  }
  get name() {
    return this.customerOrderForm.get('name');
  }
  get quantity() {
    return this.customerOrderForm.get('quantity');
  }
  get product() {
    return this.customerOrderForm.get('product');
  }
  get comment() {
    return this.customerOrderForm.get('comment');
  }
  ResetForm() {
    this.customerOrderForm.reset();
  }
  submitOrderData() {
    this.crudAPI.AddOrder(this.customerOrderForm.value);
    this.toastr.success(
      this.customerOrderForm.controls['name'].value + "'s order was added"
    );
    this.ResetForm()
  }
  // products: Product[] = [
  //   { value: 'nail-0', viewValue: 'Black and Gold' },
  //   { value: 'nail-1', viewValue: 'Blue and Orange' },
  //   { value: 'nail-2', viewValue: 'White and Red' },
  // ];
}
