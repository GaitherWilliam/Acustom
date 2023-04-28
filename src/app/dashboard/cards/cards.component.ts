import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string 
}

export const ROUTES: RouteInfo[] = [
  {path:'./' , title:'Pre-Production' , icon:'inventory' , class:''} ,
  {path:'./' , title:'Production' , icon:'build' , class:''} ,
  {path:'./' , title:'Packing/Shipping' , icon:'local_shipping' , class:''}
]

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  taskListTabs = [];
  constructor() {} 
  ngOnInit() {
    this.taskListTabs = ROUTES.filter(taskListTab => taskListTab)
  }
}
