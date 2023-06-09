import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDashComponent } from './dashboard/customer-dash/customer-dash.component';
import { OrderListComponent } from './order-list/order-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddTaskComponent } from './dashboard/cards/add-task/add-task.component';
import { EditTaskComponent } from './dashboard/cards/edit-tasks/edit-task.component';
import { TaskListComponent } from './dashboard/cards/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { DesignerListComponent } from './designer-list/designer-list.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: 'customer-dashboard', component: CustomerDashComponent },
  { path: 'registration-form-component', component: RegistrationFormComponent },
  { path: 'log-in-form-component', component: LogInFormComponent },
  { path:'dashboard-component', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'pre-production', component: PreProductionComponent},
  { path:'add-task', component: AddTaskComponent },
  { path:'edit-task/ :id', component: EditTaskComponent },
  { path:'view-tasklist', component: TaskListComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'view-orders', component: OrderListComponent },
  { path: 'edit-order/:id', component: EditOrderComponent },
  { path: 'designer-list', component: DesignerListComponent },
  { path: 'designer-dashboard', component: DesignerDashboardComponent },
  { path: 'splash-main-component', component: SplashMainComponent },
  { path: '', redirectTo: '/splash-main-component', pathMatch: 'full' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
