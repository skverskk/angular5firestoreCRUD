import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase-Firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';



// Environment
import { environment } from '../environments/environment';

// Services
import { CustomerService } from './services/customer.service';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
    ToastrModule.forRoot(),
    AngularFirestoreModule
  ],
  providers: [ AngularFireAuth,
               
               CustomerService
              
               
               
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
