import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ThemePalette} from '@angular/material/core';
=======
import { AuthService } from 'app/services/auth.service';
>>>>>>> develop

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
<<<<<<< HEAD
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  links = ['Pre-Production', 'Peri-Production', 'Post-Production'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
  
  constructor() {}
=======
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
>>>>>>> develop
}

