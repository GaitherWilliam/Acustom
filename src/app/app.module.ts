import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './environments/environment';
import { HeaderComponent } from './header/header.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerRegisterFormComponent } from './customer-register-form/customer-register-form.component';
import { BusinessRegisterFormComponent } from './business-register-form/business-register-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DesignerListComponent } from './designer-list/designer-list.component';
import { DesignerCardComponent } from './designer-card/designer-card.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TodolistComponent } from './todolist/todolist.component';
import { OrdercountComponent } from './order-list/ordercount/ordercount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInFormComponent,
    SplashMainComponent,
    RegistrationFormComponent,
    CustomerFormComponent,
    EditOrderComponent,
    OrderListComponent,
    CustomerRegisterFormComponent,
    BusinessRegisterFormComponent,
    DashboardComponent,
    CustomerFormComponent,
    RegistrationFormComponent,
    DashboardComponent,
    CalendarComponent,
    NavigationComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    DesignerListComponent,
    DesignerCardComponent,
    DesignerDashboardComponent,
    CustomerDashboardComponent,
    ProgressbarComponent,
    TodolistComponent,
    OrdercountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatCardModule,
    MatExpansionModule,
    NgxPaginationModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MdbCarouselModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule
  ],
  providers: [
    ScreenTrackingService, UserTrackingService, AuthService
  ],
  bootstrap: [AppComponent,CalendarComponent],
  entryComponents: [CustomerFormComponent]
})
export class AppModule { }
