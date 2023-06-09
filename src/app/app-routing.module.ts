import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dash/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'log-in-form-component', component: LogInFormComponent,
    children: [
      { path: 'registration-form-component', component: RegistrationFormComponent }
    ]
  },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'view-orders', component: OrderListComponent },
  { path: 'edit-order/:id', component: EditOrderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'splash-main-component', component: SplashMainComponent },
  { path: '', redirectTo: '/splash-main-component', pathMatch: 'full' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
