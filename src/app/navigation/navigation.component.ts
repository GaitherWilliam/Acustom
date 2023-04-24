import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/availability', title: 'Availability',  icon:'library_books', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dashTabs: any[];

  constructor() { }
  
  ngOnInit() {
    this.dashTabs = ROUTES.filter(dashTab => dashTab);
  }
}


