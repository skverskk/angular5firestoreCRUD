import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
  // Set properties
  customerCollection: AngularFirestoreCollection<Customer>;
  customers : Observable<Customer[]>;

  constructor( private afs : AngularFirestore ) { 
    this.customers = this.afs.collection('Customers').valueChanges();
  }

  /**
   * Get all customers from Firestore DB
   */
  getCustomers () {
    return this.customers;
  }
}
