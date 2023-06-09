import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-customer-register-form',
  templateUrl: './customer-register-form.component.html',
  styleUrls: ['./customer-register-form.component.css']
})
export class CustomerRegisterFormComponent implements OnInit {
  constructor(
    public authService: AuthService
  ){}
  ngOnInit(): void {}
}
